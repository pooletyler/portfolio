const openBase64EncodedStringAsPDF = (file: string, name: string) => {
  const binary = atob(file.replace(/\s/g, ''));
  const len = binary.length;
  const buffer = new ArrayBuffer(len);
  const view = new Uint8Array(buffer);

  for (let i = 0; i < len; i += 1) {
    view[i] = binary.charCodeAt(i);
  }

  const downloadLink = document.createElement('a');
  downloadLink.style.display = 'none';
  const blob = new Blob([view], { type: 'application/pdf' });
  const url = window.URL.createObjectURL(blob);
  downloadLink.href = url;
  downloadLink.download = `${name}.pdf`;
  document.body.appendChild(downloadLink);
  downloadLink.click();

  setTimeout(() => {
    window.close();
    window.location.href = '/';
  }, 100);
};

export default openBase64EncodedStringAsPDF;
