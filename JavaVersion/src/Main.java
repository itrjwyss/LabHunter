import java.util.Stack;

public class Main {

    public static void main(String[] args) {
        System.out.println("LabHunter");

        Point actualPoint = CreateMapOne.createMap();
        Stack<Movement> movements = new Stack<>();

        int count = 0;

        while(!actualPoint.flagEnd){
            //First Movement
            if(movements.isEmpty()) {
                if (actualPoint.leftPoint != null) {
                    movements.push(Movement.LEFT);
                    actualPoint = actualPoint.leftPoint;
                } else if (actualPoint.straightPoint != null) {
                    movements.push(Movement.STRAIGHT);
                    actualPoint = actualPoint.straightPoint;
                } else if (actualPoint.rightPoint != null) {
                    movements.push(Movement.RIGHT);
                    actualPoint = actualPoint.rightPoint;
                }else{
                    System.out.println();
                    System.out.println("Este laberinto no tiene solución");
                    break;
                }
            //Other movement
            }else{
                /*
                 * If the last movement is return the robot need to choose a new
                 * way based on the movement before return
                 */
                if(movements.peek() == Movement.RETURN){
                    movements.pop();
                    Movement lastMovement = movements.pop();

                    /*
                     * If the last movement was Left the robot has three options:
                     * 1. Go Streight (Robot will turn to the left)
                     * 2. Go to the right (Robot will continue Straight)
                     * 3. Return (Robot will turn to the right)
                     */
                    if(lastMovement == Movement.LEFT){
                        //Option 1
                        if(actualPoint.straightPoint != null){
                            actualPoint = actualPoint.straightPoint;
                            //The robot will turn to the left
                            movements.push(Movement.STRAIGHT);
                        //Option 2
                        }else if(actualPoint.rightPoint != null){
                            actualPoint = actualPoint.rightPoint;
                            //The robot will continue Stright
                            movements.push(Movement.RIGHT);
                        //Option 3
                        }else{
                            actualPoint = actualPoint.father;
                            movements.push(Movement.RETURN);
                        }

                    /*
                     * If the last movement was Straight the robot has two options:
                     * 1. Go to the right (Robot will turn to the left)
                     * 2. Return, (robot will continue in the same direction)
                     */
                    }else if (lastMovement == Movement.STRAIGHT){
                        //Option 1
                        if (actualPoint.rightPoint != null) {
                            actualPoint = actualPoint.rightPoint;
                            //The robot will turn to the left
                            movements.push(Movement.RIGHT);
                        //Option 1
                        }else{
                            actualPoint = actualPoint.father;
                            //The robot will continue in the same direction
                            movements.push(Movement.RETURN);
                        }

                    /*
                     * If the last movement was Right the robot only has one option
                     * 1. Return (robot will turn to the left)
                     */
                    }else if (lastMovement == Movement.RIGHT){
                        movements.push(Movement.RETURN);
                        //The robot will be turn to the Left
                        actualPoint = actualPoint.father;
                    }
                }else{
                    if (actualPoint.leftPoint != null) {
                        movements.push(Movement.LEFT);
                        actualPoint = actualPoint.leftPoint;
                    } else if (actualPoint.straightPoint != null) {
                        movements.push(Movement.STRAIGHT);
                        actualPoint = actualPoint.straightPoint;
                    } else if (actualPoint.rightPoint != null) {
                        movements.push(Movement.RIGHT);
                        actualPoint = actualPoint.rightPoint;

                    //The robot needs return to the last point
                    }else{
                        movements.push(Movement.RETURN);
                        //the robot turn 180 grades and move straight
                        actualPoint = actualPoint.father;
                    }
                }
            }

            count++;
            if (count == 15){
                break;
            }
        }

        System.out.println("Solution: " + movements);
    }
}
