import {SystemCellularInformation} from '../models/system-cellular-information';

export const SYSTEM_CELLULAR_EDIT_FORM_INITIAL_VALUE: SystemCellularInformation = {
  plmn: '999-151',
  apn: 'TEST',
  band: 'LTE BAND 38',
  bandWidth: 10,
  cellId: 105,
  tac: 12345,
  pdnIpAddress: '192.168.11.6',
  dnsIpAddress: '192.168.15.7',
  ntpIpAddress: '192.168.18.6',
};
