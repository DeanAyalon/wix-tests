/* SDK - Failing to install the Velo package
import siteLocation from '@wix/site-location'

const tabPromise = siteLocation.location.query().then(query => query['tab'])
$w.onReady(() => tabPromise.then(tab => tab ?? $w('#tabs').changeTab(tab)))

/*/ // Old - Velo
    // wixLocation.query is synchronous and may run faster, I'd like to check
import wixLocation from 'wix-location-frontend'

// Bug - $w.Tabs.changeTab() should accept the tab id, but it doesn't, therefore, the $w.Tab object is needed
// const tab = wixLocation.query['tab']
// $w.onReady(() => tab ?? $w('#tabs').changeTab(tab))

/** The Tabs element
 * @type {$w.Tabs} 
 * @ts-expect-error - $w('#tabs') is incorrectly recognized as $w.HiddenCollapsedElement */
const tabsElement = $w('#tabs')
tabsElement.tabs.forEach(tab => tab.id === wixLocation.query['tab'] && tabsElement.changeTab(tab))

// */


// Created for https://discord.com/channels/1114269395317968906/1356660128698339428