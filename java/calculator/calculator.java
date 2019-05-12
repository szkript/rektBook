import java.util.Scanner;

class calculator{
    public static void main(String args[]){
        Scanner calcInput = new Scanner(System.in);
        double fnum, snum, answer;
        System.out.println("Enter first num");
        fnum = calcInput.nextDouble();
        System.out.println("Enter second num");
        snum = calcInput.nextDouble();
        answer = fnum + snum;
        System.out.println(answer);

    }
}