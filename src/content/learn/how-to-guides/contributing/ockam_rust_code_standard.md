---
title: Rust Library Style
order: 5
---
# Rust ​Library Coding Standard

This guide will help us keep the style in our Rust Library consistent.

This guide builds on the normal Rust style guide [here](https://doc.rust-lang.org/1.0.0/style/)

## Names

### Make Names Fit

Names are the heart of programming. In the past people believed knowing someone's true
name gave them magical power over that person. If you can think up the true name for
something, you give yourself and the people coming after power over the code. Don't laugh!
A name is the result of a long deep thought process about the ecology it lives in. Only a
programmer who understands the system as a whole can create a name that "fits" with the
system. If the name is appropriate everything fits together naturally, relationships are clear,
meaning is derivable, and reasoning from common human expectations works as expected.

If you find all your names could be Thing and DoIt then you should probably revisit your design.

### Types

* Use platform agnostic types like `usize` and `isize` vs `u32` or `i32`.
* Use BTreeMap over HashMap because
    - Predictable iterating
    - Avoids Hash flooding DoS attacks


### Function Names

Rust uses snake casing for function names.

* Usually every function performs an action, so the name should make clear what it does:
check_for_errors() instead of error_check(), dump_data_to_file() instead of data_file().
This will also make functions and data objects more distinguishable.
Structs are often nouns. By making function names verbs and following other naming
conventions programs can be read more naturally.
* Suffixes are sometimes useful:
  * max ​ - to mean the maximum value something can have.
  * count ​ - the current count of a running count variable.
  * key ​ - key value.
* For example: retry_max to mean the maximum number of retries, retry_cnt to mean the
current retry count.
* Prefixes are sometimes useful:
  * is ​ - to ask a question about something. Whenever someone sees ​ Is ​ they will
know it's a question.
  * get ​ - get a value.
  * set ​ - set a value.
  * to ​ - convert existing value into something else.
  * from ​ - create a new value from an existing one.
* For example: is_hit_retry_limit.

When in doubt, use longer names for clarity versus shorter names that can potentially be confusing.

### Variable Naming & Declarations

* Variable declarations should be limited to one per line.
* Variables should be descriptively named, using abbreviations sparingly if at all.
* Words should be separated by underscores.
* Variables should be all lower case
* Global variables are discouraged in Rust, except in rare cases such as when implementing FFI.
* Global variables and constants are all upper case.
* Types are usually inferred by the compiler, only include the type if the compiler can't do the inference.
* Only use `mut` if needed. Prefer to use immutable variables as much as possible.

```rust
const MAX_BUFFER_SIZE = 65535;
let remote_host_dns_name = “www.ockam.io”;
let mut bytes_received = 0;
```

### Include Units in Names

If a variable represents time, weight, or some other unit then include the unit in the name so
developers can more easily spot problems.

```rust
let timeout_msecs = 0;
let my_weight_lbs = 0;
```

### Structure and Enumeration Names

* Use Pascal Case.
* Field names are all lower case with words separated by underscores ('\_').
* Field names are sorted alphabetically.
* Rust supports tupling. However, Tuples with more than 2 elements are confusing. Use a struct with named fields instead.
* If only one or two fields are in the struct, the tuple version may be allowed as long as the intented use is clear.

```rust
struct Foo {
    foo Next, /* List of active foo */
    bar usize,
    baz: usize, /* Bitfield */
};
```

### Global Constants

Global constants should be all caps with '_' separators.

```rust
const A_GLOBAL_CONSTANT: usize = 5;
```

### Macro Names

Macros are all lower case with '_' word separators

Use macros to keep code DRY (don't repeat yourself).

### Error Handling

Use one enum that represents all the possible errors that can occur that inherits the **Fail** trait from the `failure` crate. Use a struct that wraps the enum to provide stacktraces and contexts. All these should be in one file named *errors.rs*.

When other packages and crates throw errors, implement the **From** trait from that error to the enum and error struct in *errors.rs*. This avoids the need to convert between error types throughout the rest of the code.

```rust
use failure::{Backtrace, Context, Fail};

#[derive(Clone, Copy, Fail, Debug)]
pub enum ErrorKind {
    #[display = "Failed to initialize"]
    Init,
    #[display = "Failed to read or write to network"]
    NetworkError
}

#[derive(Debug)]
pub struct Error {
    inner: Context<ErrorKind>,
}

```

## Packaging

### Cargo.toml

Sort fields in each section alphabetically.
Use the latest "edition" in the \[package\] section. (Right now its 2018).

### Crate declaration

Only use `extern crate <crate-name>` when importing macros.

## Formatting

### Braces

**Placement**

Of the three major brace placement strategies one is recommended:

```rust
if condition {
    while condition {
        ...
    }
    ...
}
```

**When Braces are Needed**

All if, while and do statements must either have braces or be on a single line.

**Always Uses Braces Form**

All if, while and do statements require braces even if there is only a single statement within the
braces.

```rust
if 1 == somevalue {
    somevalue = 2;
}
```

**Justification**

It ensures that when someone adds a line of code later there are already braces and they don't
forget. It provides a more consistent look. This doesn't affect execution speed. It's easy to do.

**One Line Form**

```c
if 1 == somevalue { somevalue = 2; }
```

**Justification**

It provides safety when adding new lines while maintaining a compact readable form.

**Add Comments to Closing Braces**

Adding a comment to closing braces can help when you are reading code because you don't
have to find the begin brace to know what is going on.

```rust
loop {
    if (valid) {
    } /* if valid */
    else {
    } /* not valid */
} /* end forever */
```

### Consider Screen Size Limits

Some people like blocks to fit within a common screen size so scrolling is not necessary when
reading code.

### Parens () with Key Words and Functions Policy

* Do not put parens next to keywords. Put a space between.
* Do put parens next to function names.
* Do not use parens in return statements when it's not necessary.

**Justification**

Keywords are not functions. By putting parens next to keywords keywords and function names are made to look alike.

```rust
if condition {
}
while condition {
}

strcpy(s, s1);
return 1;
```

### A Line Should Not Exceed 120 Characters

Lines should not exceed 120 characters.

### If Then Else Formatting

#### Layout

It's up to the programmer. Different bracing styles will yield slightly different looks. One common
approach is:

```rust
if condition {
} else if condition {
} else {
}
```

If you have ​ _else if_ ​ statements then it is usually a good idea to always have an else block for
finding unhandled cases. Maybe put a log message in the else even if there is no corrective
action taken.

#### Condition Format

Always put the constant on the left hand side of an equality/inequality comparison. For example:

```rust
if 6 == errorNum ...
```

One reason is that if you leave out one of the = signs, the compiler will find the error for you. A
second reason is that it puts the value you are looking for right up front where you can find it
instead of buried at the end of your expression. It takes a little time to get used to this format,
but then it really gets useful.

### match Formatting

* The ​ default ​ case should always be present and trigger an error if it should not be
reached, yet is reached.
* If you need to create variables put all the code in a block.
* Prefer putting all code in blocks unless its a single expression

```rust
match ...  {
    1 => {
        ...
        /* comments */
    },
    2 => {
        let v: usize;
        ...
    },
    3 => {
       ...
    }
    _ => {}
}
```

### Use of goto, continue, break and ?:

#### Goto

Goto statements should be used in only one situation, and that is to use the label to break to an outer loop.

```rust
'nextbasis: for basis in bases {
    ...
    for _ in 1..trials {
        ...
        if condition {
            break 'nextbasis;
        }
    }
}
```

#### Continue and Break

Continue and break are really disguised gotos so they are covered here.
Continue and break like goto should be used sparingly as they are magic in code. With a simple
spell the reader is beamed to god knows where for some usually undocumented reason.
The two main problems with continue are:
* It may bypass the test condition
* It may bypass the increment/decrement expression
Consider the following example where both problems occur:

```rust
loop {
    ...
    /* A lot of code */
    ...
    if condition {
        continue;
    }
    ...
    /* A lot of code */
    ...
    if i > STOP_VALUE { break; }
}
```

"A lot of code" is necessary in order that the problem cannot be caught easily by the
programmer.

From the above example, a further rule may be given: Mixing continue with break in the same
loop is a sure way to disaster.

### One Statement Per Line

There should be only one statement per line unless the statements are very closely related.

**Justification**

The code is easier to read. Use some white space too. Nothing better than to read code
that is one line after another with no white space or comments.

#### One Variable Per Line

Related to this is always define one variable per line:

**Do:**

```rust
let count = 0;
let mut bytes_received = 0;
```

**Don’t:**

```rust
let bytes_received, count;
```

**Justification**

* Documentation can be added for the variable on the line.
* It's clear that the variables are initialized.
* Declarations are clear which reduces the probability of declaring a struct when you
   meant to declare just an int.

**Make Macro Names Unique**

Like global variables macros can conflict with macros from other packages.

* Prepend macro names with package names.
* Avoid simple and common names like *max* and *min*.

## Short Functions

Functions should limit themselves to a page or two of code.

**Justification**

* The idea is that the each method represents a technique for achieving a single objective.
* Most arguments of inefficiency turn out to be false in the long run.
* True function calls are slower than not, but there needs to be a thought out decision (see
  premature optimization).

## Documentation

Use the following in the header of the lib.rs or main.rs file to help limit bad styles by the compiler

```rust
#![deny(
    missing_docs,
    trivial_casts,
    trivial_numeric_casts,
    unconditional_recursion,
    unused_import_braces,
    unused_lifetimes,
    unused_qualifications,
    unused_extern_crates,
    unused_parens,
    while_true
)]
```

**Comments Should Tell a Story**

Consider your comments a story describing the system. Expect your comments to be extracted
by a robot and formed into a man page. Class comments are one part of the story, method
signature comments are another part of the story, method arguments another part, and method
implementation yet another part. All these parts should weave together and inform someone
else at another point of time just exactly what you did and why.

**Document Decisions**

Comments should document decisions. At every point where you had a choice of what to do
place a comment describing which choice you made and why. Archeologists will find this the
most useful information.

**Make Gotchas Explicit**

Explicitly comment variables changed out of the normal control flow or other code likely to break
during maintenance. Embedded keywords are used to point out issues and potential problems.
Consider a robot will parse your comments looking for keywords, stripping them out, and making
a report so people can make a special effort where needed.

**Gotcha Keywords**

* `author`:
specifies the author of the module

* `version`:
specifies the version of the module

* `param`:
specifies a parameter into a function

* `return`:
specifies what a function returns

* `see` <link\>:
creates a link in the documentation to the file/function/variable to consult to get a better
understanding on what the current block of code does.

* `TODO`:
what remains to be done

* `bug`:
report a bug found in the piece of code


**Gotcha Formatting**

* Make the gotcha keyword the first symbol in the comment.
* Comments may consist of multiple lines, but the first line should be a self-containing,
meaningful summary.
* The writer's name and the date of the remark should be part of the comment. This
information is in the source repository, but it can take a quite a while to find out when
and by whom it was added. Often gotchas stick around longer than they should.
Embedding date information allows other programmer to make this decision. Embedding
who information lets us know who to ask.

**Commenting function declarations**

Functions headers should be in the file where they are declared using the triple forward slashes.

## Layering

Layering is the primary technique for reducing complexity in a system. A system should be
divided into layers. Layers should communicate between adjacent layers using well defined
interfaces. When a layer uses a non-adjacent layer then a layering violation has occurred.
A layering violation simply means we have dependency between layers that is not controlled by
a well defined interface. When one of the layers changes code could break. We don't want code
to break so we want layers to work only with other adjacent layers.

Sometimes we need to jump layers for performance reasons. This is fine, but we should know
we are doing it and document appropriately.

## Miscellaneous

### General advice

This section contains some miscellaneous do's and don'ts.

* Don't use floating-point variables where discrete values are needed. Using a float for a
loop counter is a great way to shoot yourself in the foot. Always test floating-point
numbers as <= or >=, never use an exact comparison (== or !=).

* Use `cargo fmt` to help style your code

* Use `cargo clippy` to check for better and preferred manners of performing the same code.

### Commenting Out Large Code Blocks

Sometimes large blocks of code need to be commented out for testing.

#### Add a Comment to Document Why

Add a short comment explaining why it is not implemented, obsolete or temporarily disabled.

### No Magic Numbers

A magic number is a bare naked number used in source code. It's magic because no-one has a
clue what it means including the author inside 3 months. For example:

```rust
if 22 == foo { start_thermo_nuclear_war(); }
else if 19 == foo { refund_lotso_money(); }
else if 16 == foo { infinite_loop(); }
else { cry_cause_im_lost(); }
```

In the above example what do 22 and 19 mean? If there was a number change or the numbers
were just plain wrong how would you know? ​Instead of magic numbers use a real name that
means something. You can use constants as names. For example:

```rust
pub const PRESIDENT_WENT_CRAZY: usize = 22;
const WE_GOOFED: usize= 19;
const THEY_DIDNT_PAY: usize = 16;

if PRESIDENT_WENT_CRAZY == foo { start_thermo_nuclear_war(); }
else if WE_GOOFED == foo { refund_lotso_money(); }
else if THEY_DIDNT_PAY == foo { infinite_loop(); }
else {
happy_days_i_know_why_im_here(); }
```

Now isn't that better? The const option is preferable because when debugging the
debugger has enough information to display both the value and the label.

### Error Return Check Policy

* Never use `unwrap` on **Result**. If the type is *Err*, it will panic and crash the program. The only exception is if it has already been checked for error previously or in test code.
* Never use `unwrap` on **Option** for the same reason if the type is *None* as **Result** is *Err*.

## References

Adapted from [http://www.possibility.com/Cpp/CppCodingStandard.html](http://www.possibility.com/Cpp/CppCodingStandard.html) and NetBSD's style guidelines
