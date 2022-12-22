import React from 'react';

import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

type SystemStatusDataTableProps<T> = {
  data?: T[];
};

export const SystemGeneralDataTable: React.FC<SystemStatusDataTableProps<{key: string, value: string | number}>> = ({data}) => (
  <TableContainer component={Paper}>
    <Table>
      <TableBody>
        {data?.map(dataChunk => (
          <TableRow key={dataChunk.key}>
            <TableCell>{dataChunk.key}</TableCell>
            <TableCell>{dataChunk.value}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
