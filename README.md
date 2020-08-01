Módulo para consulta do valor de ações de fundos imobiliários.<p>
OBS.: O valor retornado é do ultimo fechamento.

[![https://nodei.co/npm/cotacao-fundos-imobiliarios.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/cotacao-fundos-imobiliarios.png?downloads=true&downloadRank=true)](https://www.npmjs.com/package/cotacao-fundos-imobiliarios)

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/charlesamoreira/cotacao-fundos-imobiliarios)

### Instalação
Instalação com NPM

```bash
npm install cotacao-fundos-imobiliarios
```

### Como usar
```javascript
const cotacao = require('cotacao-fundos-imobiliarios');

cotacao.getQuote("BCFF11", (err, quote) => {
    console.log(quote);
})
```

### Bibliotecas

[camelcase](https://www.npmjs.com/package/camelcase "camelcase")<p>
[jsdom](https://www.npmjs.com/package/jsdom "jsdom")<p>
[request](https://www.npmjs.com/package/request "request")
