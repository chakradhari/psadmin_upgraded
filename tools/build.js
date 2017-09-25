// More info on Webpack's Node API here: https://webpack.github.io/docs/node.js-api.html
// Allowing console calls below since it is a build process
/* eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV  = 'production';

console.log("Generating minified bundle for production".blue);

webpack(webpackConfig).run(function(err, stats) {
  if(err) { // If a fatal error occured stop here.
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if(jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if(jsonStats.hasWarnings) {
    console.log("Webpack generated following warning: ".bold.yellow);
    jsonStats.warning.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack stats: ${stats}`);

  console.log("Your app is rolling buddy".green);

  return 0;

});
