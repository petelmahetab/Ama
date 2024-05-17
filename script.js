// count of given Digit  n=2345

let n=56;
let count=0;

while( n !=0){
    let last=n%10;
    count+=last;
    n/=10;
}
console.log("Total Sum of number is:-->"+count);
