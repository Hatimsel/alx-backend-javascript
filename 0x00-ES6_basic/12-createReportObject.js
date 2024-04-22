export default function createReportObject(employeesList) {
  const getNumberOfDepartments = () => Object.keys(employeesList).length;

  const allEmployees = {
	...employeesList
  };

  return {
	allEmployees,
	getNumberOfDepartments
  };
}
