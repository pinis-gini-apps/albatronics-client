import React, {useEffect} from 'react';

import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import {useHttp} from '../../_shared/modules/http/hooks/use-http';
import {LedInfoContext} from '../../_shared/contexts/led-info/led-info.context';

import {SystemStatusSystemInformation} from './models/system-status-system-information';
import {SystemStatusCellularInformation} from './models/system-status-cellular-information';
import {SystemStatusPerformanceInformation} from './models/system-status-performance-information';
import {SystemStatusLayout} from './system-status-layout/system-status-layout.component';
import {SystemStatusDataTable} from './system-status-data-table/system-status-data-table.component';
import {
    getENodeBColor,
    getENodeBStatusName,
    getPowerLedColor,
    updateStatusBasedOnPowerLed
} from '../../_shared/utils/color-init';
import {SystemStatusENodeBInformation} from './models/system-status-eNodeB-information';
import {SystemStatusRfPolicyInformation} from './models/system-status-rf-policy-information';

export const SystemStatus: React.FC = () => {
  const ledInfo = React.useContext(LedInfoContext);
  const {operation: fetchSystemData, data: systemData} = useHttp<SystemStatusSystemInformation[]>({url: '/api/system/status/system', method: 'GET'});
  const {operation: fetchCellularData, data: cellularData} = useHttp<SystemStatusCellularInformation[]>({url: '/api/system/status/cellular', method: 'GET'});
  const {operation: fetchPerformanceData, data: performanceData} = useHttp<SystemStatusPerformanceInformation[]>({url: '/api/system/status/performance', method: 'GET'});
  const {operation: fetchENodeBStateDataData, data: eNodeBStateData} = useHttp<SystemStatusENodeBInformation>({url: '/api/enodeb', method: 'GET'});
  const {operation: fetchRfPolicyData, data: rfPolicyData} = useHttp<SystemStatusRfPolicyInformation>({url: '/api/rfpolicy', method: 'GET'});
  const {operation: setAllowedRfPolicyState} = useHttp<SystemStatusRfPolicyInformation>({url: '/api/rfpolicy/allowed', method: 'PUT'});
  const {operation: setBlockedRfPolicyState} = useHttp<SystemStatusRfPolicyInformation>({url: '/api/rfpolicy/blocked', method: 'PUT'});
  const fetchRequiredData = React.useCallback(
    () => {
      fetchSystemData();
      fetchCellularData();
      fetchPerformanceData();
      fetchENodeBStateDataData();
      fetchRfPolicyData();
    },
    [fetchSystemData, fetchCellularData, fetchPerformanceData, fetchENodeBStateDataData, fetchRfPolicyData],
  );
  useEffect(() => {
    fetchRequiredData();
    const intervalId = setInterval(() => {
      fetchRequiredData();
    }, 4000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const toggleRfPolicyState = React.useCallback(
    async () => {
      if (rfPolicyData?.value === 'allowed') {
        await setBlockedRfPolicyState();
        fetchRfPolicyData();
      } else {
        await setAllowedRfPolicyState();
        fetchRfPolicyData();
      }
    },
    [rfPolicyData, fetchRfPolicyData, setBlockedRfPolicyState, setAllowedRfPolicyState],
  );

  return (
    <SystemStatusLayout>
      <>
        <Typography variant="h4">System information</Typography>
        <SystemStatusDataTable
          statusColor={getPowerLedColor(ledInfo?.powerLed, systemData)}
          data={updateStatusBasedOnPowerLed(ledInfo?.powerLed, systemData)}
        />
      </>
      <>
        <Typography variant="h4">Cellular</Typography>
        <SystemStatusDataTable
          statusColor={getPowerLedColor(ledInfo?.powerLed, cellularData)}
          data={cellularData}
        />
      </>
      <>
        <Typography variant="h4">Performance</Typography>
        <SystemStatusDataTable data={performanceData} />
      </>
      <>
        <Typography variant="h4">eNodeB State</Typography>
        <Paper sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          flex: '1 1 auto',
          paddingInline: '1.5rem',
          paddingBlock: '0.5rem',
        }}>
          <Stack direction="row" spacing="1rem" alignItems="center">
            <div>RF Policy</div>
            <Switch
              checked={rfPolicyData?.value === 'allowed'}
              onChange={() => toggleRfPolicyState()}
            />
          </Stack>
          <Paper
            variant="outlined"
            sx={{
              paddingInline: '0.75rem',
              paddingBlock: '0.25rem',
              backgroundColor: getENodeBColor(eNodeBStateData?.status),
              color: 'success.contrastText',
            }}
          >
              {getENodeBStatusName(eNodeBStateData?.status)} (
                {eNodeBStateData?.frequency || '0'} {eNodeBStateData?.label || 'Hz'}
              )
          </Paper>
        </Paper>
      </>
    </SystemStatusLayout>
  );
};
