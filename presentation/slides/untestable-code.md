#### Untestable Code

```
getSuggestions(address) {
	const subject = new Rx.Subject();
	this._ngZone.runOutsideAngular(() => {
		geocoder.geocode( { address }, (results, status) => {
			this._ngZone.run(() => {
				if (status=== 'OK') {
					subject.onNext(results);
				} else {
					subject.onError(new Error('Oh dear!'));
				}
			});
			
		});
	});

	return subject;
}
```