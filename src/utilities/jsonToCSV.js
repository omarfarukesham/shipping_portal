export default function jsonToCSV(data) {
  const headers = Object.keys(data[0]);
  const csvData = [headers.join(',')];
  data.forEach((obj) => {
    const values = headers.map((header) => {
      let value = obj[header];
      if (typeof value === 'string' && value.includes(',')) {
        value = `"${value}"`;
      }
      return value;
    });
    csvData.push(values.join(','));
  });
  return csvData.join('\n');
}

export function jsonToCSVFile(data, filename) {
  const csvData = jsonToCSV(data);
  const blob = new Blob([csvData], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
