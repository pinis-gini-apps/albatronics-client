import {SelectionPartItem} from '../../_shared/components/selection-part/models/selection-part-item';

export const NETWORK_SELECTION_PART_ITEMS: ReadonlyArray<SelectionPartItem> = [
  { label: 'IP Address', route: './ip-address', },
  { label: 'Routing', route: './routing', },
  { label: 'Tunneling', route: './tunneling', },
  { label: 'Port Forwarding', route: './port-forwarding', }
];
