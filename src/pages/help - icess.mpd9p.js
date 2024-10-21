import {echoMessage} from 'backend/icess.web'

$w("#button").onClick(async () => { // callMessage
    const msg = await echoMessage("Hey we are testing..");
    console.log(msg)
})