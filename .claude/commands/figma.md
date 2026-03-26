# Figma Design via Browser

You'll be interacting with Figma via the web browser using the `mcp__claude-in-chrome__*` tools.

## Setup

1. Get the tab context first with `tabs_context_mcp`
2. Navigate to the Figma file URL provided by the user — **always use the editor URL** (no `m=dev` suffix). Dev mode is read-only and will throw `Can't call "createFrame" in read-only mode`.
3. Wait ~4 seconds for the file to load, then verify write access:

```js
try {
  const f = figma.createFrame();
  figma.currentPage.appendChild(f);
  f.remove();
  'write access OK';
} catch(e) { e.message; }
```

If read-only, navigate to the plain editor URL: `https://www.figma.com/design/FILE_ID/FILE_NAME`

## Running Code

Use `mcp__claude-in-chrome__javascript_tool` with `action: "javascript_exec"`. All async code must be wrapped:

```js
(async () => {
  // your code here
  return 'result';
})().then(r => r).catch(e => e.toString());
```

## Known Gotchas

- **Font style names**: Inter uses `"Semi Bold"` (with space), not `"SemiBold"`. Always call `figma.listAvailableFontsAsync()` if unsure.
- **Load fonts before creating text**: Call `await figma.loadFontAsync({ family, style })` for every style you'll use.
- **Opacity on fills**: Set opacity on the fill object: `fills: [{ type: 'SOLID', color, opacity: 0.2 }]`, not on the node directly (node opacity affects the whole layer).
- **Frame children**: Nodes must be appended to a parent with `parent.appendChild(node)` — coordinates are relative to the parent frame.
- **Viewport**: After creating nodes, call `figma.viewport.scrollAndZoomIntoView([frame])` to bring the result into view.

## Rules of Engagement

- Always explain in plain English what you are about to do before running code. Assume the user cannot read JavaScript.
- Do not use the Figma REST API or manually click the Figma UI — use only the plugin API via `javascript_tool`.
- After completing changes, take a screenshot with `mcp__claude-in-chrome__computer` to show the result.

## Useful Patterns

### Color palette helper
```js
const BG    = { r: 0.059, g: 0.059, b: 0.082 }; // #0F0F15 dark bg
const SURF  = { r: 0.106, g: 0.106, b: 0.153 }; // #1B1B27 surface/card
const ACC   = { r: 0.482, g: 0.416, b: 0.933 }; // #7B6AEE purple accent
const AL    = { r: 0.600, g: 0.537, b: 1.000 }; // #9989FF accent light
const GRN   = { r: 0.298, g: 0.800, b: 0.639 }; // #4CCCA3 green
const ORG   = { r: 1.000, g: 0.647, b: 0.282 }; // #FFA548 orange
const TP    = { r: 1, g: 1, b: 1 };             // white text
const TS    = { r: 0.545, g: 0.545, b: 0.647 }; // secondary text
const TT    = { r: 0.353, g: 0.353, b: 0.443 }; // tertiary text
```

### Helper functions
```js
const R = (p,x,y,w,h,c,n,cr) => { const r=figma.createRectangle(); r.name=n||'r'; r.resize(w,h); r.x=x; r.y=y; r.fills=[{type:'SOLID',color:c}]; if(cr) r.cornerRadius=cr; p.appendChild(r); return r; };
const T = (p,x,y,s,sz,st,c,n) => { const t=figma.createText(); t.name=n||'t'; t.fontName={family:"Inter",style:st}; t.fontSize=sz; t.characters=s; t.fills=[{type:'SOLID',color:c}]; t.x=x; t.y=y; p.appendChild(t); return t; };
const E = (p,x,y,w,h,c,n)    => { const e=figma.createEllipse(); e.name=n||'e'; e.resize(w,h); e.x=x; e.y=y; e.fills=[{type:'SOLID',color:c}]; p.appendChild(e); return e; };
const F = (p,x,y,w,h,c,n,cr) => { const f=figma.createFrame(); f.name=n||'f'; f.resize(w,h); f.x=x; f.y=y; f.fills=[{type:'SOLID',color:c}]; if(cr) f.cornerRadius=cr; p.appendChild(f); return f; };
```

### Check existing page content
```js
const nodes = figma.currentPage.children.map(n => ({ id: n.id, name: n.name, type: n.type, x: n.x }));
JSON.stringify(nodes);
```

## API Reference

Full Figma Plugin API: https://developers.figma.com/docs/plugins/api/global-objects/
