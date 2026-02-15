import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://simrobin.fr',
  integrations: [icon()],
  vite: {
    css: {
      postcss: './postcss.config.cjs',
    },
  },
});
