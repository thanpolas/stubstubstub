/**
 * @fileOverview Runs before publishing to NPM, this script will:
 *   -
 *   -
 *   -
 *
 *
 */
var spawn = require('child_process').spawn;

var prepublish = module.exports = {};

prepublish.build = function(done) {
  console.log('Starting building...');
  var child = spawn('cat', ['app.js', '>', 'build/dist/app.js']);
  child.stdout.on('data', function(data) {console.log('o:' + data);});
  child.stderr.on('data', function(data) {console.error('e:' + data);});
  child.on('exit', function(code) {
    console.log('FINI', code);
  });
};

prepublish.commit = function(done) {

};

prepublish.tag = function(done) {

};

prepublish.push = function(done) {

};

prepublish.toInvoke = [
  prepublish.build,
  prepublish.commit,
  prepublish.tag,
  prepublish.push,
];

function runner() {
  if (prepublish.toInvoke.length === 0) {
    console.log('All done');
    return;
  }
  prepublish.toInvoke.shift()(runner);
}

runner();
