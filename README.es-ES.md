

# Stegg

Esta es una aplicación front-end de React escrita en TypeScript.

Esta aplicación convierte texto en una representación binaria visual dibujada en un canvas HTML: cada carácter se convierte en una serie de formas geométricas aleatorias donde las formas rellenas representan 1s y las formas con contorno representan 0s. El mensaje se almacena en los metadatos del archivo PNG. Hay un interruptor que determina si los datos se incrustarán con cifrado AES de 128 bits o como texto plano. Una vez que haces clic en "Lay it!", el archivo se puede descargar en tu computadora o publicar en el feed público. Cualquiera con quien compartas la imagen podrá extraer y descifrar el texto arrastrando el archivo PNG a la zona de deposición (o haciendo clic en una publicación en el feed) e introduciendo la clave que les proporciones, si está cifrado.

Me doy cuenta de que nadie pidió esto, lo hice simplemente como una forma divertida y caprichosa de enviar mensajes secretos a las personas que visitan [mi sitio](alifeinbinary.com) y pensé que sería un proyecto divertido para compartir como código abierto para aquellos que deseen aprender sobre la tecnología que lo compone.

Fue creado con [Vite](https://github.com/vitejs/vite), [Tailwind](https://github.com/tailwindlabs/tailwindcss), [Flowbite](https://github.com/themesberg/flowbite) e iconos de [Font Awesome](https://github.com/FortAwesome/Font-Awesome).

Este proyecto se publica bajo la licencia GPLv3.

## Tecnologías involucradas

- TypeScript
- React
- Canvas HTML
- Criptografía en el navegador
- Generación y consumo de imágenes
- Incrustación de metadatos en archivos
- React Router
- Internacionalización
- API con AWS Lambda

## Demo

Puedes probar una [demo](https://alifeinbinary.github.io/stegg/) aquí.

## Primeros pasos

Después de clonar el repositorio, puedes hacerlo funcionar en tu entorno de desarrollo local instalando primero las dependencias

```bash
pnpm install
```

y luego inicia tu entorno de desarrollo local con

```bash
pnpm run dev
```
