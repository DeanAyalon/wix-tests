import wixData from 'wix-data'

// @ts-ignore
$w('#productPage').getProduct().then(product => {                       // product.collections always null
    // wixData.query('Stores/Products').eq('_id', product._id)
    //     .find().then(res => {
    //         console.log(res.items[0])                                // .collections still always null
    //     })

    wixData.queryReferenced('Stores/Products', product._id, 'collections').then(console.log)
})