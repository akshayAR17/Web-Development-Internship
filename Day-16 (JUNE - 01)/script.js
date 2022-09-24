var cars = ["BMW","HONDA","SEDAN","SWIFT","TESLA"];
document.querySelector('.tostring').innerHTML = cars.toString();
cars.pop();

document.querySelector('.pop').innerHTML = cars.toString();
cars.push("ALTO-800");

document.querySelector('.push').innerHTML = cars.toString();
var nums = [1, 4, 2, 6, 8];

document.querySelector('.map').innerHTML = nums.map((val)=>(2*val)).toString();
nums.sort((a,b)=>(a-b));

document.querySelector('.sort').innerHTML = nums.toString();


var dateBtn = document.querySelector('.date-btn');
dateBtn.addEventListener('click',()=>{
    var date = new Date();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var dateArray = [days[date.getDay()]+ ' '+date.getDate(),months[date.getMonth()],date.getFullYear()];
    document.querySelector('.date').innerHTML = dateArray.join(" / ");
});

var x = 10;
if(x > 5)
{
    document.querySelector('.if-output').innerHTML = "x is greater than 5";
}

if(x > 10)
{
    document.querySelector('.if-else-output').innerHTML = "x is greater than 10";
}
else
{
    document.querySelector('.if-else-output').innerHTML = "x is smaller or than or equal to 10";
}

if(x > 100)
{
    document.querySelector('.else-if-output').innerHTML = "x is greater than 100";
}
else if(x > 50 )
{
    document.querySelector('.else-if-output').innerHTML = "x is smaller or than or equal to 100 but greater than 50";
}
else
{
    document.querySelector('.else-if-output').innerHTML = "x is smaller or than or equal to 50";
}
