import {SelectionPartItem} from '../../_shared/components/selection-part/models/selection-part-item';

export const ADMIN_SELECTION_PART_ITEMS: ReadonlyArray<SelectionPartItem> = [
  { label: 'Password', route: './password', },
  { label: 'Users privileges', route: './users-privileges', },
  { label: 'Developer privileges', route: './admin-privileges', },
];


export const ROUTING_LIST = [
  { id:'system', title: 'System', childrens: [{title: 'Status', id:'status', checked: true}, {title: 'General', id:'general', checked: true}, {title: 'Cellular', id:'cellular', checked: false}, {title: 'Power', id:'power', checked: false}, {title: 'Shutdown / Reboot', id:'shutdown/reboot', checked: true}, {title: 'All', id:'all', checked: false}]},
  { id:'network', title: 'Network', childrens: [{title: 'IP Address', id:'ip_address', checked: true}, {title: 'Routing', id:'routing', checked: true}, {title: 'Tunneling', id:'tunneling', checked: false}, {title: 'Port Forwarding', id:'port_fowarding', checked: false}]},
  { id:'enodeb', title: 'eNodeB', childrens: [{title: 'Performances', id:'performances', checked: true}, {title: 'Users Status', id:'users_status', checked: true}, {title: 'Users Database', id:'users_database', checked: false}, {title: 'IMEI Restricted List', id:'imei', checked: false} , {title: 'Spectrum', id:'spectrum', checked: false} , {title: 'Sensing & Evasion', id:'sensing', checked: false}]},
  { id:'serial', title: 'Serial', childrens: [{title: 'Summery', id:'summery', checked: true}]},
  { id:'backhaul', title: 'Backhaul', childrens: [{title: 'Performances', id:'performances', checked: true}]},
  { id:'gps', title: 'GPS', childrens: [{title: 'Performances', id:'performances', checked: true}]},
  { id:'diagnostic', title: 'Diagnostic', childrens: [{title: 'Summery', id:'summery', checked: true}, {title: 'Ping Test', id:'ping_test', checked: true}, {title: 'Throughput test', id:'throughput_test', checked: true}]},
  { id:'logs', title: 'Logs', childrens: [{title: 'Summery', id:'summery', checked: true}, {title: 'EPC & eNodeB', id:'epc_enodeb', checked: true}, {title: 'Report', id:'', checked: true}]},
  { id:'privileges', title: 'Admin', childrens: [{title: 'Password', id:'', checked: true}, {title: 'Users Privileges', id:'', checked: true}, {title: 'Admin privileges', id:'', checked: true}]},
]

export const USER_TYPES = [{id: 'operator_role', title: 'Operator'}]
