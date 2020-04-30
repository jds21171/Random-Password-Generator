# Random Password Generator

A web application that allows you to create your own unique password between 8-128 characters. You can select criteria such as uppercase/lowercase letters, numbers, and symbols to be included in your password. Once you have your desired password length and characters, hit the 'generate password' button to get your new password. You can experience the deployed project here: https://jds21171.github.io/Random-Password-Generator/

## User Story

```
AS A Web Developer whose job it is to ensure user safety
I WANT to create a program that randomly generate a password that meets certain criteria
SO THAT the users can have strong passwords that provide greater security for them
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```

