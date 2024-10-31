// Initialize GitGraph.js
const gitgraph = new GitGraph({
    template: {
        branch: {
            lineWidth: 8,
            spacingX: 20,
            labelRotation: 0
        },
        commit: {
            spacingY: -40,
            dot: { size: 12 },
            message: { font: "normal 14pt Arial" }
        }
    },
    orientation: "vertical-reverse",
    author: '', // 'Dean Ayalon <dev@deanayalon.com>',
})

// Create orphan branches
const branch = {
    ts: gitgraph.branch({ 
        name: 'ts',
        lineWidth: 4,
        lineDash: [8, 4],
        // commitDefaultOptions: { dot: { size: 3 } } 
    }),

    main: gitgraph.branch('main')
}

// Initial ts branch
branch.ts.commit('Initial commit')
    .commit('added typescript code')
    .commit('Create LICENSE')
branch.main.commit('Initial commit')
branch.ts.commit(
    'Fix: npm run preview for MacOS, extracted into scripts/preview.sh\n' + 
    'Configure wix.config for my own demo website'
)

// Main branch development
branch.main.commit('Add images demo for alternating image on hover')
    .commit('Images demo - Add show/hide image elements for comparison')
    .commit('Changed Images page to Demos/Alternate Images, cleaned UI')
    .commit('UI: demos/alt-img - Add info')
    .commit('Documentation')
    .commit('Test out table sorting')
    .commit('Add demo - Table sort')
    .commit('UI: Add Demos/Table Sort to menu')
    .commit('Fix: r/WixHelp link was not updated on live site deployment')
    .commit('Rename pages and add Sandbox page')
    .commit('Convert help thread button at the bottom of demo pages into dynamic global section')
    .commit('Dynamic help button styling error')
    .commit('Fix: #thread button style')
    .commit('Change Demo/Pages to Demo - Pages, as @wix/cli jsconfig is generated wrong')
    .commit('Implement demo - Gallery Actions')
    .commit('Clean masterPage code')
    .commit('Add Input_beforeInsert data hook')
    .commit('UI: Sandbox - Add form for data hook')
    .commit('Sandbox - Add #spoiler, #spoilerText')
    .commit('Site - Add Wix-Stores; Sandbox - add store/products to store/collections queryReference')
    .commit('Sandbox - Disable Store/Products.collections queryReference')
    .commit('Add coupon query to Cart Page, add Cart button to Sandbox')
    .commit('Add fade lightbox to rest fadeout, Test Wix apps, plan two demos (abandoned)')
    .commit('Imaplement fade lightbox')
    .commit('Add WixChat for testing purposes')
    .commit('Add multilingual demo automatically switching to Hebrew')
    .commit('Add demo - hide all: Hides all elements on the page')
    .commit('Add iFrame for hosting on GitHub Pages')
    .commit('Add Demo - Git iFrame')
    .commit('Git iFrame demo - Menu and URL')
    .commit('Add script to preview and open in browser')
    .commit('Add repo badge button to test iFrame')
    .commit('Test iFrame - Open links on parent window')
    .commit('GitHub Action to automatically publish site')
    .commit('Test GitHub job condition')
    .commit('Dump job condition for workflow branch restriction')
    .commit('Limit publish action to when source files or UI version are changed')
    .commit('Change homepage log message to test publish action')
    .commit('Add blog page')
    .commit('Publish workflow - Get Wix CLI step name fix')

// help/icess
branch.icess = gitgraph.branch('help/icess')
    .commit('Code as created by icess')
    .commit('Fix code errors - Asynchronous execution and Wix web-module protocol')
    .commit('UI: Remove search bar from header')
    .merge(branch.main, "Merge branch 'help/icess'")

// demo/anchor
branch.anchor = gitgraph.branch('demo/anchor')
    .commit('Anchor demo - UI, test url#anchor')
    .commit('Anchor demo - Add functionality using URL query')
    .commit('Test scrollTo before page load')
    .commit('Test succeeded - format code')
    .merge(branch.main, "Merge branch 'demo/anchor'")

// timestamp branch
branch.timestamp = gitgraph.branch('timestamp')
    .commit('Removing default Wix template code')
    .commit('Test timed publish workflow')
    .commit('Debug script not found - ls')
    .commit('Trigger workflow when it updates')
    .commit('Fix sparse checkout paths')
    .commit('Fix ls command separation')
    .commit('.github not cloned; Surround .github with quotation marks to see if it helps')
    .commit('Clone entire .github dir')
    .commit('Show timestamp on homepage')
    .commit('Link to workflow run')
    .commit('Clean up for main')
    .merge(branch.main, "Merge branch 'timestamp'")

// Main branch development
branch.main.commit('Add documentation, only last line in release.js will be replaced - preserves comments')
    .commit('Print release.js to debug comments not appearing on site')
    .commit('Fix: head -n -1 cannot write to the file it reads from')
    .commit('Visualize Git graph in iFrame, remove unused pages')

// GitGraph iFrame
branch.graph = gitgraph.branch('gitgraph')
    .commit('Visualize Git graph in iFrame, remove unused pages')
    .commit('Clean code and add "Uncommitted changes"')
    .merge(branch.main, "Merge branch 'gitgraph'")

// UI revert test
branch.main.commit('Move GitGraph iFrame to home page')

// Uncommitted changes
branch.main.commit('[Uncommitted changes] Always playing with stuff...')