import svelte from 'rollup-plugin-svelte';
import pkg from './package.json';
import buble from 'rollup-plugin-buble';

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
		}),
		buble()
	]
}

const demo = {
	input: 'demo/md-demo.html',
	output: {
		file: 'demo/index.js',
		format: 'umd',
		name: 'MdDemo'
	}
}

const module = {
	input: 'src/index.html',
	output: [
		{ file: pkg.module, 'format': 'es' },
		{ file: pkg.main, 'format': 'umd', name },
	]
};

const unitTesting = {
	input: 'test/tests.spec.js',
	output: [
		{ file: 'test/' + pkg.main, 'format': 'umd', name }
	]
}

export default [
	Object.assign({}, demo, shared),
	Object.assign({}, module, shared),
	Object.assign({}, unitTesting, shared)
];
