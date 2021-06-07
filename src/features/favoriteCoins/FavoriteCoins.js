import React from "react";
import { useDispatch, useSelector } from "react-redux";

import CoinCard from '../../components/CoinCard';
import FavoriteButton from '../../components/FavoriteButton';
import {
  selectFavoriteCoins,
  removeFavoriteCoin
} from './favoriteCoinsSlice';

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2)
  }
}));

const FavoriteCoins = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const favoriteCoins = useSelector(selectFavoriteCoins);
  const { isLoading } = useSelector((state) => state.coins);

  const onRemoveFavoriteCoinHandler = (coin) => {
    dispatch(removeFavoriteCoin(coin));
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  if (favoriteCoins.length === 0) {
    return <p>Nessun elemento salvato nella Watchlist.</p>;
  }

  return (
    <Grid container spacing={3} className={classes.root}>
      {favoriteCoins.map((coin) => (
        <Grid item xs={12} sm={6} md={3}>
          <CoinCard key={coin.id} coin={coin} className={classes.paper}>
            <FavoriteButton
              onClickHandler={() => onRemoveFavoriteCoinHandler(coin)}
              favorite={true}
            />
          </CoinCard>
        </Grid>
      ))}
    </Grid>
  );
}

export default FavoriteCoins;
