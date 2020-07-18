//First Problem start.
function feetToMile(feet){
 var mile = feet / 5280;
 
 return mile;
}
//First Problem end..

//2nd problem start.
function woodCalculator(chair, table, bed){

    var i, totalWood = 0;

    //for a chair 1 cubic feet needed.
    for(i = 1; i <= chair; i++){
        totalWood++;
    }

    //for a table 3 cubic feet needed.
    for(i = 1; i <= table; i++){
        totalWood = totalWood + 3;
    }

    //for a bed 5 cubic feet needed.
    for(i = 1; i <= bed; i++){
        totalWood = totalWood + 5;
    }

    return totalWood;
}
//2nd problem end.

//3dr problem stat

function brickCalculator(storey){

    var totalBrick, brickForTenStorey, brickForTwentyStorey;

    //for 1 feet, need 1000 brick.

    //for 1-10 storey, 15 feet needed for per storey.
    if(storey <= 10){
        totalBrick = storey * 15 * 1000;
    }

    //for 11-20 storey, 12 feet needed for per storey.
    else if(storey >10 && storey <= 20){
        brickForTenStorey = 10 * 15 * 1000;
        totalBrick = (storey-10) * 12 * 1000 + brickForTenStorey;
    }

    //for more than 20 storey, 10 feet needed for per storey.
    else{
        brickForTenStorey = 10 * 15 * 1000;
        brickForTwentyStorey = (20-10) * 12 * 1000 + brickForTenStorey;
        totalBrick = (storey-20) * 10 * 1000 + brickForTwentyStorey;
    }

    return totalBrick;
}
//3rd problem end

//4th problem start 
function tinyFriend(name){

    var min = name[0].length;
    for(var i = 0; i < name.length; i++){
        var element = name[i].length;
        if(element < min){
            min = element;
            tinyName = name[i];
        }
    }

    return tinyName;
}
//4th problem end.
