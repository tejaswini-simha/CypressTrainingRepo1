Feature: I want to login into the site
    Background: Navigate to the website
        Given user navigates to the website

    Scenario Outline: Login with different datasets
        When 'user' enters the "<username>" and "<password>"
        When user clicks on login button
        Then validate whether "<verification_message>" is displayed
    @positive
    Examples:
        | username | password | verification_message |
        | admin    | admin    | Login Successfully   |
        | admin    | admin123 | Login Successfully   |


    Scenario Outline: Login with different datasets with an extra tag
        When 'user' enters the "<username>" and "<password>"
        When user clicks on login button
        Then validate whether "<verification_message>" is displayed
        And Something else

    @negative
    Examples:
        | username | password | verification_message                     |
        | admin    | any      | Enter your userName and password correct |


    @positive
    Scenario: Login with single dataset
    When 'I' enter the "admin" and "admin"
    When user clicks on login button
    Then validate whether "Login Successfully" is displayed