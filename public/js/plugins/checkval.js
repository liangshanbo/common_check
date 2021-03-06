define({
	ua:navigator.userAgent,
	checkVals:function(vals,patterns){
		var valIsArr = isArray(vals),
			ptnIsArr = isArray(patterns);
		if(isEqual(valIsArr,ptnIsArr) && isEqual(vals.length,patterns.length)){
			var len = val.length,i=0;
			while(i < len){
				if(!checkVal(vals[i],patterns[i])){
					return false;
				}
				i++;
			}
			return true;
		}
		console.log('checkVal error');
	},
	checkVal:function(val,pattern){
		if(!pattern.test(val)){
			return false;
		}
		return true;
	},
	isMobileNub:function(mobile){
		return /^1[3578][0-9]{9}$/.test(mobile);
	},
	isEmail:function(email){
		return /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(email);
	},
	isCertificate:function(certificate){
		return /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/.test(certificate);
	},
	isCID:function(cardNo){
		return /^(\d{16}|\d{19})$/.test(cardNo);
	},
	isCWord:function(word,start,end){
		var start = !isNaN(start) && start > 0?start:1;
		var end = !isNaN(end) && end > 0?end:'';
		var reg = new RegExp('^[\\u4e00-\\u9fa5]{'+start+','+end+'}$');
		//var regPunctuation = /[1-9<>《》！\*\(\^\)\$%~!@#\…&%￥—\+=、。，；‘’“”：'"\·`]/;
		var regRes = reg.test(word);
		//var pugRes = regPunctuation.test(word);
		return reg.test(word);
	},
	isArray:function(arr){
		return Array.isArray(arr) || (arr instanceof Array);
	},
	isEqual:function(){
		var len = arguments.length,
		argArr = Array.prototype.slice.call(arguments,0);
		if(len > 0){
			var val = argArr[0];
			return argArr.every(function(item,index,array){
				return val === item;
			});
		}
		return false;
	},
	isAndroid:function(){
		return this.ua.indexOf('Android') > -1;
	},
	isIOS:function(){
		return !!this.ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
	},
	isIPad:function(){
		return this.ua.indexOf('iPad') > -1;
	},
	isMobile:function(){
		return !!this.ua.match(/AppleWebKit.*Mobile.*/)||!!u.match(/AppleWebKit/);
	},
	isIE:function(){
		return !!this.ua.match(/msie/i);
	},
	isWeiXin:function(){
		return !!this.ua.match(/MicroMessenger/i);
	}
});