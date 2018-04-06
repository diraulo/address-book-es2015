Feature: Visit Home page
As a user
In order contact stay in touch with my friends
I would like to keep an address book with their contacts

  Background: Visit the home page
    Given I visit the site
    Then I should see "Contacts"

  Scenario: Create a new contact
    When I click "Add contact"
    Then I fill in "Name" with "John Doe"
    And I fill in "Email" with "john@doe.com"
    And I fill in "Phone" with "0123456789"
    And I fill in "Company" with "Craft Academy"
    And I fill in "Notes" with "A really awsome guy :-)"
    And I fill in "Twitter" with "johndoe"
    And I click "Save contact"
    Then I should have 1 contact in my address book