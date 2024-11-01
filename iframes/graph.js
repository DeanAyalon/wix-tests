// Initialize GitGraph.js
const gitgraph = new GitGraph({
    template: {
        colors: [
            'blue',         // main
            'grey',         // abandoned
            'magenta',      // help
            'orange',       // demo
            'limegreen',    // feature
            'teal',         // test
        ],
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
    author: 'Dean',
})

// Create orphan main branch
const branch = { main: gitgraph.branch('main') }
// Define authors
const author = { ts: 'Algimantas Krasauskas <algimantask@wix.com>' }

// Forked ts branch
branch.ts = gitgraph.branch({ 
    name: 'ts',
        lineWidth: 4,
        lineDash: [8, 4]
    })
    .commit({ message: 'Initial commit', author: 'Velo' })
    .commit({ message: 'added Typescript code', author: author.ts })
    .commit({ message: 'Create LICENSE', author: author.ts })

// Project start
branch.main
    .commit({ message: 'Initial commit', author: 'Velo' })
branch.ts
    .commit('Fix: npm run preview for MacOS, modify wix.config for my own site')

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

// Gelp - icess
branch.help = branch.main.branch('help')        // using gitgraph.branch() branches off from the ts branch for some reason
    .commit('help/icess - Code as created by icess')
    .commit('help/icess - Fix code errors - Asynchronous execution and Wix web-module protocol')
    .commit('help/icess - UI: Remove search bar from header')
    .merge(branch.main, "Merge branch 'help/icess'")

// Demo - Anchor
branch.demo = gitgraph.branch('demo')
    .commit('demo/anchor - UI, test url#anchor')
    .commit('demo/anchor - Add functionality using URL query')
    .commit('demo/anchor - Test scrollTo before page load')
    .commit('demo/anchor - Test succeeded, format code')
    .merge(branch.main, "Merge branch 'demo/anchor'")

// Feature - GitHub Actions
branch.feature = gitgraph.branch('feature')
    .commit('feature/gh-actions - Removing default Wix template code')
    .commit('feature/gh-actions - Test timed publish workflow')
    .commit('feature/gh-actions - Debug script not found - ls')
    .commit('feature/gh-actions - Trigger workflow when it updates')
    .commit('feature/gh-actions - Fix sparse checkout paths')
    .commit('feature/gh-actions - Fix ls command separation')
    .commit('feature/gh-actions - .github not cloned; Surround .github with quotation marks to see if it helps')
    .commit('feature/gh-actions - Clone entire .github dir')
    .commit('feature/gh-actions - Show timestamp on homepage')
    .commit('feature/timestamp - Link to workflow run')
    .commit('feature/timestamp - Clean up for main')
    .merge(branch.main, "Merge branch 'feature/timestamp'")

// Main branch development
branch.main
    .commit('Add documentation, only last line in release.js will be replaced - preserves comments')
    .commit('Print release.js to debug comments not appearing on site')
    .commit('Fix: head -n -1 cannot write to the file it reads from')
    .commit('Visualize Git graph in iFrame, remove unused pages')

// Feature - GitGraph iFrame
branch.main.merge(branch.feature, 'feature/gitgraph - Visualize Git graph in iFrame, remove unused pages')
branch.feature
    .commit('feature/gitgraph - Clean code and add "Uncommitted changes"')
    .merge(branch.main, "Merge branch 'feature/gitgraph'")
branch.main.commit('Move GitGraph iFrame to home page')

// Test - Site version revert
branch.test = gitgraph.branch('test')
    .commit('test/revert - Move release to test reverting UI')
    .commit('test/revert - Restoring a previous version of the site creates an identical UI version, code is not reverted when integrating with GitHub')
    .merge(branch.main, "Merge branch 'test/revert'")

// Present
branch.main.merge(branch.feature, 'Color GitGraph')
branch.feature
    .commit('Design a more gitflow-like graph due to API limitations')
    .merge(branch.main, "Merge branch 'feature/gitgraph'")
branch.main
    .commit('Comments and minor changes to publish workflows')

// Help - A_Kirk
    .merge(branch.help, "help/A_Kirk - Retrieve product's collections")

// Feature - GitHub Actions
    .merge(branch.feature, 'feature/gh-actions - Add UI version to release.js')
branch.feature.merge(branch.main, "Merge branch 'feature/gh-actions'")

// Uncommitted changes
branch.main.commit('[Uncommitted changes] Always playing with stuff...')