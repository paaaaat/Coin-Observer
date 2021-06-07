import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectCoins } from '../features/coins/coinsSlice';
import Title from '../components/Title';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
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
}));

const currencies = [
  {
    value: 'USD',
    label: '$ Dollari',
  },
  {
    value: 'EUR',
    label: '€ Euro',
  },
  {
    value: 'BTC',
    label: '฿ Bitcoin',
  }
];

const Converter = () => {
  const classes = useStyles();
  const [coin, setCoin] = useState(null);
  const [fiat, setFiat] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const coins = useSelector(selectCoins);

  let result = null;

  if (coin && quantity && fiat) {
    switch (fiat) {
      case 'EUR':
        result = quantity / coin.price;
        break;
      case 'USD':
        let convertedUSD = quantity * 1.20
        result = convertedUSD / coin.price;
        break;
      case 'BTC':
        let convertedBTC = quantity * coins[0].price;
        result = convertedBTC / coin.price;
        break;
      default:
        return;
    }
  }

  return (
    <main className={classes.content}>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="lg" className={classes.container}>
        <form className={classes.root}>
          <div>
          <Title>Da</Title>
            <TextField
              id="Valuta FIAT"
              select
              label="Valuta FIAT"
              variant="outlined"
              onChange={(event, value) => setFiat(value.props.value)}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField
             id="Amount"
             label="Quantità"
             type="number"
             variant="outlined"
             value={quantity}
             onChange={({ currentTarget }) => setQuantity(currentTarget.value)}
             InputLabelProps={{
               shrink: true,
             }}
           />
          </div>
          <div>
            <Title>A</Title>
            <Autocomplete
              id="Criptovaluta"
              options={coins}
              getOptionLabel={(option) => option.name}
              onChange={(event, value) => setCoin(value)}
              style={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Criptovaluta" variant="outlined" />}
              fullWidth='true'
            />
          </div>
        </form>
        <br />
        <br />
        <Typography align='center' component='p' variant='h3'>
          <div>{quantity} <Title float='right'>{fiat ? fiat : null}</Title></div>
          {fiat ? '=' : null}
          <br />
          {result} <Title>{coin ? coin.symbol : coin}</Title>
        </Typography>
      </Container>
    </main>
  );
}

export default Converter;
