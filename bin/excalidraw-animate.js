const args = process.argv.slice(2, 4);
if (args.length !== 2) {
  console.log('Usage: npm run excalidraw-animate <source.html> <output.svg>');
  process.exit(1);
}

var fs = require('fs'),
  path = require('path'),
  sourcePath = args[0],
  destinationPath = args[1];

fs.readFile(sourcePath, { encoding: 'utf-8' }, function (err, data) {
  if (!err) {
    const cheerio = require('cheerio');
    const $ = cheerio.load(data);

    const svgs = $('svg');

    if (svgs.length === 1) {
      fs.writeFile(destinationPath, svgs.prop('outerHTML'), function (err) {
        if (err) {
          return console.log(err);
        }
        console.log('The file was saved!');
      });
    } else if (svgs.length > 1) {
      svgs.attr('class', 'scene');
      const viewBox = svgs[0].attribs.viewBox;
      const width = svgs[0].attribs.width;
      const height = svgs[0].attribs.height;

      const out = [
        `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" width="${width}" height="${height}" id="root">`,
        svgs
          .map((i, s) => {
            return cheerio.load(s).html();
          })
          .get()
          .join('\n'),
        `</svg>`,
      ];
      // const out = Array.from(svgs).map(svg => svg.prop())
      fs.writeFile(destinationPath, out.join(''), function (err) {
        if (err) {
          return console.log(err);
        }
        console.log('The file was saved!');
      });
    } else {
      console.log('Error: No SVGs found in source file.');
    }
  } else {
    console.error(err);
    process.exit(1);
  }
});
