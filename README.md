# Stegg

This is a front-end React application written in Typescript.

This app converts text into a visual binary representation drawn on an HTML canvas—each character becomes a series of random geometric shapes where filled shapes represent 1s and outlined shapes represent 0s. The message is stored in the PNG file's metadata. There is a toggle that determines whether the data will be embedded with 128-bit AES encryption or as plain text. Once you click "Lay it!", the file can be downloaded to your computer or posted to the public feed. Whomever you share the image with would be able to extract and decipher the text by dragging the PNG file into the drop zone (or clicking a post in the feed) and entering the passkey you provide them, if it's encrypted.

I realise that nobody asked for this, I just made it as a fun, gimmicky way to send secret messages to the people who visit [my site](alifeinbinary.com) and thought it would be a fun project to share as open source for those who are wanting to learn about the technology within.

It was created with [Vite](https://github.com/vitejs/vite), [Tailwind](https://github.com/tailwindlabs/tailwindcss), [Flowbite](https://github.com/themesberg/flowbite), and [Font Awesome](https://github.com/FortAwesome/Font-Awesome) icons.

This project is published under the GPLv3 license.

## Technology involved

- Typescript
- React
- HTML Canvas
- Cryptography in the browser
- Image generation and consumption
- Embedding metadata in files
- React router
- Internationalisation
- API with AWS Lambda

## Demo

You can play with a [demo](https://alifeinbinary.github.io/stegg/) here.

## Getting started

After cloning the repo you can get this running on your local development environment by first install the dependencies

```bash
pnpm install
```

and then start your local development environment with

```bash
pnpm run dev
```
