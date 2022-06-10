const svgtofont = require('svgtofont');
const path = require('path');

svgtofont({
	src: path.resolve(process.cwd(), 'icon_fixed'), // svg path
	dist: path.resolve(process.cwd(), 'fonts'), // output path
	fontName: 'iconfont', // font name
	emptyDist: true,
	startUnicode: 0xea01, // un
	css: {
		fileName: "iconfont.css"
	},
	useNameAsUnicode: false,
	svgicons2svgfont: {
		normalize: true,
		centerHorizontally: true,
		fontHeight: 1000,
		fontWeight: 1000,
		metadata: "mxiqi.com"
	}, svg2ttf: {
		copyright: "mxiqi.com",
	},
	website: {
		title: "Mxiqi Icon Font",
		index:"font-class, unicode, symbol",
		// Must be a .svg format image.
		logo: "",
		template: path.join(process.cwd(), "mxiqi.ejs"),
		version: "1.0.0",
		meta: {
			description: "",
			keywords: "TTF,EOT,WOFF,WOFF2,SVG"
		},
		description: ``,
		links: [
			{
				title: "Font Class",
				url: "index.html"
			},
			{
				title: "Unicode",
				url: "unicode.html"
			}
		],
		footerInfo: `Licensed by mxiqi.com`
	}
}).then(() => {
	console.log('done!');
});
