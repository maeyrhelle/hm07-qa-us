// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"productsList": [
        {
            "id": 6,
            "quantity": 1
        }
    ]
}

test('status should be 200', async () => {
    let actualStatus;
	try {
		const responseCart = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			},
			body: JSON.stringify(requestBody),
		  });
		  const cart = await responseCart.json();
		  let cartID = cart["id"];
		const response = await fetch(`${config.API_URL}/api/v1/orders/${cartID}`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});


test('should be Fresh Food', async () => {
    let actualResponseBody;
    try {
		const responseCart = await fetch(`${config.API_URL}/api/v1/orders`, {
			method: "POST",
			headers: {
			  "Content-Type": "application/json",
			},
			body: JSON.stringify(requestBody),
		  });
		  const cart = await responseCart.json();
		  let cartID = cart["id"];
		const response = await fetch(`${config.API_URL}/api/v1/orders/${cartID}`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
        actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(actualResponseBody["wareHouse"]).toBe("Fresh Food");
});
