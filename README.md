# React + TypeScript + Vite

This is a coding challenge task. Put your implementation in the [src/App.tsx](./src/App.tsx) file.

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

- be 6 or more chars in length
- be less than 13 chars in length
- start with a a-z char, case-insensitive
- contain at least one digit

Example of a valid input:

```
john doe1
John1doe
```

In case any validation error is encountered, form must not be sent to the server, and ALL of the errors
encountered must be displayed to a customer.

Validation may occur on submit.

Bonus points for adding loading indicators, as API is slow, and displaying some error message if submit failed,
as the API is flaky and sometimes errors out.

CSS and styling is beyond the scope of this task, you can keep the results unstyled.
