var DateUtil = require('../common/utils/dateUtil');
function Lists(){}

Lists.prototype = {
	constructor:Lists,
	say:function(msg){
		console.log(DateUtil.getDate());
		return 'Lists' + msg;
	}
}


module.exports = Lists;