Feature('Check solutions are accessable');

Scenario('By coursel', (I, HomePage, SolutionsPage) => {
  // Nav to Solutions page
  I.amOnPage('https://dx.com.au/');
  HomePage.coursel.waitLoad();
  HomePage.coursel.pressSlideOneButton();

  // Check content
  SolutionsPage.content.waitLoad();
  SolutionsPage.sideNav.pressQE();
  I.see('Quality Engineering', SolutionsPage.content.root);
  SolutionsPage.sideNav.pressDevOps();
  I.see('DevOps', SolutionsPage.content.root);
  SolutionsPage.sideNav.pressRPA();
  I.see('Robotic Process Automation', SolutionsPage.content.root);
  SolutionsPage.sideNav.pressNetworks();
  I.see('NETWORK', SolutionsPage.content.root);
});

Scenario('By main nav', (I, Common, SolutionsPage) => {
  // Nav to Solutions page
  I.amOnPage('https://dx.com.au/');
  Common.header.pressSolutions();

  // Check content
  SolutionsPage.content.waitLoad();
  SolutionsPage.sideNav.pressQE();
  I.see('Quality Engineering', SolutionsPage.content.root);
  SolutionsPage.sideNav.pressDevOps();
  I.see('DevOps', SolutionsPage.content.root);
  SolutionsPage.sideNav.pressRPA();
  I.see('Robotic Process Automation', SolutionsPage.content.root);
  SolutionsPage.sideNav.pressNetworks();
  I.see('NETWORK', SolutionsPage.content.root);
});
