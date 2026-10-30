export function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    if (line[i] === '"') inQuotes = !inQuotes;
    else if (line[i] === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else current += line[i];
  }
  result.push(current.trim());
  return result;
}

export function parseTransactionsCSV(text) {
  const lines = text.trim().split(/\r?\n/);
  const transactions = [];
  for (let i = 1; i < lines.length; i++) {
    const vals = parseCSVLine(lines[i]);
    if (vals.length >= 6) {
      transactions.push({
        entity: vals[0],
        counterparty: vals[1],
        country: vals[2],
        type: vals[3],
        currency: vals[4],
        amount: parseFloat(vals[5]) || 0,
      });
    }
  }
  return transactions;
}
