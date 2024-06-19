package singleton_1;

public class Main {
  public static void main(String[] args) {
    // 이렇게 하면 오류난다. new를 통한 생성자 접근을 막기 위해
    // 생성자를 private로 설정해뒀기 때문이다.
    // SystemSpeaker speaker = new SystemSpeaker();

    // Singleton 패턴을 이용한 객체 생성 테스트
    SystemSpeaker speaker1 = SystemSpeaker.getInstance();
    SystemSpeaker speaker2 = SystemSpeaker.getInstance();

    // 볼륨 출력
    System.out.println(speaker1.getVolume());
    System.out.println(speaker2.getVolume());

    // speaker1의 볼륨을 바꿨을 때
    // 같은 인스턴스를 조작했으니 speaker2도 1과 같아야한다.
    speaker1.setVolume(11);
    System.out.println(speaker1.getVolume());
    System.out.println(speaker2.getVolume());

    // speaker2의 볼륨을 바꿨을 때
    // 같은 인스턴스를 조작했으니 speaker1도 2과 같아야한다.
    speaker2.setVolume(12);
    System.out.println(speaker1.getVolume());
    System.out.println(speaker2.getVolume());
  }
}
