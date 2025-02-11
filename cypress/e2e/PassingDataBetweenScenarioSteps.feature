Feature: I want be able to pass data from one step to another

    Scenario Outline: Data Passing between steps
        When I store "something" in a variable named "item1"
        Then I will be able to retrieve "something" from the variable named "item1"

    Scenario Outline: Data Passing between scenarios
        When I have stored something in the variable named item1 in the previous scenario
        Then I will be able to retrieve "something" from the variable named "item1"