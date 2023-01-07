const { I } = inject();
// Add in your custom step files

Given('I go to Google page', () => {
  I.amOnPage("https://www.google.com/")
});
