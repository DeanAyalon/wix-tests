import wixLocation from 'wix-location-frontend'

const anchor = wixLocation.query['anchor']
// @ts-ignore
if (anchor) $w('#' + anchor).scrollTo()