var _0x161332=_0x2965;(function(_0xd19981,_0x40ffad){var _0x196b1b=_0x2965,_0x514c58=_0xd19981();while(!![]){try{var _0x4d231b=parseInt(_0x196b1b(0x12d))/0x1+parseInt(_0x196b1b(0x11a))/0x2*(-parseInt(_0x196b1b(0xf0))/0x3)+-parseInt(_0x196b1b(0x12e))/0x4+parseInt(_0x196b1b(0x109))/0x5*(-parseInt(_0x196b1b(0x11c))/0x6)+-parseInt(_0x196b1b(0x10a))/0x7+-parseInt(_0x196b1b(0x13a))/0x8*(-parseInt(_0x196b1b(0x135))/0x9)+parseInt(_0x196b1b(0x102))/0xa*(parseInt(_0x196b1b(0x124))/0xb);if(_0x4d231b===_0x40ffad)break;else _0x514c58['push'](_0x514c58['shift']());}catch(_0x30cdd2){_0x514c58['push'](_0x514c58['shift']());}}}(_0x1335,0x965ef));const generateLetter=()=>{var _0x44ca7d=_0x2965,_0x10d747='',_0x5ebfaf=_0x44ca7d(0xf5),_0x1bc940=_0x5ebfaf[_0x44ca7d(0xf6)];for(var _0x11cd20=0x0;_0x11cd20<=0x0;_0x11cd20++){_0x10d747+=_0x5ebfaf['charAt'](Math[_0x44ca7d(0xfa)](Math[_0x44ca7d(0x127)]()*_0x1bc940));}return _0x10d747;},generateRandomInt=()=>{var _0x26f722=_0x2965;return Math[_0x26f722(0xfa)](Math['random']()*Math[_0x26f722(0xfa)](0x16));};var tempMatrix=null,flag=![];class Tile{constructor(_0x59178b,_0x6fb35f){var _0x12fcae=_0x2965;this['x']=_0x59178b,this['y']=_0x6fb35f,this[_0x12fcae(0x104)]=0x32,this[_0x12fcae(0x107)]=[0x0,0x0,0x0],this[_0x12fcae(0x138)]='\x20',this[_0x12fcae(0xfe)]=![],this['isPartOfCorrectSequence']=![];}['isMouseInside'](_0x2d18b8,_0x38f5c1){return _0x2d18b8>this['x']&&_0x2d18b8<this['x']+this['tileSize']&&_0x38f5c1>this['y']&&_0x38f5c1<this['y']+this['tileSize'];}[_0x161332(0x136)](_0x986602){var _0x579be1=_0x161332;this[_0x579be1(0x118)]=_0x986602;}['getIsPartOf'](){var _0x1b4b22=_0x161332;return this[_0x1b4b22(0x118)];}[_0x161332(0xf4)](_0x1eed53){this['filled']=_0x1eed53;}['getFilled'](){var _0x231f48=_0x161332;return this[_0x231f48(0xfe)];}[_0x161332(0x10d)](){var _0x53ea06=_0x161332;return this[_0x53ea06(0x138)];}[_0x161332(0xfc)](_0x316d37){this['letterData']=_0x316d37;}[_0x161332(0x13f)](){var _0x3a65b2=_0x161332;rect(this['x'],this['y'],this[_0x3a65b2(0x104)],this[_0x3a65b2(0x104)]);if(this[_0x3a65b2(0xfe)]==!![])fill(0xff,0x0,0x0);else fill(0x0,0x0,0x0);text(this[_0x3a65b2(0x138)],this['x']+0x18,this['y']+0x18),fill(0xff);}}class Board{['placeHorizontal'](_0x1e0500,_0x7199a1,_0x26f4df){var _0x743882=_0x161332;for(var _0x2d5c2f=0x0;_0x2d5c2f<=_0x26f4df[_0x743882(0xf6)]-0x1;_0x2d5c2f++){this[_0x743882(0x117)][_0x1e0500][_0x7199a1++][_0x743882(0xfc)](_0x26f4df[_0x2d5c2f]);}}[_0x161332(0x113)](_0x2376fe,_0xbe24ca){return _0x2376fe-_0xbe24ca==0x0;}[_0x161332(0xf1)](_0x54317b,_0x22792b,_0x51b468){var _0x3bd962=_0x161332;if(this['canPlaceHorizontal'](_0x22792b,_0x51b468[_0x3bd962(0xf6)]))for(var _0x51621e=0x0;_0x51621e<=_0x51b468[_0x3bd962(0xf6)];_0x51621e++){if(this[_0x3bd962(0x117)][_0x54317b][_0x22792b++][_0x3bd962(0x10d)]()!='\x20'){return![];break;}}return!![];}[_0x161332(0x103)](_0x464bcd,_0x4c2529,_0x461c15){var _0x11426c=_0x161332;for(var _0x18fa97=0x0;_0x18fa97<=_0x461c15[_0x11426c(0xf6)]-0x1;_0x18fa97++){this['boardContainer'][_0x464bcd++][_0x4c2529][_0x11426c(0xfc)](_0x461c15[_0x18fa97]);}}['canPlaceVertical'](_0x1864da,_0x57dcb7){return _0x1864da-_0x57dcb7==0x0;}[_0x161332(0xfb)](_0x1ed23a,_0x3a8298,_0x19ad9c){var _0x2e11e3=_0x161332;if(this[_0x2e11e3(0x10c)](_0x1ed23a,_0x19ad9c[_0x2e11e3(0xf6)]))for(var _0x2e31c1=0x0;_0x2e31c1<=_0x19ad9c['length'];_0x2e31c1++){if(this['boardContainer'][_0x1ed23a++][_0x3a8298][_0x2e11e3(0x10d)]()!='\x20'){return![];break;}}return!![];}[_0x161332(0xf9)](_0x5bdfaa,_0x3d62be,_0x20aba7){var _0x4c740f=_0x161332;for(var _0x319ae8=0x0;_0x319ae8<=_0x20aba7[_0x4c740f(0xf6)]-0x1;_0x319ae8++){this[_0x4c740f(0x117)][_0x5bdfaa++][_0x3d62be++][_0x4c740f(0xfc)](_0x20aba7[_0x319ae8]);}}[_0x161332(0x12f)](_0x55f2f6,_0x41847e,_0x4ba508){return _0x55f2f6<=_0x4ba508&&_0x41847e<=_0x4ba508;}[_0x161332(0xff)](_0x257129,_0x431643,_0x424505){var _0x49a3bc=_0x161332;if(this['canPlaceDiagonal'](_0x257129,_0x431643,_0x424505['length']))for(var _0x503839=0x0;_0x503839<=_0x424505[_0x49a3bc(0xf6)];_0x503839++){if(this[_0x49a3bc(0x117)][_0x257129++][_0x431643++][_0x49a3bc(0x10d)]()!='\x20'){return![];break;}}return!![];}[_0x161332(0x11b)](_0x48ca12){var _0x351ff4=_0x161332;let _0x58e922=generateRandomInt(),_0x5e0f25=generateRandomInt();if(!this[_0x351ff4(0x113)](_0x5e0f25,_0x48ca12[_0x351ff4(0xf6)])){if(!this[_0x351ff4(0x10c)](_0x58e922,_0x48ca12['length'])){if(!this[_0x351ff4(0x12f)](_0x58e922,_0x5e0f25,_0x48ca12['length']))return![];else{if(this[_0x351ff4(0xff)](_0x58e922,_0x5e0f25,_0x48ca12))return this[_0x351ff4(0xf9)](_0x58e922,_0x5e0f25,_0x48ca12),!![];}}else{if(this[_0x351ff4(0xfb)](_0x58e922,_0x5e0f25,_0x48ca12))return this[_0x351ff4(0x103)](_0x58e922,_0x5e0f25,_0x48ca12),!![];}}else{if(this[_0x351ff4(0xf1)](_0x58e922,_0x5e0f25,_0x48ca12))return this[_0x351ff4(0x101)](_0x58e922,_0x5e0f25,_0x48ca12),!![];}}constructor(){var _0x5a4309=_0x161332;this['boardContainer']=[],this['wordList']=[],this['wordLimit']=0xb,this['genWordList']=['dilbar',_0x5a4309(0x12b),_0x5a4309(0x126),'jalebibai',_0x5a4309(0x11f),_0x5a4309(0x13e),_0x5a4309(0xfd),_0x5a4309(0x12c),_0x5a4309(0x112),'tie',_0x5a4309(0x10f),_0x5a4309(0xf2),'nutella',_0x5a4309(0x137),_0x5a4309(0x11d),'sakisaki',_0x5a4309(0x128),_0x5a4309(0x119)],this[_0x5a4309(0x133)]={'dilbar':_0x5a4309(0x139),'garmi':'Record\x20a\x20dance\x20video\x20on\x20this\x20song\x20in\x20the\x20fountain','kajrare':_0x5a4309(0x121),'jalebibai':'Record\x20a\x20dance\x20video\x20of\x20boys\x20dancing\x20on\x20this\x20song','ghagra':_0x5a4309(0x143),'peach':_0x5a4309(0x142),'banana':_0x5a4309(0x110),'lipstick':'Bring\x20a\x20lipstick\x20and\x20click\x20a\x20photo\x20of\x20a\x20boy\x20applying\x20the\x20same','belt':'Click\x20a\x20photo\x20with\x20a\x20belt','tie':'Click\x20a\x20photo\x20of\x20hands\x20tied\x20with\x20a\x20tie\x20;)','nutella':_0x5a4309(0x10b),'fevicolse':_0x5a4309(0x122),'babydoll':_0x5a4309(0xef),'beedi':_0x5a4309(0x139),'sakisaki':_0x5a4309(0x140),'oohlala':_0x5a4309(0xef),'wine':'Click\x20a\x20photo\x20having\x20an\x20alcohol\x20bottle,\x20a\x20girl,\x20a\x20boy\x20and\x20glasses\x20clinking','roses':_0x5a4309(0x13b)};for(var _0x48ecb7=0x0;_0x48ecb7<=0x14;_0x48ecb7++){this['boardContainer'][_0x48ecb7]=[];}let _0x1ff4ed=0x0,_0x5f13fe=0x0;for(var _0x48ecb7=0x0;_0x48ecb7<=0x14;_0x48ecb7++){for(var _0x1ff720=0x0;_0x1ff720<=0x14;_0x1ff720++){this['boardContainer'][_0x48ecb7][_0x1ff720]=new Tile(_0x1ff4ed,_0x5f13fe),_0x1ff4ed+=0x37;}_0x1ff4ed=0x0,_0x5f13fe+=0x37;}let _0x4dd58e=0x0,_0x72d1fa=![];}[_0x161332(0x131)](){var _0x3b1e9f=_0x161332;for(var _0x4a927d=0x0;_0x4a927d<=0x14;_0x4a927d++){for(var _0x4037d1=0x0;_0x4037d1<=0x14;_0x4037d1++){this[_0x3b1e9f(0x117)][_0x4a927d][_0x4037d1][_0x3b1e9f(0x10e)]()&&this[_0x3b1e9f(0x117)][_0x4a927d][_0x4037d1][_0x3b1e9f(0x123)]()==![]&&this[_0x3b1e9f(0x117)][_0x4a927d][_0x4037d1][_0x3b1e9f(0xf4)](![]);}}}[_0x161332(0xf8)](){var _0xbfec96=_0x161332;console['log'](tempMatrix[_0xbfec96(0xf6)]);for(var _0x4bdaf0=0x0;_0x4bdaf0<0x1c0;_0x4bdaf0++){this[_0xbfec96(0x117)][tempMatrix[_0x4bdaf0][_0xbfec96(0x13d)]][tempMatrix[_0x4bdaf0]['col']][_0xbfec96(0xfc)](tempMatrix[_0x4bdaf0][_0xbfec96(0x11e)]);}}['mouseReleased'](){var _0x5f5263=_0x161332;let _0x5f24f0='';this[_0x5f5263(0x111)][_0x5f5263(0x129)](_0x37ad3c=>{var _0x41557f=_0x5f5263;_0x5f24f0+=_0x37ad3c[_0x41557f(0x10d)]();}),this[_0x5f5263(0x108)][_0x5f5263(0x13c)](_0x5f24f0)&&(this[_0x5f5263(0x111)][_0x5f5263(0x129)](_0x5ead1a=>{var _0x5599a2=_0x5f5263;_0x5ead1a[_0x5599a2(0x136)](!![]);}),alert(this['taskList'][_0x5f24f0])),this[_0x5f5263(0x111)]=[],this[_0x5f5263(0x131)]();}[_0x161332(0x130)](_0x36cc60,_0x5b8a9b,_0x105c63){var _0x2ff134=_0x161332;console[_0x2ff134(0x115)](_0x2ff134(0x105));if(this[_0x2ff134(0x111)][_0x2ff134(0xf6)]==0xb)_0x105c63=![];else{if(_0x105c63==!![])for(var _0x487dea=0x0;_0x487dea<=0x14;_0x487dea++){for(var _0x3a6ede=0x0;_0x3a6ede<=0x14;_0x3a6ede++){let _0x9e9f32=this[_0x2ff134(0x117)][_0x487dea][_0x3a6ede];_0x9e9f32[_0x2ff134(0x134)](_0x36cc60,_0x5b8a9b)&&_0x9e9f32['getFilled']()==![]&&(_0x9e9f32[_0x2ff134(0xf4)](!![]),this[_0x2ff134(0x111)]['push'](_0x9e9f32));}}}}[_0x161332(0x13f)](){var _0x32d065=_0x161332;flag=!![];for(var _0x21b049=0x0;_0x21b049<=0x14;_0x21b049++){for(var _0x1a605c=0x0;_0x1a605c<=0x14;_0x1a605c++){this['boardContainer'][_0x21b049][_0x1a605c][_0x32d065(0x13f)]();}}}}async function reqListener(){var _0x4b675a=_0x161332;tempMatrix=await JSON[_0x4b675a(0x106)](this[_0x4b675a(0x114)]),console[_0x4b675a(0x115)](tempMatrix);}const req=new XMLHttpRequest();req[_0x161332(0xf7)]('load',reqListener),req[_0x161332(0x12a)](_0x161332(0x141),'https://sw2022-backend.herokuapp.com/'),req[_0x161332(0x116)]();function _0x1335(){var _0xb9765=['setIsPartOf','wine','letterData','Record\x20a\x20dance\x20video\x20on\x20this\x20song','129592CYbltF','Record\x20a\x20video\x20where\x20a\x20girl\x20proposes\x20to\x20a\x20boy\x20using\x20rose\x20as\x20prop','includes','row','peach','render','Record\x20a\x20dance\x20video\x20on\x20this\x20song\x20(only\x20boys\x20and\x20red\x20tshirt\x20mandatory)','GET','Click\x20a\x20photo\x20with\x20a\x20peach','Record\x20a\x20dance\x20video\x20on\x20this\x20song\x20and\x20the\x20dancer\x20must\x20wear\x20a\x20ghagra','Record\x20a\x20dance\x20video\x20on\x20this\x20song\x20but\x20sing\x20the\x20song\x20and\x20don\x27t\x20play\x20it','440853baookB','isAllClearHorizontal','babydoll','then','setFilled','abcdefghijklmaopqrstuvwxyz','length','addEventListener','fillGrid','placeDiagonal','floor','isAllClearVertical','setData','banana','filled','isAllClearDiagonal','Mouse\x20Dragged','placeHorizontal','4861390OZUuZv','placeVertical','tileSize','Updated','parse','letterColor','genWordList','5APbCcJ','3894401ecXzVX','Make\x20a\x20video\x20of\x20finger-licking\x20nutella','canPlaceVertical','getData','getFilled','fevicolse','Record\x20a\x20video\x20eating\x20banana\x20in\x20a\x20sensual\x20way','wordList','belt','canPlaceHorizontal','responseText','log','send','boardContainer','isPartOfCorrectSequence','beedi','14LIrWPc','generatePlace','7045746stniJW','roses','val','ghagra','mouseReleased','Record\x20a\x20video\x20of\x20a\x20boy\x20applying\x20kajal\x20but\x20not\x20on\x20the\x20eye','Record\x20a\x20dance\x20video\x20on\x20this\x20song\x20with\x20fevicol\x20bottles\x20in\x20dancers\x27\x20hands','getIsPartOf','77QBewtI','Mouse\x20Released','kajrare','random','oohlala','forEach','open','garmi','lipstick','632008zXaTVH','3481432FeGvSJ','canPlaceDiagonal','update','clearSelection','Mouse\x20Pressed','taskList','isMouseInside','117aEKSgY'];_0x1335=function(){return _0xb9765;};return _0x1335();}function delay(_0x30e1b1){return new Promise(_0x239ddc=>setTimeout(_0x239ddc,_0x30e1b1));}let board,mouseDrag=![];delay(0xbb8)[_0x161332(0xf3)](()=>{var _0x1089c8=_0x161332;board=new Board(),board[_0x1089c8(0x13f)](),board[_0x1089c8(0xf8)]();});function setup(){createCanvas(0x4b0,0x578),textSize(0x14),textAlign(CENTER,CENTER,CENTER,CENTER),cursor(CROSS);}function _0x2965(_0x4d98a9,_0x3058e1){var _0x1335ed=_0x1335();return _0x2965=function(_0x2965a0,_0x803a90){_0x2965a0=_0x2965a0-0xef;var _0x45f8a4=_0x1335ed[_0x2965a0];return _0x45f8a4;},_0x2965(_0x4d98a9,_0x3058e1);}function mousePressed(){var _0x1cd18b=_0x161332;console[_0x1cd18b(0x115)](_0x1cd18b(0x132)),mouseDrag=!![];}function mouseReleased(){var _0x804bc4=_0x161332;console[_0x804bc4(0x115)](_0x804bc4(0x125)),mouseDrag=![],board[_0x804bc4(0x120)]();}function mouseDragged(){var _0x538261=_0x161332;console[_0x538261(0x115)](_0x538261(0x100));if(mouseDrag)board[_0x538261(0x130)](mouseX,mouseY,mouseDrag);}function draw(){var _0x563cd5=_0x161332;flag==!![]&&board[_0x563cd5(0x13f)]();}