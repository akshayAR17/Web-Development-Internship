// Hide & Show buttons

$(document).ready(function()
{
    $("#hide").click(function()
    {
      $("p").hide();
    });
    $("#show").click(function()
    {
      $("p").show();
    });
  });


//Mouse enter

$(document).ready(function()
{
    $("#para1").mouseenter(function()
    {
      alert("You entered a paragragh!");
    });
  });


//Mouse leave

$(document).ready(function()
{
    $("#para2").mouseleave(function()
    {
      alert("Bye!");
    });
  });


  //fade in-out
$(document).ready(function()
  {
    $("#doit").click(function()
    {
      $("#div1").fadeToggle();
      $("#div2").fadeToggle("slow");
      $("#div3").fadeToggle(3000);
    });
  });


  //javascript callback
  function myDisplayer(some) 
  {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(n1, n2) 
  {
    let product = n1 * n2;
    return product;
  }

  let result = myCalculator(10, 10);
  myDisplayer(result);


//toggle animation
$(document).ready(function()
{
    $("#iiok").click(function()
    {
      $("div").animate({
        height: 'toggle'
      });
    });
  });

//simple animation  
$(document).ready(function()
{
    $("#sa").click(function()
    {
      $("div").animate({left: '250px'});
    });
  });

