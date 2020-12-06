import React,{Image} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Button } from '@material-ui/core';
import axios from 'axios';
const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(type, rate, issued, redeemed, net, generated) {
  return {
    type,
    rate,
    issued,
    redeemed,
    net,
    generated,
  };
}


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [approve, setApprove] = React.useState(false);
  const [reject, setReject] = React.useState(false);
  const [provider, setProvider] = React.useState(false);

  const classes = useRowStyles();

  return (
    
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell component="th" scope="row">
          {row.type}
        </TableCell>
        <TableCell >{row.rate}</TableCell>
        <TableCell >{row.issued}</TableCell>
        <TableCell >{row.redeemed}</TableCell>
        <TableCell >{row.net}</TableCell>
        <TableCell >{row.generated}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    type: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    issued: PropTypes.number.isRequired,  
    redeemed: PropTypes.string.isRequired,
    net: PropTypes.string.isRequired,
    generated: PropTypes.string.isRequired,

    }).isRequired,
};

const rows = [
  createData('Food', '1.0', '0','0', '0', '0', '0','0'),
  createData('Accommodation', '1.0', '0','0', '0', '0', '0','0'),
  createData('Services', '1.0', '0','0', '0', '0', '0','0'),
  createData('Supplies', '1.0', '0','0', '0', '0', '0','0'),
  createData('General', '1.0', '0','0', '0', '0', '0','0'),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell >Rate</TableCell>
            <TableCell >Issued</TableCell>
            <TableCell >Redeemed</TableCell>
            <TableCell >Net</TableCell>
            <TableCell >Generated</TableCell>



          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.type} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
