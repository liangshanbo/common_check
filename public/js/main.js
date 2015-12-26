require.config({
	shim:{
		zepto:{
			exports:'$'
		}
	},
	paths:{
		zepto:'./lib/zepto.min',
		loadMore:'./plugins/loadMore',
		storage:'./plugins/storage',
		checkval:'./plugins/checkval'
	}	
});

// require(['zepto'],function($){
// 	console.log('ok');
// });

require(['storage'],function(storage){
	storage.setItems(['a','b'],['awfdagdsh','dsadasd']);
});
require(['checkval'],function(checkVal){
	// console.log('answer:'+checkVal.checkEqual(1,2,4));
	// console.log('手机号：'+checkVal.isCWord('两',null,null));
	document.write('isAndroid:'+checkVal.isAndroid());
});
