import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import trades from '../trades/trades.json'; // Adjust the import path according to your project structure

interface Trade {
    openTime: string;
    openPrice: string;
    closePrice: string;
    closeTime: string;
    profit: number;
    balance: number;
}

const TradeHistoryTable: React.FC = () => {
    return (
        <TableContainer component={Paper} elevation={3}>
            <Table aria-label="trade history table">
                <TableHead>
                    <TableRow>
                        <TableCell>Open Time</TableCell>
                        <TableCell align="right">Open Price</TableCell>
                        <TableCell align="right">Close Price</TableCell>
                        <TableCell align="right">Close Time</TableCell>
                        <TableCell align="right">Profit</TableCell>
                        <TableCell align="right">Balance</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {trades.map((trade: Trade, index: number) => (
                        <TableRow key={index}>
                            <TableCell component="th" scope="row">
                                {trade.openTime}
                            </TableCell>
                            <TableCell align="right">{trade.openPrice}</TableCell>
                            <TableCell align="right">{trade.closePrice}</TableCell>
                            <TableCell align="right">{trade.closeTime}</TableCell>
                            <TableCell align="right">{trade.profit.toFixed(2)}</TableCell>
                            <TableCell align="right">{trade.balance.toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
};

export default TradeHistoryTable;
