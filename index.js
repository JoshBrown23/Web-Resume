function generatePdf() {
    var element = document.getElementById('resume');
    html2pdf(element);
}

html2pdf().set{{
    pagebreak: {mode: 'avoid-all'}
}};
