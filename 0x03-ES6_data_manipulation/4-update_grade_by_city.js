export default function updateStudentGradeByCity(listOfStudents, city, newGradesArr) {
  const result = listOfStudents.filter((student) => student.location === city).map((student) => {
    /* eslint-disable */
    student.grade = 'N/A';
    for (const i in newGradesArr) {
      if (student.id === newGradesArr[i].studentId) {
        student.grade = newGradesArr[i].grade;
        return student;
      }
	/* eslint-enable */
    }
    return student;
  });
  return result;
}
