function showBar(barId) {
    hideAll();
    document.getElementById(barId).style.visibility = "visible";
  }

function hideAll()
{
    document.getElementById('barZero').style.visibility = "hidden";
    document.getElementById('barOne').style.visibility = "hidden";
    document.getElementById('barTwo').style.visibility = "hidden"; 
    document.getElementById('barThree').style.visibility = "hidden"; 
    document.getElementById('barFour').style.visibility = "hidden";
    document.getElementById('barFive').style.visibility = "hidden"; 
    document.getElementById('barSix').style.visibility = "hidden"; 
    document.getElementById('barSeven').style.visibility = "hidden";
}