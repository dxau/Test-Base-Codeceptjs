const { I } = inject();

module.exports = {
    
    button: {
        close: '#at-cv-lightbox-close',
    },

    div: {
        lightbox: '#at-cv-lightbox',
    },

    closeLightbox() {
        I.click(this.button.close)
    },
}
