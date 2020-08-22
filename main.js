var table = document.querySelector('table');
var header = document.querySelector('header');
const pageHeader = new PageHeader(header);
const gradeTable = new GradeTable(table);
const appClass = new App(gradeTable, pageHeader);
appClass.start();
