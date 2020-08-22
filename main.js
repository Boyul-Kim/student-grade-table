var table = document.querySelector('table');
var header = document.querySelector('header');
var form = document.querySelector('form');
const gradeForm =  new GradeForm(form);
const pageHeader = new PageHeader(header);
const gradeTable = new GradeTable(table);
const appClass = new App(gradeTable, pageHeader, gradeForm);
appClass.start();
