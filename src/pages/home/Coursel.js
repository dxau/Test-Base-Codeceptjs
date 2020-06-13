const { I } = inject();

module.exports = {

    root: '#main-content',

    button: {
        slideOne: '/html/body/div[2]/div[2]/div/div/div[1]/div[1]/div/div/div/div[2]/div/div[3]/div/div[2]/div/div/div/div/div[3]/a'
    },

    waitLoad() {
        I.waitForElement(this.root)
    },

    pressSlideOneButton() {
        I.click(this.button.slideOne)
    },
}
