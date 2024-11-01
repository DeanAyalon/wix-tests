import { timestamp, commit, run, ui } from "public/release"

console.log(`Welcome to my demo website!
    This is used for tests and demonstrations, usually when helping people in the forums
    This site is published automatically on commit using GitHub Actions
    In fact, this log message was written for the sole purpose of testing it :)`)

$w('#release').text = `Timestamp: ${timestamp}\nCommit: ${commit}\nRun ID: ${run}\nUI Version: ${ui}`
$w('#workflow').link = 'https://github.com/DeanAyalon/wix-tests/actions/runs/' + run