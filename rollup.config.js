import svelte from 'rollup-plugin-svelte';
import pkg from './package.json';

const name = pkg.name
	.replace(/^(@\S+\/)?(svelte-)?(\S+)/, '$3')
	.replace(/^\w/, m => m.toUpperCase())
	.replace(/-\w/g, m => m[1].toUpperCase());

const shared = {
	plugins: [
		svelte({
			cascade: false,
			store: true,
			customElement: false // Change it to true for creating a native custom element
		})
	]
}

const demo = {
	input: 'demo/main.js',
	output: {
		file: 'demo/public/main.js',
		format: 'umd', 
		name: 'main'
	}
}

const module = {
	input: 'src/index.html',
	output: [
		{ file: pkg.module, 'format': 'es' },
		{ file: pkg.main, 'format': 'umd', name }
	]
};

export default [
	Object.assign({}, demo, shared),
	Object.assign({}, module, shared)
];
