import { defineConfig, minimalPreset } from '@vite-pwa/assets-generator/config';

export default defineConfig({
	preset: {
        ...minimalPreset,
        maskable: {
            resizeOptions: {
                background: '#1c1917'
            },
            sizes: [512]
        }
    },
	images: ['./static/favicon.svg']
});
