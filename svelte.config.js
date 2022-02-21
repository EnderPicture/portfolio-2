import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
import { imagetools } from 'vite-imagetools';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			scss: {
				prependData: '@use "src/lib/styles/_variables.scss" as *;'
			}
		}),
		mdsvex(mdsvexConfig)
	],

	kit: {
		trailingSlash: 'ignore',
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null,
			// precompress: true
		}),

		vite: {
			plugins: [
				imagetools({
					defaultDirectives: (url) => {
						return new URLSearchParams('w=500;750;1000;1500&format=webp');
					},
					force: true
				})
			],
			css: {
				preprocessorOptions: {
					scss: {
						additionalData: '@use "src/lib/styles/_variables.scss" as *;'
					}
				}
			}
		}
	}
};

export default config;
