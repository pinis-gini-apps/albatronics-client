import {GridColumns} from '@mui/x-data-grid';

export const NETWORK_TUNNELING_TABLE_COLUMNS: GridColumns = [
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    editable: true,
  },
  {
    field: 'locationIpAddress',
    headerName: 'Location IP Address',
    flex: 1,
    editable: true,
  },
  {
    field: 'remoteIpAddress',
    headerName: 'Remote IP Address',
    flex: 1,
    editable: true,
  },
  {
    field: 'type',
    headerName: 'Type',
    flex: 1,
    editable: true,
  },
  {
    field: 'tunnelIpAddress',
    headerName: 'Tunnel IP Address',
    flex: 1,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    editable: true,
  },
];
