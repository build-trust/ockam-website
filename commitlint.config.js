// This file is used to lint our commit messages with commitlint
// https://commitlint.js.org/

// Each commit message consists of a header, a body and a footer.
// The header includes a type, a scope and a subject:
//   <type>(<scope>): <subject>
//   <BLANK LINE>
//   <body>
//   <BLANK LINE>
//   <footer>
//

module.exports = {
  // More about these rules https://commitlint.js.org/#/reference-rules
  rules: {
    // <type>(<scope>): <subject> must not be longer that 100 characters
    'header-max-length': [2, 'always', 100],

    // type is required, must be in lower case and have one of the below values.
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        // build: changes that affect our build system or external dependencies
        'build',

        // chore: some minor change that doesn't fall in any of the othe types
        'chore',

        // ci: changes to our continuous integration configuration files
        'ci',

        // docs: a documentation only change
        'docs',

        // feat: a new feature
        //
        // If a commit affects multiple implementations, please break it into two commits.
        'feat',

        // fix: a bug fix
        //
        // If a commit affects multiple implementations, please break it into two commits.
        'fix',

        // refactor: code change that neither fixes a bug nor adds a feature
        'refactor',

        // style: changes that do not affect the meaning of the code (white-space, formatting etc.)
        'style',

        // test: add missing tests or correct existing tests
        'test',

        // content:
        'content',
      ],
    ],

    // subject is required, must be lower case and not end in period
    //
    // describe your changes in the imperative-mood
    // https://git.kernel.org/pub/scm/git/git.git/tree/Documentation/SubmittingPatches?id=HEAD#n135
    'subject-empty': [2, 'never'],
    'subject-case': [2, 'always', 'lower-case'],
    'subject-full-stop': [2, 'never', '.'],

    // body is optional, must be max 100 chars wide, must have a blank line before it
    //
    // describe your changes in the imperative-mood
    // https://git.kernel.org/pub/scm/git/git.git/tree/Documentation/SubmittingPatches?id=HEAD#n135
    'body-leading-blank': [2, 'always'],
    'body-max-line-length': [2, 'always', 100],

    // footer is optional, must be max 100 chars wide, must have a blank line before it
    'footer-leading-blank': [2, 'always'],
    'footer-max-line-length': [2, 'always', 100],
  },
};
