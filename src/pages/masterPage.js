import wixData from 'wix-data'
import wixLocation from 'wix-location-frontend'

const path = wixLocation.path.join('/')

$w.onReady(() => {
    // Runs when page is loaded and data is fetched
    helpThreadPromise.then(res => {
        if (!res) return;
        res.forumPromise.then(forums => forums.length && updateThreadBtn(forums.items[0], res.thread))
    }, console.error)
})

// Called before page loads - Get the help thread related to the current page
const helpThreadPromise = wixData.query('HelpThreads').eq('path', path).find().then(res => {
    if (!res.length) return;
    const thread = res.items[0], 
        domain = new URL(thread.source).hostname
    console.log(domain)
    return {
        forumPromise: wixData.query('HelpForums').eq('domain', domain).find(),
        thread: res.items[0]
    }
}, console.error)

// Runs when data was fetched from forums and threads, and page is loaded
function updateThreadBtn(forum, thread) {
    console.log('Updating button', forum, thread);
    $w('#thread').icon = forum.icon
    $w('#thread').link = thread.source
    $w('#thread').label = thread.label
    $w('#thread').style.backgroundColor = 'red'
    console.log($w('#thread').style)
    // const {style} = forum
    // console.log(style, $w('#thread').style)
    // for (const key in style) {
    //     console.log(key, style[key], $w('#thread').style[key])
    //     $w('#thread').style[key] = style[key]
    //     console.log($w('#thread').style[key])
    //     console.log($w('#thread').style)
    // }
}