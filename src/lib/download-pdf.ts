
import html2pdf from "html2pdf.js";

/**
 * Downloads a DOM node as a PDF in A4 format.
 * @param selector CSS selector of the node to download (e.g., ".a4-page").
 * @param fileName PDF file name (default: 'resume.pdf')
 */
export function downloadNodeAsPdf(selector: string, fileName = "resume.pdf") {
  const element = document.querySelector(selector);
  if (!element) {
    alert("Unable to find resume DOM node.");
    return;
  }
  html2pdf()
    .set({
      margin:       [0.5, 0.5, 0.5, 0.5], // 0.5cm margins
      filename:     fileName,
      image:        { type: "jpeg", quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, backgroundColor: "#fff" },
      jsPDF:        { unit: "mm", format: "a4", orientation: "portrait" },
      pagebreak:    { mode: ["css", "legacy"] },
    })
    .from(element)
    .save();
}
