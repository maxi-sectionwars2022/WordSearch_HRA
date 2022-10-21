const generateLetter = () => {
   var result = '';
   var characters = 'abcdefghijklmaopqrstuvwxyz';
   var charactersLength = characters.length;
   for ( var i = 0; i <= 0; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
   
} 
   

//by default takes 16 due to grid size
const generateRandomInt = () => {
   return Math.floor(Math.random() * Math.floor(22));
}

var tempMatrix = null;
var flag=false;

///

class Tile {

   constructor(x,y) {
      this.x = x;
      this.y = y;
      this.tileSize = 50;
      this.letterColor = [0,0,0]
      this.letterData = " "
      this.filled = false;
      this.isPartOfCorrectSequence = false;
   }

   isMouseInside(mouseX,mouseY) {
      return mouseX > this.x  && mouseX < this.x + this.tileSize && mouseY > this.y && mouseY < this.y + this.tileSize
   }

   setIsPartOf(data) { this.isPartOfCorrectSequence = data; }
   getIsPartOf() { return this.isPartOfCorrectSequence; }

   setFilled(data) { this.filled = data; }
   getFilled()     { return this.filled; }
   getData()       { return this.letterData; }
   setData(data)   { this.letterData = data; }

   render() {

      rect(this.x, this.y, this.tileSize, this.tileSize);
      
      //setting selected letter color
      if(this.filled == true) fill(255,0,0)
      else fill(0,0,0)
      
      text(this.letterData,this.x+24,this.y+24)
      fill(255)
    }
}

///

class Board {

   placeHorizontal(row,col,word) {
      for(var i = 0; i <= word.length-1; i++) {
         this.boardContainer[row][col++].setData(word[i])
      }
   }

   canPlaceHorizontal(col,size) {
      return (col-size == 0);
   }

   isAllClearHorizontal(row,col,word) {
      if(this.canPlaceHorizontal(col,word.length)) {
         for(var i = 0; i <= word.length; i++) {
            if(this.boardContainer[row][col++].getData() != " ") {
               return false;
               break;
            }
         }
      } return true;
   }

   placeVertical(row,col,word) {
      for(var i = 0; i <= word.length-1; i++) {
         this.boardContainer[row++][col].setData(word[i])
      }
   }

   canPlaceVertical(row,size) {
      return (row-size == 0);
   }

   isAllClearVertical(row,col,word) {
      if(this.canPlaceVertical(row,word.length)) {
         for(var i = 0; i <= word.length; i++) {
            if(this.boardContainer[row++][col].getData() != " ") {
               return false;
               break;
            }
         }
      } return true;
   }

   placeDiagonal(row,col,word) {
      for(var i = 0; i <= word.length-1; i++) {
         this.boardContainer[row++][col++].setData(word[i])
      }
   }

   canPlaceDiagonal(row,col,size) {
      return (row <= size && col <= size);
   }

   isAllClearDiagonal(row,col,word) {
      if(this.canPlaceDiagonal(row,col,word.length)) {
         for(var i = 0; i <= word.length; i++) {
            if(this.boardContainer[row++][col++].getData() != " ") {
               return false;
               break;
            }
         }
      } return true;
   }

   generatePlace(word) {

      let row = generateRandomInt();
      let col = generateRandomInt();

      if(!this.canPlaceHorizontal(col,word.length)) {
         if(!this.canPlaceVertical(row,word.length)) {
            if(!this.canPlaceDiagonal(row,col,word.length)) {
               return false;
            } else {
               if(this.isAllClearDiagonal(row,col,word)) {
                  this.placeDiagonal(row,col,word)
                  return true;
               }
            }
         } else {
            if(this.isAllClearVertical(row,col,word)) {
               this.placeVertical(row,col,word);
               return true;
            }
         }
      } else {
         if(this.isAllClearHorizontal(row,col,word)) {
            this.placeHorizontal(row,col,word);
            return true;
         }
      }
   }

   

   constructor() {

      this.boardContainer = []
      this.wordList = []
      this.wordLimit = 11;



      
      this.genWordList = ["dilbar","garmi","kajrare","jalebibai","ghagra","peach","banana","lipstick","belt","tie","fevicolse","babydoll","nutella","wine","roses","sakisaki","oohlala","beedi"]
      this.taskList = {
         "dilbar":"Record a 15sec dance video on this song with min 4 people", 
         "garmi":"Record a 15sec dance video on this song in the fountain outside LC2 with 5 people",
         "kajrare":"Record a 5 sec video of a boy applying kajal",
         "jalebibai":"Record a 15sec dance video of 7 boys dancing on this song",
         "ghagra":"Record a 15sec dance video of 3 girls on this song and the dancers must wear a saree/suit/ghagra",
         "peach":"Click a photo with a peach",
         "banana":"Record a 10sec video eating 1 banana in a sensual way",
         "lipstick":"1 boy to apply a lipstick and share his photo after its done",
         "belt":"1 student to lay flat on the bed with their hands tied to the bed with a belt",
         "tie":"Click a photo of hands tied with a tie ;)",
         "nutella":"Make a 5sec video of finger-licking nutella",
         "fevicolse":"Record a 15sec dance video on this song with fevicol bottles in 3 dancers' hands",
         "babydoll":"Record a 15sec dance video on this song of 5 people but sing the song and don't play it",
         "beedi":"Record a 15sec dance video on this song with 5 people",
         "sakisaki":"Record a 15 dance video on this song (only 5 boys and red tshirt mandatory)",
         "oohlala":"Record a 15sec  dance video with 6 people on this song but sing the song and don't play it",
         "wine":"Click a photo having an alcohol bottle, a girl, a boy and glasses clinking",
         "roses":"Record a 15 sec video where a girl proposes to a boy using a rose",
      }

      //This basically intializes the board pieces
      for(var i = 0; i <= 20; i++) 
      {
         this.boardContainer[i] = []; 
      }


      let xx = 0;
      let yy = 0;
      for(var i = 0; i <= 20; i++) {
         for(var j = 0; j <= 20; j++) {
            this.boardContainer[i][j] = new Tile(xx,yy)
            xx += 55
         } xx = 0; yy += 55;
      }

      //generates the puzzle
      let count = 0;
      let flag = false;


      //Fill the board from dataset
      // this.boardContainer[0][0].setData(tempMatrix[0].val);
      // this.boardContainer[0][1].setData(tempMatrix[1].val);
      // this.boardContainer[1][0].setData(tempMatrix[2].val);
      // this.boardContainer[1][1].setData(tempMatrix[3].val);




 //this.boardContainer[0][0].setData('z');  

      // while(count <= this.genWordList.length-1) {
      //    if(!flag) {
      //       flag = this.generatePlace(this.genWordList[count])
      //    } else {
      //       count += 1;
      //       flag = false;
      //    }
      // }

      //fill the grid from dataset
      // for(var i = 0 ; i <= 20; i++) {
      //    for(var j = 0; j <= 20; j++) {
            
      //       if(this.boardContainer[i][j].getData() == " ") {
               
      //          this.boardContainer[i][j].setData(tempMatrix[k].val)
      //          k=k+1;
      //       }
      //    }
      // }

   }

   clearSelection() {
       for(var i = 0; i <= 20; i++) {
         for(var j = 0; j <= 20; j++) {
            if(this.boardContainer[i][j].getFilled() && this.boardContainer[i][j].getIsPartOf() == false) {
               this.boardContainer[i][j].setFilled(false)
            }
         }
      }
   }

   fillGrid(){
      console.log(tempMatrix.length)
      for(var i=0;i<448;i++)
      {
         this.boardContainer[tempMatrix[i].row][tempMatrix[i].col].setData(tempMatrix[i].val);
         this.boardContainer[3][11].setData('p');
         this.boardContainer[4][13].setData('f');
      }
      
   }

   mouseReleased() {

      //1.join all letters
      //2.if all letters == genWord
      //3.all letters of that tile are partOf 
      //4.set flag of partOf .. so they do not get cleared

      let completedWord = ""
      this.wordList.forEach((letter) => {
         completedWord += letter.getData();
      })

      if(this.genWordList.includes(completedWord)) {

         
         this.wordList.forEach((letter) => {
            letter.setIsPartOf(true);
         })

         alert(this.taskList[completedWord]);

      }

      this.wordList = []
      this.clearSelection();
   }

   update(mouseX,mouseY,dragStatus) {
      console.log("Updated");
      if(this.wordList.length == 11) {
         dragStatus = false
      } else if(dragStatus == true) {
         for(var i = 0; i <= 20; i++) {
             for(var j = 0; j <= 20; j++) {
               let letter = this.boardContainer[i][j];
               if(letter.isMouseInside(mouseX,mouseY) && letter.getFilled() == false) {
                  letter.setFilled(true);
                  this.wordList.push(letter) 
               }  
            }
         }
      }
   }

   render() {
      flag=true;
      for(var i = 0; i <= 20; i++) {
         for(var j = 0; j <= 20; j++) {
            this.boardContainer[i][j].render();
         }
      }
      //board.fillGrid();
   }

}

///
async function reqListener () {
   tempMatrix = await JSON.parse(this.responseText);
   console.log(tempMatrix);
   //console.log(JSON.parse(this.responseText));
   // for(var i=0;i<=3;i++)
   //    {
   //       var row=tempMatrix[i].row;
   //       var col=tempMatrix[i].col
   //       var val=tempMatrix[i].val

   //       console.log(row,col,val);
         
   //    }
      
 }

 
// function loadEnd(e) {
   
//    draw();
// }


const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
//req.addEventListener("loadend", loadEnd);
req.open("GET", "https://sw2022-backend.herokuapp.com/");
req.send();

function delay(time) {
   return new Promise(resolve => setTimeout(resolve, time));
 }

let board;
let mouseDrag = false;

 
 delay(3000).then(() => {
 board = new Board();
 board.render();
 board.fillGrid();
//  this.boardContainer[3][11].setData('z');
//       this.boardContainer[4][13].setData('f');
});

function setup() {
   createCanvas(1200,1400)
   textSize(20)
   textAlign(CENTER, CENTER, CENTER, CENTER);
   cursor(CROSS);
}

function mousePressed() {
   console.log("Mouse Pressed");
   mouseDrag = true;
}

function mouseReleased() {
   console.log("Mouse Released");
   mouseDrag = false;
   board.mouseReleased();
}

function mouseDragged() {
   console.log("Mouse Dragged");
   if(mouseDrag) board.update(mouseX,mouseY,mouseDrag)
}

function draw() {
   if(flag==true)
   {
   board.render();  
   }
}

