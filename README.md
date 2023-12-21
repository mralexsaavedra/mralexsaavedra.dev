[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fmralexsaavedra%2Fmralexsaavedra.dev)

# mralexsaavedra.dev

**Find me around the web:**

- Website 🗺️ : https://mralexsaavedra.dev
- GitHub 🐙 : https://github.com/mralexsaavedra
- LinkedIn 📝 : https://linkedin.com/in/mralexsaavedra
- Twitter 🐦 : https://twitter.com/mralexsaavedra

## Built Using

- **Framework**: [Next.js](https://nextjs.org/)
- **Deployment**: [Vercel](https://vercel.com)
- **Content**: [MDX](https://github.com/mdx-js/mdx)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

## Overview

- `data/*` - MDX data that is used for blogs, newsletters, and code snippets.
- `layouts/*` - The different page layouts each MDX category (blog, newsletter, snippets) uses.
- `lib/*` - Short for "library", a collection of helpful utilities or code for external services.
- `pages/api/*` - [API routes](https://nextjs.org/docs/api-routes/introduction) powering [`/dashboard`](https://leerob.io/dashboard), newsletter subscription, guestbook, and post views.
- `pages/blog/*` - Static pre-rendered blog pages using MDX.
- `pages/*` - All other static pages.
- `public/*` - Static assets including fonts and images.
- `styles/*` - A small amount of global styles. I'm mostly using vanilla Tailwind CSS.

## Running Locally

```bash
$ git clone https://github.com/mralexsaavedra/mralexsaavedra.dev.git
$ cd mralexsaavedra.dev
$ yarn
$ yarn dev
```

Create a `.env.local` file similar to [`.env.example`](https://github.com/mralexsaavedra/mralexsaavedra.dev/blob/main/.env.example).

---

**LAST UPDATE:** _Commits on Feb 4, 2022_ - [Add schema to vercel.json.](https://github.com/leerob/leerob.io/commit/0b79a412f33cdaf80353000d06fa3c97c2ab98ba)

---

**Special thanks to [Lee Robinson](https://leerob.io/) for the Open Source template.**
