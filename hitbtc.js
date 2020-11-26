/*
https://hitbtc.com/xrp-to-usdt
get xrp to usdt price from hitbtc
*/
var min=0.310;
var max=0.410;
var coin="XRP";
function titleModified() {
	var title=document.title;
	price=title.substr(1,5);
	if(price.trim()!="")
	{
		if(price<=min)
		{
			var sentence= coin + 'buy time';
			var msg = new SpeechSynthesisUtterance(sentence);
			window.speechSynthesis.speak(msg);
		}
		if(price>=max)
		{
			var sentence= coin + 'sell time';
			var msg = new SpeechSynthesisUtterance(sentence);
			window.speechSynthesis.speak(msg);
		}
		console.log(price);
		console.log("buy count :"+document.getElementsByClassName('trades__actionBuy').length);
		console.log("sell count :"+document.getElementsByClassName('trades__actionSell').length);
	}
}

window.onload = function() {
    var titleEl = document.getElementsByTagName("title")[0];
    var docEl = document.documentElement;

    if (docEl && docEl.addEventListener) {
        docEl.addEventListener("DOMSubtreeModified", function(evt) {
            var t = evt.target;
            if (t === titleEl || (t.parentNode && t.parentNode === titleEl)) {
                titleModified();
            }
        }, false);
    } else {
        document.onpropertychange = function() {
            if (window.event.propertyName == "title") {
                titleModified();
            }
        };
    }
};
