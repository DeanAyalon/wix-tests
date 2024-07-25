import wixData from 'wix-data'
import wixLocation from 'wix-location'
import wixWindow from 'wix-window-frontend'

$w.onReady(() => {
    // @ts-ignore - @wix/cli sets $w.Gallery as $w.IFrame
    $w('#gallery').onItemClicked(async e => {
        const img = await wixData.query('Images').eq('title', e.item.title).find().then(res => {
            if (!res.length) throw 'Image not found in database!'
            return res.items[0]
        })

        if (img.redirect) wixLocation.to(img.link)
        else wixWindow.openLightbox('Gallery Image', img)
    })
})