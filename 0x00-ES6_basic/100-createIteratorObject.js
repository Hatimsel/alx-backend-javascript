export default function createIteratorObject(report) {
  function* iterateEmployees() {
    for (const department in report.allEmployees) {
      for (const employee of report.allEmployees[department]) {
        yield employee;
      }
    }
  }

  const iterator = {
    [Symbol.iterator]: iterateEmployees,
  };

  return iterator;
}
