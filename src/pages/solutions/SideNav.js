const {I} = inject();

module.exports = {
  root: '.tabs',

  button: {
    qe: '.tabs li:nth-child(1)',
    devops: '.tabs li:nth-child(2)',
    rpa: '.tabs li:nth-child(3)',
    networks: '.tabs li:nth-child(4)',
  },

  waitLoad() {
    I.waitInUrl(this.path);
    I.waitForElement(this.root);
  },

  pressQE() {
    I.click(this.button.qe);
  },

  pressDevOps() {
    I.click(this.button.devops);
  },

  pressRPA() {
    I.click(this.button.rpa);
  },

  pressNetworks() {
    I.click(this.button.networks);
  },
};
