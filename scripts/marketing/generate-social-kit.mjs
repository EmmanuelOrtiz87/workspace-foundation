import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { chromium } from 'playwright';
import { execFileSync } from 'node:child_process';

const root = resolve(import.meta.dirname, '../..');
const outputDir = join(root, 'docs', 'presentations', 'social-assets', '2026-09-gv-launch');
const videoDir = join(outputDir, 'video-cards');
const colors = {
  bg: '#0F1115',
  deep: '#090C11',
  surface: '#1A1F2A',
  raised: '#252B38',
  cyan: '#22D3EE',
  cyanSoft: '#67E8F9',
  purple: '#A78BFA',
  gold: '#FBBF24',
  text: '#E8EEF4',
  muted: '#C4CDD8',
  faint: '#8B95A8',
};

const campaigns = [
  {
    slug: 'workshop-ia-dia-a-dia',
    kicker: 'WORKSHOP GRATUITO',
    title: ['USÁ LA IA', 'EN TU DÍA', 'A DÍA'],
    body: 'Tareas reales. Flujos simples. Criterio para usar mejor tus herramientas.',
    cta: 'LINK EN BIO',
    accent: colors.cyan,
  },
  {
    slug: 'workshop-productividad',
    kicker: 'WORKSHOP GRATUITO',
    title: ['POTENCIÁ', 'TU PRODUCTIVIDAD', 'CON IA'],
    body: 'Convertí una tarea repetitiva en un flujo reutilizable y verificable.',
    cta: 'RESERVÁ TU LUGAR',
    accent: colors.purple,
  },
  {
    slug: 'workshop-sistemas-ia',
    kicker: 'PARA PROGRAMADORES',
    title: ['DE LA IDEA', 'AL SISTEMA', 'DE IA'],
    body: 'Datos, RAG, tools, agentes y evaluación: diseñá antes de desplegar.',
    cta: 'EXPLORÁ ACADEMY',
    accent: colors.cyan,
  },
  {
    slug: 'consultoria-arquitectura',
    kicker: 'ASESORÍA TÉCNICA',
    title: ['ARQUITECTURA', 'CON', 'INTENCIÓN'],
    body: 'Diagnóstico, decisiones y software que pueda sostenerse en el tiempo.',
    cta: 'SOLICITÁ UN DIAGNÓSTICO',
    accent: colors.gold,
  },
  {
    slug: 'academy-ruta-ia',
    kicker: 'ACADEMY GENTLE-VANGUARD',
    title: ['DE 0 A', 'PRODUCCIÓN', 'CON IA'],
    body: 'Fundamentos, productividad, agentes, ingeniería, producción e investigación.',
    cta: 'LINK EN BIO',
    accent: colors.purple,
  },
  {
    slug: 'gentle-vanguard-manifiesto',
    kicker: 'GENTLE-VANGUARD',
    title: ['APRENDÉ IA.', 'DISEÑÁ SISTEMAS.', 'CONSTRUÍ MEJOR.'],
    body: 'Academy, stack local-first y asesoría para trabajar con más criterio.',
    cta: 'SEGUINOS',
    accent: colors.cyan,
  },
];

const profileVariants = [
  ['tiktok', '#FF0050'],
  ['instagram', '#C084FC'],
  ['facebook', '#60A5FA'],
  ['whatsapp-business', '#4ADE80'],
];

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[char]);
}

function dataUri(svg) {
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
}

function wrapText(value, maxChars) {
  const words = String(value).split(/\s+/).filter(Boolean);
  const lines = [];
  let line = '';
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (line && candidate.length > maxChars) {
      lines.push(line);
      line = word;
    } else {
      line = candidate;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function defs() {
  return `<defs>
    <linearGradient id="gv-gradient" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${colors.purple}"/><stop offset="1" stop-color="${colors.cyan}"/>
    </linearGradient>
    <radialGradient id="gv-glow" cx="75%" cy="18%" r="75%">
      <stop offset="0" stop-color="${colors.purple}" stop-opacity=".35"/><stop offset=".46" stop-color="${colors.cyan}" stop-opacity=".09"/><stop offset="1" stop-color="${colors.bg}" stop-opacity="0"/>
    </radialGradient>
    <pattern id="gv-grid" width="72" height="72" patternUnits="userSpaceOnUse">
      <path d="M72 0H0V72" fill="none" stroke="${colors.cyan}" stroke-opacity=".08" stroke-width="1"/>
      <circle cx="1" cy="1" r="1.5" fill="${colors.cyan}" fill-opacity=".24"/>
    </pattern>
    <filter id="gv-blur"><feGaussianBlur stdDeviation="28"/></filter>
    <filter id="gv-shadow"><feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#000" flood-opacity=".55"/></filter>
  </defs>`;
}

function atmosphere(width, height, accent = colors.cyan) {
  const points = Array.from({ length: 18 }, (_, index) => {
    const x = 90 + ((index * 173) % (width - 180));
    const y = 120 + ((index * 97) % (height - 240));
    return `<circle cx="${x}" cy="${y}" r="${index % 3 === 0 ? 4 : 2}" fill="${index % 2 ? accent : colors.purple}" fill-opacity="${index % 3 === 0 ? '.65' : '.32'}"/>`;
  }).join('');
  const links = Array.from({ length: 8 }, (_, index) => {
    const x1 = 140 + index * 110;
    const y1 = 210 + (index % 4) * 135;
    const x2 = width - 110 - index * 92;
    const y2 = height - 190 - (index % 3) * 160;
    return `<path d="M${x1} ${y1} C${width * .45} ${height * .42}, ${width * .58} ${height * .58}, ${x2} ${y2}" fill="none" stroke="${accent}" stroke-opacity=".13" stroke-width="2"/>`;
  }).join('');
  return `<rect width="${width}" height="${height}" fill="url(#gv-glow)"/><rect width="${width}" height="${height}" fill="url(#gv-grid)"/><g>${links}${points}</g><circle cx="${width * .78}" cy="${height * .2}" r="${Math.min(width, height) * .16}" fill="${accent}" fill-opacity=".10" filter="url(#gv-blur)"/>`;
}

function baseSvg(width, height, content) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img">${defs()}${content}</svg>`;
}

function profileSvg(name, ring) {
  const mark = dataUri(profileSvgSource);
  return baseSvg(1080, 1080, `${atmosphere(1080, 1080, ring)}
    <rect width="1080" height="1080" rx="240" fill="${colors.bg}" fill-opacity=".88"/>
    <rect width="1080" height="1080" fill="url(#gv-glow)"/>
    <circle cx="540" cy="540" r="372" fill="${colors.deep}" stroke="${ring}" stroke-opacity=".68" stroke-width="8" filter="url(#gv-shadow)"/>
    <circle cx="540" cy="540" r="344" fill="none" stroke="url(#gv-gradient)" stroke-width="3" stroke-opacity=".8"/>
    <image href="${mark}" x="305" y="365" width="470" height="350" preserveAspectRatio="xMidYMid meet"/>
    <text x="540" y="916" text-anchor="middle" fill="${colors.text}" font-family="Space Grotesk, Inter, Arial, sans-serif" font-size="32" font-weight="700" letter-spacing="6">GENTLE-VANGUARD</text>
    <text x="540" y="962" text-anchor="middle" fill="${ring}" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="4">${esc(name.toUpperCase())}</text>`);
}

function flyerSvg(campaign, phase = 0) {
  const [line1, line2, line3] = campaign.title;
  const mark = dataUri(profileSvgSource);
  const shift = phase * 18;
  const [bodyLine1 = '', bodyLine2 = ''] = wrapText(campaign.body, 43);
  return baseSvg(1080, 1350, `<rect width="1080" height="1350" fill="${colors.bg}"/>
    ${atmosphere(1080, 1350, campaign.accent)}
    <rect x="68" y="64" width="944" height="1222" rx="28" fill="none" stroke="${colors.raised}" stroke-width="2"/>
    <path d="M68 260H1012" stroke="${campaign.accent}" stroke-opacity=".28"/>
    <image href="${mark}" x="78" y="86" width="72" height="72"/>
    <text x="174" y="119" fill="${colors.text}" font-family="Space Grotesk, Inter, Arial, sans-serif" font-size="24" font-weight="700" letter-spacing="3">GENTLE-VANGUARD</text>
    <text x="174" y="151" fill="${colors.faint}" font-family="Inter, Arial, sans-serif" font-size="15" letter-spacing="2">ACADEMY · STACK · ASESORÍA</text>
    <text x="108" y="330" fill="${campaign.accent}" font-family="JetBrains Mono, monospace" font-size="22" font-weight="700" letter-spacing="4">${esc(campaign.kicker)}</text>
    <text x="108" y="478" fill="${colors.text}" font-family="Space Grotesk, Inter, Arial, sans-serif" font-size="78" font-weight="700" letter-spacing="0">${esc(line1)}</text>
    <text x="108" y="566" fill="${colors.text}" font-family="Space Grotesk, Inter, Arial, sans-serif" font-size="78" font-weight="700">${esc(line2)}</text>
    <text x="108" y="654" fill="url(#gv-gradient)" font-family="Space Grotesk, Inter, Arial, sans-serif" font-size="78" font-weight="700">${esc(line3)}</text>
    <text x="108" y="724" fill="${colors.muted}" font-family="Inter, Arial, sans-serif" font-size="23">${esc(bodyLine1)}</text>
    <text x="108" y="758" fill="${colors.muted}" font-family="Inter, Arial, sans-serif" font-size="23">${esc(bodyLine2)}</text>
    <g transform="translate(${650 + shift} ${970 - shift})" opacity=".96">
      <circle cx="0" cy="0" r="184" fill="${colors.deep}" stroke="${campaign.accent}" stroke-opacity=".5" stroke-width="3"/>
      <circle cx="0" cy="0" r="136" fill="none" stroke="url(#gv-gradient)" stroke-width="2"/>
      <image href="${mark}" x="-92" y="-66" width="184" height="132" preserveAspectRatio="xMidYMid meet"/>
      <path d="M-230 0H-184M184 0H230M0 -230V-184M0 184V230" stroke="${campaign.accent}" stroke-width="3" stroke-linecap="round"/>
    </g>
    <rect x="108" y="1170" width="548" height="78" rx="39" fill="${campaign.accent}"/>
    <text x="382" y="1220" text-anchor="middle" fill="${colors.deep}" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="800" letter-spacing="2">${esc(campaign.cta)}</text>
    <text x="108" y="1280" fill="${colors.faint}" font-family="JetBrains Mono, monospace" font-size="16" letter-spacing="2">APRENDÉ IA · DISEÑÁ SISTEMAS · CONSTRUÍ MEJOR</text>`);
}

function storySvg(campaign, phase = 0) {
  const rawLines = campaign.title.filter(Boolean);
  const titleLines = rawLines.length === 1 ? wrapText(rawLines[0], 18) : rawLines;
  const [line1 = '', line2 = '', line3 = ''] = titleLines;
  const [bodyLine1 = '', bodyLine2 = ''] = wrapText(campaign.body, 56);
  const mark = dataUri(profileSvgSource);
  const lift = phase * 22;
  return baseSvg(1080, 1920, `<rect width="1080" height="1920" fill="${colors.bg}"/>
    ${atmosphere(1080, 1920, campaign.accent)}
    <image href="${mark}" x="84" y="104" width="86" height="86"/>
    <text x="192" y="150" fill="${colors.text}" font-family="Space Grotesk, Inter, Arial, sans-serif" font-size="28" font-weight="700" letter-spacing="4">GENTLE-VANGUARD</text>
    <text x="92" y="550" fill="${campaign.accent}" font-family="JetBrains Mono, monospace" font-size="24" font-weight="700" letter-spacing="4">${esc(campaign.kicker)}</text>
    <text x="92" y="710" fill="${colors.text}" font-family="Space Grotesk, Inter, Arial, sans-serif" font-size="94" font-weight="700">${esc(line1)}</text>
    <text x="92" y="820" fill="${colors.text}" font-family="Space Grotesk, Inter, Arial, sans-serif" font-size="94" font-weight="700">${esc(line2)}</text>
    <text x="92" y="930" fill="url(#gv-gradient)" font-family="Space Grotesk, Inter, Arial, sans-serif" font-size="94" font-weight="700">${esc(line3)}</text>
    <text x="92" y="1050" fill="${colors.muted}" font-family="Inter, Arial, sans-serif" font-size="30">${esc(bodyLine1)}</text>
    <text x="92" y="1096" fill="${colors.muted}" font-family="Inter, Arial, sans-serif" font-size="30">${esc(bodyLine2)}</text>
    <g transform="translate(${540 + lift} ${1390 - lift})">
      <circle r="250" fill="${colors.deep}" stroke="${campaign.accent}" stroke-opacity=".65" stroke-width="4"/>
      <circle r="204" fill="none" stroke="url(#gv-gradient)" stroke-width="3"/>
      <image href="${mark}" x="-140" y="-100" width="280" height="200" preserveAspectRatio="xMidYMid meet"/>
    </g>
    <rect x="92" y="1690" width="896" height="92" rx="46" fill="${campaign.accent}"/>
    <text x="540" y="1748" text-anchor="middle" fill="${colors.deep}" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="800" letter-spacing="3">${esc(campaign.cta)}</text>
    <text x="92" y="1830" fill="${colors.faint}" font-family="JetBrains Mono, monospace" font-size="17" letter-spacing="2">ACADEMY · STACK LOCAL-FIRST · ASESORÍA</text>`);
}

const profileSvgSource = (await readFile(join(root, 'assets', 'logo.svg'), 'utf8')).replace(/ filter="url\(#gvGlow\)"/g, '');

async function renderPng(browser, svg, width, height, outputPath) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await page.setContent(`<body style="margin:0;background:${colors.bg}"><img style="display:block;width:100vw;height:100vh" src="${dataUri(svg)}" /></body>`);
  await page.locator('img').waitFor();
  await page.screenshot({ path: outputPath, type: 'png' });
  await page.close();
}

await mkdir(outputDir, { recursive: true });
await mkdir(videoDir, { recursive: true });
const browser = await chromium.launch({ headless: true });

for (const [name, ring] of profileVariants) {
  const svg = profileSvg(name, ring);
  await writeFile(join(outputDir, `profile-${name}.svg`), svg, 'utf8');
  await renderPng(browser, svg, 1080, 1080, join(outputDir, `profile-${name}.png`));
}

for (const campaign of campaigns) {
  const flyer = flyerSvg(campaign);
  const story = storySvg(campaign);
  await writeFile(join(outputDir, `${campaign.slug}-feed.svg`), flyer, 'utf8');
  await writeFile(join(outputDir, `${campaign.slug}-story.svg`), story, 'utf8');
  await renderPng(browser, flyer, 1080, 1350, join(outputDir, `${campaign.slug}-feed.png`));
  await renderPng(browser, story, 1080, 1920, join(outputDir, `${campaign.slug}-story.png`));
}

const videoSpecs = [
  ['video-productividad-15s', campaigns[0], '¿USÁS IA O SOLO LE HACÉS PREGUNTAS?', 'LA DIFERENCIA ES EL SISTEMA.'],
  ['video-ingenieria-15s', campaigns[2], 'UN CHATBOT NO ES TODA LA ARQUITECTURA.', 'DISEÑÁ ANTES DE DESPLEGAR.'],
  ['video-academy-15s', campaigns[4], '¿POR DÓNDE EMPEZAR CON IA?', 'UNA RUTA. CASOS REALES. CRITERIO.'],
];

for (const [slug, campaign, hook, close] of videoSpecs) {
  const cards = [
    { ...campaign, title: [hook, '', ''], body: 'Gentle-Vanguard · contenido claro para aprender y construir.', cta: 'SEGUÍ PARA VER MÁS' },
    { ...campaign, title: [campaign.title[0], campaign.title[1], campaign.title[2]], body: campaign.body, cta: 'GUARDÁ ESTE VIDEO' },
    { ...campaign, title: [close, '', ''], body: 'Workshop, Academy y asesoría técnica.', cta: 'LINK EN BIO' },
  ];
  for (let index = 0; index < cards.length; index += 1) {
    const card = storySvg(cards[index], index);
    await renderPng(browser, card, 1080, 1920, join(videoDir, `${slug}-${String(index + 1).padStart(2, '0')}.png`));
  }
  const inputPattern = join(videoDir, `${slug}-%02d.png`);
  const mp4 = join(outputDir, `${slug}.mp4`);
  execFileSync('ffmpeg', ['-y', '-framerate', '1/5', '-i', inputPattern, '-vf', 'fps=30,format=yuv420p', '-t', '15', '-movflags', '+faststart', mp4], { stdio: 'ignore' });
}

await browser.close();
await writeFile(join(outputDir, 'README.md'), `# Gentle-Vanguard social launch kit\n\nGenerated on 2026-09-07 from the official v2 Premium brand tokens.\n\n- Profiles: 1080x1080 PNG/SVG.\n- Feed flyers: 1080x1350 PNG/SVG.\n- Stories: 1080x1920 PNG/SVG.\n- Videos: three silent 15-second MP4s assembled from branded cards.\n\nReplace the neutral CTA “LINK EN BIO” only after the public handles and registration link exist.\nThe SVG sources are the editable masters; PNG and MP4 files are exports.\n`, 'utf8');

console.log(`Generated social kit in ${outputDir}`);
