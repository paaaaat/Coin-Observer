import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  link: {
    color: 'inherit',
    textDecoration : 'none',
    marginLeft: 5
  }
}));

const CoinCard = ({ coin, children }) => {
  const classes = useStyles();

  let definedPCT = null;

  if (coin['1d']) {
    definedPCT = coin['1d'].price_change_pct;
  }

  const formatted = (number) => {
    return new Intl.NumberFormat('de-DE').format(number);
  }

  return (
    <Card className={classes.root} key={coin.id}>
      <CardHeader
        avatar={
          <img src={coin.logo_url} height={35} alt='Coin Symbol' />
        }
        title={coin.name}
        subheader={coin.symbol}
      />
      <CardContent>
        <Typography variant='overline' component='p'>
          Prezzo
        </Typography>
        <Typography variant='h6' color='textPrimary' component='p'>
          €{formatted(coin.price)}
        </Typography>
        <br />
        <Typography variant='overline' component='p'>
          cambio percentuale
        </Typography>
        <Typography variant="h6" color={definedPCT > 0 ? 'primary' : 'secondary'} component="p">
          {formatted(definedPCT * 100)}%
        </Typography>
      </CardContent>
      <CardActions disableSpacing>

        {children}

        <Link to={`/coin/${coin.id}`} className={classes.link}>
          <Button color="primary">
            Scopri di più
          </Button>
        </Link>

      </CardActions>
    </Card>
  );
}

export default CoinCard;
