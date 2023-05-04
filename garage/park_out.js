function fees()
{
        num1 = document.getElementById("arrival").value;
        num2 = document.getElementById("departure").value;
        if(num2<=num1){
            console.log("this is not possible");
            alert("this is not possible");
        } else if (num2 > 24 && num2 < 0 && num1 > 24 && num1 < 0) {
            console.log("this is not possible");
            alert("this is not possible");
        } 

        else{
        document.getElementById("result").innerHTML = (num2-num1)*5;}
}
