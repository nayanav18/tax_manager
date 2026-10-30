export function formatCurrency(val) {
  const abs = Math.abs(val);
  let str;
  if (abs >= 1e6) str = '€' + (abs / 1e6).toFixed(1) + 'm';
  else if (abs >= 1e3) str = '€' + (abs / 1e3).toFixed(0) + 'k';
  else str = '€' + abs.toFixed(0);
  return val < 0 ? '(' + str + ')' : str;
}

export function escapeHtml(s) {
  if (!s) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
