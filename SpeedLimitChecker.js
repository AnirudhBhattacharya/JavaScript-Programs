/*
 * Demirit Score for speed driving
 * Speed Limit is defined at 70 kmph. After 70 for each 5km rise in speed,
 * 1 score is given to the driver. After receiving 12 score point, the driver 
 * license is suspended. Below speed limit the console must display Ok
 * message
 */
checkSpeed(70);

function checkSpeed(speed) {
    
    const speedLimit = 70;
    const pointLimitPerkm = 5;
    
    if (speed < speedLimit + pointLimitPerkm) {
        console.log('Ok');
        return;
    }
    
    let score = Math.floor((speed - speedLimit) / (pointLimitPerkm))
    
    if (score >= 12)
        console.log('License Suspended');
    else {
        console.log('Score', score);
    }
} 