// charts.js
// Gráficas ligeras en SVG, sin dependencias externas.

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/**
 * Gráfica de líneas con área.
 * @param {Array<{label:string, value:number}>} data
 */
export function lineChart(data, opts = {}) {
  const W = 320, H = 150, padL = 28, padR = 8, padT = 12, padB = 22;
  const color = opts.color || '#0f766e';
  if (!data || data.length === 0) return emptyChart();

  const max = Math.max(1, ...data.map((d) => d.value));
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const stepX = data.length > 1 ? innerW / (data.length - 1) : 0;
  const x = (i) => padL + i * stepX;
  const y = (v) => padT + innerH - (v / max) * innerH;

  const linePts = data.map((d, i) => `${x(i).toFixed(1)},${y(d.value).toFixed(1)}`).join(' ');
  const areaPts = `${padL},${padT + innerH} ${linePts} ${x(data.length - 1)},${padT + innerH}`;

  // Líneas guía horizontales (0, mitad, max)
  const grid = [0, 0.5, 1].map((f) => {
    const gy = padT + innerH - f * innerH;
    return `<line x1="${padL}" y1="${gy}" x2="${W - padR}" y2="${gy}" stroke="#e2e8f0" stroke-width="1"/>
      <text x="2" y="${gy + 3}" font-size="8" fill="#94a3b8">${Math.round(max * f)}</text>`;
  }).join('');

  const dots = data.map((d, i) => `<circle cx="${x(i).toFixed(1)}" cy="${y(d.value).toFixed(1)}" r="2.4" fill="${color}"><title>${esc(d.label)}: ${d.value}</title></circle>`).join('');

  // Etiquetas del eje X (primera, media, última)
  const idxs = data.length <= 1 ? [0] : [0, Math.floor((data.length - 1) / 2), data.length - 1];
  const xlabels = idxs.map((i) => `<text x="${x(i).toFixed(1)}" y="${H - 6}" font-size="8" fill="#94a3b8" text-anchor="middle">${esc(data[i].label)}</text>`).join('');

  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Gráfica de evolución">
    ${grid}
    <polygon points="${areaPts}" fill="${color}" fill-opacity="0.12"/>
    <polyline points="${linePts}" fill="none" stroke="${color}" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round"/>
    ${dots}
    ${xlabels}
  </svg>`;
}

/**
 * Gráfica de barras verticales.
 * @param {Array<{label:string, value:number, color?:string, sub?:string}>} data
 */
export function barChart(data, opts = {}) {
  const W = 320, H = 160, padL = 8, padR = 8, padT = 12, padB = 34;
  if (!data || data.length === 0) return emptyChart();
  const max = Math.max(1, ...data.map((d) => d.value));
  const innerW = W - padL - padR;
  const innerH = H - padT - padB;
  const gap = 10;
  const bw = (innerW - gap * (data.length - 1)) / data.length;

  const bars = data.map((d, i) => {
    const bh = (d.value / max) * innerH;
    const bx = padL + i * (bw + gap);
    const by = padT + innerH - bh;
    const col = d.color || '#0f766e';
    return `
      <rect x="${bx.toFixed(1)}" y="${by.toFixed(1)}" width="${bw.toFixed(1)}" height="${Math.max(0, bh).toFixed(1)}" rx="4" fill="${col}"><title>${esc(d.label)}: ${d.value}</title></rect>
      <text x="${(bx + bw / 2).toFixed(1)}" y="${(by - 3).toFixed(1)}" font-size="9" fill="#334155" text-anchor="middle" font-weight="700">${esc(d.sub ?? d.value)}</text>
      <text x="${(bx + bw / 2).toFixed(1)}" y="${H - 18}" font-size="8.5" fill="#64748b" text-anchor="middle">${esc(d.label)}</text>`;
  }).join('');

  return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="Gráfica de barras">${bars}</svg>`;
}

function emptyChart() {
  return `<div class="chart-empty">Aún no hay datos suficientes. ¡Completa tus tareas para ver tu evolución! 📈</div>`;
}
