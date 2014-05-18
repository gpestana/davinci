var fs 		= require('fs'),	
argv	 	= require('minimist')(process.argv.slice(2))


/*
todo:
- error handling with execptions
- log processing
- all 
*/


var genFile = argv._[0]
var output = argv._[1]

if (genFile == '') {
	console.log("Error: no content provided")
	process.exit(1)
}
if (output == '') {
	console.log("Error: no output dir provided")
	process.exit(1)
}

//if genFile does not exist --> error
var content = fs.readFile(process.cwd()+'/'+genFile, function(err, data) {
	if(err) {
		console.log('Error: not possible to open content file')
		process.exit(1)
	}
	generate(data.toString())
})


function generate(data) {
	console.log(data)
}
