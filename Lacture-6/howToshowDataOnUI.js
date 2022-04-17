const names = [
	'Ayman',
	'Abu Rayhan',
	'Anik',
	'Elias Emon',
	'Engr. Sabbir',
	'Fahim Faisal',
	'Feroz Khan',
	'Habib',
	'HM Azizul',
	'Hridoy Saha',
	'Jahid Hassan',
	'Johir',
	'Md Al-Amin',
	'Md Arafatul',
	'Md Ashraful',
	'Parvez',
];

const namesGroup = names.reduce((acumulator, current) =>{
    //cantch first Letter
    const firstLetter = current[0].toUpperCase();
    // console.log(firstLetter);
    //Have those First number in accumulatro?
    if (firstLetter in acumulator) {
        acumulator[firstLetter].push(current);
    } else{
        // console.log(firstLetter);

        acumulator[firstLetter] = [current]; // its mean object and object er first index
    }
    return acumulator;
}, {})

console.log(namesGroup)