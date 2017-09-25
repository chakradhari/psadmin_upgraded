import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/*esline-disable no-console */

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if(err) {
    console.log(err);
  }

  const $ = cheerio.load(markup);

  //Since separate css file is only for production build need to add it dynamically

  $('head').prepend('<link rel=stylesheet href="styles.css" />');
  fs.writeFile('dist/index.html', $.html(), 'utf8', function(error) {
    if(error) {
      return console.log(error);
    }
    console.log("Index html file written to dist".green);
  });
});
