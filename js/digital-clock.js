"use strict";!function(e){function t(e){return e%2==0?!0:!1}function c(){var e="demonisblack.com";e="www."==e.substring(0,4)?e.substring(4,e.length):e;var t=a(e),c=!1;"demonisblack.com"!=t&&(c=!0),"localhost"==t&&(c=!1),c&&(window.location="http://codecanyon.net/item/digital-clock-html5-canvas/16345768")}function a(e){var t;return t=e.indexOf("://")>-1?e.split("/")[2]:e.split("/")[0],t=t.split(":")[0]}var o="digitalClock",i=[],n=!1,l={colour:"#8F44AD",blockWidth:10,blockHeight:50,blockSpace:0,colon:!0,numberSpace:20,centerX:"EMPTY",centerY:"EMPTY",animation:!0,colonAnimation:!0,speed:500,colonSpeed:300,inactiveAlpha:.2,time:"",twentyFourHour:!1,canvasW:0,canvasH:0,scalePercent:1,isLoaded:!1,blocks:[],browserSupport:!1};e.fn[o]=function(t,c,a){if("string"!=typeof t)return this.each(function(){var c=e(this),a=e.extend({},l,t);c.data("plugin_"+o,a),e.fn[o].destroy(c),i.push(c),e.fn[o].detectBrowser(c)});var n=e(this),s=n.data("plugin_"+o);void 0!=s&&e.fn[o].commanddigitalClock(this,t,c,a)},e.fn[o].detectBrowser=function(t){return t.each(function(){var t=e(this),a=t.data("plugin_"+o),i=document.createElement("canvas");i.getContext&&(a.browserSupport=!0),a.browserSupport&&(a.isLoaded||(a.isLoaded=!0,c(),e.fn[o].initPreload(t)))})},e.fn[o].initPreload=function(t){return t.each(function(){var t=e(this),c=t.data("plugin_"+o);c.stageW=c.canvasW=t.attr("width"),c.stageH=c.canvasH=t.attr("height"),e.fn[o].initDigitalClock(t),e.fn[o].buildDigitalClock(t)})},e.fn[o].initDigitalClock=function(t){return t.each(function(){var t=e(this),c=t.data("plugin_"+o);c.stage=new createjs.Stage(t.attr("id")),n||(n=!0,createjs.Ticker.setFPS(60),createjs.Ticker.addEventListener("tick",e.fn[o].tick))})},e.fn[o].buildDigitalClock=function(c){return c.each(function(){var c=e(this),a=c.data("plugin_"+o);a.itemCanvasContainer=new createjs.Container,isNaN(a.centerX)&&(a.centerX=a.canvasW/2),isNaN(a.centerY)&&(a.centerY=a.canvasH/2);var i=a.blockHeight+2*a.blockWidth+3*a.blockSpace+a.numberSpace/2,n=a.centerX-5*i/2,l=0,s=0;if(a.blocks=[],a.colon){l=a.blockWidth+a.numberSpace/2,n=a.centerX-(5*i/2+l),s=n+i+i/2+l/2;for(var r=0;4>r;r++)a.blocks["colon"+r]=new createjs.Shape,a.blocks["colon"+r].graphics.beginFill(a.colour).drawRect(-(a.blockWidth/2),-(a.blockWidth/2),a.blockWidth,a.blockWidth),a.blocks["colon"+r].seqX=s,a.blocks["colon"+r].seqY=a.centerY,e.fn[o].formColon(c,r),a.itemCanvasContainer.addChild(a.blocks["colon"+r]),t(r)||(s+=2*i+l)}for(var k=0;6>k;k++){for(var b=0;7>b;b++)a.blocks[k+"-"+b]=new createjs.Shape,a.blocks[k+"-"+b].graphics.beginFill(a.colour).drawRect(-(a.blockWidth/2),-(a.blockHeight/2),a.blockWidth,a.blockHeight),a.blocks[k+"-"+b].seqX=n,a.blocks[k+"-"+b].seqY=a.centerY,e.fn[o].formBlock(c,k,b),a.itemCanvasContainer.addChild(a.blocks[k+"-"+b]);a.blocks[k+"-0"].number=-1,n+=i,t(k)||(n+=l)}a.stage.addChild(a.itemCanvasContainer),e.fn[o].resizeCanvas(c)})},e.fn[o].resizeCanvas=function(t){return t.each(function(){var t=e(this),c=t.data("plugin_"+o);void 0!=c.itemCanvasContainer&&(c.itemCanvasContainer.scaleX=c.itemCanvasContainer.scaleY=c.scalePercent)})},e.fn[o].resizeHolder=function(t,c,a){return t.each(function(){var t=e(this),i=t.data("plugin_"+o);i.scalePercent=c/stageW,i.stageH*i.scalePercent>c&&(i.scalePercent=a/i.stageH);var n=document.getElementById(t.attr("id"));n.width=i.stageW*i.scalePercent,n.height=i.stageH*i.scalePercent,e.fn[o].resizeCanvas(t)})},e.fn[o].formColon=function(t,c){return t.each(function(){var t=e(this),a=t.data("plugin_"+o),i=a.blocks["colon"+c];i.x=i.seqX,i.y=i.seqY,0==c?i.y=i.seqY-a.blockHeight/2:1==c?i.y=i.seqY+a.blockHeight/2:2==c?i.y=i.seqY-a.blockHeight/2:3==c&&(i.y=i.seqY+a.blockHeight/2),i.oriX=i.x,i.oriY=i.y,i.oriRotate=i.rotation})},e.fn[o].formBlock=function(t,c,a){return t.each(function(){var t=e(this),i=t.data("plugin_"+o),n=i.blocks[c+"-"+a];n.x=n.seqX,n.y=n.seqY,0==a?(n.rotation=90,n.y=n.seqY-(i.blockHeight+i.blockWidth+i.blockSpace)):1==a?(n.x=n.seqX-(i.blockHeight/2+i.blockWidth/2+i.blockSpace),n.y=n.seqY-(i.blockHeight/2+i.blockWidth/2+i.blockSpace)):2==a?(n.x=n.seqX+(i.blockHeight/2+i.blockWidth/2+i.blockSpace),n.y=n.seqY-(i.blockHeight/2+i.blockWidth/2+i.blockSpace)):3==a?n.rotation=90:4==a?(n.x=n.seqX-(i.blockHeight/2+i.blockWidth/2+i.blockSpace),n.y=n.seqY+(i.blockHeight/2+i.blockWidth/2+i.blockSpace)):5==a?(n.x=n.seqX+(i.blockHeight/2+i.blockWidth/2+i.blockSpace),n.y=n.seqY+(i.blockHeight/2+i.blockWidth/2+i.blockSpace)):6==a&&(n.rotation=90,n.y=n.seqY+(i.blockHeight+i.blockWidth+i.blockSpace)),n.oriX=n.x,n.oriY=n.y,n.oriRotate=n.rotation})},e.fn[o].formNumber=function(t,c,a){return t.each(function(){var t=e(this),i=t.data("plugin_"+o);i.blocks[c+"-0"].active=!1,i.blocks[c+"-1"].active=!1,i.blocks[c+"-2"].active=!1,i.blocks[c+"-3"].active=!1,i.blocks[c+"-4"].active=!1,i.blocks[c+"-5"].active=!1,i.blocks[c+"-6"].active=!1,0==a?(i.blocks[c+"-0"].active=!0,i.blocks[c+"-1"].active=!0,i.blocks[c+"-2"].active=!0,i.blocks[c+"-4"].active=!0,i.blocks[c+"-5"].active=!0,i.blocks[c+"-6"].active=!0):1==a?(i.blocks[c+"-2"].active=!0,i.blocks[c+"-5"].active=!0):2==a?(i.blocks[c+"-0"].active=!0,i.blocks[c+"-2"].active=!0,i.blocks[c+"-3"].active=!0,i.blocks[c+"-4"].active=!0,i.blocks[c+"-6"].active=!0):3==a?(i.blocks[c+"-0"].active=!0,i.blocks[c+"-2"].active=!0,i.blocks[c+"-3"].active=!0,i.blocks[c+"-5"].active=!0,i.blocks[c+"-6"].active=!0):4==a?(i.blocks[c+"-1"].active=!0,i.blocks[c+"-2"].active=!0,i.blocks[c+"-3"].active=!0,i.blocks[c+"-5"].active=!0):5==a?(i.blocks[c+"-0"].active=!0,i.blocks[c+"-1"].active=!0,i.blocks[c+"-3"].active=!0,i.blocks[c+"-5"].active=!0,i.blocks[c+"-6"].active=!0):6==a?(i.blocks[c+"-0"].active=!0,i.blocks[c+"-1"].active=!0,i.blocks[c+"-3"].active=!0,i.blocks[c+"-4"].active=!0,i.blocks[c+"-5"].active=!0,i.blocks[c+"-6"].active=!0):7==a?(i.blocks[c+"-0"].active=!0,i.blocks[c+"-2"].active=!0,i.blocks[c+"-5"].active=!0):8==a?(i.blocks[c+"-0"].active=!0,i.blocks[c+"-1"].active=!0,i.blocks[c+"-2"].active=!0,i.blocks[c+"-3"].active=!0,i.blocks[c+"-4"].active=!0,i.blocks[c+"-5"].active=!0,i.blocks[c+"-6"].active=!0):9==a&&(i.blocks[c+"-0"].active=!0,i.blocks[c+"-1"].active=!0,i.blocks[c+"-2"].active=!0,i.blocks[c+"-3"].active=!0,i.blocks[c+"-5"].active=!0,i.blocks[c+"-6"].active=!0);for(var n=0;7>n;n++)i.animation?i.blocks[c+"-"+n].active?e.fn[o].animateBlock(t,i.blocks[c+"-"+n],!0):e.fn[o].animateBlock(t,i.blocks[c+"-"+n],!1):(i.blocks[c+"-"+n].alpha=i.inactiveAlpha,i.blocks[c+"-"+n].active&&(i.blocks[c+"-"+n].alpha=1))})},e.fn[o].updateTime=function(t){return t.each(function(){var t=e(this),c=t.data("plugin_"+o);c.time=new Date;var a=(c.time%1e3,c.time.getSeconds()),i=c.time.getMinutes(),n=c.time.getHours();c.twentyFourHour||(n>12?n-=12:0===n&&(n=12)),10>a&&(a="0"+a),10>i&&(i="0"+i),10>n&&(n="0"+n);for(var l=String(n)+String(i)+String(a),s=0;6>s;s++){var r=Number(l.substring(s,s+1));c.blocks[s+"-0"].number!=r&&(c.blocks[s+"-0"].number=r,e.fn[o].formNumber(t,s,r),5==s&&e.fn[o].animateColon(t))}})},e.fn[o].animateColon=function(t){return t.each(function(){for(var t=e(this),c=t.data("plugin_"+o),a=0;4>a;a++){var i=c.blocks["colon"+a];e(i).clearQueue().stop(!0,!1).animate({alpha:0},{duration:c.colonSpeed}).animate({alpha:1},{duration:c.colonSpeed})}})},e.fn[o].animateBlock=function(t,c,a){return t.each(function(){var t=e(this),i=t.data("plugin_"+o);if(e(c).clearQueue().stop(!0,!1),a)e(c).clearQueue().stop(!0,!1).animate({x:c.oriX,y:c.oriY,alpha:1,rotation:c.oriRotate},{duration:i.speed});else{var n=Math.random()*i.canvasW,l=Math.random()*i.canvasH,s=360*Math.random();e(c).clearQueue().stop(!0,!1).animate({x:n,y:l,alpha:i.inactiveAlpha,rotation:s},{duration:i.speed})}})},e.fn[o].tick=function(){for(var t=0;t<i.length;t++){var c=i[t],a=c.data("plugin_"+o);void 0!=a.blocks["0-0"]&&(e.fn[o].updateTime(c),a.stage.update())}},e.fn[o].commanddigitalClock=function(t,c,a,i){return t.each(function(){var t=e(this),n=t.data("plugin_"+o);switch(c){case"destroy":e.fn[o].destroy(t);break;default:void 0!=n[a]&&(n[a]=i)}})},e.fn[o].destroy=function(t){return t.each(function(){var t=e(this),c=t.data("plugin_"+o);if(c.isLoaded){c.isLoaded=!1,c.loader=null,c.stage.autoClear=!0,c.stage.removeAllChildren(),c.stage.update();var a=i.indexOf(t);i.splice(a,1),createjs.Ticker.removeEventListener("tick",c.stage),0==i.length&&(n=!1,createjs.Ticker.removeEventListener("tick",e.fn[o].tick))}})}}(jQuery);