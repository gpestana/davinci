var fs 		= require('fs'),	
argv	 	= require('minimist')(process.argv.slice(2))

/*
todo:
- error handling with execptions
- log processing
- refactoring regex parsing 
- sort posts by date
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
	parseDocument(data.toString())
})

function parseDocument(data) {
	objPosts = []
	rawPosts = data.split('---')

	rawPosts.forEach(function(rawPost) {
		objPosts.push(parseRaw(rawPost))
	})

	generateHTML(objPosts)
}


//#todo: refactoring + support variable metadata types
function parseRaw(rawPost) {
	var finalObj = {}
	var regRes

	//after: /\s+\S*$/, ""
	//before: /^[\s]*/,''

	regRes = rawPost.match(/:title\t.(.*)/)
	rawPost = rawPost.replace(/:title(.*)./, '')
	finalObj.title = regRes[1]
	
	regRes = rawPost.match(/:date\t.(.*)/)
	rawPost = rawPost.replace(/:date(.*)./, '')
	finalObj.date = regRes[1]

	regRes = rawPost.match(/:slug\t.(.*)/)
	rawPost = rawPost.replace(/:slug(.*)./, '')

	finalObj.slug = regRes[1].replace(/\s+\S*$/, "")
	finalObj.content = rawPost.replace(/^[\s]*/,'')

	return finalObj
}


function generateHTML(objPosts) {
	objPosts.forEach(function(postData) {
		var htmlFile = output+'/'+postData.slug+'.html'
		
		//wrap content with template
		fs.readFile('example/template.html', function() {
			finalContent = finalContent.replace("{{"+key+"}}", entry[key]);
		})

		fs.writeFile(htmlFile, postData.content, function(err) {
			if(err) {
				throw err
			}
			console.log('>> '+postData.title+' written.')
		})
	})
}