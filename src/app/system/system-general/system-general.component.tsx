import React, {useEffect} from 'react';

import Typography from '@mui/material/Typography';

import {useHttp} from '../../_shared/modules/http/hooks/use-http';

import {SystemGeneralDataTable} from './system-general-data-table/system-general-data-table.component';
import {SystemGeneralLayout} from './system-general-layout/system-general-layout.component';
import {SystemGeneralEcpLicenseInformation} from './models/system-general-ecp-license-information';
import {SystemGeneralSoftwareVersionInformation} from './models/system-general-software-version-information';
import {SystemStatusDataTable} from '../system-status/system-status-data-table/system-status-data-table.component';
import {getPowerLedColor, updateStatusBasedOnPowerLed} from '../../_shared/utils/color-init';
import {LedInfoContext} from '../../_shared/contexts/led-info/led-info.context';
import {SystemStatusSystemInformation} from '../system-status/models/system-status-system-information';

export const SystemGeneral: React.FC = () => {
  const ledInfo = React.useContext(LedInfoContext);
  const {operation: fetchSystemData, data: systemData} = useHttp<SystemStatusSystemInformation[]>({url: '/api/v1/configuration/byTypes?ids=8', method: 'GET'});
  const {operation: fetchEpcLicenseData, data: epcLicenseData} = useHttp<SystemGeneralEcpLicenseInformation[]>({url: `/api/v1/configuration/byTypes?ids=7`, method: 'GET'});
  const {operation: fetchSoftwareVersionData, data: softwareVersionData} = useHttp<SystemGeneralSoftwareVersionInformation[]>({url: '/api/v1/configuration/byTypes?ids=2', method: 'GET'});

  const fetchRequiredData = React.useCallback(
      () => {
        fetchSystemData();
        fetchEpcLicenseData();
        fetchSoftwareVersionData();
      },
      [fetchSystemData, fetchEpcLicenseData, fetchSoftwareVersionData],
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

  return (
    <SystemGeneralLayout>
      <>
        <Typography variant="h4">System information</Typography>
        <SystemStatusDataTable
            statusColor={getPowerLedColor(ledInfo?.powerLed, systemData)}
            data={updateStatusBasedOnPowerLed(ledInfo?.powerLed, systemData)}
        />

        <Typography variant="h4">Epc License</Typography>
        <SystemGeneralDataTable data={epcLicenseData}></SystemGeneralDataTable>
      </>
      <>
        <Typography variant="h4">Software Versions</Typography>
        <SystemGeneralDataTable data={softwareVersionData}></SystemGeneralDataTable>
      </>
    </SystemGeneralLayout>
  );
};
