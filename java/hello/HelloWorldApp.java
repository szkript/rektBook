/**
 * The HelloWorldApp class implements an application that
 * simply prints "Hello World!" to standard output.
 * Taken from https://docs.oracle.com/javase/tutorial/getStarted/cupojava/unix.html
 */
public class HelloWorldApp {
    public static void main(String[] args){
        Helloer worldHelloer = new Helloer("World"); //Create helloer
        worldHelloer.sayHello(); //Display the string
    }
}