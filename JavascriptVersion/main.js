main();

function main(){
  console.log("LabHunter")
  
  //var actualPoint = createMapOne();
  var actualPoint = createMapTwo();
  var movements = new Array();
  
  console.log(actualPoint.flagEnd);
  while(actualPoint.flagEnd === false){
    console.log(actualPoint.name);
    
    //First Movement
    if (movements.length == 0) {
      if (actualPoint.leftPoint != null) {
        movements.push("LEFT");
        actualPoint = actualPoint.leftPoint;
      } else if(actualPoint.straightPoint != null) {
        movements.push("STRAIGHT");
        actualPoint = actualPoint.straightPoint;
      } else if(actualPoint.rightPoint != null) {
        movements.push("RIGHT");
        actualPoint.rightPoint = rightPoint;
      } else {
        console.log("This lab doesn't have solution.");
        break;
      }
    //Other Movement
    } else {
      /*
       * If the last movement is return, the robot needs to choose 
       * a new way based on the movement before return.
       */
      if (peek(movements) === 'RETURN') {
        movements.pop();
        var lastMovement = movements.pop();
         
         /*
          * If the last movement was left, the robot has three options:
          * 1. Go Streight (Robot will turn to the left)
          * 2. Go to the right (Robot will continue Straight)
          * 3. Return (Robot will turn to the right)
          */
        if (lastMovement === 'LEFT') {
           //Option 1
          if (actualPoint.straightPoint != null) {
            actualPoint = actualPoint.straightPoint;
            //The robot will turn to the LEFT
            movements.push("STRAIGHT");
           
          //Option 2
          } else if(actualPoint.rightPoint != null) {
            actualPoint = actualPoint.rightPoint;
            //The robot will continue STRAIGHT
            movements.push("RIGHT");
             
          //Option 3
          } else {
            actualPoint = actualPoint.father;
            movements.push("RETURN");
          }
           
         /*
          * If the last movement was STRAIGHT, the robot hast two options:
          * 1. Go to the RIGHT (Robot will turn to the LEFT)
          * 2. RETURN (Robot will continue in the same direction)
          */ 
        } else if (lastMovement === 'STRAIGHT'){
          //Option 1
          if (actualPoint.rightPoint != null) {
            actualPoint = actualPoint.rightPoint;
            //The Robot will turn to the LEFT
            movements.push("RIGHT");
             
          //Option 2
          } else {
            actualPoint = actualPoint.father;
            //The Robot will continue in the same direction
            movements.push("RETURN");
          }
         
        /*
         * If the lastMovement was RIGHT, the Robot only has one Option
         * 1. RETURN (The Robot will turn to the left)
         */ 
        } else { //else if (lastMovement === 'RIGHT')
          movements.push("RETURN");
          //the robot will turn to the LEFT
          actualPoint = actualPoint.father;
        }
      } else {
        if(actualPoint.leftPoint != null){
          movements.push("LEFT");
          actualPoint = actualPoint.leftPoint;
        } else if (actualPoint.straightPoint != null){
          movements.push("STRAIGHT");
          actualPoint = actualPoint.straightPoint;
        } else if (actualPoint.rightPoint != null) {
          movements.push("RIGHT");
          actualPoint = actualPoint.rightPoint;
          
        //The robot need to RETURN to the last point
        } else {
          movements.push("RETURN");
          //The robot turn 180º and move STRAIGHT
          actualPoint = actualPoint.father;
        }
      }
    }
    
    console.log(actualPoint.flagEnd);
  }
  
  console.log("Solution: " + movements);
}

//Object point
function point(name, final){
  this.name = name;
  this.father = null;
  this.leftPoint = null;
  this.rightPoint = null;
  this.straightPoint = null;
  this.flagEnd= final;
}

function peek(stack){
  var lastValue = stack.pop();
  stack.push(lastValue);
  return lastValue;
}

function createMapTwo(){
  var pointA = new point("Point A", false);
  var pointB = new point("Point B", false);
  var pointC = new point("Point C", false);
  var pointD = new point("Point D", false);
  var pointE = new point("Point E", false);
  var pointF = new point("Point F", false);
  var pointG = new point("Point G", false);
  var pointH = new point("Point H", false);
  var pointI = new point("Point I", false);
  var pointJ = new point("Point J", false);
  var pointK = new point("Point K", false);
  var pointL = new point("Point L", false);
  var pointM = new point("Point M", false);
  var pointN = new point("Point N", false);
  var pointO = new point("Point O", false);
  var pointP = new point("Point P", false);
  var pointQ = new point("Point Q", false);
  var pointR = new point("Point R", false);
  var pointS = new point("Point S", false);
  var pointT = new point("Point T", false);
  var pointU = new point("Point U", false);
  var pointV = new point("Point V", false);
  var pointW = new point("Point W", false);
  var pointX = new point("Point X", false);
  var pointY = new point("Point Y", false);
  var pointZ = new point("Point Z", false);
  var pointAA = new point("Point AA", false);
  var pointAB = new point("Point AB", false);
  var pointAC = new point("Point AC", false);
  var pointAD = new point("Point AD", false);
  var pointAE = new point("Point AE", false);
  var pointAF = new point("Point AF", false);
  var pointAG = new point("Point AG", false);
  var pointAH = new point("Point AH", false);
  var pointAI = new point("Point AH", false);
  var pointAJ = new point("Point AH", false);
  var pointAK = new point("Point AK", true);
  
  pointAK.father = pointAJ;
  
  pointAJ.father = pointAI;
  pointAJ.rightPoint = pointAK;
  
  pointAI.father = pointAA;
  pointAI.rightPoint = pointAJ;
  
  pointAA.father = pointY;
  pointAA.rightPoint = pointAI;
  pointAA.straightPoint = pointAB;
  
  pointAB.father = pointAA;
  pointAB.rightPoint = pointAC;
  pointAB.straightPoint = pointAE;
  
  pointAC.father = pointAB;
  pointAC.leftPoint = pointAD;
  
  pointAD.father = pointAC;
  
  pointAE.father = pointAB;
  pointAE.leftPoint = pointAF;
  pointAE.straightPoint = pointAG;
  pointAE.rightPoint = pointAH;
  
  pointAF.father = pointAE;
  pointAG.father = pointAE;
  pointAH.father = pointAE;
  
  pointY.father = pointX;
  pointY.straightPoint = pointAA;
  pointY.rightPoint = pointZ;
  
  pointZ.father = pointY;
  
  pointX.father = pointV;
  pointX.leftPoint = pointY;
  
  pointV.father = pointP;
  pointV.leftPoint = pointW;
  pointV.straightPoint = pointX;
  
  pointW.father = pointV;
  
  pointP.father = pointN;
  pointP.leftPoint = pointQ;
  pointP.straightPoint = pointV;
  
  pointQ.father = pointP;
  pointQ.rightPoint = pointR;
  
  pointR.father = pointQ;
  pointR.leftPoint = pointS;
  pointR.straightPoint = pointT;
  
  pointS.father = pointR;
  
  pointT.father = pointR;
  pointT.leftPoint = pointU;
  
  pointU.father = pointT;
  
  pointN.father = pointJ;
  pointN.leftPoint = pointP;
  pointN.rightPoint = pointO;
  
  pointO.father = pointN;
  
  pointJ.father = pointF;
  pointJ.leftPoint = pointK;
  pointJ.straightPoint = pointN;
  pointJ.rightPoint = pointM;
  
  pointM.father = pointJ;
  
  pointK.father = pointJ;
  pointK.leftPoint = pointL;
  
  pointL.father = pointK;
  
  pointF.father = pointE;
  pointF.leftPoint = pointG;
  pointF.rightPoint = pointJ;
  
  pointG.father = pointF;
  pointG.straightPoint = pointH;
  
  pointH.father = pointG;
  pointH.leftPoint = pointI;
  
  pointI.father = pointH;
  
  pointE.father = pointC;
  pointE.leftPoint = pointF;
  
  pointC.father = pointB;
  pointC.leftPoint = pointD;
  pointC.straightPoint = pointE;
  
  pointD.father = pointC;
  
  pointB.father = pointA;
  pointB.leftPoint = pointC;
  
  pointA.straightPoint = pointB;
  
  return pointA;
}

function createMapOne(){
  var pointA = new point("Point A", false);
  var pointB = new point("Point B", false);
  var pointC = new point("Point C", false);
  var pointD = new point("Point D", false);
  var pointE = new point("Point E", false);
  var pointF = new point("Point F", false);
  var pointG = new point("Point G", false);
  var pointH = new point("Point H", true);
  
  pointH.father = pointG;
  
  pointG.rightPoint = pointH;
  pointG.father = pointE;
  
  pointF.father = pointE;
  
  pointE.rightPoint = pointG;
  pointE.leftPoint = pointF;
  pointE.father = pointB;
  
  pointD.father = pointB;
  pointC.father = pointB;
  
  pointB.leftPoint = pointC;
  pointB.rightPoint = pointD;
  pointB.straightPoint = pointE;
  pointB.father = pointA;
  
  pointA.straightPoint = pointB;
  
  return pointA;
}