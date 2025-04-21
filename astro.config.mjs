import netlify from '@astrojs/netlify/functions';
import './tracing.js';
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'server',
  adapter: netlify(),
});