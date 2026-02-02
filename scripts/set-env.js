const fs = require('fs');
const path = require('path');

const envDirectory = path.join(__dirname, '..', 'src', 'environments');

if (!fs.existsSync(envDirectory)) {
    fs.mkdirSync(envDirectory, { recursive: true });
}

const targetPath = path.join(envDirectory, 'environment.ts');
const targetPathDev = path.join(envDirectory, 'environment.development.ts');

const stripeKey = process.env.STRIPE_SECRET_KEY || '';

if (!stripeKey) {
    console.warn('⚠️  Warning: STRIPE_SECRET_KEY environment variable is not set. Payments will fail.');
} else {
    console.log('✅ STRIPE_SECRET_KEY found.');
}

const envConfigFile = `export const environment = {
  production: true,
  stripeSecretKey: '${stripeKey}'
};
`;

const envConfigFileDev = `export const environment = {
  production: false,
  stripeSecretKey: '${stripeKey}'
};
`;

console.log('🚀 Generating environment files for build...');

try {
    fs.writeFileSync(targetPath, envConfigFile);
    fs.writeFileSync(targetPathDev, envConfigFileDev);
    console.log(`✨ Environment files generated successfully at ${envDirectory}`);
} catch (err) {
    console.error('❌ Error writing environment files:', err);
    process.exit(1);
}
