Feature: I want to login into the site with valid data
    Background: Navigate to the website
        Given user navigates to the website

    @smoke @positive
    Scenario Outline: Login as user with valid password
        When 'I' enter the given credentials
            | username | password |
            | admin    | admin    |
        And user clicks on login button
        Then validate whether "Login Successfully" is displayed

    Scenario: Login as user with invalid password
        When 'user' enters the given credentials
            | username | password |
            | admin    | any      |
        When user clicks on login button
        Then validate whether "Enter your userName and password correct" is displayed


    @negative
    Scenario: Login as user with invalid password
        When 'user' enters the given credentials
            | username | password |
            | admin    | any      |
        When user clicks on login button
        Then validate whether "<msg>" is displayed

    Examples:
        | msg |
        |Enter your userName and password correct|
