import React from 'react';

import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

type SystemStatusDataTableProps<T> = {
  data?: T[],
  statusColor?: string
};

export const SystemStatusDataTable: React.FC<SystemStatusDataTableProps<{key: string, value: string | number}>> = ({data, statusColor}) => (
  <TableContainer component={Paper}>
    <Table>
      <TableBody>
        {data && data.length > 0 && data?.map((dataChunk, index) => (
          <TableRow key={index}>
            <TableCell>{dataChunk.key}</TableCell>
            <TableCell>
              <>
                {dataChunk.key === 'Status' && (
                  <Paper
                    variant="outlined"
                    sx={{
                      color: statusColor ? 'primary.contrastText' : 'inherit',
                      paddingInline: '0.75rem',
                      paddingBlock: '0.25rem',
                      bgcolor: `${statusColor}.main` || 'text.disabled',
                    }}
                  >
                    {dataChunk.value}
                  </Paper>
                )}
                {dataChunk.key !== 'Status' && (
                  dataChunk.value
                )}
              </>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
