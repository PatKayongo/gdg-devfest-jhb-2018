### Presentatinal vs Container Components

| Container Components  | Presentational Components |
|-----------------------|---------------------------|
| Handle state			| Display information		|							
| Handle business logic | Handle user interaction	|							
| Handle network calls  |							|
| Handle navigation     |							|


#### React Example - Presentational Component
a presentational component that displays data to the user can look like:
```
const PageHeader = ({ title }) => (
	<h1>{title}</h1>
)
```
<!-- .element: class="fragment" data-fragment-index="1" -->

and a presentational component that takes in input from the user can look like:
<!-- .element: class="fragment" data-fragment-index="2" -->
```
const FormInput = ({ onChange }) => (
	<input onChange={onChange}>
)
```
<!-- .element: class="fragment" data-fragment-index="2" -->


#### React Example - Container Components
a container component orchestrates between presentational components and the rest of the application logic
```
class NameSearch extends React.Component {
	handleTextChange(event) {
		nameService.search(event.target.value)
	}

	render() {
		return (
			<div>
				<FormInput 
					onChange={this.handleTextChange.bind(this)} />
			</div>
		)
	}
}
```