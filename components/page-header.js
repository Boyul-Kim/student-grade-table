class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }
  updateAverage(newAverage) {
    var span = document.querySelector("span");
    span.textContent = newAverage;
  }
}
