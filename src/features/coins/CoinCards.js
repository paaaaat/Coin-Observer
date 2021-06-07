import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CoinCard from '../../components/CoinCard';
import FavoriteButton from '../../components/FavoriteButton';
import { selectFilteredCoinCards } from './coinsSlice';
import {
  addFavoriteCoin,
  selectFavoriteCoins,
  removeFavoriteCoin } from '../favoriteCoins/favoriteCoinsSlice';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Skeleton from '@material-ui/lab/Skeleton';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2)
  },
  fixedHeight: {
    height: 150
  }
}));

const CoinCards = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const filteredCoinCards = useSelector(selectFilteredCoinCards);
  const favoriteCoin = useSelector(selectFavoriteCoins);
  const { isLoading } = useSelector((state) => state.coins);

  const onAddFavoriteCoinHandler = (coin) => {
    let i = favoriteCoin.find((i) => i.id === coin.id);
    if (i === undefined) {
      dispatch(addFavoriteCoin(coin));
    } else {
      dispatch(removeFavoriteCoin(coin));
    }
  }

  return (
    <Grid container spacing={3} className={classes.root}>
      {isLoading
        ? [1, 2, 3, 4].map((index) => (
          <Grid item xs={12} sm={6} md={3}>
            <Skeleton animation="wave" variant="rect" className={classes.fixedHeight} />
            <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
            <Skeleton animation="wave" height={10} width="80%" />
          </Grid>
        ))
        : filteredCoinCards.map((coin) => (
          <Grid item xs={12} sm={6} md={3}>
            <CoinCard key={coin.id} coin={coin} className={classes.paper}>
              <FavoriteButton
                onClickHandler={() => onAddFavoriteCoinHandler(coin)}
                favorite={favoriteCoin.includes(coin) ? true : false}
              />
            </CoinCard>
          </Grid>
      ))}
    </Grid>
  );
}

export default CoinCards;
