There is a structure we can use when writing these tests for the components.

1. ***Given*** an input
2. ***When*** I perform an action
3. ***Then*** I get the following output


#### Inputs - props
```
const NameDisplay = ({ firstName, lastName }) => (
	<!-- Stuff here -->
)
```


#### Inputs - Service Call Result
```
class ChartSearch extends React.Component {
	// Stuff here

	componentDidMount() {
		const self = this;
		chartService.getTop40().then(list => {
			self.setState({ list });
		});
	}

	// Stuff here
}
```


#### Inputs / Actions - HTML Events

```
class ChartSearch extends React.Component {
	// Stuff here

	handleInputChange(event) {
		this.setState({ artist: event.target.value });
	}

	render() {
		return (
			<input onChange={handleInputChange.bind(this)}>
		)
	}
}
```


#### Outputs - Output to the HTML
```
const NameDisplay = ({ firstName, lastName }) => (
	<h1>{firstName} {lastName}</h1>
)
```


#### Outputs - Output to callback function / Event Emitter
```
const NameDisplay = ({ onChange }) => (
	<input onChange={onChange}>
)
```


#### Outputs - Service Call

```
const ChartSearch = () => (
	<button onClick={() => chartSearchService.search()}>
)
```

Note:
What are the possible inputs for a component?
- A property from @Input or one of the props in angular
- Something in one of the html elements
- A response from a service call

What are the possible outputs for a component
- Output to the html
- Output on an event emitter, or a callback function.
- An external service call.
