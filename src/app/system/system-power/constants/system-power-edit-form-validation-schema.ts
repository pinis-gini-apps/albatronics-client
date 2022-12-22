import {object, number, string, Schema} from 'yup';
import {SystemPowerInformation} from '../models/system-power-information';


export const SYSTEM_POWER_EDIT_FORM_VALIDATION_SCHEMA: Schema<SystemPowerInformation> = object().shape({
  plmn: string().required('Required'),
});
