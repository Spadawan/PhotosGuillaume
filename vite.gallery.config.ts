import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {resolve} from 'node:path';
export default defineConfig({root:resolve('github'),base:'./',publicDir:resolve('public'),plugins:[react()],resolve:{alias:{'@':resolve('.')}},define:{'import.meta.env.VITE_GALLERY_API':JSON.stringify(process.env.GALLERY_API||'https://carnet-de-guillaume.simon-paindavoine.chatgpt.site/api/gallery')},build:{outDir:resolve('github-pages'),emptyOutDir:true}});
