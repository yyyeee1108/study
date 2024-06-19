package singleton_1;

public class SystemSpeaker {
  
  static private SystemSpeaker instance;
  private int volume;

  // 외부에서 생성자 호출 못하게 private으로 설정
  private SystemSpeaker(){
    volume = 5;
  }

  // 해당 메서드를 통해 유일무이한 하나의 객체에 접근
  // static 메서드로 만든다
  static public SystemSpeaker getInstance(){
    if(instance == null){
      instance = new SystemSpeaker();
      System.out.println("새로 생성");
    } else{
      System.out.println("이미 생성");
    }
    return instance;
  }

  public int getVolume(){
    return volume;
  }

  public void setVolume(int x){
    volume = x;
  }
}
