import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { DataCell, HeadCell } from './interfaces';
import useStyles from './styles';

interface Props {
  headCells: HeadCell<DataCell>[];
  rows: DataCell[];
}

const AppTable: React.FC<Props> = ({ headCells, rows }) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableContainer}>
      <Table>
        <TableHead>
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell key={headCell.id}>{headCell.label}</TableCell>
            ))}
            {/* <TableCell key={'actions'}></TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow className={classes.bodyRow} key={row.id}>
              {headCells.map((cell) => (
                <TableCell component="th" scope="row">
                  {row[cell.id]}
                </TableCell>
              ))}
              {/* <TableCell component="th" scope="row">
                <SpentTypeTableVertBtn row={row} />
              </TableCell> */}
            </TableRow>
          ))}
          {/* {spentTypes.map(row => (
            <TableRow className={classes.bodyRow} key={row.id}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell component="th" scope="row">
                <SpentTypeTableVertBtn row={row} />
              </TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AppTable;
