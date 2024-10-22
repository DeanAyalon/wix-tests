import wixLocation from 'wix-location-frontend'

const anchor = wixLocation.query['anchor']

// $w.onReady(() => {
    // @ts-ignore
    if (anchor) $w('#' + anchor).scrollTo()
// })