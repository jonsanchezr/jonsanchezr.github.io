google.maps.__gjsload__('stats', function(_){var OY=function(a){_.D(this,a,2)},PY=function(a){_.D(this,a,6)},QY=function(a){var b=document;this.j=_.Xi;this.h=a+"/maps/gen_204";this.i=b},RY=function(a,b,c){var d=[];_.rl(a,function(e,f){d.push(f+b+e)});return d.join(c)},oba=function(a){var b={};_.rl(a,function(c,d){b[encodeURIComponent(d)]=encodeURIComponent(c).replace(/%7C/g,"|")});return RY(b,":",",")},SY=function(a,b,c,d){var e={};e.host=document.location&&document.location.host||window.location.host;e.v=a;e.r=Math.round(1/b);c&&(e.client=
c);d&&(e.key=d);return e},TY=function(a,b,c,d){var e=_.F(_.I,0,1);this.l=a;this.C=b;this.j=e;this.h=c;this.i=d;this.g=new _.Nn;this.o=_.Ya()},UY=function(a,b,c,d,e){this.o=a;this.C=b;this.l=c;this.i=d;this.j=e;this.h={};this.g=[]},VY=function(a,b,c){var d=_.$i;this.i=a;_.O.bind(this.i,"set_at",this,this.j);_.O.bind(this.i,"insert_at",this,this.j);this.o=b;this.C=d;this.l=c;this.h=0;this.g={};this.j()},XY=function(a,b,c,d,e){var f=_.F(_.I,23,500);var g=_.F(_.I,22,2);this.F=a;this.H=b;this.J=f;this.j=
g;this.C=c;this.l=d;this.o=e;this.h=new _.Nn;this.g=0;this.i=_.Ya();WY(this)},WY=function(a){window.setTimeout(function(){pba(a);WY(a)},Math.min(a.J*Math.pow(a.j,a.g),2147483647))},pba=function(a){var b=SY(a.H,a.C,a.l,a.o);b.t=a.g+"-"+(_.Ya()-a.i);a.h.forEach(function(c,d){c=c();0<c&&(b[d]=Number(c.toFixed(2))+(_.eo()?"-if":""))});a.F.g({ev:"api_snap"},b);++a.g},YY=function(){this.h=_.G(_.I,6);this.i=_.G(_.I,16);if(_.yh[35]){var a=_.dd(_.I);a=_.G(a,11)}else a=_.qt;this.g=new QY(a);_.Zi&&new VY(_.Zi,
(0,_.z)(this.g.g,this.g),!!this.h);a=_.G(new _.fd(_.I.m[3]),1);this.F=a.split(".")[1]||a;this.J={};this.C={};this.o={};this.H=_.F(_.I,0,1);_.Ni&&(this.Z=new XY(this.g,this.F,this.H,this.h,this.i));a=this.l=new PY;var b=_.G(new _.fd(_.I.m[3]),1);a.m[1]=b;this.h&&(this.l.m[2]=this.h);this.i&&(this.l.m[3]=this.i)};_.A(OY,_.C);var ZY;_.A(PY,_.C);QY.prototype.g=function(a,b){b=b||{};var c=_.Dm().toString(36);b.src="apiv3";b.token=this.j;b.ts=c.substr(c.length-6);a.cad=oba(b);a=RY(a,"=","&");a=this.h+"?target=api&"+a;this.i.createElement("img").src=a;(b=_.y.__gm_captureCSI)&&b(a)};TY.prototype.F=function(a,b){b=void 0!==b?b:1;this.g.isEmpty()&&window.setTimeout((0,_.z)(function(){var c=SY(this.C,this.j,this.h,this.i);c.t=_.Ya()-this.o;var d=this.g;_.On(d);for(var e={},f=0;f<d.g.length;f++){var g=d.g[f];e[g]=d.h[g]}_.ul(c,e);this.g.clear();this.l.g({ev:"api_maprft"},c)},this),500);b=this.g.get(a,0)+b;this.g.set(a,b)};UY.prototype.F=function(a){this.h[a]||(this.h[a]=!0,this.g.push(a),2>this.g.length&&_.Wx(this,this.H,500))};UY.prototype.H=function(){for(var a=SY(this.C,this.l,this.i,this.j),b=0,c;c=this.g[b];++b)a[c]="1";a.hybrid=+_.Sn();this.g.length=0;this.o.g({ev:"api_mapft"},a)};VY.prototype.j=function(){for(var a;a=this.i.removeAt(0);){var b=a.mm;a=a.timestamp-this.C;++this.h;this.g[b]||(this.g[b]=0);++this.g[b];if(20<=this.h&&!(this.h%5)){var c={};c.s=b;c.sr=this.g[b];c.tr=this.h;c.te=a;c.hc=this.l?"1":"0";this.o({ev:"api_services"},c)}}};XY.prototype.register=function(a,b){this.h.set(a,b)};YY.prototype.ga=function(a){a=_.ze(a);this.J[a]||(this.J[a]=new UY(this.g,this.F,this.H,this.h,this.i));return this.J[a]};YY.prototype.M=function(a){a=_.ze(a);this.C[a]||(this.C[a]=new TY(this.g,this.F,this.h,this.i));return this.C[a]};YY.prototype.j=function(a){if(this.Z){this.o[a]||(this.o[a]=new _.sy,this.Z.register(a,function(){return b.lb()}));var b=this.o[a];return b}};
YY.prototype.ja=function(a){if(_.Ni){var b=this.l;b=new b.constructor(_.Ql(b));var c=Math.floor(_.Ya()/1E3);b.m[0]=c;c=new OY(_.H(b,5));c.m[0]=Math.round(1/this.H);c.m[1]=a;a=this.g;c={ev:"api_map_style"};var d=new _.Qp;ZY||(ZY={D:"issssm",G:["is"]});b=d.g(b.m,ZY);c.pb=encodeURIComponent(b).replace(/%20/g,"+");b=RY(c,"=","&");a.i.createElement("img").src=a.h+"?target=api&"+b}};_.vf("stats",new YY);});
