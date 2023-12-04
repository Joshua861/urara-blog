import type { SiteConfig } from '$lib/types/site'

export const site: SiteConfig = {
  protocol: import.meta.env.URARA_SITE_PROTOCOL ?? import.meta.env.DEV ? 'http://' : 'https://',
  domain: import.meta.env.URARA_SITE_DOMAIN ?? 'joshs-blog-urara.vercel.app',
  title: "Josh's blog",
  subtitle: 'A place to put text',
  lang: 'en-US',
  description: 'Powered by SvelteKit/Urara',
  author: {
    avatar: '/assets/maskable@512.png',
    name: 'Josh',
    status: '❤️',
    bio: 'Web dev from the UK.'
  },
  themeColor: '#3D4451'
}
