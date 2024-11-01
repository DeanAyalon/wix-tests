// Functions to be manually executed in the Editor for easy debugging
import wixData from 'wix-data';

export async function richContent() {
    const data = await wixData.query('StaticData').find()
        .then(res => res.items[0])
    
    console.log('Home page - Welcome!')
    console.log(data.welcomeText)
}