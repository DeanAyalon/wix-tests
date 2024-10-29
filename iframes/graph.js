// Initialize GitGraph.js
const context = document.getElementById("gitGraph").getContext("2d");
const gitgraph = new GitGraph({
    // template: "metro",
    orientation: "vertical-reverse",
    // canvas: context,
})

// Add branches and commits
const branch = {
    ts: gitgraph.branch('ts'),
    main: gitgraph.branch('main')
}
branch.ts.commit('Initial commit')
branch.ts.commit('added typescript code')
branch.ts.commit('Create LICENSE')
branch.main.commit('Initial commit')
branch.ts.commit(
    'Fix: npm run preview for MacOS, extracted into scripts/preview.sh\n' + 
    'Configure wix.config for my own demo website'
)

branch.main.commit('Add images demo for alternating image on hover')
branch.main.commit('Images demo - Add show/hide image elements for comparison')
branch.main.commit('Changed Images page to Demos/Alternate Images, cleaned UI')
branch.main.commit('UI: demos/alt-img - Add info')
branch.main.commit('Documentation')
branch.main.commit('Test out table sorting')
branch.main.commit('Add demo - Table sort')
branch.main.commit('UI: Add Demos/Table Sort to menu')
branch.main.commit('Fix: r/WixHelp link was not updated on live site deployment')
branch.main.commit('Rename pages and add Sandbox page')
branch.main.commit('Convert help thread button at the bottom of demo pages into dynamic global section')
branch.main.commit('Dynamic help button styling error')
branch.main.commit('Fix: #thread button style')
branch.main.commit('Change Demo/Pages to Demo - Pages, as @wix/cli jsconfig is generated wrong')
branch.main.commit('Implement demo - Gallery Actions')
branch.main.commit('Clean masterPage code')
branch.main.commit('Add Input_beforeInsert data hook')
branch.main.commit('UI: Sandbox - Add form for data hook')
branch.main.commit('Sandbox - Add #spoiler, #spoilerText')
branch.main.commit('Site - Add Wix-Stores; Sandbox - add store/products to store/collections queryReference')
branch.main.commit('Sandbox - Disable Store/Products.collections queryReference')
branch.main.commit('Add coupon query to Cart Page, add Cart button to Sandbox')
branch.main.commit('Add fade lightbox to rest fadeout, Test Wix apps, plan two demos (abandoned)')
branch.main.commit('Imaplement fade lightbox')
branch.main.commit('Add WixChat for testing purposes')
branch.main.commit('Add multilingual demo automatically switching to Hebrew')
branch.main.commit('Add demo - hide all: Hides all elements on the page')
branch.main.commit('Add iFrame for hosting on GitHub Pages')
branch.main.commit('Add Demo - Git iFrame')
branch.main.commit('Git iFrame demo - Menu and URL')
branch.main.commit('Add script to preview and open in browser')
branch.main.commit('Add repo badge button to test iFrame')
branch.main.commit('Test iFrame - Open links on parent window')
branch.main.commit('GitHub Action to automatically publish site')
branch.main.commit('Test GitHub job condition')
branch.main.commit('Dump job condition for workflow branch restriction')
branch.main.commit('Limit publish action to when source files or UI version are changed')
branch.main.commit('Change homepage log message to test publish action')
branch.main.commit('Add blog page')
branch.main.commit('Publish workflow - Get Wix CLI step name fix')

branch.icess = gitgraph.branch('help/icess')
branch.icess.commit('Code as created by icess')
branch.icess.commit('Fix code errors - Asynchronous execution and Wix web-module protocol')
branch.icess.commit('UI: Remove search bar from header')
branch.icess.merge(branch.main, "Merge branch 'help/icess'")

branch.anchor = gitgraph.branch('demo/anchor')
branch.anchor.commit('Anchor demo - UI, test url#anchor')
branch.anchor.commit('Anchor demo - Add functionality using URL query')
branch.anchor.commit('Test scrollTo before page load')
branch.anchor.commit('Test succeeded - format code')
branch.anchor.merge(branch.main, "Merge branch 'demo/anchor'")

branch.timestamp = gitgraph.branch('timestamp')
branch.timestamp.commit('Removing default Wix template code')
branch.timestamp.commit('Test timed publish workflow')
branch.timestamp.commit('Debug script not found - ls')
branch.timestamp.commit('Trigger workflow when it updates')
branch.timestamp.commit('Fix sparse checkout paths')
branch.timestamp.commit('Fix ls command separation')
branch.timestamp.commit('.github not cloned; Surround .github with quotation marks to see if it helps')
branch.timestamp.commit('Clone entire .github dir')
branch.timestamp.commit('Show timestamp on homepage')
branch.timestamp.commit('Link to workflow run')
branch.timestamp.commit('Clean up for main')
branch.timestamp.merge(branch.main, "Merge branch 'timestamp'")

branch.main.commit('Add documentation, only last line in release.js will be replaced - preserves comments')
branch.main.commit('Print release.js to debug comments not appearing on site')
branch.main.commit('Fix: head -n -1 cannot write to the file it reads from')

branch.graph = gitgraph.branch('graph')
branch.graph.commit('Visualize Git graph in iFrame, remove unused pages')