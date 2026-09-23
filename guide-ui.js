// Tiny view helpers shared by the guide pages. A view is a plain array
// ['tag', { attrs }, ...children]; toDOM builds real elements in the browser and
// toHTML prints the same tree as a string, which is how the pages are given a
// pre-rendered snapshot at publish time (crawlers and readers without
// JavaScript see real values; the browser then replaces them with live ones).
const SVG_NS = 'http://www.w3.org/2000/svg';
const VOID = new Set(['br', 'hr', 'img', 'input', 'link', 'meta']);
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// A view is an array whose first element is the tag; any other array is a list
// of views (e.g. from .map) and is flattened. null/false children are skipped.
export function flatten(list, out = []) {
	for (const k of list) {
		if (k == null || k === false) continue;
		if (Array.isArray(k) && typeof k[0] !== 'string') flatten(k, out); else out.push(k);
	}
	return out;
}

export function toDOM(node, svg = false) {
	if (typeof node === 'string' || typeof node === 'number') return document.createTextNode(String(node));
	const [tag, attrs, ...children] = node, isSvg = svg || tag === 'svg';
	const e = isSvg ? document.createElementNS(SVG_NS, tag) : document.createElement(tag);
	for (const k in attrs || {}) if (attrs[k] != null && attrs[k] !== false) e.setAttribute(k, String(attrs[k]));
	for (const kid of flatten(children)) e.appendChild(toDOM(kid, isSvg));
	return e;
}
export function toHTML(node) {
	if (typeof node === 'string' || typeof node === 'number') return esc(String(node));
	const [tag, attrs, ...children] = node;
	const a = Object.entries(attrs || {}).filter(([, v]) => v != null && v !== false).map(([k, v]) => ` ${k}="${esc(String(v))}"`).join('');
	if (VOID.has(tag)) return `<${tag}${a}>`;
	return `<${tag}${a}>${flatten(children).map(toHTML).join('')}</${tag}>`;
}
// Replace an element's children with the given view or list of views (browser only).
export function fill(id, views) {
	const e = document.getElementById(id);
	if (e) e.replaceChildren(...flatten([views]).map(v => toDOM(v)));
}
// "Mercury, Venus and Mars"
export const listNames = (arr) => arr.length === 0 ? 'none' : arr.length === 1 ? arr[0] : arr.slice(0, -1).join(', ') + ' and ' + arr[arr.length - 1];
