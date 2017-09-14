var Horseman = require("node-horseman");

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getUserAgent(){
	
	var userAgents = [
		'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36',
		'Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0',
		'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/601.3.9 (KHTML, like Gecko) Version/9.0.2 Safari/601.3.9'
	];

	return userAgents[getRandomArbitrary(0,2)];	
};

var getDateTimeString = function(){
  return new Date().toLocaleDateString() +" "+ new Date().toLocaleTimeString();
}

module.exports.getDateTimeString = getDateTimeString;

function getInfo(){

	var userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36';
	var start = Date.now();
	var url = "https://www.sinesp.gov.br/sinesp-cidadao";
	var responsejson = {};
	var config = {"timeout":15000,"interval":20,"loadImages":true};
	var horseman = new Horseman(config);

 	console.info(getDateTimeString()+" consulting vehicle...");
	console.info('User Agent: ',userAgent);
 
  	horseman
	.userAgent(userAgent)
	.open(url)
	.screenshot('.')

  
	return "<h1>OK</h1>";
};

module.exports.getInfo = getInfo;
