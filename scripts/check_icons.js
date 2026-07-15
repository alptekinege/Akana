const fs = require('fs');
const path = require('path');
const vm = require('vm');
const base = path.join(__dirname, '..') + path.sep;
const code = fs.readFileSync(path.join(base, 'assets', 'icons.js'), 'utf8');
const sandbox = { window: {}, document: undefined };
vm.createContext(sandbox);
vm.runInContext(code, sandbox);
const defined = new Set(sandbox.window.akana.icons());

const files = ['index.html'].concat(
  fs.readdirSync(path.join(base, 'components')).filter(f => f.endsWith('.html'))
);
const used = new Set();
for (const f of files) {
  const p = f === 'index.html'
    ? path.join(base, 'index.html')
    : path.join(base, 'components', f);
  const h = fs.readFileSync(p, 'utf8');
  const m = h.match(/data-icon="([a-z-]+)"/g) || [];
  m.forEach(x => used.add(x.replace('data-icon="', '').replace('"', '')));
}
const missing = [...used].filter(u => !defined.has(u));
console.log('DEFINED', defined.size);
console.log('USED', used.size);
console.log('MISSING', JSON.stringify(missing));
console.log('ICONS', [...defined].join(', '));
