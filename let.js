function getUrl(str) {

	return str.match(/[?\w]*[http|ftp]:\/\/[\w]*.[\w]*(.[\w]*){1,2}/gm)
}

console.log(getUrl("Hello this is my site url: http://www.google.com  \n\nhttp://hello.com  ok   \n\n http://hello.co.in"))

