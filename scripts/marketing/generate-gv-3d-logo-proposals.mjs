import { mkdir, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { chromium } from 'playwright';

const root = resolve(import.meta.dirname, '../..');
const outputDir = join(root, 'docs', 'brand', 'labs', 'gv-logo-3d-proposals-2026-09');

const colors = {
  bg: '#0F1115',
  deep: '#090C11',
  surface: '#1A1F2A',
  raised: '#252B38',
  text: '#E8EEF4',
  muted: '#C4CDD8',
  faint: '#8B95A8',
  cyan: '#22D3EE',
  purple: '#A78BFA',
  gold: '#FBBF24',
};

const concepts = [
  {
    slug: '01-obsidian-prism',
    kicker: 'DIRECTION 01 / OBSIDIAN PRISM',
    name: 'Obsidian Prism',
    line: 'Engineering intelligence, shaped with intent.',
    material: 'Black anodized metal / cyan-violet edge light',
    bg: colors.bg,
    panel: colors.surface,
    mark: 'metal',
    accent: colors.cyan,
  },
  {
    slug: '02-aether-signal',
    kicker: 'DIRECTION 02 / AETHER SIGNAL',
    name: 'Aether Signal',
    line: 'A clear signal through complex systems.',
    material: 'Optical glass / refracted cyan-violet light',
    bg: '#E7EDF2',
    panel: '#F6F8FA',
    mark: 'glass',
    accent: colors.purple,
  },
  {
    slug: '03-precision-alloy',
    kicker: 'DIRECTION 03 / PRECISION ALLOY',
    name: 'Precision Alloy',
    line: 'Systems that move from idea to operation.',
    material: 'Brushed titanium / measured construction / signal point',
    bg: colors.deep,
    panel: '#151A23',
    mark: 'alloy',
    accent: colors.purple,
  },
];

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[char]);
}

function defs(concept) {
  const darkText = concept.bg === '#E7EDF2' ? '#14202C' : colors.text;
  return `<defs>
    <linearGradient id="gv-gradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${colors.purple}"/><stop offset="1" stop-color="${colors.cyan}"/></linearGradient>
    <linearGradient id="metal-gradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#EEF3F7"/><stop offset=".18" stop-color="#7D8A9B"/><stop offset=".5" stop-color="#1D2632"/><stop offset=".72" stop-color="${colors.cyan}"/><stop offset="1" stop-color="${colors.purple}"/></linearGradient>
    <linearGradient id="glass-gradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#FFFFFF" stop-opacity=".94"/><stop offset=".38" stop-color="${colors.cyan}" stop-opacity=".54"/><stop offset="1" stop-color="${colors.purple}" stop-opacity=".78"/></linearGradient>
    <linearGradient id="alloy-gradient" x1="0" y1="0" x2="0.8" y2="1"><stop offset="0" stop-color="#F7FAFC"/><stop offset=".24" stop-color="#8793A2"/><stop offset=".52" stop-color="#2E3947"/><stop offset=".82" stop-color="#A78BFA"/><stop offset="1" stop-color="#22D3EE"/></linearGradient>
    <radialGradient id="spot" cx="50%" cy="25%" r="74%"><stop offset="0" stop-color="${concept.accent}" stop-opacity=".32"/><stop offset=".5" stop-color="${colors.purple}" stop-opacity=".08"/><stop offset="1" stop-color="${concept.bg}" stop-opacity="0"/></radialGradient>
    <linearGradient id="floor" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${concept.panel}"/><stop offset="1" stop-color="${colors.deep}"/></linearGradient>
    <filter id="shadow" x="-30%" y="-30%" width="160%" height="190%"><feDropShadow dx="0" dy="20" stdDeviation="18" flood-color="#000000" flood-opacity=".65"/></filter>
    <filter id="soft-glow" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="22"/></filter>
    <filter id="edge-glow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    <filter id="grain"><feTurbulence type="fractalNoise" baseFrequency=".72" numOctaves="2" seed="7"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="table" tableValues="0 .045"/></feComponentTransfer><feBlend in="SourceGraphic" mode="soft-light"/></filter>
    <pattern id="micro-grid" width="64" height="64" patternUnits="userSpaceOnUse"><path d="M64 0H0V64" fill="none" stroke="${concept.accent}" stroke-opacity=".09" stroke-width="1"/></pattern>
    <clipPath id="clip-scene"><rect x="95" y="145" width="1410" height="660" rx="28"/></clipPath>
  </defs>`;
}

function gvPaths(stroke, width, opacity = 1) {
  return `<g fill="none" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round" opacity="${opacity}">
    <path d="M128 50A62 62 0 1 0 150 116L112 116"/>
    <path d="M196 96L228 170L292 46"/>
    <path d="M274 50L292 46L288 66" stroke-width="10"/>
  </g>`;
}

function gvMark(concept) {
  const gradient = concept.mark === 'glass' ? 'url(#glass-gradient)' : concept.mark === 'alloy' ? 'url(#alloy-gradient)' : 'url(#metal-gradient)';
  const face = `<g transform="scale(2.8)">${gvPaths(gradient, 18)}${gvPaths('#FFFFFF', 3.2, concept.mark === 'glass' ? .68 : .38)}</g>`;
  const extrude = `<g transform="translate(12 18) scale(2.8)">${gvPaths('#05070A', 22, .85)}</g>`;
  const side = `<g transform="translate(6 9) scale(2.8)">${gvPaths('#344150', 21, .9)}</g>`;
  return `<g transform="translate(565 150)">${concept.mark === 'glass' ? `<ellipse cx="370" cy="250" rx="380" ry="54" fill="${colors.cyan}" fill-opacity=".22" filter="url(#soft-glow)"/>` : ''}${extrude}${side}${face}</g>`;
}

function scene(concept) {
  if (concept.mark === 'glass') {
    return `<g clip-path="url(#clip-scene)">
      <rect x="95" y="145" width="1410" height="660" fill="url(#spot)"/>
      <circle cx="1260" cy="280" r="280" fill="${colors.cyan}" fill-opacity=".1" filter="url(#soft-glow)"/>
      <path d="M140 710C420 530 1110 550 1510 360V850H140Z" fill="#D5DEE7" fill-opacity=".5"/>
      <ellipse cx="800" cy="780" rx="500" ry="70" fill="#9DAAB7" fill-opacity=".3" filter="url(#soft-glow)"/>
      <rect x="570" y="235" width="460" height="470" rx="230" fill="#FFFFFF" fill-opacity=".12" stroke="#FFFFFF" stroke-opacity=".52" stroke-width="2"/>
      <path d="M610 650Q800 750 990 650" fill="none" stroke="#FFFFFF" stroke-opacity=".55" stroke-width="2"/>
      ${gvMark(concept)}
      <path d="M365 270C475 232 510 204 600 175M1040 175C1130 204 1165 232 1275 270" fill="none" stroke="${colors.cyan}" stroke-opacity=".32" stroke-width="2" stroke-dasharray="8 14"/>
    </g>`;
  }
  const extra = concept.mark === 'metal'
    ? `<rect x="300" y="225" width="1000" height="500" rx="34" fill="#0B1017" stroke="${colors.raised}" stroke-width="3" filter="url(#shadow)"/><path d="M320 690H1280" stroke="${colors.cyan}" stroke-opacity=".2" stroke-width="2"/>`
    : `<path d="M190 710H1410L1280 815H320Z" fill="url(#floor)" stroke="${colors.raised}" stroke-width="2" filter="url(#shadow)"/><path d="M260 744H1340M380 780H1220" stroke="${colors.purple}" stroke-opacity=".18" stroke-width="2"/>`;
  return `<g clip-path="url(#clip-scene)"><rect x="95" y="145" width="1410" height="660" fill="url(#spot)"/><ellipse cx="800" cy="720" rx="520" ry="100" fill="${concept.accent}" fill-opacity=".13" filter="url(#soft-glow)"/>${extra}${gvMark(concept)}<path d="M800 170V770" stroke="${concept.accent}" stroke-opacity=".14" stroke-width="2" stroke-dasharray="5 13"/><path d="M215 480H1385" stroke="${colors.text}" stroke-opacity=".07" stroke-width="2" stroke-dasharray="4 18"/></g>`;
}

function poster(concept) {
  const text = concept.bg === '#E7EDF2' ? '#14202C' : colors.text;
  const muted = concept.bg === '#E7EDF2' ? '#465567' : colors.muted;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1100" viewBox="0 0 1600 1100" role="img" aria-label="${esc(concept.name)} Gentle-Vanguard logo proposal">
    ${defs(concept)}
    <rect width="1600" height="1100" fill="${concept.bg}"/>
    <rect width="1600" height="1100" fill="url(#micro-grid)" opacity="${concept.mark === 'glass' ? '.32' : '.6'}"/>
    <rect width="1600" height="1100" fill="#000" opacity=".12" filter="url(#grain)"/>
    <text x="96" y="80" fill="${concept.accent}" font-family="JetBrains Mono, monospace" font-size="15" letter-spacing="3">${esc(concept.kicker)}</text>
    <text x="1504" y="80" text-anchor="end" fill="${muted}" font-family="JetBrains Mono, monospace" font-size="13" letter-spacing="2">GV / BRAND LAB</text>
    <rect x="95" y="145" width="1410" height="660" rx="28" fill="none" stroke="${concept.mark === 'glass' ? '#9BA9B8' : colors.raised}" stroke-width="2"/>
    ${scene(concept)}
    <line x1="96" y1="872" x2="1504" y2="872" stroke="${concept.mark === 'glass' ? '#A7B4C0' : colors.raised}"/>
    <text x="96" y="948" fill="${text}" font-family="Space Grotesk, Inter, sans-serif" font-size="58" font-weight="600">Gentle<tspan fill="url(#gv-gradient)">Vanguard</tspan></text>
    <text x="100" y="993" fill="${muted}" font-family="Inter, Arial, sans-serif" font-size="18">${esc(concept.line)}</text>
    <text x="1504" y="946" text-anchor="end" fill="${concept.accent}" font-family="JetBrains Mono, monospace" font-size="14" letter-spacing="2">${esc(concept.material.toUpperCase())}</text>
    <text x="1504" y="988" text-anchor="end" fill="${muted}" font-family="JetBrains Mono, monospace" font-size="13" letter-spacing="2">SPACE GROTESK / INTER / MONO</text>
    <text x="96" y="1040" fill="${muted}" font-family="JetBrains Mono, monospace" font-size="12" letter-spacing="2">OFFICIAL PALETTE / G+V MONOGRAM / CONCEPT ONLY</text>
  </svg>`;
}

await mkdir(outputDir, { recursive: true });
const browser = await chromium.launch({ headless: true });
for (const concept of concepts) {
  const svg = poster(concept);
  const baseName = `${concept.slug}-1600x1100`;
  await writeFile(join(outputDir, `${baseName}.svg`), svg, 'utf8');
  const page = await browser.newPage({ viewport: { width: 1600, height: 1100 }, deviceScaleFactor: 1 });
  await page.setContent(`<body style="margin:0;background:${concept.bg}"><img style="display:block;width:100vw;height:100vh" src="data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}"/></body>`);
  await page.locator('img').waitFor();
  await page.screenshot({ path: join(outputDir, `${baseName}.png`), type: 'png' });
  await page.close();
}
await browser.close();
await writeFile(join(outputDir, 'README.md'), `# Gentle-Vanguard 3D Logo Proposals\n\nTres direcciones premium inspiradas en la referencia compartida: simbolo central, material, luz lateral, profundidad y una composicion editorial limpia. Todas respetan el canon v2 Premium y mantienen el monograma G+V como base.\n\n- **Obsidian Prism:** metal anodizado negro, profundidad y borde cyan-violet.\n- **Aether Signal:** vidrio optico, refraccion y una lectura mas luminosa.\n- **Precision Alloy:** titanio cepillado, construccion medida y tono institucional.\n\nSon propuestas de laboratorio. El logo oficial operativo continua siendo assets/logo.svg hasta que se elija una direccion.\n`, 'utf8');
console.log(`Generated ${concepts.length} 3D logo proposals in ${outputDir}`);
