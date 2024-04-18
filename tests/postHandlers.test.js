// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    // put your body here
	"products": [
        {
            "id": 5,
            "quantity": 1
        },
        {
            "id": 4,
            "quantity": 5
        }
    ]
}


test('check availability of goods in warehouse', async () => {
    let actualStatus;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
        actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
    expect(actualStatus).toBe(200)
});


test('check availability of goods in warehouse', async () => {
    let actualResponseBody;
    try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses/check`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
        actualResponseBody = await response.json();
	} catch (error) {
		console.error(error);
	}
    expect(actualResponseBody).toEqual({
        "Everything You Need": {
            "Sprite Soft Drink": true,
            "Fruit Power Juice - Litchi": false
        },
        "Food City": {
            "Sprite Soft Drink": true,
            "Fruit Power Juice - Litchi": true
        },
        "Big World": {
            "Fruit Power Juice - Litchi": false,
            "Sprite Soft Drink": false
        },
        "Fresh Food": {
            "Sprite Soft Drink": true,
            "Fruit Power Juice - Litchi": true
        }
    })
});


