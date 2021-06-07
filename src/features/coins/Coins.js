import React from 'react';
import { useSelector } from 'react-redux';

import { selectCoins } from './coinsSlice';
import Title from '../../components/Title';
import Coin from '../../components/Coin';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Skeleton from '@material-ui/lab/Skeleton';

const Coins = () => {
  const coins = useSelector(selectCoins);
  const { isLoading } = useSelector((state) => state.coins);

  if (isLoading) {
    return (
      [1, 2, 3, 4, 5].map((i) => (
        <>
          <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
          <Skeleton animation="wave" height={10} width="80%" />
        </>
      ))
    );
  }

  return (
    <TableContainer>
    <Title>Migliori 100 Criptovalute per Capitalizzazione di mercato</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align='left'><b>Nome</b></TableCell>
            <TableCell align='left'><b>Prezzo</b></TableCell>
            <TableCell align='left'><b>24h %</b></TableCell>
            <TableCell align='left'><b>Dominance</b></TableCell>
            <TableCell align='left'><b>Cap. di Mercato</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {coins.map((coin) => (
            <Coin key={coin.id} coin={coin} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Coins;
