import { timestamp, commit } from "public/release"
import wixLocation from 'wix-location-frontend'

console.log(`Welcome to my demo website!
    This is used for tests and demonstrations, usually when helping people in the forums
    This site is published automatically on commit using GitHub Actions
    In fact, this log message was written for the sole purpose of testing it :)`)

$w('#timestamp').text = `Timestamp: ${timestamp}\nCommit: ${commit}`
$w('#timestamp').onClick(() => wixLocation.to('https://github.com/deanayalon/wix-tests/tree/' + commit))