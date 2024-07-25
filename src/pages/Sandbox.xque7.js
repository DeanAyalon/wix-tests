import wixWindow from 'wix-window-frontend'
import wixData from 'wix-data'

$w.onReady(() => {
    // https://forum.wixstudio.com/t/contact-form-field/61098
    $w('#input').onCustomValidation((value, reject) => {
        if (!value.toLocaleLowerCase().includes('london')) reject('The word London is missing!')
    })
})