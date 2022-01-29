function compute()
{
    var principal = document.getElementById("principal").value;

    if(principal == "" || principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;

    var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear()) + parseInt(years);
    
    var resultDisplay = document.getElementById("result");
    resultDisplay.innerHTML = "<span class='text'>If you deposit" + "<span class='highlight'>" + principal + "</span>,"  +"</span>"  + " <br> <span class='text'>at an interest rate of "+ "<span class='highlight'>" + rate + "</span>%." + "</span>"  +"<br> <span class='text'>You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" +"</span>"  + ", <br><span class='text'> in the year " + "<span class='highlight'>" + yearNow + "</span>"+"</span>";
}

function SliderValue()
{
    var slider = document.getElementById("rate");
    var output = document.getElementById("rate_display");
    output.innerHTML = slider.value; // Display the default slider value   
}
