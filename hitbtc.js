/*
https://hitbtc.com/xrp-to-usdt
get xrp to usdt price from hitbtc
*/
var min=0;
var max=0;
function titleModified() {
	var title=document.title;
	price=title.substr(1,5);
	if(price.trim()!="")
	{
		if(price<=min)
		{
			var msg = new SpeechSynthesisUtterance('buy time');
			window.speechSynthesis.speak(msg);
		}
		if(price>=max)
		{
			var msg = new SpeechSynthesisUtterance('sell time');
			window.speechSynthesis.speak(msg);
		}
		console.log(price);
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