import adapter from "@sveltejs/adapter-auto";
import { mdsvex } from "mdsvex";
import preprocess from "svelte-preprocess";

const extensions = [".svelte", ".md", ".svx"];

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true,
			typescript: true
		}),
		mdsvex({
			extensions
		})
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
