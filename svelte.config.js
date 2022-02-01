import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import path from 'path';
import rehypeExternalLinks from 'rehype-external-links';
import preprocess from 'svelte-preprocess';

const extensions = ['.svelte', '.md'];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			scss: true,
			postcss: true,
			typescript: true
		}),
		mdsvex({
			extensions,
			rehypePlugins: [rehypeExternalLinks()]
		})
	],

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					$components: path.resolve('src/components'),
					$assets: path.resolve('src/assets'),
					$src: path.resolve('src')
				}
			}
		}
	}
};

export default config;
