import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { chromium } from 'playwright';

const root = resolve(import.meta.dirname, '../..');
const outputDir = join(root, 'docs', 'presentations', 'social-assets', '2026-09-gv-community-v2');

const colors = {
  bg: '#0F1115',
  deep: '#090C11',
  surface: '#1A1F2A',
  raised: '#252B38',
  cyan: '#22D3EE',
  cyanSoft: '#67E8F9',
  purple: '#A78BFA',
  gold: '#FBBF24',
  green: '#4ADE80',
  text: '#E8EEF4',
  muted: '#C4CDD8',
  faint: '#8B95A8',
};

const posts = [
  {
    platform: 'TikTok', slug: 'tiktok-01-sistema', width: 1080, height: 1920,
    kicker: 'HOOK PARA GUARDAR', title: 'NO TE FALTA IA. TE FALTA SISTEMA.',
    body: 'Contexto, método y verificación para que la IA produzca algo útil.', cta: 'SUMATE A LA COMUNIDAD',
    visual: 'robot', screenshot: 'tracing', accent: colors.cyan,
    caption: 'No te falta otra herramienta. Te falta un flujo que sepa qué entra, qué debe hacer y cómo comprobar el resultado. En Gentle-Vanguard compartimos IA, software y arquitectura con criterio. Guardalo y sumate a la comunidad.',
    hashtags: '#GentleVanguard #IA #Productividad #SoftwareEngineering',
  },
  {
    platform: 'TikTok', slug: 'tiktok-02-contexto', width: 1080, height: 1920,
    kicker: '3 SEÑALES', title: 'TU IA NECESITA CONTEXTO',
    body: 'Respuestas genéricas. Retrabajo. Resultados que nadie puede verificar.', cta: 'COMENTÁ: CONTEXTO',
    visual: 'architecture', screenshot: 'generator', accent: colors.purple,
    caption: 'Tres señales de que el problema no es el modelo: respuestas genéricas, retrabajo y resultados imposibles de verificar. La solución empieza por diseñar mejor el contexto. ¿Cuál te pasa más seguido?',
    hashtags: '#IA #PromptEngineering #AgentesDeIA #GentleVanguard',
  },
  {
    platform: 'Instagram', slug: 'instagram-01-idea-sistema', width: 1080, height: 1350,
    kicker: 'GUARDALO PARA DESPUÉS', title: 'DE LA IDEA AL SISTEMA DE IA',
    body: 'Datos → contexto → tools → evaluación. La arquitectura aparece antes del despliegue.', cta: 'DESLIZÁ / GUARDÁ',
    visual: 'workstation', screenshot: 'home', accent: colors.cyan,
    caption: 'Una idea no se convierte en producto solo porque le agregamos un modelo. Hay que pensar datos, contexto, tools, evaluación y operación. Esta es la conversación que queremos abrir en la comunidad Gentle-Vanguard.',
    hashtags: '#ArquitecturaDeSoftware #IngenieriaDeIA #RAG #Agentes',
  },
  {
    platform: 'Instagram', slug: 'instagram-02-ruta-academy', width: 1080, height: 1350,
    kicker: 'RUTA ACADEMY', title: 'APRENDÉ IA SIN EMPEZAR POR EL RUIDO',
    body: 'Fundamentos, productividad, agentes, ingeniería, producción e investigación.', cta: 'EXPLORÁ ACADEMY',
    visual: 'dashboard', screenshot: 'timeline', accent: colors.purple,
    caption: 'No necesitás memorizar todas las herramientas para empezar. Necesitás una ruta. Academy reúne fundamentos, productividad, agentes, ingeniería de IA, producción e investigación para que avances con orden.',
    hashtags: '#Academy #EducacionTecnologica #InteligenciaArtificial #GentleVanguard',
  },
  {
    platform: 'Facebook', slug: 'facebook-01-workshop', width: 1200, height: 1500,
    kicker: 'WORKSHOP GRATUITO', title: 'IA ÚTIL PARA TODOS',
    body: 'Para estudiantes, docentes, profesionales, emprendedores y curiosos.', cta: 'INVITÁ A ALGUIEN',
    visual: 'workshop', screenshot: 'home', accent: colors.gold,
    caption: 'Abrimos un espacio gratuito para aprender a usar IA en tareas reales de casa, estudio y trabajo. Sin tecnicismos innecesarios y con ejemplos que puedas volver a usar. Compartilo con alguien que quiere empezar.',
    hashtags: '#Workshop #IAParaTodos #Aprendizaje #GentleVanguard',
  },
  {
    platform: 'Facebook', slug: 'facebook-02-negocio', width: 1200, height: 1500,
    kicker: 'PARA EMPRENDEDORES', title: 'TU NEGOCIO NO NECESITA MÁS APPS',
    body: 'Necesita un flujo claro para vender, atender y aprender de cada conversación.', cta: 'SUMATE AL WORKSHOP',
    visual: 'community', screenshot: 'generator', accent: colors.cyan,
    caption: 'Más herramientas no siempre significan más capacidad. Podemos ayudarte a ordenar contenido, atención, ventas y seguimiento con IA, empezando por lo que ya hacés hoy.',
    hashtags: '#Emprendedores #MarketingConIA #Ventas #Productividad',
  },
  {
    platform: 'WhatsApp Business', slug: 'whatsapp-01-comunidad', width: 1080, height: 1920,
    kicker: 'COMUNIDAD GENTLE-VANGUARD', title: 'APRENDÉ. PREGUNTÁ. CONSTRUÍ.',
    body: 'Un espacio para público general, alumnos, docentes, programadores y equipos.', cta: 'ESCRIBÍ: COMUNIDAD',
    visual: 'community', screenshot: 'home', accent: colors.green,
    caption: 'Estamos formando una comunidad para aprender IA con criterio, compartir casos y acompañarnos en proyectos reales. Escribinos “COMUNIDAD” para enterarte de los próximos encuentros.',
    hashtags: '#ComunidadIA #GentleVanguard #AprenderJuntos',
  },
  {
    platform: 'WhatsApp Business', slug: 'whatsapp-02-live', width: 1080, height: 1920,
    kicker: 'PRÓXIMA CHARLA EN VIVO', title: 'PREGUNTÁ LO QUE TODAVÍA NO TE ANIMASTE A PREGUNTAR',
    body: 'IA en tu día a día, productividad, arquitectura y software.', cta: 'PEDÍ EL PRÓXIMO HORARIO',
    visual: 'workshop', screenshot: 'timeline', accent: colors.gold,
    caption: 'Las mejores preguntas suelen aparecer después de probar. Sumate a las charlas en vivo de Gentle-Vanguard y traé tu caso, tu duda o tu sistema.',
    hashtags: '#CharlasEnVivo #IA #Software #GentleVanguard',
  },
  {
    platform: 'X', slug: 'x-01-arquitectura', width: 1600, height: 900,
    kicker: 'IDEA PARA DISCUTIR', title: 'UN CHATBOT NO ES TODA LA ARQUITECTURA',
    body: 'Cuando aparecen datos, memoria, tools, evaluación y producción, aparece la ingeniería.', cta: 'ABRIMOS EL HILO',
    visual: 'architecture', screenshot: 'tracing', accent: colors.cyan,
    caption: 'Un chatbot puede ser el inicio. No necesariamente es el sistema. ¿Qué capa te cuesta más diseñar: datos, contexto, tools, evaluación u operación?',
    hashtags: '#AIEngineering #SoftwareArchitecture #LLM',
  },
  {
    platform: 'X', slug: 'x-02-local-first', width: 1600, height: 900,
    kicker: 'LOCAL-FIRST EN 3 CAPAS', title: 'TUS DATOS. TU CONTEXTO. TU CONTROL.',
    body: 'Operación local, servidor opcional y trazabilidad para decidir mejor.', cta: 'LEÉ EL CASO',
    visual: 'robot', screenshot: 'home', accent: colors.purple,
    caption: 'Local-first no es desconectarse del mundo. Es decidir qué vive en tu equipo, qué se comparte y cómo se verifica cada paso. Ese es uno de los principios de Gentle-Vanguard.',
    hashtags: '#LocalFirst #Privacy #DeveloperTools #GentleVanguard',
  },
  {
    platform: 'Reddit', slug: 'reddit-01-build-log', width: 1200, height: 800,
    kicker: 'BUILD LOG', title: 'DE CHAT A SISTEMA',
    body: 'Qué cambia cuando dejamos de pedir respuestas y empezamos a diseñar workflows.', cta: 'FEEDBACK BIENVENIDO',
    visual: 'architecture', screenshot: 'generator', accent: colors.cyan,
    caption: 'Estamos construyendo Gentle-Vanguard como una capa local-first para trabajar con asistentes de IA. Este es el debate: ¿qué partes de tu workflow no confiarías todavía a un agente?',
    hashtags: '#BuildInPublic #AIEngineering #OpenSource',
  },
  {
    platform: 'Reddit', slug: 'reddit-02-falla-primero', width: 1200, height: 800,
    kicker: 'PREGUNTA ABIERTA', title: '¿QUÉ FALLA PRIMERO EN TU IA?',
    body: 'El prompt, los datos, el costo, la evaluación o la operación.', cta: 'CONTALO EN LOS COMENTARIOS',
    visual: 'dashboard', screenshot: 'tracing', accent: colors.gold,
    caption: 'No buscamos vender una receta. Queremos aprender de casos reales. ¿Dónde se rompe primero tu sistema de IA cuando pasa de demo a uso diario?',
    hashtags: '#MachineLearning #LLMOps #SoftwareEngineering',
  },
  {
    platform: 'LinkedIn', slug: 'linkedin-01-ingenieria', width: 1200, height: 627,
    kicker: 'PARA EQUIPOS TÉCNICOS', title: 'LA IA NECESITA INGENIERÍA',
    body: 'Arquitectura, observabilidad, seguridad y aprendizaje continuo. No solo prompts.', cta: 'SOLICITÁ UN DIAGNÓSTICO',
    visual: 'architecture', screenshot: 'tracing', accent: colors.cyan,
    caption: 'La adopción de IA se vuelve sostenible cuando el equipo puede explicar sus decisiones: qué datos usa, qué herramientas activa, cómo mide calidad y qué ocurre cuando falla. Gentle-Vanguard combina Academy, stack y asesoría.',
    hashtags: '#Leadership #AITransformation #SoftwareArchitecture #Consulting',
  },
  {
    platform: 'LinkedIn', slug: 'linkedin-02-diagnostico', width: 1200, height: 627,
    kicker: 'ASESORÍA GENTLE-VANGUARD', title: 'DIAGNÓSTICO ANTES DE ESCALAR',
    body: 'Ordenamos el problema, dibujamos las opciones y acompañamos la implementación.', cta: 'CONVERSEMOS',
    visual: 'community', screenshot: 'home', accent: colors.purple,
    caption: 'Antes de sumar otra plataforma, conviene mirar el sistema completo: objetivos, datos, arquitectura, costos, riesgos y capacidad del equipo. Abrimos conversaciones con organizaciones que quieren avanzar con criterio.',
    hashtags: '#Advisory #DigitalTransformation #AIArchitecture #GentleVanguard',
  },
];

function esc(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[char]);
}

function dataUri(value, mime = 'image/svg+xml') {
  const buffer = Buffer.isBuffer(value) ? value : Buffer.from(value);
  return `data:${mime};base64,${buffer.toString('base64')}`;
}

function wrapText(value, maxChars) {
  const lines = [];
  let line = '';
  for (const word of String(value).split(/\s+/).filter(Boolean)) {
    const candidate = line ? `${line} ${word}` : word;
    if (line && candidate.length > maxChars) {
      lines.push(line);
      line = word;
    } else line = candidate;
  }
  if (line) lines.push(line);
  return lines;
}

function defs(post) {
  return `<defs>
    <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${colors.purple}"/><stop offset="1" stop-color="${colors.cyan}"/></linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${post.accent}"/><stop offset="1" stop-color="${colors.purple}"/></linearGradient>
    <radialGradient id="glow" cx="86%" cy="12%" r="78%"><stop offset="0" stop-color="${post.accent}" stop-opacity=".3"/><stop offset=".5" stop-color="${colors.purple}" stop-opacity=".1"/><stop offset="1" stop-color="${colors.bg}" stop-opacity="0"/></radialGradient>
    <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse"><path d="M56 0H0V56" fill="none" stroke="${colors.cyan}" stroke-opacity=".08"/><circle cx="1" cy="1" r="1.4" fill="${post.accent}" fill-opacity=".4"/></pattern>
    <filter id="shadow" x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="18" stdDeviation="18" flood-color="#000" flood-opacity=".55"/></filter>
    <filter id="soft" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="24"/></filter>
    <marker id="arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8Z" fill="${post.accent}"/></marker>
    <clipPath id="shot-clip"><rect x="0" y="0" width="100" height="100" rx="14"/></clipPath>
  </defs>`;
}

function shell(post, content) {
  const { width, height } = post;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img">${defs(post)}
    <rect width="${width}" height="${height}" fill="${colors.bg}"/>
    <rect width="${width}" height="${height}" fill="url(#glow)"/>
    <rect width="${width}" height="${height}" fill="url(#grid)"/>
    <circle cx="${width * .86}" cy="${height * .16}" r="${Math.min(width, height) * .18}" fill="${post.accent}" fill-opacity=".08" filter="url(#soft)"/>
    ${content}
  </svg>`;
}

function logo(x, y, width, height, logoData) {
  return `<image href="${logoData}" x="${x}" y="${y}" width="${width}" height="${height}" preserveAspectRatio="xMidYMid meet"/>`;
}

function header(post, logoData) {
  const compact = post.width < 1300;
  const logoW = compact ? 118 : 132;
  const logoH = compact ? 78 : 86;
  return `${logo(64, 48, logoW, logoH, logoData)}
    <text x="${64 + logoW + 18}" y="${compact ? 76 : 80}" fill="${colors.text}" font-family="Space Grotesk, Inter, Arial, sans-serif" font-size="${compact ? 22 : 25}" font-weight="700" letter-spacing="3">GENTLE-VANGUARD</text>
    <text x="${64 + logoW + 18}" y="${compact ? 103 : 110}" fill="${colors.faint}" font-family="JetBrains Mono, monospace" font-size="13" letter-spacing="2">ACADEMY · STACK · ASESORÍA</text>
    <text x="${post.width - 64}" y="${compact ? 78 : 82}" text-anchor="end" fill="${post.accent}" font-family="JetBrains Mono, monospace" font-size="13" font-weight="700" letter-spacing="2">${esc(post.platform.toUpperCase())}</text>`;
}

function titleBlock(post, x, y, maxChars, fontSize) {
  const lines = wrapText(post.title, maxChars);
  const lineHeight = Math.round(fontSize * 1.08);
  const text = lines.map((line, index) => `<text x="${x}" y="${y + index * lineHeight}" fill="${index === lines.length - 1 ? 'url(#gradient)' : colors.text}" font-family="Space Grotesk, Inter, Arial, sans-serif" font-size="${fontSize}" font-weight="700">${esc(line)}</text>`).join('');
  return { lines, height: lines.length * lineHeight, text };
}

function bodyBlock(value, x, y, maxChars, fontSize) {
  return wrapText(value, maxChars).slice(0, 3).map((line, index) => `<text x="${x}" y="${y + index * Math.round(fontSize * 1.35)}" fill="${colors.muted}" font-family="Inter, Arial, sans-serif" font-size="${fontSize}">${esc(line)}</text>`).join('');
}

function shotPanel(x, y, width, height, imageData, label, accent) {
  const innerX = x + 20;
  const innerY = y + 52;
  const innerW = width - 40;
  const innerH = height - 72;
  return `<g filter="url(#shadow)">
    <rect x="${x}" y="${y}" width="${width}" height="${height}" rx="18" fill="${colors.surface}" stroke="${accent}" stroke-opacity=".42" stroke-width="2"/>
    <circle cx="${x + 28}" cy="${y + 27}" r="5" fill="#EE6D75"/><circle cx="${x + 46}" cy="${y + 27}" r="5" fill="${colors.gold}"/><circle cx="${x + 64}" cy="${y + 27}" r="5" fill="${colors.green}"/>
    <text x="${x + 88}" y="${y + 32}" fill="${colors.faint}" font-family="JetBrains Mono, monospace" font-size="13" letter-spacing="1">${esc(label)}</text>
    <clipPath id="clip-${Math.round(x)}-${Math.round(y)}"><rect x="${innerX}" y="${innerY}" width="${innerW}" height="${innerH}" rx="8"/></clipPath>
    <image href="${imageData}" x="${innerX}" y="${innerY}" width="${innerW}" height="${innerH}" preserveAspectRatio="xMidYMid slice" clip-path="url(#clip-${Math.round(x)}-${Math.round(y)})"/>
    <rect x="${innerX}" y="${innerY}" width="${innerW}" height="${innerH}" rx="8" fill="${accent}" fill-opacity=".05"/>
  </g>`;
}

function nodeDiagram(x, y, width, height, accent, labels = ['DATOS', 'CONTEXTO', 'TOOLS', 'EVALUACIÓN']) {
  const gap = width / labels.length;
  const nodeW = Math.min(190, gap - 24);
  const nodeY = y + height * .34;
  const lineY = nodeY + 52;
  const nodes = labels.map((label, index) => {
    const nodeX = x + index * gap + (gap - nodeW) / 2;
    const next = index < labels.length - 1 ? `<path d="M${nodeX + nodeW + 8} ${lineY}H${x + (index + 1) * gap + (gap - nodeW) / 2 - 8}" fill="none" stroke="${accent}" stroke-width="3" marker-end="url(#arrow)"/>` : '';
    return `${next}<rect x="${nodeX}" y="${nodeY}" width="${nodeW}" height="104" rx="14" fill="${colors.deep}" stroke="${index % 2 ? colors.purple : accent}" stroke-width="2"/><circle cx="${nodeX + 22}" cy="${nodeY + 26}" r="6" fill="${index % 2 ? colors.purple : accent}"/><text x="${nodeX + 40}" y="${nodeY + 32}" fill="${colors.text}" font-family="Space Grotesk, Inter, Arial, sans-serif" font-size="${Math.min(19, nodeW / 10)}" font-weight="700">${esc(label)}</text><text x="${nodeX + 22}" y="${nodeY + 66}" fill="${colors.faint}" font-family="JetBrains Mono, monospace" font-size="12">${index === 0 ? 'source' : index === 1 ? 'memory' : index === 2 ? 'action' : 'proof'}</text>`;
  }).join('');
  return `<g><text x="${x}" y="${y + 34}" fill="${colors.faint}" font-family="JetBrains Mono, monospace" font-size="13" letter-spacing="2">WORKFLOW DE REFERENCIA</text>${nodes}<path d="M${x + gap / 2} ${nodeY - 55}C${x + gap * 1.5} ${nodeY - 120},${x + gap * 2.5} ${nodeY - 120},${x + gap * 3.5} ${nodeY - 55}" fill="none" stroke="url(#gradient)" stroke-width="2" stroke-dasharray="7 9"/><text x="${x}" y="${y + height - 20}" fill="${accent}" font-family="Inter, Arial, sans-serif" font-size="15" font-weight="700">Diseñá el recorrido antes de desplegar.</text></g>`;
}

function communityVisual(x, y, width, height, imageData, accent) {
  const cards = ['PÚBLICO', 'ALUMNOS', 'EQUIPOS'];
  const cardW = (width - 34) / 3;
  const cardsSvg = cards.map((label, index) => `<rect x="${x + index * (cardW + 17)}" y="${y + height - 118}" width="${cardW}" height="78" rx="12" fill="${colors.deep}" stroke="${index === 1 ? accent : colors.raised}"/><circle cx="${x + index * (cardW + 17) + 26}" cy="${y + height - 78}" r="10" fill="${index === 1 ? accent : colors.purple}"/><text x="${x + index * (cardW + 17) + 46}" y="${y + height - 73}" fill="${colors.text}" font-family="Inter, Arial, sans-serif" font-size="14" font-weight="700">${label}</text>`).join('');
  return `${shotPanel(x, y, width, height - 140, imageData, 'ACADEMY / COMMUNITY', accent)}${cardsSvg}`;
}

function workshopVisual(x, y, width, height, accent) {
  const centerX = x + width / 2;
  const centerY = y + height * .45;
  const nodes = ['PREGUNTA', 'DEMO', 'EJERCICIO', 'COMUNIDAD'];
  const outer = nodes.map((label, index) => {
    const angle = (-Math.PI / 2) + index * Math.PI / 2;
    const nx = centerX + Math.cos(angle) * width * .29;
    const ny = centerY + Math.sin(angle) * height * .27;
    return `<path d="M${centerX} ${centerY}L${nx} ${ny}" stroke="${accent}" stroke-opacity=".55" stroke-width="2" marker-end="url(#arrow)"/><rect x="${nx - 76}" y="${ny - 28}" width="152" height="56" rx="28" fill="${colors.deep}" stroke="${accent}" stroke-opacity=".75"/><text x="${nx}" y="${ny + 6}" text-anchor="middle" fill="${colors.text}" font-family="Inter, Arial, sans-serif" font-size="13" font-weight="700">${label}</text>`;
  }).join('');
  return `<g><rect x="${x}" y="${y}" width="${width}" height="${height}" rx="18" fill="${colors.surface}" stroke="${accent}" stroke-opacity=".42" stroke-width="2" filter="url(#shadow)"/><text x="${x + 28}" y="${y + 40}" fill="${accent}" font-family="JetBrains Mono, monospace" font-size="14" letter-spacing="2">LIVE WORKSHOP</text><circle cx="${centerX}" cy="${centerY}" r="74" fill="${colors.deep}" stroke="url(#gradient)" stroke-width="3"/><text x="${centerX}" y="${centerY - 8}" text-anchor="middle" fill="${colors.text}" font-family="Space Grotesk, Inter, Arial, sans-serif" font-size="24" font-weight="700">IA</text><text x="${centerX}" y="${centerY + 22}" text-anchor="middle" fill="${colors.faint}" font-family="JetBrains Mono, monospace" font-size="11">60 MIN</text>${outer}</g>`;
}

function robotVisual(x, y, width, height, accent) {
  const cx = x + width / 2;
  const cy = y + height * .48;
  const eye = `<circle cx="${cx - 31}" cy="${cy - 26}" r="8" fill="${colors.cyan}"/><circle cx="${cx + 31}" cy="${cy - 26}" r="8" fill="${colors.cyan}"/>`;
  const nodes = [
    [x + width * .13, y + height * .27, 'CONTEXTO'],
    [x + width * .84, y + height * .31, 'TOOLS'],
    [x + width * .16, y + height * .76, 'DATOS'],
    [x + width * .82, y + height * .76, 'EVALUACIÓN'],
  ].map(([nx, ny, label]) => `<path d="M${cx} ${cy + 8}L${nx} ${ny}" stroke="${accent}" stroke-opacity=".5" stroke-width="2" stroke-dasharray="6 8"/><circle cx="${nx}" cy="${ny}" r="7" fill="${accent}"/><text x="${nx}" y="${ny + 30}" text-anchor="middle" fill="${colors.muted}" font-family="JetBrains Mono, monospace" font-size="11" letter-spacing="1">${label}</text>`).join('');
  return `<g><rect x="${x}" y="${y}" width="${width}" height="${height}" rx="18" fill="${colors.surface}" stroke="${accent}" stroke-opacity=".5" stroke-width="2" filter="url(#shadow)"/><text x="${x + 28}" y="${y + 40}" fill="${accent}" font-family="JetBrains Mono, monospace" font-size="14" letter-spacing="2">HUMAN + AI / SYSTEM VIEW</text>${nodes}<ellipse cx="${cx}" cy="${cy + 112}" rx="116" ry="26" fill="${accent}" fill-opacity=".12" filter="url(#soft)"/><path d="M${cx - 96} ${cy + 104}Q${cx - 122} ${cy + 190} ${cx - 65} ${cy + 214}H${cx + 65}Q${cx + 122} ${cy + 190} ${cx + 96} ${cy + 104}L${cx + 66} ${cy + 80}Q${cx + 52} ${cy + 138} ${cx} ${cy + 144}Q${cx - 52} ${cy + 138} ${cx - 66} ${cy + 80}Z" fill="${colors.deep}" stroke="url(#gradient)" stroke-width="4"/><rect x="${cx - 92}" y="${cy - 96}" width="184" height="142" rx="44" fill="${colors.deep}" stroke="url(#gradient)" stroke-width="5"/><path d="M${cx - 46} ${cy - 98}Q${cx} ${cy - 145} ${cx + 46} ${cy - 98}" fill="none" stroke="${accent}" stroke-width="4"/><path d="M${cx - 48} ${cy + 6}Q${cx} ${cy + 34} ${cx + 48} ${cy + 6}" fill="none" stroke="${colors.purple}" stroke-width="4" stroke-linecap="round"/>${eye}<circle cx="${cx}" cy="${cy + 88}" r="12" fill="${colors.gold}"/><text x="${cx}" y="${y + height - 24}" text-anchor="middle" fill="${colors.faint}" font-family="Inter, Arial, sans-serif" font-size="14">Diseñá el sistema. Elegí dónde la IA ayuda.</text></g>`;
}

function workstationVisual(x, y, width, height, imageData, accent) {
  const screenX = x + 42;
  const screenY = y + 56;
  const screenW = width - 84;
  const screenH = height * .52;
  const imageX = screenX + 18;
  const imageY = screenY + 18;
  const imageW = screenW - 36;
  const imageH = screenH - 36;
  const code = ['trace.start()', 'context.load()', 'agent.evaluate()', 'result.verify()'];
  const codeLines = code.map((line, index) => `<text x="${x + 64}" y="${y + height - 112 + index * 20}" fill="${index === 2 ? accent : colors.muted}" font-family="JetBrains Mono, monospace" font-size="13">${esc(line)}</text>`).join('');
  return `<g><rect x="${x}" y="${y}" width="${width}" height="${height}" rx="18" fill="${colors.surface}" stroke="${accent}" stroke-opacity=".42" stroke-width="2" filter="url(#shadow)"/><rect x="${screenX}" y="${screenY}" width="${screenW}" height="${screenH}" rx="12" fill="${colors.deep}" stroke="${accent}" stroke-opacity=".7" stroke-width="3"/><image href="${imageData}" x="${imageX}" y="${imageY}" width="${imageW}" height="${imageH}" preserveAspectRatio="xMidYMid slice"/><path d="M${x + width * .42} ${screenY + screenH}H${x + width * .58}L${x + width * .64} ${y + height - 46}H${x + width * .36}Z" fill="${colors.deep}" stroke="${colors.raised}"/><rect x="${x + 54}" y="${y + height - 38}" width="${width - 108}" height="8" rx="4" fill="${accent}" fill-opacity=".55"/>${codeLines}<text x="${x + 28}" y="${y + 34}" fill="${accent}" font-family="JetBrains Mono, monospace" font-size="14" letter-spacing="2">LIVE SYSTEM / OBSERVABILITY</text></g>`;
}

function visualBlock(post, x, y, width, height, images) {
  if (post.visual === 'architecture') return nodeDiagram(x, y, width, height, post.accent);
  if (post.visual === 'workshop') return workshopVisual(x, y, width, height, post.accent);
  if (post.visual === 'robot') return robotVisual(x, y, width, height, post.accent);
  if (post.visual === 'workstation') return workstationVisual(x, y, width, height, images[post.screenshot], post.accent);
  if (post.visual === 'community') return communityVisual(x, y, width, height, images[post.screenshot], post.accent);
  return shotPanel(x, y, width, height, images[post.screenshot], `ACADEMY / ${post.screenshot.toUpperCase()}`, post.accent);
}

function renderPost(post, logoData, images) {
  const { width, height } = post;
  const vertical = height / width > 1.15;
  const portrait = !vertical && height / width > .9;
  const content = [header(post, logoData)];
  if (vertical) {
    const x = 72;
    const title = titleBlock(post, x, 380, 16, width > 1100 ? 78 : 82);
    content.push(`<text x="${x}" y="300" fill="${post.accent}" font-family="JetBrains Mono, monospace" font-size="18" font-weight="700" letter-spacing="3">${esc(post.kicker)}</text>`);
    content.push(title.text);
    content.push(bodyBlock(post.body, x, 380 + title.height + 38, 42, 24));
    const visualY = Math.min(height - 560, 940);
    content.push(visualBlock(post, 72, visualY, width - 144, 460, images));
    content.push(`<rect x="72" y="${height - 250}" width="${width - 144}" height="82" rx="41" fill="${post.accent}"/><text x="${width / 2}" y="${height - 198}" text-anchor="middle" fill="${colors.deep}" font-family="Inter, Arial, sans-serif" font-size="22" font-weight="800" letter-spacing="2">${esc(post.cta)}</text><text x="72" y="${height - 122}" fill="${colors.faint}" font-family="JetBrains Mono, monospace" font-size="14" letter-spacing="2">APRENDÉ IA · DISEÑÁ SISTEMAS · CONSTRUÍ MEJOR</text>`);
  } else if (portrait) {
    const x = 72;
    const title = titleBlock(post, x, 320, 18, 66);
    content.push(`<text x="${x}" y="260" fill="${post.accent}" font-family="JetBrains Mono, monospace" font-size="17" font-weight="700" letter-spacing="3">${esc(post.kicker)}</text>`);
    content.push(title.text);
    content.push(bodyBlock(post.body, x, 320 + title.height + 28, 42, 22));
    content.push(visualBlock(post, 72, 730, width - 144, 380, images));
    content.push(`<rect x="72" y="${height - 170}" width="${width - 144}" height="70" rx="35" fill="${post.accent}"/><text x="${width / 2}" y="${height - 125}" text-anchor="middle" fill="${colors.deep}" font-family="Inter, Arial, sans-serif" font-size="20" font-weight="800" letter-spacing="2">${esc(post.cta)}</text>`);
  } else {
    const x = 64;
    const title = titleBlock(post, x, 240, 18, 52);
    content.push(`<text x="${x}" y="170" fill="${post.accent}" font-family="JetBrains Mono, monospace" font-size="15" font-weight="700" letter-spacing="3">${esc(post.kicker)}</text>`);
    content.push(title.text);
    content.push(bodyBlock(post.body, x, 270 + title.height, 34, 20));
    content.push(`<rect x="${x}" y="${height - 112}" width="360" height="52" rx="26" fill="${post.accent}"/><text x="${x + 180}" y="${height - 79}" text-anchor="middle" fill="${colors.deep}" font-family="Inter, Arial, sans-serif" font-size="16" font-weight="800" letter-spacing="1.5">${esc(post.cta)}</text>`);
    content.push(visualBlock(post, Math.round(width * .49), 118, Math.round(width * .45), height - 236, images));
  }
  return shell(post, content.join(''));
}

const [logoSource, tracing, generator, home, timeline] = await Promise.all([
  readFile(join(root, 'assets', 'logo.svg'), 'utf8'),
  readFile(join(root, 'apps', 'academy-web', 'assets', 'demo', 'dashboard-tracing.png')),
  readFile(join(root, 'apps', 'academy-web', 'assets', 'demo', 'generator.png')),
  readFile(join(root, 'apps', 'academy-web', 'assets', 'demo', 'dashboard-home.png')),
  readFile(join(root, 'apps', 'academy-web', 'assets', 'demo', 'dashboard-timeline.png')),
]);
const logoData = dataUri(logoSource.replace(/ filter="url\(#gvGlow\)"/g, ''));
const images = { tracing: dataUri(tracing, 'image/png'), generator: dataUri(generator, 'image/png'), home: dataUri(home, 'image/png'), timeline: dataUri(timeline, 'image/png') };

await mkdir(outputDir, { recursive: true });
const browser = await chromium.launch({ headless: true });
const captionSections = ['# Gentle-Vanguard Community Mini V2', '', 'Generated with the official G+V monogram from `assets/logo.svg` and the v2 Premium brand tokens.', ''];

for (const post of posts) {
  const svg = renderPost(post, logoData, images);
  const baseName = `${post.slug}-${post.width}x${post.height}`;
  await writeFile(join(outputDir, `${baseName}.svg`), svg, 'utf8');
  const page = await browser.newPage({ viewport: { width: post.width, height: post.height }, deviceScaleFactor: 1 });
  await page.setContent(`<body style="margin:0;background:${colors.bg}"><img style="display:block;width:100vw;height:100vh" src="${dataUri(svg)}"/></body>`);
  await page.locator('img').waitFor();
  await page.screenshot({ path: join(outputDir, `${baseName}.png`), type: 'png' });
  await page.close();
  captionSections.push(`## ${post.platform} — ${post.slug}`, '', `**Formato:** ${post.width}×${post.height}`, `**Texto en imagen:** ${post.title}`, '', post.caption, '', `**Hashtags:** ${post.hashtags}`, '');
}

await browser.close();
await writeFile(join(outputDir, 'CAPTIONS.md'), captionSections.join('\n'), 'utf8');
await writeFile(join(outputDir, 'README.md'), `# Gentle-Vanguard Community Mini V2\n\n14 piezas individuales, dos por red social, con el monograma oficial G+V.\n\n- TikTok: 1080x1920\n- Instagram: 1080x1350\n- Facebook: 1200x1500\n- WhatsApp Business: 1080x1920\n- X: 1600x900\n- Reddit: 1200x800\n- LinkedIn: 1200x627\n\nCada pieza combina copy corto, diagramas del workflow y capturas reales de Academy. Las leyendas listas para publicar están en [CAPTIONS.md](./CAPTIONS.md).\n`, 'utf8');
console.log(`Generated ${posts.length} community pieces in ${outputDir}`);
