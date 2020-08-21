class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  };
  updateGrades(grades) {
    console.log(grades);
    var tbody = this.tableElement.querySelector('tbody');
    tbody.textContent = "";
    for(var i = 0; i<=grades.length-1; i++) {
      var tr = document.createElement("tr");
      var tdStudent = document.createElement("td");
      var tdCourse = document.createElement("td");
      var tdGrade = document.createElement("td");
      tbody.appendChild(tr);
      tbody.appendChild(tdStudent);
      tbody.appendChild(tdCourse);
      tbody.appendChild(tdGrade);
      tdStudent.textContent = grades[i].name;
      tdCourse.textContent = grades[i].course;
      tdGrade.textContent = grades[i].grade;
    }
  };
}
