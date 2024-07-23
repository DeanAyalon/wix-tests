import wixData from 'wix-data'

$w.onReady(() => {
    // @ts-ignore - @wix/cli generated types do not include multi-tag selectors
    $w('#sortBy, #order').onChange(sort)
})

function sort() {
    const sortBy = $w('#sortBy').value
    const order = $w('#order').value
    console.log('Sorting', sortBy, order);
    $w('#dataset').setSort(wixData.sort()[order](sortBy))
}