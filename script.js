bannerImg = document.getElementById("bannerImg");

var counter = 1;
setInterval(myMethod, 3000);

function myMethod()
{
    bannerImg.src = `images/cccircular_${counter}.svg`;
    counter++;
    if(counter > 6)
    {
        counter = 0;
    }
}