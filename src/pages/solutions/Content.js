const {I} = inject();

export const Content = {
  root: '.tab-box.tabs-container',

  waitLoad() {
    I.waitForElement(this.root);
  },
};
