#include <StackArray.h>

/**
 * L: left
 * R: right
 * S: straight
 * B: return
 */
StackArray <char> movements;
const char LEFT = 'L';
const char STRAIGHT = 'S';
const char RIGHT = 'R';
const char RETURN = 'B';

int avanza1 = 6;
int avanza2 = 3;
int infra1 = 8;
int infra2 = 9;
int valorInfra = 1;


void setup() {
  pinMode(avanza1, OUTPUT);
  pinMode(avanza2, OUTPUT);
  pinMode(infra1, INPUT);
  pinMode(infra2, INPUT);
}

void loop() {

  if(existSavedRoad()){

    deleteSavedRoad();
  }else{
    //While we have not reached the goal
    while(!detectGoal()){
  
      while((!detectIntersection()) || (!detectEndOfRoad())){
        //Move the robot
        move();
      }
  
      if(detectIntersection()){
  
        //First Movement
        if(!movements.isEmpty()){
          if(existLeftRoad()){
            movements.push(LEFT);
            moveLeft();
          }else if(existStraightRoad()){
            movements.push(STRAIGHT);
            moveStraight();
          }else if(existRightRoad()){
            movements.push(RIGHT);
            moveRight();
          }else{
             Serial.print ("This Lab doesn't have solution.");
             break;
          }
  
        //Other Movement
        }else{
          /*
           * If the last movement is return, the robot needs to choose
           * a new way based on the movement before return
           */
          if(peek(movements) == RETURN){
            movements.pop();
            char lastMovement = movements.pop();
  
            /*
             * If the last movement was left, the robot has three options:
             * 1. Go Straight (Robot will turn to the left)
             * 2. Go to the right (Robot will continue Straight)
             * 3. Return (Robot will turn to the right=
             */
            if(lastMovement == LEFT){
              //Option 1
              if(existStraightRoad()){
                movements.push(STRAIGHT);
                moveStraight();
  
              //Option 2
              }else if(existRightRoad()){
                movements.push(RIGHT);
                moveRight();
  
              //Option 3
              }else{
                movements.push(RETURN);
                turningAround();
              }
  
            /*
             * If the last movement was STRAIGHT, the robot has two options:
             * 1. Go to the RIGHT (Robot will turn to the LEFT)
             * 2. RETURN (Robot will continue in the same direcction)
             */
            }else if(lastMovement == STRAIGHT){
              //Option 1
              if(existRightRoad()){
                movements.push(RIGHT);
                moveRight();
  
              //Option 2
              }else{
                movements.push(RETURN);
                turningAround();
              }
  
            /*
             * If the lastMovement was RIGTH, the Robot only has one Opetion
             * 1. RETURN (The robot will tur to the left)
             */
            }else{
              movements.push(RETURN);
              moveLeft();
            }
  
          /*
           * The Robot need exploring the Lab
           */
          }else{
            if(existLeftRoad()){
              movements.push(LEFT);
              moveLeft();
            }else if(existStraightRoad()){
              movements.push(STRAIGHT);
              moveStraight();
            }else if(existRightRoad()){
              movements.push(RIGHT);
              moveRight();
  
            //The robot need RETURN
            }else{
               movements.push(RETURN);
               turningAround();
            }
          }
           
        }
        
      }else if(detectEndOfRoad()){
        movements.push(RETURN);
        turningAround();
      }
    }

    setSavedRoad(movements);
  }
}

char peek(StackArray <char> stack){
  char lastValue = stack.pop();
  stack.push(lastValue);
  return lastValue;
}

void move(){
  if(valorInfra = '1'){
    valorInfra = digitalRead(infra1);
    valorInfra = !valorInfra;
    digitalWrite (avanza1, valorInfra);
  }

  if(valorInfra = '1'){
    valorInfra = digitalRead(infra2);
    
  }
}

//Rotate the robot 180º
void turningAround(){
 //Rotate the robot until it detects black line again
}

void moveLeft(){

}

void moveStraight(){
  
}

void moveRight(){
  
}

boolean existLeftRoad(){
  return false;
}

boolean existStraightRoad(){
  return false;
}

boolean existRightRoad(){
  return false;
}

boolean detectIntersection(){
  
}

boolean detectEndOfRoad(){
  return false;
}

boolean detectGoal(){
  return false;
}

boolean existSavedRoad(){
  return false;
}

void getSavedRoad(){
  
}

void deleteSavedRoad(){
  
}

void setSavedRoad(StackArray <char> stack){
  
}

