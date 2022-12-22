import {GridColumns} from '@mui/x-data-grid';

export const NETWORK_IP_ADDRESS_TABLE_COLUMNS: GridColumns = [
  {
    field: 'interface',
    headerName: 'Interface',
    flex: 1,
    editable: true,
  },
  {
    field: 'ipAddressAndSubnet',
    headerName: 'IP Address / Subnet',
    flex: 1,
    editable: true,
  },
  {
    field: 'status',
    headerName: 'Status',
    editable: true,
  },
];
