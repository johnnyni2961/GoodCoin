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

function createData(txid, name, category, value, price) {
  return {
    txid,
    name,
    category,
    value,
    price,
    details: [
      { usage: 'To buy staple food', additional: 'Nothing much', contact: 1234567890, date: '2020-01-05'},
    ],
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
      <TableRow classtxid={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.txid}
        </TableCell>
        <TableCell >{row.name}</TableCell>
        <TableCell align="right">{row.category}</TableCell>
        <TableCell align="right">{row.value}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Details
              </Typography>
              
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Food</TableCell>
                    <TableCell>Accommodation</TableCell>
                    <TableCell align="right">Services</TableCell>
                    <TableCell align="right">Supplies</TableCell>
                    <TableCell align="right">General</TableCell>

                  </TableRow>
                  
                </TableHead>
                <TableBody>
                  {row.details.map((detailsRow) => (
                    <TableRow key={detailsRow.food}>
                      <TableCell component="th" scope="row">
                        {detailsRow.accommodation}
                      </TableCell>
                      <TableCell>{detailsRow.services}</TableCell>
                      <TableCell align="right">{detailsRow.supplies}</TableCell>
                      <TableCell align="right">
                      {detailsRow.general}
                      </TableCell>
                   
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    category: PropTypes.number.isRequired,
    details: PropTypes.arrayOf(
      PropTypes.shape({
        contact: PropTypes.number.isRequired,
        additional: PropTypes.string.isRequired,
        usage: PropTypes.string.isRequired,
      }),
    ).isRequired,
    txid: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    }).isRequired,
};

const rows = [
  createData('A123', 'John Doe', 'Food', '$100'),
  createData('B123', 'Jane Doe', 'Accommodation', '$1000'),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Provider ID</TableCell>
            <TableCell >Provider Name</TableCell>
            <TableCell align="right">Tokens</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.txid} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
