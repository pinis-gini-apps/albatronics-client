import React from 'react';

import {Formik, Form, Field} from 'formik';
import {TextField} from 'formik-mui';
import {FormikHelpers} from 'formik/dist/types';

import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import {Typography} from '@mui/material';
import Button from '@mui/material/Button';

import {SaveAndRestartPopup} from '../../_shared/components/save-and-restart-popup/save-and-restart-popup.component';

import {SYSTEM_CELLULAR_EDIT_FORM_INITIAL_VALUE} from './constants/system-cellular-edit-form-initial-value';
import {SystemCellularInformation} from './models/system-cellular-information';
import {SYSTEM_CELLULAR_EDIT_FORM_VALIDATION_SCHEMA} from './constants/system-cellular-edit-form-validation-schema';
import {SystemCellularEditFormItem} from './system-cellular-edit-form-item/system-cellular-edit-form-item.component';

export const SystemCellular: React.FC = () => {
  const handleSubmit = (value: SystemCellularInformation, {setSubmitting}: FormikHelpers<SystemCellularInformation>) => {
    setTimeout(() => {
      setSubmitting(false);
    }, 5000);
  };
  return (
    <Formik
      initialValues={SYSTEM_CELLULAR_EDIT_FORM_INITIAL_VALUE}
      validationSchema={SYSTEM_CELLULAR_EDIT_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({
          submitForm,
          isSubmitting,
          isValid,
        }) => (
        <>
          <Stack spacing="0.5rem">
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
              spacing="1rem"
              flexWrap="wrap"
            >
              <Typography
                variant="h4"
                sx={{marginInlineEnd: 'auto'}}
              >
                Cellular
              </Typography>
              <Button
                disableElevation
                color="success"
                variant="contained"
                disabled={!isValid || isSubmitting}
                onClick={submitForm}
              >
                Save & Restart
              </Button>
              <Button
                disableElevation
                color="error"
                variant="contained"
              >
                Cancel
              </Button>
            </Stack>
            <Paper sx={{
              paddingBlock: '1rem',
              paddingInline: '1rem',
            }}>
              <Stack component={Form}>
                <SystemCellularEditFormItem label="PLMN">
                  <Field
                    required
                    name="plmn"
                    label="PLMN"
                    size="small"
                    component={TextField}
                  />
                </SystemCellularEditFormItem>
                <SystemCellularEditFormItem label="APN">
                  <Field
                    required
                    name="apn"
                    label="APN"
                    size="small"
                    component={TextField}
                  />
                </SystemCellularEditFormItem>
                <SystemCellularEditFormItem label="BAND">
                  <Field
                    required
                    name="band"
                    label="BAND"
                    size="small"
                    component={TextField}
                  />
                </SystemCellularEditFormItem>
                <SystemCellularEditFormItem label="BW [MHz]">
                  <Field
                    required
                    name="bandWidth"
                    label="BW [MHz]"
                    size="small"
                    component={TextField}
                  />
                </SystemCellularEditFormItem>
                <SystemCellularEditFormItem label="CELL ID">
                  <Field
                    required
                    name="cellId"
                    label="CELL ID"
                    size="small"
                    component={TextField}
                  />
                </SystemCellularEditFormItem>
                <SystemCellularEditFormItem label="TAC">
                  <Field
                    required
                    name="tac"
                    label="TAC"
                    size="small"
                    component={TextField}
                  />
                </SystemCellularEditFormItem>
                <SystemCellularEditFormItem label="PDN IP Address">
                  <Field
                    required
                    name="pdnIpAddress"
                    label="PDN IP Address"
                    size="small"
                    component={TextField}
                  />
                </SystemCellularEditFormItem>
                <SystemCellularEditFormItem label="DNS IP Address">
                  <Field
                    required
                    name="pdnIpAddress"
                    label="DNS IP Address"
                    size="small"
                    component={TextField}
                  />
                </SystemCellularEditFormItem>
                <SystemCellularEditFormItem label="NTP IP Address">
                  <Field
                    required
                    name="ntpIpAddress"
                    label="NTP IP Address"
                    size="small"
                    component={TextField}
                  />
                </SystemCellularEditFormItem>
              </Stack>
            </Paper>
          </Stack>
          {isSubmitting && (
            <SaveAndRestartPopup open={isSubmitting} />
          )}
        </>
      )}
    </Formik>
  );
};
