var _0x2d1400=_0x4715;(function(_0x53f950,_0x5dc1c1){var _0x5e093d=_0x4715,_0x819de2=_0x53f950();while(!![]){try{var _0x29a2d6=-parseInt(_0x5e093d(0x1d6))/0x1+parseInt(_0x5e093d(0x1ca))/0x2+-parseInt(_0x5e093d(0x1da))/0x3+parseInt(_0x5e093d(0x1e0))/0x4*(-parseInt(_0x5e093d(0x201))/0x5)+parseInt(_0x5e093d(0x1ec))/0x6*(parseInt(_0x5e093d(0x1eb))/0x7)+-parseInt(_0x5e093d(0x1de))/0x8*(-parseInt(_0x5e093d(0x211))/0x9)+parseInt(_0x5e093d(0x1e4))/0xa*(-parseInt(_0x5e093d(0x1fa))/0xb);if(_0x29a2d6===_0x5dc1c1)break;else _0x819de2['push'](_0x819de2['shift']());}catch(_0x209df3){_0x819de2['push'](_0x819de2['shift']());}}}(_0x18d7,0x85469));const generateLetter=()=>{var _0x59e494=_0x4715,_0x36c40b='',_0x1cb2a1='abcdefghijklmaopqrstuvwxyz',_0x10e6fd=_0x1cb2a1[_0x59e494(0x1f5)];for(var _0x23d1e6=0x0;_0x23d1e6<=0x0;_0x23d1e6++){_0x36c40b+=_0x1cb2a1[_0x59e494(0x1e5)](Math['floor'](Math[_0x59e494(0x1e3)]()*_0x10e6fd));}return _0x36c40b;},generateRandomInt=()=>{var _0x21e78b=_0x4715;return Math[_0x21e78b(0x1ce)](Math['random']()*Math[_0x21e78b(0x1ce)](0x16));};var tempMatrix=null,flag=![];class Tile{constructor(_0x37b482,_0x3f6b74){var _0x197783=_0x4715;this['x']=_0x37b482,this['y']=_0x3f6b74,this[_0x197783(0x1e8)]=0x32,this['letterColor']=[0x0,0x0,0x0],this[_0x197783(0x217)]='\x20',this['filled']=![],this[_0x197783(0x1cf)]=![];}[_0x2d1400(0x1c8)](_0x1b8fd0,_0x35cd16){var _0x4adbe1=_0x2d1400;return _0x1b8fd0>this['x']&&_0x1b8fd0<this['x']+this[_0x4adbe1(0x1e8)]&&_0x35cd16>this['y']&&_0x35cd16<this['y']+this[_0x4adbe1(0x1e8)];}[_0x2d1400(0x1e9)](_0x461edc){var _0x4c5f49=_0x2d1400;this[_0x4c5f49(0x1cf)]=_0x461edc;}['getIsPartOf'](){return this['isPartOfCorrectSequence'];}[_0x2d1400(0x1dc)](_0x33a09a){var _0x3b9c67=_0x2d1400;this[_0x3b9c67(0x1f9)]=_0x33a09a;}[_0x2d1400(0x1ee)](){var _0x22f138=_0x2d1400;return this[_0x22f138(0x1f9)];}[_0x2d1400(0x1cc)](){var _0x31cd42=_0x2d1400;return this[_0x31cd42(0x217)];}[_0x2d1400(0x1fc)](_0x3bc271){this['letterData']=_0x3bc271;}[_0x2d1400(0x20d)](){var _0x480dc6=_0x2d1400;rect(this['x'],this['y'],this[_0x480dc6(0x1e8)],this[_0x480dc6(0x1e8)]);if(this['filled']==!![])fill(0xff,0x0,0x0);else fill(0x0,0x0,0x0);text(this[_0x480dc6(0x217)],this['x']+0x18,this['y']+0x18),fill(0xff);}}class Board{[_0x2d1400(0x1cb)](_0x44bbbe,_0x152178,_0x2d4ecd){var _0xbafe51=_0x2d1400;for(var _0x58ddc1=0x0;_0x58ddc1<=_0x2d4ecd[_0xbafe51(0x1f5)]-0x1;_0x58ddc1++){this[_0xbafe51(0x1db)][_0x44bbbe][_0x152178++][_0xbafe51(0x1fc)](_0x2d4ecd[_0x58ddc1]);}}[_0x2d1400(0x212)](_0x53bd46,_0x7a14e6){return _0x53bd46-_0x7a14e6==0x0;}[_0x2d1400(0x20a)](_0x30c409,_0x4c22bc,_0x319563){var _0x20df69=_0x2d1400;if(this['canPlaceHorizontal'](_0x4c22bc,_0x319563[_0x20df69(0x1f5)]))for(var _0x1651dc=0x0;_0x1651dc<=_0x319563['length'];_0x1651dc++){if(this['boardContainer'][_0x30c409][_0x4c22bc++][_0x20df69(0x1cc)]()!='\x20'){return![];break;}}return!![];}[_0x2d1400(0x1c9)](_0x47e3b6,_0x2df092,_0x32b6ee){var _0x18f4d3=_0x2d1400;for(var _0x4deb5c=0x0;_0x4deb5c<=_0x32b6ee[_0x18f4d3(0x1f5)]-0x1;_0x4deb5c++){this[_0x18f4d3(0x1db)][_0x47e3b6++][_0x2df092][_0x18f4d3(0x1fc)](_0x32b6ee[_0x4deb5c]);}}[_0x2d1400(0x1f7)](_0x508da,_0x37bb7e){return _0x508da-_0x37bb7e==0x0;}[_0x2d1400(0x1f1)](_0x59a4fb,_0x4f84e9,_0x2f9393){var _0x1a7cde=_0x2d1400;if(this[_0x1a7cde(0x1f7)](_0x59a4fb,_0x2f9393['length']))for(var _0x2e5aeb=0x0;_0x2e5aeb<=_0x2f9393[_0x1a7cde(0x1f5)];_0x2e5aeb++){if(this['boardContainer'][_0x59a4fb++][_0x4f84e9][_0x1a7cde(0x1cc)]()!='\x20'){return![];break;}}return!![];}[_0x2d1400(0x1df)](_0x1a33f8,_0x548867,_0x5e3c1c){var _0x29ee6d=_0x2d1400;for(var _0x1fe3e1=0x0;_0x1fe3e1<=_0x5e3c1c[_0x29ee6d(0x1f5)]-0x1;_0x1fe3e1++){this['boardContainer'][_0x1a33f8++][_0x548867++][_0x29ee6d(0x1fc)](_0x5e3c1c[_0x1fe3e1]);}}['canPlaceDiagonal'](_0x446c7f,_0xc222e2,_0x526d4b){return _0x446c7f<=_0x526d4b&&_0xc222e2<=_0x526d4b;}['isAllClearDiagonal'](_0x63fdd3,_0x2ba2d1,_0x1abff8){var _0x4997a2=_0x2d1400;if(this['canPlaceDiagonal'](_0x63fdd3,_0x2ba2d1,_0x1abff8[_0x4997a2(0x1f5)]))for(var _0x471ba9=0x0;_0x471ba9<=_0x1abff8[_0x4997a2(0x1f5)];_0x471ba9++){if(this['boardContainer'][_0x63fdd3++][_0x2ba2d1++][_0x4997a2(0x1cc)]()!='\x20'){return![];break;}}return!![];}[_0x2d1400(0x1d1)](_0x129410){var _0x1ecc92=_0x2d1400;let _0x3467e7=generateRandomInt(),_0x2df826=generateRandomInt();if(!this[_0x1ecc92(0x212)](_0x2df826,_0x129410[_0x1ecc92(0x1f5)])){if(!this[_0x1ecc92(0x1f7)](_0x3467e7,_0x129410[_0x1ecc92(0x1f5)])){if(!this[_0x1ecc92(0x1d4)](_0x3467e7,_0x2df826,_0x129410[_0x1ecc92(0x1f5)]))return![];else{if(this['isAllClearDiagonal'](_0x3467e7,_0x2df826,_0x129410))return this[_0x1ecc92(0x1df)](_0x3467e7,_0x2df826,_0x129410),!![];}}else{if(this['isAllClearVertical'](_0x3467e7,_0x2df826,_0x129410))return this['placeVertical'](_0x3467e7,_0x2df826,_0x129410),!![];}}else{if(this[_0x1ecc92(0x20a)](_0x3467e7,_0x2df826,_0x129410))return this[_0x1ecc92(0x1cb)](_0x3467e7,_0x2df826,_0x129410),!![];}}constructor(){var _0x381101=_0x2d1400;this[_0x381101(0x1db)]=[],this[_0x381101(0x1f3)]=[],this[_0x381101(0x1fd)]=0xb,this[_0x381101(0x1e7)]=['dilbar',_0x381101(0x202),'kajrare',_0x381101(0x1dd),_0x381101(0x1f2),_0x381101(0x1f4),_0x381101(0x206),'lipstick','belt','tie',_0x381101(0x1ea),'babydoll','nutella',_0x381101(0x1d0),_0x381101(0x20f),'sakisaki',_0x381101(0x1e2),'beedi'],this['taskList']={'dilbar':_0x381101(0x216),'panipani':_0x381101(0x1ed),'kajrare':_0x381101(0x1cd),'jalebibai':_0x381101(0x1d5),'ghagra':'Record\x20a\x2015sec\x20dance\x20video\x20of\x203\x20girls\x20on\x20this\x20song\x20and\x20the\x20dancers\x20must\x20wear\x20a\x20saree/suit/ghagra','peach':_0x381101(0x1d9),'banana':_0x381101(0x1d2),'lipstick':'1\x20boy\x20to\x20apply\x20a\x20lipstick\x20and\x20share\x20his\x20photo\x20after\x20its\x20done','belt':'1\x20student\x20to\x20lay\x20flat\x20on\x20the\x20bed\x20with\x20their\x20hands\x20tied\x20to\x20the\x20bed\x20with\x20a\x20belt','tie':_0x381101(0x1d3),'nutella':_0x381101(0x1f0),'fevicolse':'Record\x20a\x2015sec\x20dance\x20video\x20on\x20this\x20song\x20with\x20fevicol\x20bottles\x20in\x203\x20dancers\x27\x20hands','babydoll':_0x381101(0x1fe),'garmi':_0x381101(0x210),'sakisaki':_0x381101(0x207),'oohlala':_0x381101(0x203),'wine':_0x381101(0x213),'roses':_0x381101(0x1fb)};for(var _0x42f934=0x0;_0x42f934<=0x14;_0x42f934++){this['boardContainer'][_0x42f934]=[];}let _0x54db6e=0x0,_0x207d54=0x0;for(var _0x42f934=0x0;_0x42f934<=0x14;_0x42f934++){for(var _0x52db63=0x0;_0x52db63<=0x14;_0x52db63++){this[_0x381101(0x1db)][_0x42f934][_0x52db63]=new Tile(_0x54db6e,_0x207d54),_0x54db6e+=0x37;}_0x54db6e=0x0,_0x207d54+=0x37;}let _0x5996cf=0x0,_0x359e6d=![];}['clearSelection'](){var _0x74ab49=_0x2d1400;for(var _0x5a35ab=0x0;_0x5a35ab<=0x14;_0x5a35ab++){for(var _0x30d72a=0x0;_0x30d72a<=0x14;_0x30d72a++){this['boardContainer'][_0x5a35ab][_0x30d72a][_0x74ab49(0x1ee)]()&&this[_0x74ab49(0x1db)][_0x5a35ab][_0x30d72a]['getIsPartOf']()==![]&&this[_0x74ab49(0x1db)][_0x5a35ab][_0x30d72a][_0x74ab49(0x1dc)](![]);}}}[_0x2d1400(0x1e1)](){var _0x1ab409=_0x2d1400;console[_0x1ab409(0x209)](tempMatrix[_0x1ab409(0x1f5)]);for(var _0x8abce4=0x0;_0x8abce4<0x1c0;_0x8abce4++){this[_0x1ab409(0x1db)][tempMatrix[_0x8abce4][_0x1ab409(0x214)]][tempMatrix[_0x8abce4][_0x1ab409(0x1ff)]]['setData'](tempMatrix[_0x8abce4][_0x1ab409(0x215)]);}}[_0x2d1400(0x204)](){var _0xfd63ae=_0x2d1400;let _0x3f01d3='';this[_0xfd63ae(0x1f3)][_0xfd63ae(0x208)](_0xcfd8c5=>{var _0x4ef684=_0xfd63ae;_0x3f01d3+=_0xcfd8c5[_0x4ef684(0x1cc)]();}),this[_0xfd63ae(0x1e7)][_0xfd63ae(0x200)](_0x3f01d3)&&(this[_0xfd63ae(0x1f3)][_0xfd63ae(0x208)](_0x4ce6c0=>{var _0x2cfd2f=_0xfd63ae;_0x4ce6c0[_0x2cfd2f(0x1e9)](!![]);}),alert(this['taskList'][_0x3f01d3])),this[_0xfd63ae(0x1f3)]=[],this['clearSelection']();}['update'](_0xbf9335,_0x19f111,_0x114998){var _0xf6c22f=_0x2d1400;console['log']('Updated');if(this[_0xf6c22f(0x1f3)]['length']==0xb)_0x114998=![];else{if(_0x114998==!![])for(var _0x3a82be=0x0;_0x3a82be<=0x14;_0x3a82be++){for(var _0x336e09=0x0;_0x336e09<=0x14;_0x336e09++){let _0x2ce51a=this['boardContainer'][_0x3a82be][_0x336e09];_0x2ce51a[_0xf6c22f(0x1c8)](_0xbf9335,_0x19f111)&&_0x2ce51a['getFilled']()==![]&&(_0x2ce51a['setFilled'](!![]),this['wordList']['push'](_0x2ce51a));}}}}['render'](){flag=!![];for(var _0x21f86d=0x0;_0x21f86d<=0x14;_0x21f86d++){for(var _0x323bce=0x0;_0x323bce<=0x14;_0x323bce++){this['boardContainer'][_0x21f86d][_0x323bce]['render']();}}}}async function reqListener(){var _0x23215a=_0x2d1400;tempMatrix=await JSON[_0x23215a(0x1d7)](this[_0x23215a(0x1ef)]),console[_0x23215a(0x209)](tempMatrix);}const req=new XMLHttpRequest();req[_0x2d1400(0x1f8)]('load',reqListener),req[_0x2d1400(0x1f6)](_0x2d1400(0x20b),'https://sw2022-backend.herokuapp.com/'),req[_0x2d1400(0x20c)]();function _0x18d7(){var _0x1b6a05=['55XlmIbT','garmi','Record\x20a\x2015sec\x20\x20dance\x20video\x20with\x206\x20people\x20on\x20this\x20song\x20but\x20sing\x20the\x20song\x20and\x20don\x27t\x20play\x20it','mouseReleased','then','banana','Record\x20a\x2015\x20dance\x20video\x20on\x20this\x20song\x20(only\x205\x20boys\x20and\x20red\x20tshirt\x20mandatory)','forEach','log','isAllClearHorizontal','GET','send','render','Mouse\x20Dragged','roses','Record\x20a\x2015sec\x20dance\x20video\x20on\x20this\x20song\x20with\x205\x20people','13383ylZHqB','canPlaceHorizontal','Click\x20a\x20photo\x20having\x20an\x20alcohol\x20bottle,\x20a\x20girl,\x20a\x20boy\x20and\x20glasses\x20clinking','row','val','Record\x20a\x2015sec\x20dance\x20video\x20on\x20this\x20song\x20with\x20min\x204\x20people','letterData','isMouseInside','placeVertical','1758522tnPYDr','placeHorizontal','getData','Record\x20a\x205\x20sec\x20video\x20of\x20a\x20boy\x20applying\x20kajal','floor','isPartOfCorrectSequence','wine','generatePlace','Record\x20a\x2010sec\x20video\x20eating\x201\x20banana\x20in\x20a\x20sensual\x20way','Click\x20a\x20photo\x20of\x20hands\x20tied\x20with\x20a\x20tie\x20;)','canPlaceDiagonal','Record\x20a\x2015sec\x20dance\x20video\x20of\x207\x20boys\x20dancing\x20on\x20this\x20song','119393zDbUsC','parse','Mouse\x20Released','Click\x20a\x20photo\x20with\x20a\x20peach','1018080fdowkI','boardContainer','setFilled','jalebibai','4216YiEDTt','placeDiagonal','316204hbzOZS','fillGrid','oohlala','random','55310rOTHnS','charAt','Mouse\x20Pressed','genWordList','tileSize','setIsPartOf','fevicolse','294259TqUkJa','72LtvyhL','Record\x20a\x2015sec\x20dance\x20video\x20on\x20this\x20song\x20in\x20the\x20fountain\x20outside\x20LC2\x20with\x205\x20people','getFilled','responseText','Make\x20a\x205sec\x20video\x20of\x20finger-licking\x20nutella','isAllClearVertical','ghagra','wordList','peach','length','open','canPlaceVertical','addEventListener','filled','583EJAtfy','Record\x20a\x2015\x20sec\x20video\x20where\x20a\x20girl\x20proposes\x20to\x20a\x20boy\x20using\x20a\x20rose','setData','wordLimit','Record\x20a\x2015sec\x20dance\x20video\x20on\x20this\x20song\x20of\x205\x20people\x20but\x20sing\x20the\x20song\x20and\x20don\x27t\x20play\x20it','col','includes'];_0x18d7=function(){return _0x1b6a05;};return _0x18d7();}function delay(_0x92e64e){return new Promise(_0xbeb2c4=>setTimeout(_0xbeb2c4,_0x92e64e));}let board,mouseDrag=![];delay(0xbb8)[_0x2d1400(0x205)](()=>{var _0x5ce93e=_0x2d1400;board=new Board(),board[_0x5ce93e(0x20d)](),board['fillGrid']();});function setup(){createCanvas(0x4b0,0x578),textSize(0x14),textAlign(CENTER,CENTER,CENTER,CENTER),cursor(CROSS);}function mousePressed(){var _0x592271=_0x2d1400;console['log'](_0x592271(0x1e6)),mouseDrag=!![];}function _0x4715(_0x1eb1d7,_0x2b0159){var _0x18d71f=_0x18d7();return _0x4715=function(_0x471570,_0x5bc8d0){_0x471570=_0x471570-0x1c8;var _0x330fc7=_0x18d71f[_0x471570];return _0x330fc7;},_0x4715(_0x1eb1d7,_0x2b0159);}function mouseReleased(){var _0x23b77c=_0x2d1400;console[_0x23b77c(0x209)](_0x23b77c(0x1d8)),mouseDrag=![],board[_0x23b77c(0x204)]();}function mouseDragged(){var _0x1a23fb=_0x2d1400;console[_0x1a23fb(0x209)](_0x1a23fb(0x20e));if(mouseDrag)board['update'](mouseX,mouseY,mouseDrag);}function draw(){flag==!![]&&board['render']();}