package prototype_1;
public class Circle extends Shape{
  
  int x, y, r;

  Circle(int x,int y,int r){
    super();
    this.x = x;
    this.y = y;
    this.r = r;
  }

  // 지금은 변수 3개로 간단.
  // 만약 색깔, 오버레이, 두껍게 등등 복잡하게 되면 복사하기 힘들어진다.
  // 프로토타입 이용하면 간단
  public Circle copy() throws CloneNotSupportedException {
    // 외부에서 호출 가능 -> 호출하여 객체 복사 생성
    // 명시적으로 new 쓰지 않고 기존 객체 복사하여 새 객체 생성
    Circle circle = (Circle) clone();

    // 아래와 같은 코드를 써서 단순 복제가 아니라 약간 변형도 가능
    circle.x += 1;
    circle.y += 1;

    return circle;
  }

  public int getX(){
    return x;
  }

  public int getY(){
    return y;
  }
  
  public int getR(){
    return r;
  }

  public void setX(int x){
    this.x = x;
  }

  public void setY(int y){
    this.y = y;
  }

  public void setR(int r){
    this.r = r;
  }
}
