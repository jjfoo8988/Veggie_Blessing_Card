const content = document.querySelector('.text-block');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

document.addEventListener('DOMContentLoaded', function(){
	

	
});

function gotoHome (){
    window.location.href = "../index.html";
}


 let dsender = localStorage.getItem('dsender');
 let dreceiver = localStorage.getItem('dreceiver');
 let dmeals = localStorage.getItem('dmeals');
 let dmsg = localStorage.getItem('dmsg');
 let dcards = localStorage.getItem('dcards');
// content.innerHTML = 'Sender Name' + dsender + "<br />" 
// + 'Receiver name ' + dreceiver + "<br />"
// + 'Message ' + dmsg + "<br />"
// + ' No of Meals ' + dmeals;

window.onload = function(){
	var img = new Image();
	var maxWidth = 200;
	var lineHeight = 25;
	var x = 280;
	var y = 400;
	var text = dmsg;
	ctx.font = '16pt Calibri';
	ctx.fillStyle = '#000';
	img.src = dcards;

	img.onload = function(){
    
		var updateHeight = wrapText(ctx, text, x, y, maxWidth, lineHeight, img);
		ctx.font = "bold 18pt KaiTi"
		ctx.fillText("", x,y-50);
		ctx.font = "bold 18pt KaiTi"
		ctx.fillText(dreceiver, x, 365);
	
		ctx.textAlign = "right"
		ctx.fillText(dsender, x + maxWidth, 635);
		console.log('The update Height is ' + updateHeight);

}


}




function wrapText(context, text, x, y, maxWidth, lineHeight, img) {
	context.drawImage(img,30,30,467,700);
	if(hasWhiteSpace(text) === true){
		//for English character
		var words = text.split(' ');
		var line = '';
		for(var n = 0; n < words.length; n++) {
			var testLine = line + words[n] + ' ';
			var metrics = context.measureText(testLine);
			var testWidth = metrics.width;
	
			if (testWidth > maxWidth && n > 0) {
			context.fillText(line, x, y);
			line = words[n] + ' ';
			y += lineHeight;
			}
			else {
			line = testLine;
			}
		}context.fillText(line,x,y);

	}
	else{
		//for Chinese character
		var words = text;
		var line = '';		
		for(var n = 0; n < words.length; n++) {
			var testLine = line + words[n];
			var metrics = context.measureText(testLine);
			var testWidth = metrics.width;
	
			if (testWidth > maxWidth && n > 0) {
			context.font = "16pt KaiTi" 
			context.fillText(line, x, y);
			line = words[n];
			y += lineHeight;
			}
			else {
			line = testLine;
			}
		}
		context.font = "16pt KaiTi" 
		context.fillText(line,x,y);

	} return y;
}

function hasWhiteSpace(s){
	return s.indexOf(' ') >=0;
}

function download_image(){
	
	image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
	var link = document.createElement('a');
	link.download = "Blessing card.png";
	link.href = image;
	link.click();
  }
  function fbs_click(img) {

    var u=img.getAttribute('src');

    t=TheImg.getAttribute('alt');

    window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');

    return false;

   }


const content = document.querySelector('.text-block');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

document.addEventListener('DOMContentLoaded', function(){
	

	
});

function gotoHome (){
    window.location.href = "../index.html";
}


 let dsender = localStorage.getItem('dsender');
 let dreceiver = localStorage.getItem('dreceiver');
 let dmeals = localStorage.getItem('dmeals');
 let dmsg = localStorage.getItem('dmsg');
 let dcards = localStorage.getItem('dcards');
// content.innerHTML = 'Sender Name' + dsender + "<br />" 
// + 'Receiver name ' + dreceiver + "<br />"
// + 'Message ' + dmsg + "<br />"
// + ' No of Meals ' + dmeals;

window.onload = function(){
	var img = new Image();
	var maxWidth = 200;
	var lineHeight = 25;
	var x = 280;
	var y = 400;
	var text = dmsg;
	ctx.font = '16pt Calibri';
	ctx.fillStyle = '#000';
	img.src = dcards;

	img.onload = function(){
    
		var updateHeight = wrapText(ctx, text, x, y, maxWidth, lineHeight, img);
		ctx.font = "bold 18pt KaiTi"
		ctx.fillText("", x,y-50);
		ctx.font = "bold 18pt KaiTi"
		ctx.fillText(dreceiver, x, 365);
	
		ctx.textAlign = "right"
		ctx.fillText(dsender, x + maxWidth, 635);
		console.log('The update Height is ' + updateHeight);

}


}




function wrapText(context, text, x, y, maxWidth, lineHeight, img) {
	context.drawImage(img,30,30,467,700);
	if(hasWhiteSpace(text) === true){
		//for English character
		var words = text.split(' ');
		var line = '';
		for(var n = 0; n < words.length; n++) {
			var testLine = line + words[n] + ' ';
			var metrics = context.measureText(testLine);
			var testWidth = metrics.width;
	
			if (testWidth > maxWidth && n > 0) {
			context.fillText(line, x, y);
			line = words[n] + ' ';
			y += lineHeight;
			}
			else {
			line = testLine;
			}
		}context.fillText(line,x,y);

	}
	else{
		//for Chinese character
		var words = text;
		var line = '';		
		for(var n = 0; n < words.length; n++) {
			var testLine = line + words[n];
			var metrics = context.measureText(testLine);
			var testWidth = metrics.width;
	
			if (testWidth > maxWidth && n > 0) {
			context.font = "16pt KaiTi" 
			context.fillText(line, x, y);
			line = words[n];
			y += lineHeight;
			}
			else {
			line = testLine;
			}
		}
		context.font = "16pt KaiTi" 
		context.fillText(line,x,y);

	} return y;
}

function hasWhiteSpace(s){
	return s.indexOf(' ') >=0;
}

function download_image(){
	
	image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
	var link = document.createElement('a');
	link.download = "Blessing card.png";
	link.href = image;
	link.click();
  }
  function fbs_click(img) {

    var u=img.getAttribute('src');

    t=TheImg.getAttribute('alt');

    window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(u)+'&t='+encodeURIComponent(t),'sharer','toolbar=0,status=0,width=626,height=436');

    return false;

   }

