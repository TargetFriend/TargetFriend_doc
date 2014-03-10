/*
 * Usage:
 * - phantomjs build_icons.js
 */

var system = require('system');
var webpage = require("webpage");

var mainPage = './icons/iconPlaceHolder.html';
var mainIconWidth = 1000;

var outputDir = './icons';
var fileEnding = '.png';


var viewports = [
	{
		width: 57,
		device: 'ios',
		name: '57'
	},
	{
		width: 114,
		device: 'ios',
		name: '57-2x'
	},
	{
		width: 72,
		device: 'ios',
		name: '72'
	},
	{
		width: 144,
		device: 'ios',
		name: '72-2x'
	},


	{
		width: 36,
		device: 'android',
		name: '36-ldpi'
	},
	{
		width: 48,
		device: 'android',
		name: '48-mdpi'
	},
	{
		width: 72,
		device: 'android',
		name: '72-hdpi'
	},
	{
		width: 96,
		device: 'android',
		name: '96-xhdpi'
	},


	{
		width: 125,
		device: 'website',
		name: '125'
	},
	{
		width: 250,
		device: 'website',
		name: '250'
	},
	{
		width: 500,
		device: 'website',
		name: '500'
	},
	{
		width: 1000,
		device: 'website',
		name: '1000'
	}
];

function getViewport (width) {
	return {
		width: width,
		height: width
	};
}

function getFilename (viewport) {
	return outputDir + '/' + viewport.device + '/icon-' + viewport.name + fileEnding;
}

function renderIcons (page) {

	if (viewports.length > 0) {

		// Remove the first item
		var viewport = viewports.shift();

		page.clipRect = page.viewportSize = getViewport(viewport.width);

		var filePath = getFilename(viewport);

		page.evaluate(function (view) {
			var img = document.querySelector('img');
			img.style.width = view.width + 'px';
			img.style.height = view.width + 'px';
			return;
		}, viewport);

		return setTimeout(function () {
			// Render the page
			page.render(filePath);
			console.log('Rendered: ' + filePath);
			renderIcons(page);
		}, 100);

	} else {

		console.log('We created all icons!');

		page.close();

		// We created all icons
		return phantom.exit();

	}

}

var _page = require('webpage').create();

_page.viewportSize = getViewport(viewports[0].width);

_page.settings.userAgent = "phantom.js bot";

_page.open(mainPage, function (status) {

	if (status === "success") {

		return window.setTimeout(function () {

			renderIcons(_page);

		}, 500);

	} else {

		_page.close();

		console.log("Unable to render page!!");
		return phantom.exit();

	}

});
