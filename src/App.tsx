import "./App.css";

const example_request = `
POST /entry 
accept: application/json 
content-type: application/json

{
  "username": "user input"
}
`;

function App() {
	return (
		<>
			<p>
				Your task is to get user's input, validate it, and submit to the "/entry" endpoint, as the following JSON
				payload:
				<code>
					<pre>{example_request}</pre>
				</code>
			</p>
			<p>Validation rules are as follows, input must:</p>
			<ul>
				<li>must &ge; than 6 chars</li>
				<li>must &lt; than 13 chars</li>
				<li>must start with a a-z char, case-insensitive</li>
				<li>must contain at least one digit</li>
			</ul>
			<p>
				In case any validation error is encountered, form must not be sent to the server, and ALL of the errors
				encountered must be displayed to a customer.
			</p>
			<p>Validation may occur on submit.</p>
			<p>
				Bonus points for adding loading indicators, as API is slow, and displaying some error message if submit failed,
				as the API is flaky and sometimes errors out.
			</p>
			<p>CSS and styling is beyond the scope of this task, you can keep the results unstyled.</p>

			<h1>Enter your user id</h1>

			<form>
				<p>
					<label>
						You user name
						<br />
						<input />
					</label>
				</p>
				<p>
					<input type="submit" />
				</p>
			</form>
		</>
	);
}

export default App;
