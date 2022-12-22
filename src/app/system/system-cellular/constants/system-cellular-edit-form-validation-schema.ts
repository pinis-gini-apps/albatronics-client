import {object, number, string, Schema} from 'yup';

import {SystemCellularInformation} from '../models/system-cellular-information';

export const SYSTEM_CELLULAR_EDIT_FORM_VALIDATION_SCHEMA: Schema<SystemCellularInformation> = object().shape({
  plmn: string().required('Required'),
  apn: string().required('Required'),
  band: string().required('Required'),
  bandWidth: number().required('Required'),
  cellId: number().required('Required'),
  tac: number().required('Required'),
  pdnIpAddress: string().required('Required'),
  dnsIpAddress: string().required('Required'),
  ntpIpAddress: string().required('Required'),
});
