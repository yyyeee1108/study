package prototype_1;
public class App {
    public static void main(String[] args) throws Exception {
        // circle1 객체 생성
        Circle circle1 = new Circle(1,1,3);

        // '기존'객체인 circle1을 이용하여 new 없이 객체 circle2 복제 생성
        Circle circle2 = circle1.copy();

        System.out.println(
            circle1.getX()+","+
            circle1.getY()+","+
            circle1.getR()
        );
        
        System.out.println(
            circle2.getX()+","+
            circle2.getY()+","+
            circle2.getR()
        ); 
    }
}
