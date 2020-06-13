const { I } = inject();

module.exports = {
    root: '#cesis_header',

    button: {
        solutions: '/html/body/div[2]/div[1]/header/div[1]/div/nav/div/ul/li[2]',
        about: '/html/body/div[2]/div[1]/header/div[1]/div/nav/div/ul/li[1]',
    },

    waitLoad() {
        I.waitForElement(this.root)
    },

    pressSolutions() {
        I.click(this.button.solutions)
    }
}