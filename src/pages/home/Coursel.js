const {I} = inject();

module.exports = {

  root: '#main-content',

  button: {
    slide: '//*[@id="cesis_button_exq66ea529o883vw941m"]/span[2]',
  },

  waitLoad() {
    I.waitForElement(this.root);
  },

  pressSlideOneButton() {
    I.click(this.button.slide);
  },
};
