const { I } = inject();

module.exports = {
    root: '.tab-box.tabs-container',

    waitLoad() {
        I.waitForElement(this.root)
    },
}