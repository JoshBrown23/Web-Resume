var button = document.getElementById("pdfButton");
      var makepdf = document.getElementById("generatePDF");
      button.addEventListener("click", function () {
         var pdfwindow = window.open("", "PRINT", "height=600,width=600");
         pdfwindowwindow.document.write(makepdf.innerHTML);
         pdfwindow.document.close();
         pdfwindow.focus();
         pdfwindow.print();
         return true;
      });