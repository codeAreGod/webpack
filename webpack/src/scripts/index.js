var DateUtil = require('./common/utils/dateUtil');
var Lists = require('./modules/list');
var Detail = require('./modules/detail');

var inst = new Lists();
console.log(inst.say('list say'));
console.log(Detail('detail say'));


console.log("main js");

if(true){
	let x = 2;
}

console.log(x);

import '../styles/app.scss';