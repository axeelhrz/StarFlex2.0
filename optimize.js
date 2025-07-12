const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Asegurarse de que las dependencias estén instaladas
console.log('Verificando dependencias...');
try {
  execSync('npm install autoprefixer cssnano postcss-cli purgecss --save-dev', { stdio: 'inherit' });
  console.log('Dependencias instaladas correctamente.');
} catch (error) {
  console.error('Error al instalar dependencias:', error);
  process.exit(1);
}

// Crear directorio de salida si no existe
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
  fs.mkdirSync(path.join(distDir, 'css'));
  fs.mkdirSync(path.join(distDir, 'js'));
}

// Optimizar CSS
console.log('Optimizando CSS...');
try {
  // Procesar CSS con PostCSS
  execSync('npx postcss src/css/main.css -o dist/css/main.min.css --use autoprefixer cssnano', { stdio: 'inherit' });
  execSync('npx postcss src/css/critical.css -o dist/css/critical.min.css --use autoprefixer cssnano', { stdio: 'inherit' });
  console.log('CSS optimizado correctamente.');
} catch (error) {
  console.error('Error al optimizar CSS:', error);
}

// Optimizar JavaScript
console.log('Optimizando JavaScript...');
try {
  // Minificar JavaScript usando Terser (instalado como dependencia de PostCSS)
  execSync('npx terser src/js/app.js -o dist/js/app.min.js --compress --mangle', { stdio: 'inherit' });
  execSync('npx terser src/js/mobile-visibility-fix.js -o dist/js/mobile-visibility-fix.min.js --compress --mangle', { stdio: 'inherit' });
  console.log('JavaScript optimizado correctamente.');
} catch (error) {
  console.error('Error al optimizar JavaScript:', error);
}

console.log('Optimización completada. Los archivos optimizados están en el directorio "dist".');
