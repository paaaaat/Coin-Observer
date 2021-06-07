# Progetto di Informatica ed elementi di programmazione II

Coin Observer è una dashboard che permette di tenersi aggiornati sull'andamento del mercato di criptovalute.

## Per iniziare

Scaricare il progetto in formato .zip facendo clic su Code, Download ZIP. Una volta finito il downlaod spacchettarlo e accedere alla root directory.

![Scaricare il pacchetto .zip](https://cpb-us-e1.wpmucdn.com/sites.northwestern.edu/dist/b/3044/files/2021/05/github.png)

## Installazione ed avvio

Se non lo si ha già installato sulla propria macchina, andare sul sito di [Nodejs](https://nodejs.org/it/), scaricare ed installare il software. Successivamente, attraverso il proprio terminale, utilizzare la libreria [npm](https://www.npmjs.com/) per l'installazione delle dependencies necessarie al funzionamento del progetto:

```bash
npm install
```

Dopo aver atteso qualche minuto per l'installazione delle dependencies, per avviare il progetto in localhost digitare:

```bash
npm start
```

## Il progetto

I framework di riferimento per la costruzione del progetto sono stati [React](https://it.reactjs.org/) e [Redux](https://redux.js.org/). Il primo, grazie alla logica dei componenti, permette la scrittura di piccoli script che vengono trasmessi - assieme ai propri dati - da un componente all'altro in modo interattivo. Gli hooks permettono di trasmettere in maniera dinamica i dati da un componente all'altro. Redux, invece, è un'ottima libreria che si integra perfettamente a React, e la cui funzione è gestire lo stato e le azioni seguendo le regole del Model-View-Controller. Grazie alla gestione efficace dello stato non si è reso necessario l'implementazione di Firebase.

Per il routing tra le varie pagine della app è stato utilizzato [React-Router](https://reactrouter.com/), che ha reso possibile la navigazione sul modello della Single Page Application.

[Material-ui](https://material-ui.com/) è stato utilizzato per rendere la parte grafica. La libreria dispone di tutti i componenti che seguono le regole di Material Design.

Sono state utilizzate tre API per il reperimento dei dati in modo asincrono:

-[Nomics](https://nomics.com/docs/) per i dati sulle criptovalute;

-[CoinApi](https://docs.coinapi.io/#md-docs) per quanto riguarda i dati per la redazione dei grafici;

-[WebSearch](https://usearch.com/) (attraverso RapidApi) per le notizie.
