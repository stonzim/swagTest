Feature: Price Check Suite

  Scenario: User logs in and puts the lowest and highest priced items in cart
    Given User has logged into the swag store
    When User puts the lowest priced item in the cart
    And User puts the highest priced item in the cart
    Then The cart will display the correct number of items in it
