// Avoid `console` errors in browsers that lack a console.
( function() {
		var method;
		var noop = function() {
		};
		var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
		var length = methods.length;
		var console = (window.console = window.console || {});

		while (length--) {
			method = methods[length];

			// Only stub undefined methods.
			if (!console[method]) {
				console[method] = noop;
			}
		}
	}());

// Snackbars for notifications
// https://github.com/google/material-design-lite/wiki/Using-Snackbars-for-notifications
( function() {
		function createToast(message) {
			'use strict';
			var snackbar = document.createElement('div'),
			    text = document.createElement('div');
			snackbar.classList.add('mdl-snackbar');
			text.classList.add('mdl-snackbar__text');
			text.innerText = message;
			snackbar.appendChild(text);
			document.body.appendChild(snackbar);
			// Remove after 10 seconds
			setTimeout(function() {
				snackbar.remove();
			}, 1000);
		}


		window.createToast = createToast;
	}());
//Colores
( function() {
		var mdlColors = {
			"background" : "mdl-color--",
			"text" : "mdl-color--text--",
			"colors" : ["red", "pink", "purple", "deep-purple", "indigo", "blue", "light-blue", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "deep-orange", "brown", "grey", "blue-grey"]

		};
		//"colors" : ["red", "pink", "purple", "deep-purple", "indigo", "blue", "light-blue", "cyan", "teal", "green", "light-green", "lime", "yellow", "amber", "orange", "deep-orange", "brown", "grey", "blue-grey", "black", "white"]

		function getClassColor(id) {
			return colors[id];
		}

		var l = 'Lorem ipsum dolor sit amet consectetur adipisicing elit ';
		l += 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ';
		l += 'Ut enim ad minim veniam ';
		l += 'quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ';
		l += 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat ';
		l += 'nulla pariatur Excepteur sint occaecat cupidatat non proident ';
		l += 'sunt in culpa qui officia deserunt mollit anim id est laborum ';
		l = l.toLowerCase();
		var words = l.split(' ');
		function randText(size) {
			var r;
			var out = '';
			for (var x = 0; x < size; x++) {
				r = Math.floor((Math.random() * words.length) + 1);
				out += words[r] + ' ';
			}
			out = out.trim();
			return out.charAt(0).toUpperCase() + out.slice(1);
		}


		window.randText = randText;

		var colors = {};
		var abc = '1234567890ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
		function randChar() {
			var r = Math.floor((Math.random() * abc.length));
			console.log(r, abc[r]);
			return abc[r];
		}


		window.randChar = randChar;

		function randNum() {
			var num = '1234567890';
			var r;
			var out = '';
			for (var i = 0; i < 3; i++) {
				r = Math.floor((Math.random() * num.length));
				out += num[r];
			}
			return out;
		}


		window.randNum = randNum;
		function gen() {

			var js = '';
			var idColor = 0;
			for (var i = 0; i < abc.length; i++) {
				colors[abc[i]] = 'mdl-color--' + mdlColors.colors[idColor];
				js += '"' + abc[i] + '" : "' + mdlColors.colors[idColor] + '",';
				idColor++;
				if (idColor >= mdlColors.colors.length) {
					idColor = 0;
				}
			}
		}

		gen();
		function circleColors() {
			var nodes = document.querySelectorAll('.circle');
			var size = nodes.length;
			var id;
			for (var x = 0; x < size; x++) {
				id = nodes[x].textContent;
				if (id && id.length > 0) {
					id = id[0];
					nodes[x].classList.add(colors[id]);
				}

			}
		}


		window.circleColors = circleColors;
	}());
//
( function() {
		function loadScript(id, src, callback) {

			// Crear elemento
			var script = document.createElement("script");

			// Atributos del script
			script.setAttribute("type", "text/javascript");
			script.setAttribute("src", src + "?callback=" + callback);
			script.setAttribute("id", id);

			// Insertar script en la cabecera
			document.getElementsByTagName("head")[0].appendChild(script);

		}


		window.loadScript = loadScript;
	}());

// Polyfill for creating CustomEvents on IE9/10/11

// code pulled from:
// https://github.com/d4tocchini/customevent-polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent#Polyfill
try {
	new CustomEvent("test");
} catch(e) {
	var CustomEvent = function(event, params) {
		var evt;
		params = params || {
			bubbles : false,
			cancelable : false,
			detail : undefined
		};

		evt = document.createEvent("CustomEvent");
		evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
		return evt;
	};

	CustomEvent.prototype = window.Event.prototype;
	window.CustomEvent = CustomEvent;
	// expose definition to window
}
