const http = require('http');

const app = require('../app');

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Servidor iniciado em http://localhost:3000');
});

// Teste básico: verifica se o servidor responde com status 200
http.get('http://localhost:3000', (response) => {
  if (response.statusCode === 200) {
    console.log('Teste passou: o servidor respondeu corretamente.');
  } else {
    console.error('Teste falhou: o servidor não respondeu com status 200.');
  }

  // Encerra o servidor após o teste
  server.close();
});


