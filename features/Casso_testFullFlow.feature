Feature: Business rules for full flow
  In order to achieve my goals
  As a persona
  I want to be able to verify login step 

  Scenario: Check create business flow
    Given I login to Casso page
    And I click on create business button
    And I create a new business 
    And I delete business

  