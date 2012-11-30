// Garden Gnome Software - Skin
// Pano2VR 3.1.0/1777
// Filename: Vertis_simplex.ggsk
// Generated Mon Apr 16 09:20:15 2012

function pano2vrSkin(player,skinlayer,base) {
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=(skinlayer)?skinlayer:player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		return 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		this._black_bar=document.createElement('div');
		this._black_bar.ggId='Black Bar'
		this._black_bar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._black_bar.ggVisible=true;
		this._black_bar.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			h=this.parentNode.offsetHeight;
			this.style.top=(-39 + h) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -5px;';
		hs+='top:  -39px;';
		hs+='width: 1999px;';
		hs+='height: 79px;';
		hs+=cssPrefix + 'transform-origin: 50% 100%;';
		hs+='visibility: inherit;';
		hs+='border: 1px solid #ffffff;';
		hs+='background-color: #000000;';
		this._black_bar.setAttribute('style',hs);
		this.divSkin.appendChild(this._black_bar);
		this._control_buttons=document.createElement('div');
		this._control_buttons.ggId='Control Buttons'
		this._control_buttons.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._control_buttons.ggVisible=true;
		this._control_buttons.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			h=this.parentNode.offsetHeight;
			this.style.top=(-36 + h) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 12px;';
		hs+='top:  -36px;';
		hs+='width: 417px;';
		hs+='height: 35px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._control_buttons.setAttribute('style',hs);
		this._button_55=document.createElement('div');
		this._button_55.ggId='Button 55'
		this._button_55.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_55.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 328px;';
		hs+='top:  1px;';
		hs+='width: 35px;';
		hs+='height: 31px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_55.setAttribute('style',hs);
		this._button_55__img=document.createElement('img');
		this._button_55__img.setAttribute('src',basePath + 'images/button_55.png');
		this._button_55__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._button_55__img);
		this._button_55.appendChild(this._button_55__img);
		this._button_55.onclick=function () {
			me.player.toggleAutorotate();
		}
		this._control_buttons.appendChild(this._button_55);
		this._button_57=document.createElement('div');
		this._button_57.ggId='Button 57'
		this._button_57.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_57.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 278px;';
		hs+='top:  1px;';
		hs+='width: 35px;';
		hs+='height: 31px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_57.setAttribute('style',hs);
		this._button_57__img=document.createElement('img');
		this._button_57__img.setAttribute('src',basePath + 'images/button_57.png');
		this._button_57__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._button_57__img);
		this._button_57.appendChild(this._button_57__img);
		this._button_57.onmouseout=function () {
			me.elementMouseDown['button_57']=false;
		}
		this._button_57.onmousedown=function () {
			me.elementMouseDown['button_57']=true;
		}
		this._button_57.onmouseup=function () {
			me.elementMouseDown['button_57']=false;
		}
		this._button_57.ontouchend=function () {
			me.elementMouseDown['button_57']=false;
		}
		this._control_buttons.appendChild(this._button_57);
		this._button_56=document.createElement('div');
		this._button_56.ggId='Button 56'
		this._button_56.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_56.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 238px;';
		hs+='top:  0px;';
		hs+='width: 35px;';
		hs+='height: 31px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_56.setAttribute('style',hs);
		this._button_56__img=document.createElement('img');
		this._button_56__img.setAttribute('src',basePath + 'images/button_56.png');
		this._button_56__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._button_56__img);
		this._button_56.appendChild(this._button_56__img);
		this._button_56.onmouseout=function () {
			me.elementMouseDown['button_56']=false;
		}
		this._button_56.onmousedown=function () {
			me.elementMouseDown['button_56']=true;
		}
		this._button_56.onmouseup=function () {
			me.elementMouseDown['button_56']=false;
		}
		this._button_56.ontouchend=function () {
			me.elementMouseDown['button_56']=false;
		}
		this._control_buttons.appendChild(this._button_56);
		this._button_52=document.createElement('div');
		this._button_52.ggId='Button 52'
		this._button_52.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_52.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 188px;';
		hs+='top:  1px;';
		hs+='width: 35px;';
		hs+='height: 31px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_52.setAttribute('style',hs);
		this._button_52__img=document.createElement('img');
		this._button_52__img.setAttribute('src',basePath + 'images/button_52.png');
		this._button_52__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._button_52__img);
		this._button_52.appendChild(this._button_52__img);
		this._button_52.onmouseout=function () {
			me.elementMouseDown['button_52']=false;
		}
		this._button_52.onmousedown=function () {
			me.elementMouseDown['button_52']=true;
		}
		this._button_52.onmouseup=function () {
			me.elementMouseDown['button_52']=false;
		}
		this._button_52.ontouchend=function () {
			me.elementMouseDown['button_52']=false;
		}
		this._control_buttons.appendChild(this._button_52);
		this._button_53=document.createElement('div');
		this._button_53.ggId='Button 53'
		this._button_53.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_53.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 148px;';
		hs+='top:  1px;';
		hs+='width: 35px;';
		hs+='height: 31px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_53.setAttribute('style',hs);
		this._button_53__img=document.createElement('img');
		this._button_53__img.setAttribute('src',basePath + 'images/button_53.png');
		this._button_53__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._button_53__img);
		this._button_53.appendChild(this._button_53__img);
		this._button_53.onmouseout=function () {
			me.elementMouseDown['button_53']=false;
		}
		this._button_53.onmousedown=function () {
			me.elementMouseDown['button_53']=true;
		}
		this._button_53.onmouseup=function () {
			me.elementMouseDown['button_53']=false;
		}
		this._button_53.ontouchend=function () {
			me.elementMouseDown['button_53']=false;
		}
		this._control_buttons.appendChild(this._button_53);
		this._button_51=document.createElement('div');
		this._button_51.ggId='Button 51'
		this._button_51.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_51.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 108px;';
		hs+='top:  0px;';
		hs+='width: 35px;';
		hs+='height: 31px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_51.setAttribute('style',hs);
		this._button_51__img=document.createElement('img');
		this._button_51__img.setAttribute('src',basePath + 'images/button_51.png');
		this._button_51__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._button_51__img);
		this._button_51.appendChild(this._button_51__img);
		this._button_51.onmouseout=function () {
			me.elementMouseDown['button_51']=false;
		}
		this._button_51.onmousedown=function () {
			me.elementMouseDown['button_51']=true;
		}
		this._button_51.onmouseup=function () {
			me.elementMouseDown['button_51']=false;
		}
		this._button_51.ontouchend=function () {
			me.elementMouseDown['button_51']=false;
		}
		this._control_buttons.appendChild(this._button_51);
		this._button_50=document.createElement('div');
		this._button_50.ggId='Button 50'
		this._button_50.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_50.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 68px;';
		hs+='top:  1px;';
		hs+='width: 35px;';
		hs+='height: 31px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_50.setAttribute('style',hs);
		this._button_50__img=document.createElement('img');
		this._button_50__img.setAttribute('src',basePath + 'images/button_50.png');
		this._button_50__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._button_50__img);
		this._button_50.appendChild(this._button_50__img);
		this._button_50.onmouseout=function () {
			me.elementMouseDown['button_50']=false;
		}
		this._button_50.onmousedown=function () {
			me.elementMouseDown['button_50']=true;
		}
		this._button_50.onmouseup=function () {
			me.elementMouseDown['button_50']=false;
		}
		this._button_50.ontouchend=function () {
			me.elementMouseDown['button_50']=false;
		}
		this._control_buttons.appendChild(this._button_50);
		this._button_49=document.createElement('div');
		this._button_49.ggId='Button 49'
		this._button_49.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_49.ggVisible=true;
		this._button_49.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			h=this.parentNode.offsetHeight;
			this.style.top=(-34 + h) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 3px;';
		hs+='top:  -34px;';
		hs+='width: 35px;';
		hs+='height: 31px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._button_49.setAttribute('style',hs);
		this._button_49__img=document.createElement('img');
		this._button_49__img.setAttribute('src',basePath + 'images/button_49.png');
		this._button_49__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._button_49__img);
		this._button_49.appendChild(this._button_49__img);
		this._button_49.onclick=function () {
			flag=(me._screen.style.visibility=='hidden');
			me._screen.style[domTransition]='none';
			me._screen.style.visibility=flag?'inherit':'hidden';
			me._screen.ggVisible=flag;
		}
		this._control_buttons.appendChild(this._button_49);
		this.divSkin.appendChild(this._control_buttons);
		this._loader=document.createElement('div');
		this._loader.ggId='loader'
		this._loader.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loader.ggVisible=true;
		this._loader.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			w=this.parentNode.offsetWidth;
			this.style.left=(-113 + w/2) + 'px';
			h=this.parentNode.offsetHeight;
			this.style.top=(-105 + h/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -113px;';
		hs+='top:  -105px;';
		hs+='width: 224px;';
		hs+='height: 74px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loader.setAttribute('style',hs);
		this._loader_image=document.createElement('div');
		this._loader_image.ggId='loader_image'
		this._loader_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._loader_image.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 5px;';
		hs+='top:  6px;';
		hs+='width: 217px;';
		hs+='height: 62px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._loader_image.setAttribute('style',hs);
		this._loader_image__img=document.createElement('img');
		this._loader_image__img.setAttribute('src',basePath + 'images/loader_image.png');
		this._loader_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._loader_image__img);
		this._loader_image.appendChild(this._loader_image__img);
		this._loader.appendChild(this._loader_image);
		this._bar=document.createElement('div');
		this._bar.ggId='bar'
		this._bar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._bar.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 20px;';
		hs+='top:  22px;';
		hs+='width: 183px;';
		hs+='height: 12px;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+='visibility: inherit;';
		this._bar.setAttribute('style',hs);
		this._bar__img=document.createElement('img');
		this._bar__img.setAttribute('src',basePath + 'images/bar.png');
		this._bar__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._bar__img);
		this._bar.appendChild(this._bar__img);
		this._loader.appendChild(this._bar);
		this._tip=document.createElement('div');
		this._tip.ggId='tip'
		this._tip.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tip.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 6px;';
		hs+='top:  14px;';
		hs+='width: 43px;';
		hs+='height: 27px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tip.setAttribute('style',hs);
		this._tip__img=document.createElement('img');
		this._tip__img.setAttribute('src',basePath + 'images/tip.png');
		this._tip__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._tip__img);
		this._tip.appendChild(this._tip__img);
		this._loader.appendChild(this._tip);
		this._text_3=document.createElement('div');
		this._text_3.ggId='Text 3'
		this._text_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_3.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 21px;';
		hs+='top:  36px;';
		hs+='width: 182px;';
		hs+='height: 21px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #0f0f0f;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._text_3.setAttribute('style',hs);
		this._text_3.ggUpdateText=function() {
			this.innerHTML="<font face=\"Tahoma\"><b>Loading  "+(me.player.getPercentLoaded()*100.0).toFixed(0)+" % \/ "+(100.0).toFixed(1)+" kB<\/b><\/font>";
		}
		this._text_3.ggUpdateText();
		this._loader.appendChild(this._text_3);
		this.divSkin.appendChild(this._loader);
		this._screen=document.createElement('div');
		this._screen.ggId='screen'
		this._screen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screen.ggVisible=false;
		this._screen.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			w=this.parentNode.offsetWidth;
			this.style.left=(-120 + w/2) + 'px';
			h=this.parentNode.offsetHeight;
			this.style.top=(-132 + h/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: -120px;';
		hs+='top:  -132px;';
		hs+='width: 240px;';
		hs+='height: 140px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._screen.setAttribute('style',hs);
		this._screen.onclick=function () {
			me._screen.style[domTransition]='none';
			me._screen.style.visibility='hidden';
			me._screen.ggVisible=false;
		}
		this._userdatabg=document.createElement('div');
		this._userdatabg.ggId='userdatabg'
		this._userdatabg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabg.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 240px;';
		hs+='height: 140px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='background-color: #000000;';
		this._userdatabg.setAttribute('style',hs);
		this._screen.appendChild(this._userdatabg);
		this._userdatabrd=document.createElement('div');
		this._userdatabrd.ggId='userdatabrd'
		this._userdatabrd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._userdatabrd.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 238px;';
		hs+='height: 138px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		this._userdatabrd.setAttribute('style',hs);
		this._screen.appendChild(this._userdatabrd);
		this._aperture_light_360com=document.createElement('div');
		this._aperture_light_360com.ggId='Aperture Light 360.com'
		this._aperture_light_360com.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._aperture_light_360com.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  15px;';
		hs+='width: 217px;';
		hs+='height: 28px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._aperture_light_360com.setAttribute('style',hs);
		this._aperture_light_360com.innerHTML="<font size=\"4\" face=\"Papyrus\" ><b>Aperture Light 360.com<\/b><\/font>";
		this._screen.appendChild(this._aperture_light_360com);
		this._author=document.createElement('div');
		this._author.ggId='author'
		this._author.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._author.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  40px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._author.setAttribute('style',hs);
		this._author.ggUpdateText=function() {
			this.innerHTML=me.player.userdata.author;
		}
		this._author.ggUpdateText();
		this._screen.appendChild(this._author);
		this._phone_number=document.createElement('div');
		this._phone_number.ggId='Phone Number'
		this._phone_number.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._phone_number.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  60px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._phone_number.setAttribute('style',hs);
		this._phone_number.innerHTML="949.632.0358";
		this._screen.appendChild(this._phone_number);
		this._description=document.createElement('div');
		this._description.ggId='description'
		this._description.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._description.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  80px;';
		hs+='width: 218px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._description.setAttribute('style',hs);
		this._description.ggUpdateText=function() {
			this.innerHTML=me.player.userdata.description;
		}
		this._description.ggUpdateText();
		this._screen.appendChild(this._description);
		this._copyright=document.createElement('div');
		this._copyright.ggId='copyright'
		this._copyright.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._copyright.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  110px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;'
		hs+='overflow: hidden;';
		this._copyright.setAttribute('style',hs);
		this._copyright.ggUpdateText=function() {
			this.innerHTML="Copyright: &#169; "+me.player.userdata.copyright;
		}
		this._copyright.ggUpdateText();
		this._screen.appendChild(this._copyright);
		this.divSkin.appendChild(this._screen);
		this._image_37=document.createElement('div');
		this._image_37.ggId='Image 37'
		this._image_37.ggParameter={ rx:0,ry:0,a:0,sx:0.85,sy:0.85 };
		this._image_37.ggVisible=true;
		this._image_37.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			h=this.parentNode.offsetHeight;
			this.style.top=(-108 + h) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 2px;';
		hs+='top:  -108px;';
		hs+='width: 216px;';
		hs+='height: 65px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_37.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._image_37.setAttribute('style',hs);
		this._image_37__img=document.createElement('img');
		this._image_37__img.setAttribute('src',basePath + 'images/image_37.png');
		this._image_37__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._image_37__img);
		this._image_37.appendChild(this._image_37__img);
		this.divSkin.appendChild(this._image_37);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggLoaded=function() {
			if (me.player.transitionsDisabled) {
				me._loader.style[domTransition]='none';
			} else {
				me._loader.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._loader.style.opacity='0';
			me._loader.style.visibility='hidden';
			me.player.stopSound("_main");
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		if (me.elementMouseDown['button_57']) {
			me.player.changeFovLog(1,true);
		}
		if (me.elementMouseDown['button_56']) {
			me.player.changeFovLog(-1,true);
		}
		if (me.elementMouseDown['button_52']) {
			me.player.changeTilt(-1,true);
		}
		if (me.elementMouseDown['button_53']) {
			me.player.changeTilt(1,true);
		}
		if (me.elementMouseDown['button_51']) {
			me.player.changePan(-1,true);
		}
		if (me.elementMouseDown['button_50']) {
			me.player.changePan(1,true);
		}
		var hs='';
		if (me._bar.ggParameter) {
			hs+=parameterToTransform(me._bar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * me.player.getPercentLoaded() + 0) + ',1.0) ';
		me._bar.style[domTransform]=hs;
		var hs='';
		if (me._tip.ggParameter) {
			hs+=parameterToTransform(me._tip.ggParameter) + ' ';
		}
		hs+='translate(' + (168 * me.player.getPercentLoaded() + 0) + 'px,0px) ';
		me._tip.style[domTransform]=hs;
		this._text_3.ggUpdateText();
		this._author.ggUpdateText();
		this._description.ggUpdateText();
		this._copyright.ggUpdateText();
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.elementMouseDown=new Array();
		this.elementMouseOver=new Array();
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		if (hotspot.skinid=='Arrow') {
			this.__div=document.createElement('div');
			this.__div.ggId='Arrow'
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			hs ='position:absolute;';
			hs+='left: 628px;';
			hs+='top:  79px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._arrow0=document.createElement('div');
			this._arrow0.ggId='Arrow'
			this._arrow0.ggParameter={ rx:0,ry:0,a:0,sx:0.75,sy:0.75 };
			this._arrow0.ggVisible=true;
			hs ='position:absolute;';
			hs+='left: -33px;';
			hs+='top:  -23px;';
			hs+='width: 65px;';
			hs+='height: 109px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._arrow0.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._arrow0.setAttribute('style',hs);
			this._arrow0__img=document.createElement('img');
			this._arrow0__img.setAttribute('src',basePath + 'images/arrow0.png');
			this._arrow0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
			me.player.checkLoaded.push(this._arrow0__img);
			this._arrow0.appendChild(this._arrow0__img);
			this.__div.appendChild(this._arrow0);
			this._hotspot_text1=document.createElement('div');
			this._hotspot_text1.ggId='hotspot text'
			this._hotspot_text1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hotspot_text1.ggVisible=true;
			this._hotspot_text1.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.left=(-51 + (97-this.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -51px;';
			hs+='top:  64px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='border: 1px solid #000000;';
			hs+='color: #000000;';
			hs+='background-color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;'
			hs+='overflow: hidden;';
			this._hotspot_text1.setAttribute('style',hs);
			this._hotspot_text1.innerHTML=me.hotspot.title;
			this.__div.appendChild(this._hotspot_text1);
		} else
		if (hotspot.skinid=='Arrowright') {
			this.__div=document.createElement('div');
			this.__div.ggId='Arrowright'
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			hs ='position:absolute;';
			hs+='left: 634px;';
			hs+='top:  178px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._arrowright0=document.createElement('div');
			this._arrowright0.ggId='Arrowright'
			this._arrowright0.ggParameter={ rx:0,ry:0,a:45,sx:0.75,sy:0.75 };
			this._arrowright0.ggVisible=true;
			hs ='position:absolute;';
			hs+='left: -33px;';
			hs+='top:  -23px;';
			hs+='width: 65px;';
			hs+='height: 109px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._arrowright0.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._arrowright0.setAttribute('style',hs);
			this._arrowright0__img=document.createElement('img');
			this._arrowright0__img.setAttribute('src',basePath + 'images/arrowright0.png');
			this._arrowright0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
			me.player.checkLoaded.push(this._arrowright0__img);
			this._arrowright0.appendChild(this._arrowright0__img);
			this.__div.appendChild(this._arrowright0);
			this._hotspot_text0=document.createElement('div');
			this._hotspot_text0.ggId='hotspot text'
			this._hotspot_text0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hotspot_text0.ggVisible=true;
			this._hotspot_text0.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.left=(-51 + (97-this.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -51px;';
			hs+='top:  64px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='border: 1px solid #000000;';
			hs+='color: #000000;';
			hs+='background-color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;'
			hs+='overflow: hidden;';
			this._hotspot_text0.setAttribute('style',hs);
			this._hotspot_text0.innerHTML=me.hotspot.title;
			this.__div.appendChild(this._hotspot_text0);
		} else
		if (hotspot.skinid=='Arrowleft') {
			this.__div=document.createElement('div');
			this.__div.ggId='Arrowleft'
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			hs ='position:absolute;';
			hs+='left: 528px;';
			hs+='top:  179px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._arrowleft0=document.createElement('div');
			this._arrowleft0.ggId='Arrowleft'
			this._arrowleft0.ggParameter={ rx:0,ry:0,a:-45,sx:0.75,sy:0.75 };
			this._arrowleft0.ggVisible=true;
			hs ='position:absolute;';
			hs+='left: -33px;';
			hs+='top:  -23px;';
			hs+='width: 65px;';
			hs+='height: 109px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._arrowleft0.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._arrowleft0.setAttribute('style',hs);
			this._arrowleft0__img=document.createElement('img');
			this._arrowleft0__img.setAttribute('src',basePath + 'images/arrowleft0.png');
			this._arrowleft0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
			me.player.checkLoaded.push(this._arrowleft0__img);
			this._arrowleft0.appendChild(this._arrowleft0__img);
			this.__div.appendChild(this._arrowleft0);
			this._hotspot_text=document.createElement('div');
			this._hotspot_text.ggId='hotspot text'
			this._hotspot_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hotspot_text.ggVisible=true;
			this._hotspot_text.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.left=(-51 + (97-this.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -51px;';
			hs+='top:  64px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='border: 1px solid #000000;';
			hs+='color: #000000;';
			hs+='background-color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;'
			hs+='overflow: hidden;';
			this._hotspot_text.setAttribute('style',hs);
			this._hotspot_text.innerHTML=me.hotspot.title;
			this.__div.appendChild(this._hotspot_text);
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId='Info2'
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			hs ='position:absolute;';
			hs+='left: 191px;';
			hs+='top:  101px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='inherit';
				me._hstext.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='hidden';
				me._hstext.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._info20=document.createElement('div');
			this._info20.ggId='Info2'
			this._info20.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
			this._info20.ggVisible=true;
			hs ='position:absolute;';
			hs+='left: -32px;';
			hs+='top:  -35px;';
			hs+='width: 64px;';
			hs+='height: 72px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._info20.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._info20.setAttribute('style',hs);
			this._info20__img=document.createElement('img');
			this._info20__img.setAttribute('src',basePath + 'images/info20.png');
			this._info20__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
			me.player.checkLoaded.push(this._info20__img);
			this._info20.appendChild(this._info20__img);
			this.__div.appendChild(this._info20);
			this._hstext=document.createElement('div');
			this._hstext.ggId='hstext'
			this._hstext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext.ggVisible=false;
			this._hstext.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.left=(-54 + (100-this.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -54px;';
			hs+='top:  31px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			hs+='border: 1px solid #000000;';
			hs+='color: #000000;';
			hs+='background-color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;'
			hs+='overflow: hidden;';
			this._hstext.setAttribute('style',hs);
			this._hstext.innerHTML=me.hotspot.title;
			this.__div.appendChild(this._hstext);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};