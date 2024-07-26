import wixWindow from 'wix-window-frontend'
import wixData from 'wix-data'

$w.onReady(() => {
    // https://forum.wixstudio.com/t/contact-form-field/61098
    $w('#input').onCustomValidation((value, reject) => {
        if (!value.toLocaleLowerCase().includes('london')) reject('The word London is missing!')
    })

    // https://www.reddit.com/r/WixHelp/comments/1ec4f0j/dropdown_text_boxes/
    const spoilerText = $w('#spoilerText')
    $w('#spoiler').onClick(() => spoilerText.collapsed ? spoilerText.expand() : spoilerText.collapse())
})