import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  images: {
    padding: theme.spacing(1)
  }
}));

const Progetto = () => {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant='h5'>
          Progetto del corso di Informatica ed Elementi di Programmazione II
        </Typography>
        <br />
        <Typography variant='body1' color='primaryText' align='justify'>
          Il progetto propone una dashboard con la funzione di tenere aggiornato
          l'utente sull'andamento del mercato di criptovalute.
          Il menù ha 4 voci:
          <ul>
            <li>
              <b>Dashboard</b>: una panoramica sulle 100 migliori criptovalute
              per capitalizzazione di mercato strutturate in una tabella ordinata
              per rank ed un grafico che mostra l'andamento giornaliero dell prima
              criptovaluta in assoluto;
            </li>
            <li>
              <b>Tutti gli assets</b>: una lista strutturata in cards di tutte le
              criptovalute. Vi è la possibilità di cercare tramite la barra di
              ricerca la cripto desiderata e di aggiungerla alla watchlist, così
              da averla in primo piano anche scorrendo tra le varie pagine. Ogni
              card ha una pagina di dettaglio innestata che permette di vedere in
              dettaglio alcuni dati dell'opzione selezionata, un grafico dedicato,
              e le ultime notizie in merito;
            </li>
            <li>
              <b>Convertitore</b>: visto che il prezzo è sempre espresso tramite
              la conversione in cripto-euro, il convertitore serve a calcolare
              il cambio euro/dollaro/bitcoin-cripto;
            </li>
            <li>
              <b>Progetto</b>: una piccola descrizione del progetto.
            </li>
          </ul>
          <Grid container style={{flexGrow: 1, padding: 30}}>
            <Grid item xs={12} sm={6} md={3}>
              <img
                src='https://glue-labs.com/wp-content/uploads/2016/11/AAA.png'
                alt='React'
                height={100}
                className={classes.images}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <img
                src='https://everyday.codes/wp-content/uploads/2020/01/0-U2DmhXYumRyXH6X1.png'
                alt='Redux'
                height={100}
                className={classes.images}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <img
                src='https://www.seekpng.com/png/full/222-2224762_react-router-logo-png-transparent-react-router-logo.png'
                alt='React-Router'
                height={100}
                className={classes.images}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <img
                src='https://material-ui.com/static/logo.png'
                alt='Material UI'
                height={100}
                className={classes.images}
              />
            </Grid>
          </Grid>
          I framework di riferimento per la costruzione del progetto sono stati
          React e Redux. Il primo, grazie alla logica dei componenti, permette
          la scrittura di piccoli script che vengono trasmessi - assieme ai propri
          dati - da un componente all'altro in modo interattivo. Gli hooks
          permettono di trasmettere in maniera dinamica i dati da un componente
          all'altro. Redux, invece, è un'ottima libreria che si integra perfettamente
          a React, e la cui funzione è gestire lo stato e le azioni seguendo le
          regole del Model-View-Controller. Grazie alla gestione efficace dello
          stato non si è reso necessario l'implementazione di Firebase.
          <br />
          <br />
          Per il routing tra le varie pagine della app è stato utilizzato
          React-Router, che ha reso possibile la navigazione sul modello della
          Single Page Application.
          <br />
          <br />
          Material-ui è stato utilizzato per rendere la parte grafica. La libreria
          dispone di tutti i componenti che seguono le regole di Material Design.
          <br />
          <br />
          Sono state utilizzate tre API per il reperimento dei dati in modo
          asincrono:
          <ol>
            <li>
              <Link href='https://nomics.com/docs/' target='_blank'>
                Nomics
              </Link> per i dati sulle criptovalute;
            </li>
            <li>
              <Link href='https://docs.coinapi.io/#md-docs' target='_blank'>
                CoinApi
              </Link> per quanto riguarda i dati per la redazione dei grafici;
            </li>
            <li>
            <Link href='https://usearch.com/' target='_blank'>
              WebSearch
            </Link> (attraverso RapidApi) per le notizie.
            </li>
          </ol>
          <br />
          <Typography variant='h5'>
            Patrick Hamzaj
          </Typography>
          <Typography variant='body'>
            Matricola 193332
          </Typography>
        </Typography>
      </Container>
    </main>
  );
}

export default Progetto;
