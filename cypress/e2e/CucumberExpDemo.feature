Feature: Cucumber expressions
    Scenario: Eating cucumbers
        Given there are 24 apples
        Given I have 12.5 kilos of cucumbers
        When I have a green cucumber
        When I have both "green and white" cucumbers
        Given I have a basket full of cucumbers

    # Scenario: Eating cucumbers with data-table
    #     Given there are <noOfCucumbers> cucumbers
    #     Given I have <weightOfCucumbers> kilos of cucumbers
    #     When I have a <colourOfCucumber> cucumber
    #     When I have both "green and white" cucumbers
    #     Given I have a basket full of cucumbers
    # Examples:
    #     | noOfCucumbers | weightOfCucumbers | colourOfCucumber |
    #     | 12            | 12.5              | green            |