import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    sveltePreprocess({
      // Ensure this is configured correctly
      react: {
        enabled: true,
      }
    })
  ],
  kit: {
    adapter: adapter()
  }
};

export default config;