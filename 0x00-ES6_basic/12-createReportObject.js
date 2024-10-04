export default function createReportObject(employeesList) {
  // Create the allEmployees object using the spread syntax
  const allEmployees = {
    ...employeesList,
  };

  // Define the getNumberOfDepartments method
  const getNumberOfDepartments = function getNumberOfDepartments() {
    return Object.keys(allEmployees).length;
  };

  // Return the report object
  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
