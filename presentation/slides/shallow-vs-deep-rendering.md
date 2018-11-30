## Shallow vs Deep Rendering

***Shallow Rendering*** doesn't render the children of the component under test

***Deep Rendering*** renders all the component within the tree


#### React Example

``` 
describe('it should call the service when text changes', () => {
	const wrapper = shallow(<NameSearch />);
	const formInput = wrapper.find(FormInput);
	formInput.simulate('click', { target: { value: 'Yasimbibwa' } });
});
```
<!-- .element: class="fragment" data-fragment-index="1" -->
vs <!-- .element: class="fragment" data-fragment-index="2" -->
```
describe('it should call the service when text changes', () => {
	const wrapper = mount(<NameSearch />);
	const formInput = wrapper.find('input');
	formInput.simulate('click', { target: { value: 'Yasimbibwa' } });
});
```
<!-- .element: class="fragment" data-fragment-index="2" -->

Note:
- If we just test our interactions with the presentational components, when there are changes in the API of the presentational component
- If we include the full rendering of the presentational components, then whenever they change, then our tests will have to change.
- When we look at our container components, we should see what it displays, not how it displays it. We should see that it displays a user input not an html input