/*
 * Usage:
 * - grunt server
 * - phantomjs build_screenshots.js
 */

console.log('Gonna make some screenshots! :)');

var system = require('system');

var mainUrl = 'http://localhost:9000/index_app.html#/';
var version = '0-8-7';

var urls = [

	{
		page: 'home',
		imgName: 'home',
		screenshotAfter: false,
		before: null,
		after: null,
		timeout: 0
	},

	{
		page: 'bows',
		imgName: 'bows',
		screenshotAfter: 3000,
		before: null,
		after: function () {
			// Adding
			$('.navigation-bar__item.quarter.right .navigation-bar__button').click();
			// Inserting data
			window.setTimeout(function () {
				$('input[name="name"]').val('Mein Bogen').trigger('change');
			}, 400);
			// Saving
			window.setTimeout(function () {
				$('.button--large').click();
			}, 800);
		},
		timeout: 0
	},

	{
		page: 'arrowsets',
		imgName: 'arrowsets',
		screenshotAfter: 3000,
		before: null,
		after: function () {
			// Adding
			$('.navigation-bar__item.quarter.right .navigation-bar__button').click();
			// Inserting data
			window.setTimeout(function () {
				$('input[name="name"]').val('Mein Pfeilsatz').trigger('change');
			}, 400);
			// Saving
			window.setTimeout(function () {
				$('.button--large').click();
			}, 800);
		},
		timeout: 0
	},

	{
		page: 'distances',
		imgName: 'distances',
		screenshotAfter: null,
		before: null,
		after: null,
		timeout: 0
	},

	{
		page: 'settings',
		imgName: 'settings',
		screenshotAfter: null,
		before: null,
		after: null,
		timeout: 0
	},

	{
		page: 'competitions',
		imgName: 'competitions',
		screenshotAfter: 3000,
		before: null,
		after: function () {

			// Adding
			$('.navigation-bar__item.quarter.right .navigation-bar__button').click();

			// Inserting data
			window.setTimeout(function () {
				$('[name="name"]').val('Mein Wettkampf').trigger('change');
				$('[name="note"]').val('Heute ist ein schöner Tag zum Schießen').trigger('change');
			}, 100);

			// Saving
			window.setTimeout(function () {
				$('.button--large').click();
			}, 500);

			window.setTimeout(function () {
				// Going back
				$('.navigation-bar__item.quarter.left .navigation-bar__button').click();
				$('.navigation-bar__item.quarter.left .navigation-bar__button').click();
			}, 1000);
		},
		timeout: 0
	},

	{
		page: 'competitions',
		imgName: 'competitionsMenu',
		screenshotAfter: null,
		before: function () {
			$('[ng-selectmenu]').show();
		},
		after: null,
		timeout: 1000
	},


	{
		page: 'competition/1/new',
		imgName: 'roundForm',
		screenshotAfter: null,
		before: null,
		after: null,
		timeout: 0
	},
	// Create Round 1
	{
		page: 'competition/1',
		imgName: 'rounds',
		screenshotAfter: 3100,
		before: null,
		after: function () {
			// Adding
			$('.navigation-bar__item.quarter.right .navigation-bar__button').click();
			// Inserting data
			$('[name="name"]').val('Meine Runde').trigger('change');
			// Saving
			window.setTimeout(function () {
				$('.button--large').click();
			}, 900);
		},
		timeout: 0
	},
	// Create image of round 1
	{
		page: 'round/1/0',
		imgName: 'endsSingleTarget',
		screenshotAfter: null,
		before: null,
		after: null,
		timeout: 0
	},
	// Create Round 2 and create image of round 2
	{
		page: 'competition/1',
		imgName: 'endsMultipleTarget',
		screenshotAfter: null,
		before: function () {
			// Adding
			$('.navigation-bar__item.quarter.right .navigation-bar__button').click();
			// Inserting data
			$('[name="name"]').val('Meine Runde').trigger('change');
			// Three targetfaces
			$('[name="targetNumber"]').val('2').trigger('change');

			// Saving
			window.setTimeout(function () {
				$('.button--large').click();
			}, 500);

			window.setTimeout(function () {
				$('#round_1').click();
			}, 1000);
		},
		after: null,
		timeout: 3000
	},

	{
		page: 'round/1/0',
		imgName: 'endsSidebar',
		screenshotAfter: null,
		before: function () {
			$('.navigation-bar__item.quarter.left .navigation-bar__button').click();
		},
		after: null,
		timeout: 1500
	},

	{
		page: 'targetFaces',
		imgName: 'targetFaces',
		screenshotAfter: null,
		before: null,
		after: null,
		timeout: 0
	},

	{
		page: 'pattern',
		imgName: 'pattern',
		screenshotAfter: null,
		before: null,
		after: null,
		timeout: 0
	},

	{
		page: 'bow/setMarker/new',
		imgName: 'bowsightMarker',
		screenshotAfter: null,
		before: null,
		after: null,
		timeout: 0
	}

];

var outputDir = './screenshots';
var fileEnding = '.png';
var timeoutPageLoad = 2000;
var i = 0;

var viewportSize = {
	width  : 460,
	height : 800
};

var viewports = [
	{
		name: 'smartphone-portrait',
		viewport: {width: 320, height: 480}
	},
	{
		name: 'smartphone-big-portrait',
		viewport: {width: 460, height: 800}
	},
	{
		name: 'tablet-portrait',
		viewport: {width: 768, height: 1024}
	}
];

// See: https://github.com/ariya/phantomjs/blob/master/examples/render_multi_url.js
// modified for TargetFriend
var RenderUrlsToFile = function (urls, viewport, callbackPerUrl, callbackFinal) {

	var urlIndex = 0;
	var webpage = require("webpage");
	var page = null;

	/**
	 * Get the filename
	 * @return {String} The filename
	 */
	var getFilename = function (urlPage, viewport, duplicate) {

		var name;

		if (urlPage.imgName) {

			name = urlPage.imgName;

		} else {

			// Removes leading and trailing slashes
			var urlNoSlash = urlPage.page.replace(/^\/|\/$/g, '');
			// Replaces '/' with '-'
			name = urlNoSlash.replace(/\//g, "-");
			// Replaces ':' with '_'
			name = name.replace(/\:/g, "_");

		}

		var nameString = duplicate ? (name + '-2') : name;

		return outputDir + '/' + viewport.name + '/' + 'TF_' + version + '_' + nameString + ".png";
	};

	var next = function (status, url, file) {
		page.close();
		callbackPerUrl(status, url, file);
		return retrieve();
	};

	var retrieve = function () {

		var url;

		if (urls.length > 0) {

			// Remove the last item
			url = urls.shift();

			// Create the web page
			page = webpage.create();

			page.viewportSize = viewport.viewport;

			page.settings.userAgent = "phantom.js bot";

			/*
			 * Open the app
			 */
			return page.open(mainUrl + url.page, function (status) {

				var file = getFilename(url, viewport);

				urlIndex++;

				if (status === "success") {

					return window.setTimeout(function () {

						if (url.before) {
							page.evaluate(url.before);
						}

						return window.setTimeout(function () {

							// Render the page
							page.render(file);

							if (url.after) {
								page.evaluate(url.after);
							}

							if (url.screenshotAfter) {

								return window.setTimeout(function () {

									page.render(getFilename(url, viewport, true));

									return next(status, url.page, file);

								}, url.screenshotAfter);

							} else {

								return next(status, url.page, file);

							}
						}, url.timeout);

					}, timeoutPageLoad);

				} else {

					return next(status, url.page, file);

				}
			});

		} else {

			// We went through all URLs
			return callbackFinal();

		}
	};

	return retrieve();

};


var renderPages = function () {

	var viewportIndex = system.args.length > 1 ? system.args[1] : 0;

	if (!viewports[viewportIndex]) {
		console.log('Wrong Index! Using 0 as index!');
		viewportIndex = 0;
	}

	RenderUrlsToFile(urls, viewports[viewportIndex], function (status, url, file) {

		if (status !== "success") {

			return console.log("Unable to render '" + url + "'");

		} else {

			return console.log("Rendered '" + url + "' at '" + file + "'");

		}

	}, function () {

		// We made all screenshots
		return phantom.exit();

	});

};


var _page = require('webpage').create();
_page.viewportSize = viewports[0].viewport;

/*
 * Open the app to initialize the database,...
 */
_page.open(mainUrl, function (status) {

	if (status === "success") {

		return window.setTimeout(function () {

			_page.close();
			renderPages();

		}, 1000);

	} else {

		_page.close();
		return console.log("Unable to render page!!");

	}
});
