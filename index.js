const button = document.getElementById('download-button');
			function generatePDF() {
				const element = document.getElementById('resume');
				html2pdf().from(element).save();
			}
			button.addEventListener('click', generatePDF);