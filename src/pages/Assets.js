import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { loadCoins } from '../features/coins/coinsSlice';
import CoinCards from '../features/coins/CoinCards';
import Search from '../features/search/Search';
import FavoriteCoins from '../features/favoriteCoins/FavoriteCoins';
import Title from '../components/Title';

import { makeStyles } from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto"
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4)
  }
}));

const Assets = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1)

  const loadMore = (event, value) => {
    setPage(value);
  }

  useEffect(() => {
    dispatch(loadCoins(page));
  }, [dispatch, page]);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Search />
      <Container maxWidth="lg" className={classes.container}>
        <Title>Watchlist</Title>
        <FavoriteCoins />
        <br />
        <br />
        <Title>Tutti gli assets</Title>
        <CoinCards />
      </Container>
      <br />
      <Pagination count={10} page={page} onChange={loadMore} color='primary'/>
      <br />
      <br />
    </main>
  );
}

export default Assets;
