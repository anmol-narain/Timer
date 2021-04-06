console.log("Welcome To Hackathon");
var hackDate= new Date("apr 19, 2021 00:00:00").getTime();

// toggling seconds...
var timer= setInterval(function(){

    // date of hackathon
    var currentDate= new Date().getTime();
    
    // system's date
    var difference= hackDate - currentDate ;
    // console.log(difference);

    // showing in ms therefore 
    // days
    var DD = Math.floor(difference/ (24*60*60*1000));
    console.log(DD);
    // remainder divided by 60 *60 to get HH...
    var HH =  Math.floor((difference % (24*60*60*1000)) /  (60*60*1000));
    console.log(HH);
    var MM =  Math.floor((difference % (60*60*1000)) / (60*1000));
    console.log(MM);
    var SS =  Math.floor((difference % (60*1000)) / (1000));
    console.log(SS);

    document.getElementById("counter-container").innerHTML = DD + "d " + HH + "hrs " + MM + "mins "+ SS + "sec";

},1000);
