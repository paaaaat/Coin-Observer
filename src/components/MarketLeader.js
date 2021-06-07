import React from 'react';
import { useSelector } from 'react-redux';

import { selectCoins } from '../features/coins/coinsSlice';
import Title from './Title';

import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

const MarketLeader = () => {
  const classes = useStyles();
  const coins = useSelector(selectCoins);
  const { isLoading } = useSelector((state) => state.coins);

  if (isLoading) {
    return (
      <>
        <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
        <Skeleton animation="wave" height={10} width="80%" />
      </>
    );
  }

  const today = new Date();
  const days = [
    "Domenica",
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato"
  ];
  const months = [
    'Gennaio',
    'Febbraio',
    'Marzo',
    'Aprile',
    'Maggio',
    'Giugno',
    'Luglio',
    'Agosto',
    'Settembre',
    'Ottobre',
    'Novembre',
    'Dicembre'
  ];
  const date = `${days[today.getDay()]} ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;

  return (
    <React.Fragment>
    <Title>Market Leader</Title>
      <Typography component="p" variant="h4">
        <img
          src={coins[0] ? coins[0].logo_url : null}
          height={30}
          alt='Market Leader Symbol'
          style={{marginRight: 5}}
        />
        {coins[0] ? coins[0].name : null}
      </Typography>
      <br />
      <Typography color='textSecondary' className={classes.depositContext}>
        {date}
      </Typography>
    </React.Fragment>
  );
}

export default MarketLeader;
