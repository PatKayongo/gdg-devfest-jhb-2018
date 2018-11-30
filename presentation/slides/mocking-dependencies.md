#### Mocking Or Not?

Without mocking: 
```
describe('it should call the service when the thing happens', () => {
	// given these set of things
	// when this happens
	expect(axios).toHaveBeenCalledWith({ 
		method: 'POST', 
		url: 'https://patkayongo.africa/stuff' })
});
```

vs with mocking
```
const myServiceMock = jest.fn();

describe('it should call the service when the thing happens', () => {
	// given these set of things
	// when this happens
	expect(myServiceMock).toHaveBeenCalledWith({ 
		method: 'POST', 
		url: 'https://patkayongo.africa/stuff' })
});
```