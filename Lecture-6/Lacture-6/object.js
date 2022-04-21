/* 
1. Easy Travers
1.1 Get anything if you have the key O(1)
2. filter
3. Delete (medium) O(1)
4. update (medium) O(1)
5. Create a new one (easy) O(1)
*/


function uuidv4() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
		const r = (Math.random() * 16) | 0;
		const v = c == 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

const students = {
	    '67de71e5-0eac-474f-ab51-850ba9b31ed5': {
		id: '67de71e5-0eac-474f-ab51-850ba9b31ed5',
		name: 'Md Al-Amin',
		email: 'alamin@test.com',
	},
	    'ebdf6b78-c32b-4b1d-8574-e8c655b05c1e':{
		id: 'ebdf6b78-c32b-4b1d-8574-e8c655b05c1e',
		name: 'Akib Ahmed',
		email: 'akib@test.com',
	},
	    'ee729e84-a84e-4adf-b32c-4647a7114d5b':{
		id: 'ee729e84-a84e-4adf-b32c-4647a7114d5b',
		name: 'Elias Emon',
		email: 'elias@test.com',
	},
};

//create object

const creatingObject = {
    id: uuidv4(),
    name: "Musfiq",
    email: "mushfiq@gmail.com"
}

students[creatingObject.id] = creatingObject;

//updated
const idtoBeUpdated = 'ee729e84-a84e-4adf-b32c-4647a7114d5b'
const updateObject = {
    id: 'ee729e84-a84e-4adf-b32c-4647a7114d5b',
    name: "Lucky Akter",
    // email: "lucky@gmail.com"
}

students[idtoBeUpdated] = {
    ...students[idtoBeUpdated],
    ...updateObject
}

//delete 

delete students[idtoBeUpdated];

//Travers

/* for(let key in students){
    console.log(students[key].name);
}
 */
console.log(Object.keys(students)) //In here we get an arry of keys
console.log(Object.values(students))
// Object.keys(students).forEach(item => console.log(item)) // we apply any kind of array method
// Object.keys(students).forEach(item => console.log(students[item].name)) // After using array method and getting keys, we can apply to the object 



// console.log(students['67de71e5-0eac-474f-ab51-850ba9b31ed5']);

