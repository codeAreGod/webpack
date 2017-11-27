var DateUtil = require('../common/utils/dateUtil');
function say(msg){
	console.log(DateUtil.getDate());
	return 'detail' + msg;
}

module.exports = say;