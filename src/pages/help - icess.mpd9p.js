import {echoMessage} from 'backend/icess.web'
$w.onReady(function () {
    $w("#button").onClick(callMessage);

});


function callMessage() {
    const msg = echoMessage("Hey we are testing..");
    console.log(msg)    
}