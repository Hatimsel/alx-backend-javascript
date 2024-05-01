interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}

interface Directors  extends Teacher {
	numberOfReports: number;
};

interface printTeacherInterface {
	(firstName: string, lastName: string): string;
};

const printTeacher: printTeacherInterface = (firstName, lastName) => {
	return `${firstName.slice(0, 1)}. ${lastName}`;
};

const teacher1: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	lastName: 'Doe',
	location: 'London',
	contract: false,
};

const director1: Directors = {
	firstName: 'Jane',
	lastName: 'Morozogui',
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
};

console.log(teacher1);
console.log(director1);

console.log(printTeacher("John", "Doe"));
