###davinci static blog generator
"simplicity is the ultimate sophistication"  

the blog structure and content is all based in one markdown-formated document. the idea is to decluter and focus on what's essential: the content 


generate static blog: 
	$ node davinci.js content.md ./blog-output 

the ./blog-output will be created with the blog's content. a log - davinci.log - will also be generated.  


the main document is structured as follow: 

// example 

//starts a new post by providing some metadata 
//only title and date are mandatory, the others are optional 
title:	   Example title 
subtitle:  Example subtitle	
date:	   10.01.2013 //format: dd:mm:yyyy - important since the posts will be indexed and sorted based on this information	
author:	   Author's name 
tags:	   tag1, tag2, tag3
slug:      example-post 

//write the blog's content in markdown   		 
This blog generatos uses markdown sintax. For more information check [here](https://daringfireball.net/projects/markdown/). Markdown sintax is pretty cool since it allows to write rich documents, emphasizing readability above all. 

//new post
title:	  Post2 
date: 	  11.02.2013 

The posts don't need to be sorted in this document. By default, the list of posts will be sorted based on the date provided in the metadata. 


// /example

if the metadata is not well formated, the post will not be generated. all generation issues will be logged in the davinci.log file. 
by default, the blog gen will create a html document for each entry. the generated document will be named /*slug.html* or /*date-name* if a slug is not provided. 

later on, templating and tag listing will be implemented 


License
wtf ?
