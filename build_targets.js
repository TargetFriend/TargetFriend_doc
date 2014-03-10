/*
 * Usage:
 * - phantomjs build_targets.js
 */

var system = require('system');
var webpage = require("webpage");

var mainPage = './targets/targetPlaceHolder.html';
var mainIconWidth = 1000;

var outputDir = './targets';
var fileEnding = '.png';

var targets = [
	'dfbv_spiegel',
	'dfbv_spiegel_spot',
	'wa_10_6_recurve',
	'wa_10_6_compound',
	'wa_10_compound',
	'wa_10_recurve',
	'wa_field',
	'wa_x',
	'wa_x_5',
	'wa_x_6'
];
var viewports = [80, 100, 250, 500];
var viewportIndex = system.args.length > 1 ? system.args[1] : 0;

function getViewport (width) {
	return {
		width: width,
		height: width
	};
}

function getFilename (target, viewport) {
	return outputDir + '/' + viewport + '/' + target + fileEnding;
}

function renderTargets (page) {

	if (targets.length > 0) {

		// Remove the first item
		var targetName = targets.shift();
		var filePath = getFilename(targetName, viewports[viewportIndex]);

		page.clipRect = page.viewportSize = getViewport(viewports[viewportIndex]);

		page.evaluate(function (view, targetName) {

			var targetEl = document.getElementById('target');
			targetEl.innerHTML = '';
			targetEl.style.width = view + 'px';
			targetEl.style.height = view + 'px';

			return new ArcherTarget(targetEl, {
				target: targetName
			});

		}, viewports[viewportIndex], targetName);

		return setTimeout(function () {
			// Render the page
			page.render(filePath);
			console.log('Rendered: ' + filePath);
			renderTargets(page);
		}, 200);

	} else {

		console.log('We created all targets!');

		page.close();

		// We created all targets
		return phantom.exit();

	}

}

var _page = require('webpage').create();

_page.viewportSize = getViewport(viewports[viewportIndex]);

_page.settings.userAgent = "phantom.js bot";

_page.open(mainPage, function (status) {

	if (status === "success") {

		return window.setTimeout(function () {

			renderTargets(_page);

		}, 500);

	} else {

		_page.close();

		console.log("Unable to render page!!");
		return phantom.exit();

	}

});
