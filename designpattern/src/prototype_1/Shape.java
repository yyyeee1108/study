package prototype_1;
// 복사할 수 있게끔 하는(Clonable) shape
// 일반적인 경우 복사 기능을 제공하게끔 clone, copy와 같은 추상 메서드를 제공하는 추상클래스로 만든다.
// 해당 예제에서는 Cloneable로 복사 기능 제공하는 클래스로 만듦
// 자식 클래스가 이 클래스를 상속받아 copy, clone 등의 메서드를 사용 -> 프로토타입 패턴을 쓸 수 있게 한다.
public class Shape implements Cloneable{
  private String id;

  public void setId(String id){
    this.id = id;
  }

  public String getId(){
    return id;
  }
}
