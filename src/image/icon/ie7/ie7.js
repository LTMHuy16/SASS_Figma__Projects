/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-call': '&#xe900;',
		'icon-envelope': '&#xe901;',
		'icon-envelope-open': '&#xe902;',
		'icon-facebook': '&#xe903;',
		'icon-grid': '&#xe904;',
		'icon-grid-2': '&#xe905;',
		'icon-instagram': '&#xe906;',
		'icon-line-up': '&#xe907;',
		'icon-linkedin': '&#xe908;',
		'icon-mail-line': '&#xe909;',
		'icon-mail-open-line': '&#xe90a;',
		'icon-play': '&#xe90b;',
		'icon-setting': '&#xe90c;',
		'icon-twitter': '&#xe90d;',
		'icon-users': '&#xe90e;',
		'icon-write': '&#xe90f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
