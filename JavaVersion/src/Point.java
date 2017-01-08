/**
 * Created by mercedeswyss on 8/01/17.
 */
public class Point {

    Point father;

    Point leftPoint;

    Point rightPoint;

    Point straightPoint;

    String name;

    boolean flagEnd;

    public Point(String name) {
        this.name = name;
        this.flagEnd = false;
    }

}
