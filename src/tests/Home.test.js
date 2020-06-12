Feature('View Practise Modules');

Scenario('Check stages exist', (I, Home, Lightbox) => {
    I.amOnPage("https://www.seleniumeasy.com/test/")
    Lightbox.closeLightbox()
    Home.scrollToComponent()

    Home.startPractice()
    I.waitForText("BASIC")
    Home.goToStageTwo()
    I.waitForText("INTERMEDIATE")
    Home.goToStageThree()
    I.waitForText("ADVANCED")
    Home.goToComplete()
    I.waitForText("WE ARE DONE")
});