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




//****create a Student****

students.push({
	id: uuidv4(),
	name: 'Md. Sajjad',
	email: 'sajjad@gmail.com',
})

//****update date*****

const updatedStudentID = 'ee729e84-a84e-4adf-b32c-4647a7114d5b';
const updateDate = {
	name: "Lucky Akter",
	// email: "lucky@gmail.com"
}

const catechObject = students.findIndex(item => item.id === updatedStudentID);


students[catechObject] = {
	...students[catechObject],
	... updateDate,
}

console.log(students);

//*****Delete data*****/
students.splice(catechObject, 1)

console.log(students);

/* +++++++++++++
Loop Travers
+++++++++++++ */

// forEach, map, filter, every, reduce, some, find, findIndex,

/* for (let i = 0; i < students.length; i++) {
	const element = students[i].name;
	console.log(element);	
} */

/* for(let i in students){
	console.log(students[i].name)
} */

/* for(let i of students){
	console.log(i.name)
} */