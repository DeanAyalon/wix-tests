$w.onReady(() => {
    $w('#repeater').onItemReady(repeater_onItemReady)
})

// This function runs for each item in the repeater, when it's ready
function repeater_onItemReady($item, data) {
    // Set the mouse in/out triggers to alternate the source
    $item('#img').onMouseIn(() => $item('#img').src = data.altImage)
    $item('#img').onMouseOut(() => $item('#img').src = data.mainImage)

    // Set the mount in/out triggers to hide/show the alternate image elements
    $item('#img-main').onMouseIn(() => { $item('#img-main').hide(); $item('#img-alt').show() })
    $item('#img-alt').onMouseOut(() => { $item('#img-alt').hide(); $item('#img-main').show() })
}