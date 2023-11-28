import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			srcDir: 'src',
			manifest: {
				name: 'HCMUT: Maps & Guides',
				short_name: 'HCMUT Guides',
				description: 'Comprehensive resources for Ho Chi Minh City University of Technology students.',
				theme_color: '#1c1917',
				icons: [
					{
						src: 'pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			}
		})
	]
});
