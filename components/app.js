class App {
  constructor(gradeTable, pageHeader,gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
  }
  handleGetGradesError(error) {
    console.error(error);
  };
  handleGetGradesSuccess(grades) {
    this.gradeTable.updateGrades(grades);
    var total = 0;
    for(var i = 0; i<=grades.length-1; i++) {
      total += grades[i].grade;
    }
    var average = total/(grades.length);
    this.pageHeader.updateAverage(average);
  };
  getGrades() {
    $.ajax({
      type: "GET",
      headers: { "X-Access-Token": "E2zmM6eF"},
      url: "https://sgt.lfzprototypes.com/api/grades",
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
    })
  }
  start() {
    this.getGrades();
  };
}
