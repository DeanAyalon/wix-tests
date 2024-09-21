import wixWindow from 'wix-window-frontend'

$w('#close').onClick(() => $w('#lightbox').hide('fade', { duration: 3500 })
                                .then(wixWindow.lightbox.close))