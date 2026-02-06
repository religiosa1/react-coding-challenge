# React + TypeScript + Vite

This is a coding challenge task. Go to [./src/App.tsx] to see the details.

Your task is to get user's input, validate it, and submit to the "/entry"
endpoint, as the following JSON payload:

```http
POST /entry
accept: application/json
content-type: application/json

{
  "username": "user input"
}
```

Validation rules are as follows, input must:

- must greater or equal than 6 chars
- must less than 13 chars
- must start with a a-z char, case-insensitive
- must contain at least one digit

Example of a valid input:

```
john doe1
John1doe
```

In case any validation error is encountered, form must not be sent to the server, and ALL of the errors
encountered must be displayed to a customer.

Validation may occur on submit.

Bonus points for adding loading indicators, as API is slow, and displaying some error message if submit failed,
as the API is flay and sometimes errors out.

CSS and styling is beyond the scope of this task, you can keep the results unstyled.
