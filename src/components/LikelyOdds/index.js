import * as React from 'react';

import { TableContainer, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

export default function LikelyOdds(props) {
    return (<span className={props.className}>
        <TableContainer className=''>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={2}>Likely Odds</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Bad</TableCell>
                        <TableCell>Bad</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Even</TableCell>
                        <TableCell>Bad</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Good</TableCell>
                        <TableCell>Bad</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </span>)
}