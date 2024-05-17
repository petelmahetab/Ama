// WAP a program to reverse a 3 digit number.

let num=321;
let rev=0;
while(num!=0){
    let last=num%10;
    rev=rev*10+last;
    num/=10;
}
console.log("After Reversing your number :--->"+rev);
