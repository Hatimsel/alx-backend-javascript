var studentOne = {
    firstName: 'Jack',
    lastName: 'Emanuel',
    age: 25,
    location: 'Louisiana'
};
var studentTwo = {
    firstName: 'Lisa',
    lastName: 'Morina',
    age: 25,
    location: 'San Jose'
};
var studentsList = [studentOne, studentTwo];
var table = document.getElementById("students-table");
studentsList.forEach(function (student) {
    var row = document.createElement("tr");
    var firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
    var locationCell = document.createElement("td");
    locationCell.textContent = student.location;
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
// document.body.appendChild(table);
console.log(table);
