export default function getStudentIdsSum(listOfStudents) {
  const sum = listOfStudents.reduce((acc, student) => acc + student.id, 0);
  return sum;
}
