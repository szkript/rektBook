import java.lang.StringBuilder;

public class Helloer {
    private final String msg;

    public Helloer(final String whom){
        StringBuilder sb = new StringBuilder("Hello ");
        sb.append(whom).append("!");
        this.msg = sb.toString();
    }

    public void sayHello(){
        System.out.println(msg);
    }
}