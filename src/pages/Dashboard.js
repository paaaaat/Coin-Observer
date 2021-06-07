import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';

import { loadCoins } from '../features/coins/coinsSlice';
import { loadChart } from '../features/chart/chartSlice';
import MarketLeader from "../components/MarketLeader";
import Coins from "../features/coins/Coins";
import Chart from "../features/chart/Chart";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from '@material-ui/core/Link';

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
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  fixedHeight: {
    height: 250
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCoins(1));
    dispatch(loadChart('BTC'));
  }, [dispatch]);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={3}>

          <Grid item xs={12} md={8} lg={9}>
            <Paper className={fixedHeightPaper}>
              <Chart />
            </Paper>
          </Grid>

          <Grid item xs={12} md={4} lg={3}>
            <Paper className={fixedHeightPaper}>
              <MarketLeader />
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Coins />
            </Paper>
          </Grid>
        </Grid>
        <br />
        <Link href='https://nomics.com' target='_blank'>
          Crypto Market Cap & Pricing Data Provided By Nomics
        </Link>
      </Container>
    </main>
  );
}

export default Dashboard;
