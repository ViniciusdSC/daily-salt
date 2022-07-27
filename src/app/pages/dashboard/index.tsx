import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';

import { useSetBreadcrumbs } from 'app/components/breadcrumbs/hooks';
import { useUserConfig } from 'user-config/hooks';
import {
  useAccumulatedDailyBalance,
  useCurrentDailySpentValue,
  useCurrentMonthlySpentValue,
  useCurrentWeeklySpentValue,
  useRepeatableSpentValue,
  useAccumulatedWeeklyBalance,
  useAccumulatedMonthlyBalance,
} from 'spent/hooks';
import AppPaper from 'app/components/paper';
import { Typography } from '@material-ui/core';
import useStyles from './styles';

const AppDashboard: React.FC = () => {
  const [period, setPeriod] = React.useState(30);
  const classes = useStyles();
  const userConfig = useUserConfig();
  const currentWeeklySpentValue = useCurrentWeeklySpentValue();
  const currentDailySpentValue = useCurrentDailySpentValue();
  const currentMounthlySpentValue = useCurrentMonthlySpentValue();
  const repeatableSpentValue = useRepeatableSpentValue();
  const accumulatedDailyBalance = useAccumulatedDailyBalance(period);
  const accumulatedWeeklyBalance = useAccumulatedWeeklyBalance(period);
  const accumulatedMonthlyBalance = useAccumulatedMonthlyBalance(period);

  useSetBreadcrumbs([], 'Dashboard');

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Type</TableCell>
              <TableCell align="right">Current</TableCell>
              <TableCell align="right">Total</TableCell>
              <TableCell align="right">Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Daily</TableCell>
              <TableCell align="right">{currentDailySpentValue}</TableCell>
              <TableCell align="right">{userConfig.dailyGoal}</TableCell>
              <TableCell align="right">{userConfig.dailyGoal - currentDailySpentValue}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Weekly</TableCell>
              <TableCell align="right">{currentWeeklySpentValue}</TableCell>
              <TableCell align="right">{userConfig.weekGoal}</TableCell>
              <TableCell align="right">{userConfig.weekGoal - currentWeeklySpentValue}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Montlhy</TableCell>
              <TableCell align="right">{currentMounthlySpentValue}</TableCell>
              <TableCell align="right">{userConfig.mounthGoal}</TableCell>
              <TableCell align="right">{userConfig.mounthGoal - currentMounthlySpentValue}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Repeatable</TableCell>
              <TableCell align="right">{repeatableSpentValue}</TableCell>
              <TableCell align="right">{userConfig.repeatableGoal}</TableCell>
              <TableCell align="right">{userConfig.repeatableGoal - repeatableSpentValue}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <div
        style={{
          marginTop: 10,
        }}
      />

      <AppPaper title="Accumulated Balance">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Chip
              className={classes.chip}
              label="30 days"
              variant={period === 30 ? 'default' : 'outlined'}
              onClick={() => {
                setPeriod(30);
              }}
            />
            <Chip
              className={classes.chip}
              label="60 days"
              variant={period === 60 ? 'default' : 'outlined'}
              onClick={() => {
                setPeriod(60);
              }}
            />
            <Chip
              className={classes.chip}
              label="90 days"
              variant={period === 90 ? 'default' : 'outlined'}
              onClick={() => {
                setPeriod(90);
              }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography component="p" variant="h4">
              $
              {accumulatedDailyBalance.toFixed(2).replace('.', ',')}
            </Typography>
            <Typography color="textSecondary" className={classes.spentPeriodText}>
              Daily
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography component="p" variant="h4">
              $
              {accumulatedWeeklyBalance.toFixed(2).replace('.', ',')}
            </Typography>
            <Typography color="textSecondary" className={classes.spentPeriodText}>
              Weekly
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography component="p" variant="h4">
              $
              {accumulatedMonthlyBalance.toFixed(2).replace('.', ',')}
            </Typography>
            <Typography color="textSecondary" className={classes.spentPeriodText}>
              Monthly
            </Typography>
          </Grid>
        </Grid>
      </AppPaper>
    </div>
  );
};

export default AppDashboard;
