/**
 * Created by mercedeswyss on 8/01/17.
 */
public class CreateMapOne {

    public static Point createMap(){
        Point pointA = new Point("Point A");
        Point pointB = new Point("Point B");
        Point pointC = new Point("Point C");
        Point pointD = new Point("Point D");
        Point pointE = new Point("Point E");
        Point pointF = new Point("Point F");
        Point pointH = new Point("Point H");
        Point pointG = new Point("Point G");

        pointH.flagEnd = true;
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

}
