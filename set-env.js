const fs = require('fs');

const content = `
  export const environment = {
    production: true,
    apiUrl: '${process.env.NG_APP_GOOGLE_API_KEY || ''}'
  };
`;

fs.writeFileSync('./src/environment.ts', content);
console.log('environment.ts generated successfully');