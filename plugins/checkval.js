define(function(){
	return {
		checkVals:function(vals,patterns,msgs){
			var valIsArr = checkArray(vals),
				ptnIsArr = checkArray(patterns),
				msgIsArr = checkArray(msgs);
			if(checkEqual(valIsArr,ptnIsArr,msgIsArr) && checkEqual(vals.length,patterns.length,msgs.length)){
				var len = val.length,i=0;
				while(i < len){
					if(!checkVal(vals[i],patterns[i],msgs[i])){
						return false;
					}
					i++;
				}
				return true;
			}
			console.log('checkVal error');
		},
		checkVal:function(val,pattern,msg){
			if(!pattern.test(val)){
				alert(msg);
				return false;
			}
			return true;
		},
		checkMobile:function(mobile){
			return /^1[3578][0-9]{9}$/.test(mobile);
		},
		checkEmail:function(email){
			return /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(email);
		},
		checkCertificate:function(certificate){
			return /^(\d{15}$|^\d{18}$|^\d{17}(\d|X|x))$/.test(certificate);
		},
		checkCardNo:function(cardNo){
			return /^(\d{16}|\d{19})$/.test(cardNo);
		},
		checkCWord:function(word,start,end){
			var start = !isNaN(start) && start > 0?start:1;
			var end = !isNaN(end) && end > 0?end:'';
			var reg = new RegExp('^[\\u4e00-\\u9fa5]{'+start+','+end+'}$');
			//var regPunctuation = /[1-9<>《》！\*\(\^\)\$%~!@#\…&%￥—\+=、。，；‘’“”：'"\·`]/;
			var regRes = reg.test(word);
			//var pugRes = regPunctuation.test(word);
			return reg.test(word);
		},
		checkArray:function(arr){
			return Array.isArray(arr) || (arr instanceof Array);
		},
		checkEqual:function(){
			var len = arguments.length,
			argArr = Array.prototype.slice.call(arguments,0);
			if(len > 0){
				var val = argArr[0];
				return argArr.every(function(item,index,array){
					return val === item;
				});
			}
			return false;
		}
	}
});