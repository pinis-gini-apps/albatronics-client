import {Nullable} from '../../../_shared/types/nullable';

import {NetworkPortForwardingInformation} from '../models/network-port-forwarding-model-information';

export const nullNetworkPortForwardingInformationConstructor = (): Nullable<NetworkPortForwardingInformation> => ({
  id: null,
  name: null,
  sourceIpAddress: null,
  protocol: null,
  externalPort: null,
  internalPort: null,
  status: 'DOWN',
});
