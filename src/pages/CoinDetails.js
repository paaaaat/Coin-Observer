import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectCoins } from '../features/coins/coinsSlice';
import { selectFavoriteCoins } from '../features/favoriteCoins/favoriteCoinsSlice';
import { selectNews, loadNews } from '../features/news/newsSlice';
import { loadChart } from '../features/chart/chartSlice';
import Title from '../components/Title';
import News from '../components/News';
import Chart from '../features/chart/Chart';

import { makeStyles } from '@material-ui/core/styles';
import clsx from "clsx";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import CardHeader from '@material-ui/core/CardHeader';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

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
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 150
  },
  root: {
    flexGrow: 1
  },
  fixedHeightChart: {
    height: 250
  }
}));

const CoinDetails = () => {
  const classes = useStyles();
  const coins = useSelector(selectCoins);
  const favoriteCoins = useSelector(selectFavoriteCoins);
  const news = useSelector(selectNews);
  const { isLoading } = useSelector((state) => state.news)
  const { coinId } = useParams();
  const dispatch = useDispatch();

  const index = coins.find((coin) => coin.id === coinId);
  const i = favoriteCoins.find((favCoin) => favCoin.id === coinId);

  const coin = index || i;

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightChart = clsx(classes.paper, classes.fixedHeightChart);

  useEffect(() => {
    dispatch(loadNews(coin.name));
    dispatch(loadChart(coin.id));
  }, [dispatch, coin.name, coin.id]);

  const formatted = (number) => {
    return new Intl.NumberFormat('de-DE').format(number);
  }

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>

            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <CardHeader
                  avatar={<img src={coin.logo_url} height={35} alt='Coin Symbol' />}
                  title={coin.name}
                  subheader={coin.id}
                />
                <Chip label={`Rank #${coin.rank}`} variant="outlined" />
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Title>Prezzo</Title>
                <Typography component="p" variant="h4">
                  €{formatted(coin.price)}
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Title>Cambio percentuale</Title>
                <Typography component="p" variant="h4">
                  {formatted(coin['1d'].price_change_pct * 100)}%
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Title>Circolante</Title>
                <Typography component="p" variant="h4">
                  {formatted(coin.circulating_supply)}&nbsp;
                  <span style={{opacity: '75%', fontSize: 25}}>
                    {coin.symbol}
                  </span>
                </Typography>
              </Paper>
            </Grid>


          <Grid item xs={12}>
            <Paper className={fixedHeightChart}>
              <Chart coin={coin} />
            </Paper>
          </Grid>

          <Title>News</Title>
          <Grid container spacing={3} className={classes.root}>
          {isLoading
            ? [1, 2, 3, 4].map((index) => (
              <Grid item xs={12} sm={6} md={3}>
                <Skeleton animation="wave" variant="rect" className={classes.fixedHeight} />
                <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
                <Skeleton animation="wave" height={10} width="80%" />
              </Grid>
            ))
            : news.map((index) => (
              <Grid item xs={12} sm={6} md={3}>
                <News key={index} index={index} className={classes.paper} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export default CoinDetails;
