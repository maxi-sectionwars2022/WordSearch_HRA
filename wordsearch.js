var _0xfd74ce=_0x6df0;(function(_0xf812e1,_0x3e8b48){var _0x113809=_0x6df0,_0xcfd30a=_0xf812e1();while(!![]){try{var _0x32fafd=-parseInt(_0x113809(0x1e4))/0x1+parseInt(_0x113809(0x22f))/0x2+-parseInt(_0x113809(0x200))/0x3+-parseInt(_0x113809(0x22c))/0x4*(-parseInt(_0x113809(0x1f0))/0x5)+parseInt(_0x113809(0x239))/0x6+parseInt(_0x113809(0x217))/0x7*(parseInt(_0x113809(0x1eb))/0x8)+-parseInt(_0x113809(0x22a))/0x9;if(_0x32fafd===_0x3e8b48)break;else _0xcfd30a['push'](_0xcfd30a['shift']());}catch(_0x479cbc){_0xcfd30a['push'](_0xcfd30a['shift']());}}}(_0x2541,0x50a5a));const generateLetter=()=>{var _0x1c4100=_0x6df0,_0x1597ad='',_0x29e3c3=_0x1c4100(0x211),_0x5e865b=_0x29e3c3['length'];for(var _0x551af0=0x0;_0x551af0<=0x0;_0x551af0++){_0x1597ad+=_0x29e3c3[_0x1c4100(0x22e)](Math[_0x1c4100(0x210)](Math[_0x1c4100(0x1ef)]()*_0x5e865b));}return _0x1597ad;},generateRandomInt=()=>{var _0x2cd373=_0x6df0;return Math[_0x2cd373(0x210)](Math[_0x2cd373(0x1ef)]()*Math['floor'](0x16));};var tempMatrix=null,flag=![];class Tile{constructor(_0x5a37c1,_0x424990){var _0x30d372=_0x6df0;this['x']=_0x5a37c1,this['y']=_0x424990,this[_0x30d372(0x220)]=0x32,this[_0x30d372(0x223)]=[0x0,0x0,0x0],this['letterData']='\x20',this['filled']=![],this[_0x30d372(0x22d)]=![];}[_0xfd74ce(0x20c)](_0x144c6e,_0x3eaeb8){var _0x459daa=_0xfd74ce;return _0x144c6e>this['x']&&_0x144c6e<this['x']+this['tileSize']&&_0x3eaeb8>this['y']&&_0x3eaeb8<this['y']+this[_0x459daa(0x220)];}[_0xfd74ce(0x212)](_0x30df1d){var _0x4c1e7b=_0xfd74ce;this[_0x4c1e7b(0x22d)]=_0x30df1d;}[_0xfd74ce(0x1ed)](){var _0x190d91=_0xfd74ce;return this[_0x190d91(0x22d)];}[_0xfd74ce(0x221)](_0x5c547b){this['filled']=_0x5c547b;}[_0xfd74ce(0x222)](){var _0x4dfb34=_0xfd74ce;return this[_0x4dfb34(0x1fe)];}[_0xfd74ce(0x236)](){var _0x512f55=_0xfd74ce;return this[_0x512f55(0x1f6)];}['setData'](_0x213922){var _0x22bf64=_0xfd74ce;this[_0x22bf64(0x1f6)]=_0x213922;}[_0xfd74ce(0x237)](){var _0x4a16ab=_0xfd74ce;rect(this['x'],this['y'],this[_0x4a16ab(0x220)],this[_0x4a16ab(0x220)]);if(this[_0x4a16ab(0x1fe)]==!![])fill(0xff,0x0,0x0);else fill(0x0,0x0,0x0);text(this[_0x4a16ab(0x1f6)],this['x']+0x18,this['y']+0x18),fill(0xff);}}function _0x6df0(_0x573ad1,_0x3941e4){var _0x2541d4=_0x2541();return _0x6df0=function(_0x6df0b5,_0x42490f){_0x6df0b5=_0x6df0b5-0x1e2;var _0x2b0dc6=_0x2541d4[_0x6df0b5];return _0x2b0dc6;},_0x6df0(_0x573ad1,_0x3941e4);}class Board{[_0xfd74ce(0x20d)](_0x1eacff,_0x27f624,_0x207e4c){var _0x2537b2=_0xfd74ce;for(var _0x550bd7=0x0;_0x550bd7<=_0x207e4c[_0x2537b2(0x230)]-0x1;_0x550bd7++){this[_0x2537b2(0x225)][_0x1eacff][_0x27f624++][_0x2537b2(0x218)](_0x207e4c[_0x550bd7]);}}[_0xfd74ce(0x1f7)](_0x1573a3,_0x3d9389){return _0x1573a3-_0x3d9389==0x0;}[_0xfd74ce(0x231)](_0xb1d022,_0x1625ea,_0x5146d8){var _0x45e5a6=_0xfd74ce;if(this['canPlaceHorizontal'](_0x1625ea,_0x5146d8[_0x45e5a6(0x230)]))for(var _0x8c2c93=0x0;_0x8c2c93<=_0x5146d8['length'];_0x8c2c93++){if(this[_0x45e5a6(0x225)][_0xb1d022][_0x1625ea++]['getData']()!='\x20'){return![];break;}}return!![];}[_0xfd74ce(0x203)](_0x1006c5,_0xc6c6bb,_0x186fc6){var _0x41548e=_0xfd74ce;for(var _0x116f66=0x0;_0x116f66<=_0x186fc6['length']-0x1;_0x116f66++){this[_0x41548e(0x225)][_0x1006c5++][_0xc6c6bb][_0x41548e(0x218)](_0x186fc6[_0x116f66]);}}['canPlaceVertical'](_0x103461,_0x4638f3){return _0x103461-_0x4638f3==0x0;}[_0xfd74ce(0x224)](_0x51ea89,_0x5f0f29,_0x29c89c){var _0x1c6b18=_0xfd74ce;if(this['canPlaceVertical'](_0x51ea89,_0x29c89c['length']))for(var _0x120f9a=0x0;_0x120f9a<=_0x29c89c[_0x1c6b18(0x230)];_0x120f9a++){if(this[_0x1c6b18(0x225)][_0x51ea89++][_0x5f0f29][_0x1c6b18(0x236)]()!='\x20'){return![];break;}}return!![];}['placeDiagonal'](_0xc1b156,_0x1f8c63,_0x4e2497){var _0xa28680=_0xfd74ce;for(var _0x6025e8=0x0;_0x6025e8<=_0x4e2497[_0xa28680(0x230)]-0x1;_0x6025e8++){this[_0xa28680(0x225)][_0xc1b156++][_0x1f8c63++][_0xa28680(0x218)](_0x4e2497[_0x6025e8]);}}[_0xfd74ce(0x1f8)](_0x8cec70,_0x391575,_0xc66ccb){return _0x8cec70<=_0xc66ccb&&_0x391575<=_0xc66ccb;}[_0xfd74ce(0x204)](_0x3d332a,_0x37e7c3,_0x28b0cc){var _0x16ca91=_0xfd74ce;if(this[_0x16ca91(0x1f8)](_0x3d332a,_0x37e7c3,_0x28b0cc[_0x16ca91(0x230)]))for(var _0x26ec95=0x0;_0x26ec95<=_0x28b0cc['length'];_0x26ec95++){if(this[_0x16ca91(0x225)][_0x3d332a++][_0x37e7c3++]['getData']()!='\x20'){return![];break;}}return!![];}['generatePlace'](_0xaedf08){var _0xa73749=_0xfd74ce;let _0x5e1e38=generateRandomInt(),_0x2e8759=generateRandomInt();if(!this[_0xa73749(0x1f7)](_0x2e8759,_0xaedf08[_0xa73749(0x230)])){if(!this[_0xa73749(0x20f)](_0x5e1e38,_0xaedf08[_0xa73749(0x230)])){if(!this['canPlaceDiagonal'](_0x5e1e38,_0x2e8759,_0xaedf08['length']))return![];else{if(this['isAllClearDiagonal'](_0x5e1e38,_0x2e8759,_0xaedf08))return this[_0xa73749(0x1f5)](_0x5e1e38,_0x2e8759,_0xaedf08),!![];}}else{if(this['isAllClearVertical'](_0x5e1e38,_0x2e8759,_0xaedf08))return this['placeVertical'](_0x5e1e38,_0x2e8759,_0xaedf08),!![];}}else{if(this['isAllClearHorizontal'](_0x5e1e38,_0x2e8759,_0xaedf08))return this[_0xa73749(0x20d)](_0x5e1e38,_0x2e8759,_0xaedf08),!![];}}constructor(){var _0x427aac=_0xfd74ce;this[_0x427aac(0x225)]=[],this['wordList']=[],this[_0x427aac(0x1f9)]=0xb,this[_0x427aac(0x233)]=[_0x427aac(0x213),'garmi',_0x427aac(0x1ee),'jalebibai',_0x427aac(0x227),'peach',_0x427aac(0x1fa),'lipstick',_0x427aac(0x1ff),'tie',_0x427aac(0x234),'babydoll',_0x427aac(0x1fb),_0x427aac(0x207),_0x427aac(0x1f4),_0x427aac(0x214),_0x427aac(0x229),_0x427aac(0x201)],this[_0x427aac(0x1e6)]={'dilbar':_0x427aac(0x1e9),'garmi':_0x427aac(0x226),'kajrare':_0x427aac(0x20a),'jalebibai':'Record\x20a\x20dance\x20video\x20of\x20boys\x20dancing\x20on\x20this\x20song','ghagra':_0x427aac(0x232),'peach':'Click\x20a\x20photo\x20with\x20a\x20peach','banana':_0x427aac(0x21f),'lipstick':_0x427aac(0x1f1),'belt':_0x427aac(0x1e8),'tie':_0x427aac(0x21c),'nutella':_0x427aac(0x1ec),'fevicolse':_0x427aac(0x219),'babydoll':_0x427aac(0x209),'beedi':'Record\x20a\x20dance\x20video\x20on\x20this\x20song','sakisaki':_0x427aac(0x20e),'oohlala':_0x427aac(0x209),'wine':_0x427aac(0x21e),'roses':_0x427aac(0x202)};for(var _0x3aefc6=0x0;_0x3aefc6<=0x14;_0x3aefc6++){this[_0x427aac(0x225)][_0x3aefc6]=[];}let _0x52343b=0x0,_0x102362=0x0;for(var _0x3aefc6=0x0;_0x3aefc6<=0x14;_0x3aefc6++){for(var _0x449916=0x0;_0x449916<=0x14;_0x449916++){this[_0x427aac(0x225)][_0x3aefc6][_0x449916]=new Tile(_0x52343b,_0x102362),_0x52343b+=0x37;}_0x52343b=0x0,_0x102362+=0x37;}let _0x3320a0=0x0,_0x3acdb9=![];}['clearSelection'](){var _0x51683d=_0xfd74ce;for(var _0x39c5b6=0x0;_0x39c5b6<=0x14;_0x39c5b6++){for(var _0x4e9070=0x0;_0x4e9070<=0x14;_0x4e9070++){this[_0x51683d(0x225)][_0x39c5b6][_0x4e9070][_0x51683d(0x222)]()&&this['boardContainer'][_0x39c5b6][_0x4e9070][_0x51683d(0x1ed)]()==![]&&this[_0x51683d(0x225)][_0x39c5b6][_0x4e9070][_0x51683d(0x221)](![]);}}}[_0xfd74ce(0x1f2)](){var _0xb69c9c=_0xfd74ce;console[_0xb69c9c(0x216)](tempMatrix[_0xb69c9c(0x230)]);for(var _0x3fb6ed=0x0;_0x3fb6ed<0x1c0;_0x3fb6ed++){this['boardContainer'][tempMatrix[_0x3fb6ed]['row']][tempMatrix[_0x3fb6ed][_0xb69c9c(0x1e2)]][_0xb69c9c(0x218)](tempMatrix[_0x3fb6ed]['val']);}}[_0xfd74ce(0x1ea)](){var _0x2d03d0=_0xfd74ce;let _0x246031='';this[_0x2d03d0(0x215)]['forEach'](_0x41a120=>{_0x246031+=_0x41a120['getData']();}),this[_0x2d03d0(0x233)][_0x2d03d0(0x1e7)](_0x246031)&&(this[_0x2d03d0(0x215)][_0x2d03d0(0x1e5)](_0x2d1c6d=>{var _0x2404c2=_0x2d03d0;_0x2d1c6d[_0x2404c2(0x212)](!![]);}),alert(this[_0x2d03d0(0x1e6)][_0x246031])),this[_0x2d03d0(0x215)]=[],this[_0x2d03d0(0x1e3)]();}[_0xfd74ce(0x208)](_0x3be94c,_0x10e29e,_0x26b4e6){var _0x24645b=_0xfd74ce;console[_0x24645b(0x216)](_0x24645b(0x238));if(this[_0x24645b(0x215)]['length']==0xb)_0x26b4e6=![];else{if(_0x26b4e6==!![])for(var _0x3eaf45=0x0;_0x3eaf45<=0x14;_0x3eaf45++){for(var _0x1d954c=0x0;_0x1d954c<=0x14;_0x1d954c++){let _0xe1bd58=this['boardContainer'][_0x3eaf45][_0x1d954c];_0xe1bd58[_0x24645b(0x20c)](_0x3be94c,_0x10e29e)&&_0xe1bd58[_0x24645b(0x222)]()==![]&&(_0xe1bd58[_0x24645b(0x221)](!![]),this[_0x24645b(0x215)][_0x24645b(0x235)](_0xe1bd58));}}}}['render'](){var _0x2fc856=_0xfd74ce;flag=!![];for(var _0x4f7691=0x0;_0x4f7691<=0x14;_0x4f7691++){for(var _0x4beb20=0x0;_0x4beb20<=0x14;_0x4beb20++){this[_0x2fc856(0x225)][_0x4f7691][_0x4beb20][_0x2fc856(0x237)]();}}}}async function reqListener(){var _0x3dd517=_0xfd74ce;tempMatrix=await JSON[_0x3dd517(0x1fc)](this[_0x3dd517(0x205)]),console['log'](tempMatrix);}const req=new XMLHttpRequest();req[_0xfd74ce(0x20b)](_0xfd74ce(0x206),reqListener),req[_0xfd74ce(0x1fd)](_0xfd74ce(0x22b),_0xfd74ce(0x21a)),req[_0xfd74ce(0x21d)]();function _0x2541(){var _0x4165b1=['Click\x20a\x20photo\x20having\x20an\x20alcohol\x20bottle,\x20a\x20girl,\x20a\x20boy\x20and\x20glasses\x20clinking','Record\x20a\x20video\x20eating\x20banana\x20in\x20a\x20sensual\x20way','tileSize','setFilled','getFilled','letterColor','isAllClearVertical','boardContainer','Record\x20a\x20dance\x20video\x20on\x20this\x20song\x20in\x20the\x20fountain','ghagra','Mouse\x20Pressed','oohlala','10995642gnDkeq','GET','612iLAmAK','isPartOfCorrectSequence','charAt','1036560SYjazo','length','isAllClearHorizontal','Record\x20a\x20dance\x20video\x20on\x20this\x20song\x20and\x20the\x20dancer\x20must\x20wear\x20a\x20ghagra','genWordList','fevicolse','push','getData','render','Updated','3426336gxflhm','col','clearSelection','323596vjGBym','forEach','taskList','includes','Click\x20a\x20photo\x20with\x20a\x20belt','Record\x20a\x20dance\x20video\x20on\x20this\x20song','mouseReleased','24DfpCZw','Make\x20a\x20video\x20of\x20finger-licking\x20nutella','getIsPartOf','kajrare','random','16690iECPKb','Bring\x20a\x20lipstick\x20and\x20click\x20a\x20photo\x20of\x20a\x20boy\x20applying\x20the\x20same','fillGrid','then','roses','placeDiagonal','letterData','canPlaceHorizontal','canPlaceDiagonal','wordLimit','banana','nutella','parse','open','filled','belt','271032WNtXbd','beedi','Record\x20a\x20video\x20where\x20a\x20girl\x20proposes\x20to\x20a\x20boy\x20using\x20rose\x20as\x20prop','placeVertical','isAllClearDiagonal','responseText','load','wine','update','Record\x20a\x20dance\x20video\x20on\x20this\x20song\x20but\x20sing\x20the\x20song\x20and\x20don\x27t\x20play\x20it','Record\x20a\x20video\x20of\x20a\x20boy\x20applying\x20kajal\x20but\x20not\x20on\x20the\x20eye','addEventListener','isMouseInside','placeHorizontal','Record\x20a\x20dance\x20video\x20on\x20this\x20song\x20(only\x20boys\x20and\x20red\x20tshirt\x20mandatory)','canPlaceVertical','floor','abcdefghijklmaopqrstuvwxyz','setIsPartOf','dilbar','sakisaki','wordList','log','853902IjZDpn','setData','Record\x20a\x20dance\x20video\x20on\x20this\x20song\x20with\x20fevicol\x20bottles\x20in\x20dancers\x27\x20hands','https://sw2022-backend.herokuapp.com/','Mouse\x20Dragged','Click\x20a\x20photo\x20of\x20hands\x20tied\x20with\x20a\x20tie\x20;)','send'];_0x2541=function(){return _0x4165b1;};return _0x2541();}function delay(_0x1f1f1a){return new Promise(_0x217b22=>setTimeout(_0x217b22,_0x1f1f1a));}let board,mouseDrag=![];delay(0xbb8)[_0xfd74ce(0x1f3)](()=>{var _0x9ad54c=_0xfd74ce;board=new Board(),board[_0x9ad54c(0x237)](),board[_0x9ad54c(0x1f2)]();});function setup(){createCanvas(0x4b0,0x578),textSize(0x14),textAlign(CENTER,CENTER,CENTER,CENTER),cursor(CROSS);}function mousePressed(){var _0x445161=_0xfd74ce;console['log'](_0x445161(0x228)),mouseDrag=!![];}function mouseReleased(){var _0xa50c22=_0xfd74ce;console['log']('Mouse\x20Released'),mouseDrag=![],board[_0xa50c22(0x1ea)]();}function mouseDragged(){var _0x47f098=_0xfd74ce;console[_0x47f098(0x216)](_0x47f098(0x21b));if(mouseDrag)board['update'](mouseX,mouseY,mouseDrag);}function draw(){var _0x32e946=_0xfd74ce;flag==!![]&&board[_0x32e946(0x237)]();}