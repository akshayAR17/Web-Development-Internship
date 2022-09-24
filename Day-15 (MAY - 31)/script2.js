function calc()
{
    var n1 = parseInt(document.getElementById('n1').value);
    var n2 = parseInt(document.getElementById('n2').value);
    var oper = document.getElementById('operators').value;

    if(oper === '+')
    {
        document.getElementById('result').value = n1 + n2;
    }

    if(oper === '-')
    {
        document.getElementById('result').value = n1 - n2;
    }

    if(oper === 'x')
    {
        document.getElementById('result').value = n1 * n2;
    }

    if(oper === '/')
    {
        document.getElementById('result').value = n1 / n2;
    }

    if(oper === '%')
    {
        document.getElementById('result').value = n1 % n2;
    } 


    n2 += 7;
    document.getElementById("add_assign").innerHTML = n2;

    n1 -= 12;
    document.getElementById("sub_assign").innerHTML = n1;

    let text1 = "Almapod";
    let text2 = "Internship";

    document.getElementById("concatenate").innerHTML = text1 + " " + text2;
}

