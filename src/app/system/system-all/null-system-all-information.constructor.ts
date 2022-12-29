import { Nullable } from '../../_shared/types/nullable';

import { SystemAllInformation } from './models/system-all-information';

export const nullSystemAllInformationConstructor = (): Nullable<SystemAllInformation> => ({
  id: null,
  name: null,
  value: null,
  dataType: null,
  typeId: null,
  changeStatus: 0,
  visible: false,
  tooltip: null,
  restWarm: null,
  modifiedTime: new Date().toISOString(),
});
