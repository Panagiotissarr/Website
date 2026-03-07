# sarris.dev

Personal portfolio and web playground for **Panagiotis Sarris**.

[Live Site](https://sarris.dev)

## Some resources

![sarris.dev homepage preview](./assets/img/web-preview.png)

<p align="center">
  <img src="./assets/img/Thums/Cloud-Preview.jpeg" alt="Cloud project preview" width="32%" />
  <img src="./assets/img/Thums/Windows-Preview.jpeg" alt="Windows page preview" width="32%" />
  <img src="./assets/img/Thums/edc-preview.jpeg" alt="EDC setup page preview" width="32%" />
</p>

## Features

- Multi-page portfolio (`index`, `cloud`, `windows`, `edc-setup`, `gravatar`)
- Custom UI components and animations with vanilla JavaScript
- SEO-ready metadata and sitemap
- Vercel rewrites and redirects configured in [`vercel.json`](./vercel.json)

## Tech Stack

- HTML
- CSS
- JavaScript
- Vercel (deployment/routing)

## Run Locally

This is a static site, so no build step is required.
Just double click the index.html it will open the main homepage

## Project Structure

```text
.
├─ index.html
├─ cloud.html
├─ windows.html
├─ edc-setup.html
├─ assets/
│  ├─ fonts/
│  └─ img/
├─ css/
├─ js/
├─ components/
├─ sitemap.xml
└─ vercel.json
```

## Files and Folders

### Main Pages

- `index.html`: Main homepage/portfolio landing page.
- `cloud.html`: Cloud AI project page.
- `cloud-privacy.html`: Privacy policy/details for the cloud page/service.
- `windows.html`: My Windows setup.
- `edc-setup.html`: EDC (everyday carry) setup article/showcase page.
- `gravatar.html`: Gravatar profile preview/integration page.
- `404.html`: Custom not-found page.

### Root Files

- `sitemap.xml`: Search engine sitemap for indexed routes.
- `vercel.json`: Vercel rewrites and redirect rules.
- `README.md`: Project documentation. (This file)
- `.gitignore`: Git ignore rules.

### Folders

- `assets/`: Static files used by the site.
- `assets/img/`: Site images, previews, article media, thumbnails.
- `assets/fonts/`: Custom font files.
- `css/`: Global, page-level, and shared stylesheets.
- `js/`: Main JavaScript for UI behavior and interactions.
- `components/`: Reusable site components (for example contact widget).
- `icons/`: Icons-related pages, previews, and helper scripts.

## License

This repository is for personal portfolio use. Contact the owner before reusing content/assets.

## Credit

- [Sameerasw](https://sameerasw.com/) for foundational inspiration/code
