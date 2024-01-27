import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, useTheme } from '@mui/material';
import { lighten } from 'polished';
import trades from '../trades/trades.json';

interface Trade {
    openTime: string;
    openPrice: string;
    closePrice: string;
    closeTime: string;
    profit: number;
    perc: number;
    balance: number;
}

const TradeHistoryTable: React.FC = () => {
    const [sortedTrades, setSortedTrades] = useState(trades);
    const [sortConfig, setSortConfig] = useState<{ column: keyof Trade | null, direction: 'asc' | 'desc' }>({ column: null, direction: 'asc' });
    const theme = useTheme();

    const handleSort = (column: keyof Trade) => {
        const newDirection = sortConfig.column === column && sortConfig.direction === 'asc' ? 'desc' : 'asc';
        const sorted = [...sortedTrades].sort((a, b) => {
            if (a[column] < b[column]) return newDirection === 'asc' ? -1 : 1;
            if (a[column] > b[column]) return newDirection === 'asc' ? 1 : -1;
            return 0;
        });
        setSortedTrades(sorted);
        setSortConfig({ column, direction: newDirection });
    };
    const cellStyle = {
        fontSize: '0.7rem',
        // @ts-expect-error: using raw json
        color: theme.palette.primary.text,
        background: theme.palette.background.default,
        // @ts-expect-error: using raw json
        borderColor: theme.palette.background.border,
    };
    const getHeaderStyle = (columnName: keyof Trade) => {
        return {
            ...cellStyle,
            // @ts-expect-error: using raw json
            backgroundColor: sortConfig.column === columnName ? lighten(0.05, theme.palette.background.secondary) : 'background.secondary',
            cursor: 'pointer'
        };
    };
    return (
        <TableContainer component={Paper} elevation={3} sx={{ maxHeight: 750, overflow: 'auto', bgcolor: 'background.default' }}>
            <Table aria-label="trade history table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell align="center" sx={getHeaderStyle('closeTime')} onClick={() => handleSort('closeTime')}>Close Time</TableCell>
                        <TableCell align="center" sx={getHeaderStyle('openPrice')} onClick={() => handleSort('openPrice')}>Open Price</TableCell>
                        <TableCell align="center" sx={getHeaderStyle('closePrice')} onClick={() => handleSort('closePrice')}>Close Price</TableCell>
                        <TableCell align="left" sx={getHeaderStyle('profit')} onClick={() => handleSort('profit')}>Profit</TableCell>
                        <TableCell align="right" sx={getHeaderStyle('balance')} onClick={() => handleSort('balance')}>Balance</TableCell>
                    </TableRow>

                </TableHead>
                <TableBody>
                    {sortedTrades.map((trade: Trade, index: number) => (
                        <TableRow key={index}>
                            <TableCell align="center" sx={cellStyle}>{trade.closeTime}</TableCell>
                            <TableCell align="center" sx={cellStyle}>{trade.openPrice}</TableCell>
                            <TableCell align="center" sx={cellStyle}>{trade.closePrice}</TableCell>
                            <TableCell align="left" sx={cellStyle}>
                                {"$ "}{trade.profit.toFixed(2)} ({trade.perc.toFixed(2)}%)
                            </TableCell>
                            <TableCell align="right" sx={cellStyle}>{"$ "}{trade.balance.toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TradeHistoryTable;
