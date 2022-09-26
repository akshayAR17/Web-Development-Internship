
// use of for loop
// to print the values from 1 to 5

for(let i = 1; i <= 5; i++)
    console.log(i);


//concatenation of string
let result = '';

for(let i = 1; i <= 5; i++)
   result += i;
console.log(result);

//use of while loop
let res = 1;
let i = 1;

while(i <= 4)
{
    res = res * i;
    i++;
}
console.log(res);

//switch statement
let rating = 2;

switch(rating)
{
    case 1: console.log('Very Good'); break;
    case 2: console.log('Good'); break;
    case 3: console.log('Average'); break;
    case 4: console.log('Bad'); break;

    default: console.log('Bye'); break;
}

//class in javascript
class triangle
{
    constructor()
    {
        console.log("The triangle has been created !!!");
    }
}

let triangle1 = new triangle();
