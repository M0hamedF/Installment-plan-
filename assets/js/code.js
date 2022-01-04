function change() {
    //Get  
    var total = document.getElementById("total").value; //inputs
    var down = document.getElementById("down").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var x = total * rate / 100
    var y = +total + +x;
    var z = y - down;
    var q = z / (years * 12);

    var m1 = "You Should Pay= ";
    var m2 = " /M";

    //Set 
    document.getElementById("calculate").innerHTML = m1 + q + m2; //outputs
}