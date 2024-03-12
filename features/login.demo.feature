Feature: Testing Login functionality of page

  Scenario Outline: Verifying login with valid credentials
    Given user is on login page
    When user enters <username> and <password>
    And user clicks on login button
    Then this <message> is displayed

    Examples: 
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |
