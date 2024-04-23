// eslint-disable-next-line no-undef
const config = require('../config');

test('should be 200 OK in status', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		actualStatus = response.status;
		console.log(response)
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});

test('Should have Order and Go for name in response body', async () => {
	let actualResponseBody;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody[0]["name"]).toBe("Order and Go");
});