function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		const r = (Math.random() * 16) | 0;
		const v = c == 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

const students = [
	{
		id: '67de71e5-0eac-474f-ab51-850ba9b31ed5',
		name: 'Md Al-Amin',
		email: 'alamin@test.com',
	},
	{
		id: 'ebdf6b78-c32b-4b1d-8574-e8c655b05c1e',
		name: 'Akib Ahmed',
		email: 'akib@test.com',
	},
	{
		id: 'ee729e84-a84e-4adf-b32c-4647a7114d5b',
		name: 'Elias Emon',
		email: 'elias@test.com',
	},
];