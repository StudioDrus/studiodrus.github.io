# studiodrus.github.io

# Install tailwind

npm install -D tailwindcss
npm install @tailwindcss/aspect-ratio@latest --save-dev

## Generate tailwind css

```
npx tailwindcss -i ./src/input.css -o ./style.css --watch
```

### Minify

```
npx tailwindcss -i ./src/input.css -o ./style.css --minify
```