// Code your solution in this file!
const Hq = 42
function distanceFromHqInBlocks(blocks) {
    if (blocks < Hq) return Hq - blocks
    return blocks - Hq
}

function  distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks) * 264
}

// const start = 42
function distanceTravelledInFeet(Hq, destination){
    return Math.abs(destination - Hq) * 264
}


function calculatesFarePrice(Hq, destination){
    let distance =  distanceTravelledInFeet(Hq, destination)
    if (distance <= 400){
        return  0;
    } else if (distance <=2000){
        return (Math.abs(distance - 400)) * 0.02;
    }else if (distance > 2000 && distance <= 2500){
        return 25;
    }else if (distance > 2500){
        return "cannot travel that far";
    }
}