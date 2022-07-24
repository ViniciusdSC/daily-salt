import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useSetBreadcrumbs } from 'app/components/breadcrumbs/hooks';
import { useUserConfig } from 'user-config/hooks';
import {
  useCurrentDailySpentValue,
  useCurrentMonthlySpentValue,
  useCurrentWeeklySpentValue,
  useRepeatableSpentValue,
} from 'spent/hooks';

const AppDashboard: React.FC = () => {
  const userConfig = useUserConfig();
  const currentWeeklySpentValue = useCurrentWeeklySpentValue();
  const currentDailySpentValue = useCurrentDailySpentValue();
  const currentMounthlySpentValue = useCurrentMonthlySpentValue();
  const repeatableSpentValue = useRepeatableSpentValue();

  useSetBreadcrumbs([], 'Dashboard');

  return (
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
  );
};

export default AppDashboard;
