//Computes the amount of money a user will receive in interest after a certain amount of time.
function compute()
{
    //These variables are necessary to find the amount of interest the user would gain.
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //This variable computers the amount of interest the user would receive.
    var interest = principal * years * rate / 100;

    //Determines the real-life year the user would have the specified amount of interest.
    var year = new Date().getFullYear() + parseInt(years);  
    
    //Prints the results to the user if they typed in a positive number for the principal value.
    //Also highlights numbers in yellow by utilizing CSS.
    if (checkPrincipal() == true)
    {
        document.getElementById("result").innerHTML = "Given a principal input of <mark>$" + principal
        + "</mark> at an interest rate of <mark>" + rate + "%</mark>, you will receive <mark>$" + interest 
        + "</mark> by the year <mark>" + year + "</mark>.";
    }   
}

//Updates the interest rate value on the HTML page.
function updateRate()
{
    var rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateVal;
}

//If the user tries to enter zero or a negative value, the computer process will not finish 
//and the user is required to input a positive number.
function checkPrincipal()
{
    var prc = document.getElementById("principal").value;
    
    //If the user did not type in a positive number, they will not be allowed to compute their interest.
    if (prc <= 0)
    {
        alert("Please enter a positive number.")
        document.getElementById("principal").focus();
        return false;
    }

    return true;
}
        