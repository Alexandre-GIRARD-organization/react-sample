Feature: Is marvel search work ?
    Everybody wants to search for Marvel character

    Scenario: Finding Wolverine
        Given I am on the home page
        When I search for "wolverine"
        Then the page title should be "Marvel Sample"