Feature('View Practise Modules');

Scenario('Check stages exist', (I, Home, Lightbox) => {
    // Ensure that cache is cleared
    I.amOnPage("https://www.seleniumeasy.com/test/")
    I.clearLocalStorage()
    
    I.amOnPage("https://www.seleniumeasy.com/test/")
    Lightbox.closeLightbox()
    Home.scrollToComponent()
    Home.startPractice()
    I.see("BASIC EXAMPLES TO START WITH SELENIUM")
    Home.goToStageTwo()
    I.see("INTERMEDIATE EXAMPLES WITH MOST POPULAR COMPONENTS")
    Home.goToStageThree()
    I.see("ADVANCED EXAMPLES WITH COMPONENTS")
    Home.goToComplete()
    I.see("THANKS FOR STAYING TUNED! WE ARE DONE")
});
