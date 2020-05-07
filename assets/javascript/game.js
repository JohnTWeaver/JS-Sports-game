const counter1 = document.querySelector('#teamone-shoot-button');
const counter2 = document.querySelector('#teamtwo-shoot-button');

const teamoneshoots = document.querySelector('#teamone-numshots');
const teamtwoshoots = document.querySelector('#teamtwo-numshots');

const teamonescores =document.querySelector('#teamone-numgoals');
const teamtwoscores =document.querySelector('#teamtwo-numgoals');

const resets = document.querySelector('#num-resets');
const resetbutton = document.querySelector('#reset-button');


counter1.addEventListener("click", function(){ 
    console.log("+ Team One shoot");
    let newCounterValue = Number(teamoneshoots.innerHTML) + 1;
    teamoneshoots.innerHTML = newCounterValue;

    if(Math.random()<.5){
        console.log("GOALteam1");
        let shoothit = Number(teamonescores.innerHTML) + 1;
        teamonescores.innerHTML = shoothit;
    }
    else
    {
        console.log("ShootMissed");
    }


})

counter2.addEventListener("click", function(){ 
    console.log("+ Team Two shoot");
    let newCounterValue = Number(teamtwoshoots.innerHTML) + 1;
    teamtwoshoots.innerHTML = newCounterValue;

    if(Math.random()<.5){
        console.log("GOALteam2");
        let shoothit = Number(teamtwoscores.innerHTML) + 1;
        teamtwoscores.innerHTML = shoothit;
    }
    else
    {
        console.log("ShootMissed");
    }
})


resetbutton.addEventListener("click", function(){
    console.log("Game Reset");
    let resetscount = Number(resets.innerHTML)+1;
    resets.innerHTML = resetscount;

    teamoneshoots.innerHTML = 0;
    teamtwoshoots.innerHTML = 0;
    teamonescores.innerHTML = 0;
    teamtwoscores.innerHTML = 0;
})