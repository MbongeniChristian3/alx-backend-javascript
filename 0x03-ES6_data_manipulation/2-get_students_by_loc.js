/* eslint-disable no-unused-vars */

const getStudentsByLocation = (students, city) => (
  students.filter((student) => student.location === city)
);

export default getStudentsByLocation;
