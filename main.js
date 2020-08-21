var table = document.querySelector('table');
const gradeTable = new GradeTable(table);
const appClass = new App(gradeTable);
appClass.start();
