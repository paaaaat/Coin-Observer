import React from "react";
import { useSelector } from 'react-redux';

import { selectChart } from './chartSlice';
import Title from "../../components/Title";

import { useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer
} from "recharts";

export default function Chart({ coin }) {
  const theme = useTheme();
  const chart = useSelector(selectChart);

  const data = [{time: null, amount: null}];

  function createData() {
    chart.forEach((item) => {
      let d = new Date(item.time_period_start);
      let formattedD = d.getHours();

      data.push({
        time: formattedD,
        amount: item.rate_high
      })
    });
    data.push({time: null, amount: null})
  }

  createData();

  return (
    <React.Fragment>
      <Title>
        {coin ? coin.name : 'Bitcoin'}
        &nbsp;
        <span style={{fontSize: 15, opacity: '50%'}}>
          {coin ? coin.symbol : 'BTC'}
        </span>
      </Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: 'middle', fill: theme.palette.text.primary }}
            >
              Prezzo (euro)
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
