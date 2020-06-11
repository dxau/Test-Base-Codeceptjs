const { I } = inject();

module.exports = {
    
    button: {
        start: '#btn_basic_example',
        stageOne: '#btn_inter_example',
        stageTwo: '#btn_advanced_example',
        stageThree: '#btn_done_example'
    },

    div: {
        component: '#easycont'
    },

    scrollToComponent() {
        I.scrollIntoView(this.div.component)
    },

    startPractice() {
        I.click(this.button.start)
    },

    goToStageTwo() {
        I.click(this.button.stageOne)
    },

    goToStageThree() {
        I.click(this.button.stageTwo)
    },

    goToComplete() {
        I.click(this.button.stageThree)
    },
}
