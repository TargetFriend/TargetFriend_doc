/*
 * Usage:
 *  - node resize_screenshots.js 300
 */

var fs      = require('fs');
var path    = require('path');
var easyimg = require('easyimage');
var mkdirp  = require('mkdirp');

var imageSize = process.argv.length > 1 ? process.argv[2] : 200;

function getFiles (dir) {

	var files = fs.readdirSync(dir),
		paths = [];

	for (var i in files) {

		if (files.hasOwnProperty(i)) {

			var name = dir + '/' + files[i];
			if (!fs.statSync(name).isDirectory()) {
				paths.push(name);
			}
		}
	}
	return paths;
}

function resize (filePaths, size) {

	var filePath = filePaths.shift();
	var newDirPath  = path.dirname(filePath) + '/w' + size + '/';
	var newFilePath = path.dirname(filePath) + '/w' + size + '/' + path.basename(filePath);

	mkdirp(newDirPath, function (err) {
		if (err) {
			return console.error(err);
		}
		console.log(filePath);
		easyimg.resize({src: filePath, dst: newFilePath, width: size}, function (err, image) {
			if (err) {
				console.log(err + ': ' + newFilePath);
			}
			console.log('Resized ' + newFilePath);
			if (filePaths.length) {
				resize(filePaths, size);
			}
		});
	});

}
var smartphonePaths = getFiles('screenshots/smartphone-portrait');
var smartphoneBigPaths = getFiles('screenshots/smartphone-big-portrait');
var tabletPaths = getFiles('screenshots/tablet-portrait');

var concatArray = (smartphonePaths.concat(smartphoneBigPaths)).concat(tabletPaths);

resize(concatArray, imageSize);


