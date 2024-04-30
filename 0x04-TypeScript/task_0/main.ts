interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

const studentOne : Student = {
	firstName: 'Jack',
	lastName: 'Emanuel',
	age: 25,
	location: 'Louisiana'
};
const studentTwo: Student = {
	firstName: 'Lisa',
	lastName: 'Morina',
	age: 25,
	location: 'San Jose'
};

const studentsList: Array<Student> = [studentOne, studentTwo];

const table = document.getElementById("students-table");

studentsList.forEach((student) => {
	const row = document.createElement("tr");

	const firstNameCell = document.createElement("td");
	firstNameCell.textContent = student.firstName;

	const locationCell = document.createElement("td");
	locationCell.textContent = student.location;

	row.appendChild(firstNameCell);
	row.appendChild(locationCell);

	table.appendChild(row);
})
// document.body.appendChild(table);

console.log(table);
