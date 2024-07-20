$w.onReady(() => {
    console.log('ready');
    $w('#repeater').onItemReady(($item, data) => {
        console.log('itemready', data.title);
        $item('#img').onMouseIn(() => {
            console.log('mousein', data.title);
            $item('#img').src = data.altImage
        })
        $item('#img').onMouseOut(() => {
            console.log('mouseout', data.title);
            $item('#img').src = data.mainImage
        })
    })
})