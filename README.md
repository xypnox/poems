# Poems

## *By [xypnox](https://www.xypnox.com/)*

[![Netlify Status](https://api.netlify.com/api/v1/badges/f9555ad4-ea67-4c8d-8b9a-75e29c342238/deploy-status)](https://app.netlify.com/sites/laughing-allen-c9cbe6/deploys) ![](https://img.shields.io/badge/created-with%20%E2%9D%A4%EF%B8%8F-F14D9E)

This repo contains the source for the website: [poems.xypnox.com](https://poems.xypnox.com/), a collection of poems and poetic pieces I have written throughout my time here and there.

The poems are copyrighted to me and NO you can't copy them without proper attribution and in commercial gains, without permission.

The code however is free to use however you want to.

## Development

1. Clone the repo locally.
2. Install the requirements/packages using `yarn`.
3. Use `yarn dev` to start a development server.
4. Use `yarn export` to export the static site.

However, if you are deploying it on netlify, a `netlify.toml` is also present which has the configurations already, just point netlify to your repo and it shall do the rest.

## Frontmatter for poems

Since this is almost a personalized take of Next.js, the frontmatter for the markdown doesn't follow a popular guideline. The frontmatter YAML is structured as follows:

```markdown
---
title: "The name of the poem"
date: "YYYY-MM-DD"
---
```

