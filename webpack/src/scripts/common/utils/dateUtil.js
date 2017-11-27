var DateUtil = {
	getDate:function(){
		return new Date().toLocaleDateString();
	},alertTip:function(){
		alert(1)
	}
}

module.exports = DateUtil;

console.log('DateUtil js require');