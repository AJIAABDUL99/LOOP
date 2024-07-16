let i = 1;
do{
    console.log("Do...while loop iteration:" + i);
    i = i+1;
} while (i < 5)

     //Using a simulated do-while loop to print even numbers between 0 and 20
let number = 0;
do{
    if (number % 2===0){
        console.log(number);
    }
    number++;
}while (number <=20);
