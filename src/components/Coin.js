import React from "react";
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  link: {
    color: 'inherit',
    textDecoration : 'none'
  }
});

const Coin = ({ coin }) => {
  const classes = useRowStyles();

  const formatted = (number) => {
    return new Intl.NumberFormat('de-DE').format(number);
  }

  return (
    <React.Fragment>
      <TableRow className={classes.root} key={coin.id}>
        <TableCell component="th" scope="row" align='left'>
          {coin.rank}
        </TableCell>

          <TableCell align='left'>
          <Link to={`/coin/${coin.id}`} className={classes.link}>
            <img src={coin.logo_url} height={20} alt='Coin Logo' style={{marginRight: 5, marginBottom: -3}} />
            {coin.name}
            <span style={{opacity: '75%', marginLeft: 5}}>
              {coin.symbol}
            </span>
            </Link>
          </TableCell>

        <TableCell align='left'>€{formatted(coin.price)}</TableCell>
        <TableCell align='left'>
          {coin['1d'] ? formatted(coin['1d'].price_change_pct * 100) : null}%
        </TableCell>
        <TableCell align='left'>{formatted(coin.market_cap_dominance * 100)}%</TableCell>
        <TableCell align='left'>€{formatted(coin.market_cap)}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>

        </TableCell>
      </TableRow>
    </React.Fragment>
  );
};

export default Coin;
