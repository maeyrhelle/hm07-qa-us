// eslint-disable-next-line no-undef
const config = require('../config');
const requestBody = {
    "productsList": [
        {
            "id": 1,
            "quantity": 2
        },
        {
            "id": 5,
            "quantity": 2
        },
        {
            "id": 3,
            "quantity": 1
        }
    ]
}

test('should be 200 OK in status', async () => {
    let actualStatus;
	try {
		// Create a shopping cart
		const responseCart = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: "POST",
			headers: {
			"Content-Type": "application/json",
			},
			body: JSON.stringify(requestBody),
		});
		const cart = await responseCart.json();
		let cartID = cart["id"];
		// Delete the shopping cart
		const response = await fetch(`${config.API_URL}/api/v1/orders/${cartID}`, {
			method: 'DELETE',
			headers: {
			'Content-Type': 'application/json'
			}
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});

 test('Should be a {"ok":true} JSON response to deleting the cart', async () => {
    let actualResponseBody;
    try {
		// Create a shopping cart
		const responseCart = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: "POST",
			headers: {
			"Content-Type": "application/json",
			},
			body: JSON.stringify(requestBody),
		});
		const cart = await responseCart.json();
		let cartID = cart["id"];
		// Delete the shopping cart
		const response = await fetch(`${config.API_URL}/api/v1/orders/${cartID}`, {
			method: 'DELETE',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
        actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody).toEqual({"ok":true});
});
