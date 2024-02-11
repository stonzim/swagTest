Feature: Price Check Suite

  Scenario: We log in an check put the lowest and highest priced items in the cart
    Given User has logged into the swag store
    When User puts the lowest priced item in the cart
    And User put the highest priced item in the cart
    Then The cart will have the correct number of items in it displayed
