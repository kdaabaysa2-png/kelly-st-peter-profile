import { readFileSync, mkdirSync, writeFileSync, readdirSync, rmSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

// Give legal pages their own crawler-visible metadata while retaining the existing React app.
function staticPages(): Plugin {
  let outDir = 'dist'
  return {
    name: 'profile-static-pages',
    apply: 'build',
    configResolved(config) { outDir = config.build.outDir },
    closeBundle() {
      // Keep retired portfolio demos and artwork out of the published output.
      for (const path of ['demos', 'media', 'og-image.png', 'llms.txt']) rmSync(resolve(outDir, path), { recursive: true, force: true })
      for (const entry of readdirSync(resolve(outDir, 'images'))) {
        if (!['brand','profile','client-stories'].includes(entry)) rmSync(resolve(outDir, 'images', entry), { recursive: true, force: true })
      }
      writeFileSync(resolve(outDir, 'version.json'), JSON.stringify({ commit: process.env.VERCEL_GIT_COMMIT_SHA || 'local-preview', builtAt: new Date().toISOString() }) + '\n')
      const home = readFileSync(resolve(outDir, 'index.html'), 'utf8')
      for (const [path, title, description] of [
        ['privacy', 'Privacy notice', 'How Khessa Daabay’s personal profile handles information and links to external applications.'],
        ['terms', 'Website terms', 'Terms for using Khessa Daabay’s St. Peter life plan profile and external resources.'],
      ]) {
        const html = home.replace(/<title>.*?<\/title>/, `<title>${title} | Khessa Daabay</title>`)
          .replace(/(<meta name="description" content=")[^"]+/, `$1${description}`)
          .replace(/(<link rel="canonical" href=")[^"]+/, `$1https://kelly-st-peter-profile.vercel.app/${path}`)
          .replace(/(<meta property="og:url" content=")[^"]+/, `$1https://kelly-st-peter-profile.vercel.app/${path}`)
          .replace(/(<meta property="og:title" content=")[^"]+/, `$1${title} | Khessa Daabay`)
          .replace(/(<meta property="og:description" content=")[^"]+/, `$1${description}`)
        mkdirSync(resolve(outDir, path!), { recursive: true })
        writeFileSync(resolve(outDir, path!, 'index.html'), html)
      }
      writeFileSync(resolve(outDir, '404.html'), home.replace(/<title>.*?<\/title>/, '<title>Page not found | Khessa Daabay</title>').replace('</head>', '<meta name="robots" content="noindex" /></head>'))
    },
  }
}
export default defineConfig({ plugins: [react(), staticPages()], server: { host: '127.0.0.1', port: 5190 }, build: { sourcemap: false } })
