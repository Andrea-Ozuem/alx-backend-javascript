import studs from './main.ts';

function renderStudentTable(students) {
    const table = document.createElement("table");
    const tableHeader = table.createTHead();
    const headerRow = tableHeader.insertRow();
    const firstNameHeader = headerRow.insertCell(0);
    const locationHeader = headerRow.insertCell(1);
    firstNameHeader.textContent = "First Name";
    locationHeader.textContent = "Location";
  
    const tableBody = table.createTBody();
  
    students.forEach((student) => {
      const row = tableBody.insertRow();
      const firstNameCell = row.insertCell(0);
      const locationCell = row.insertCell(1);
      firstNameCell.textContent = student.firstName;
      locationCell.textContent = student.location;
    });
  
    document.body.appendChild(table);
}
  
  // Call the function to render the table with student information
renderStudentTable(studs);