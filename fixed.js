const fs = require("fs");
const path = require("path");
var glob = require("glob")
let dir = "icon"

glob(dir + "/*.svg", {}, function (er, files) {
	for (var i in files) {
		let file_out = "icon_fixed/" + path.basename(files[i]);
		//console.log(files[i], file_out);
		const buffer = fs.readFileSync(files[i]);
		const fileContent = buffer.toString().replace(/\<\?.+?\?\>/g, '');;

		//console.log(fileContent);
		fs.writeFile(file_out, fileContent, function (err) {
		});
	}
});
