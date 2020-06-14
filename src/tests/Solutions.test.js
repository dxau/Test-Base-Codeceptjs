Feature('Check solutions are accessable');

Scenario('By coursel', (I, Home, Solutions) => {
  // Nav to solutions page
  I.amOnPage('https://dx.com.au/');
  Home.coursel.waitLoad();
  Home.coursel.pressSlideOneButton();

  // Check content
  Solutions.content.waitLoad();
  Solutions.sideNav.pressQE();
  I.see('Quality Engineering', Solutions.content.root);
  Solutions.sideNav.pressDevOps();
  I.see('DevOps', Solutions.content.root);
  Solutions.sideNav.pressRPA();
  I.see('Robotic Process Automation', Solutions.content.root);
  Solutions.sideNav.pressNetworks();
  I.see('NETWORK', Solutions.content.root);
});

Scenario('By main nav', (I, Common, Solutions) => {
  // Nav to solutions page
  I.amOnPage('https://dx.com.au/');
  Common.header.pressSolutions();

  // Check content
  Solutions.content.waitLoad();
  Solutions.sideNav.pressQE();
  I.see('Quality Engineering', Solutions.content.root);
  Solutions.sideNav.pressDevOps();
  I.see('DevOps', Solutions.content.root);
  Solutions.sideNav.pressRPA();
  I.see('Robotic Process Automation', Solutions.content.root);
  Solutions.sideNav.pressNetworks();
  I.see('NETWORK', Solutions.content.root);
});
