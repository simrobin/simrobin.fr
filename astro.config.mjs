import icon from 'astro-icon';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://simrobin.fr',
  integrations: [icon()],
  vite: {
    css: {
      postcss: './postcss.config.cjs',
    },
  },
});
