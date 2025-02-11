Feature: I want to login into the site
    Scenario Outline: Pass the json filename and the key to validated
        When the user passes the '<filename>' and '<key>'
        Then verify the value retrieved is '<value>'
    Examples:
        | filename | key | value |
        | example    | email    | hello@cypress.io   |
        | example    | name | Using fixtures to represent data   |