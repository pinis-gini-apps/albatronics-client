import React, { useState, useEffect } from 'react'
import Typography from '@mui/material/Typography';
import { Checkbox, FormControl, FormControlLabel, FormGroup, Radio, RadioGroup } from '@mui/material';
import Button from '@mui/material/Button';
import { USER_TYPES } from '../constants/admin-selection-part-items';
import { useAuth } from 'app/_shared/modules/auth/hooks/use-auth';

const UsersPrivileges = () => {
  const [list, setList] = useState<any[]>([])
  const [currentRouteIndex, setCurrentRouteIndex] = useState(0);
  const [currentRouteChildrens, setCurrentRouteChildrens] = useState<any[]>([]);
  const [currentRole, setCurrentRole] = useState<string>('');
  const { setUserConfig, getUserConfig } = useAuth();



  const userCongif = async () => {
    const config: any = await getUserConfig(currentRole);
    setList(config)
    setCurrentRouteChildrens(JSON.parse(JSON.stringify(config[currentRouteIndex]?.childrens)))
  }


  useEffect(() => {
    if(currentRole) {
      userCongif();
    }
  }, [currentRole])

  const sendNewConfig = async () => {
    await setUserConfig({
      role: currentRole,
      route: list[currentRouteIndex].id,
      updatedRoutes: [...currentRouteChildrens]
    })
    await userCongif();
  }


  const handleCheck = (index: number) => {
    const newChildrens = [...currentRouteChildrens]
    newChildrens[index].checked = !newChildrens[index].checked;
    setCurrentRouteChildrens(newChildrens)
  }

  const resetList = () => {
    if(list[currentRouteIndex]?.childrens) {
      setCurrentRouteChildrens(JSON.parse(JSON.stringify(list[currentRouteIndex]?.childrens)))
    } else {
      return;
    }
  }

  useEffect(() => {
    resetList();
  }, [currentRouteIndex])

  useEffect(() => {
    setCurrentRole(USER_TYPES[0].id)
  }, [])

  return (
    <div className='inner-page-container'>
      <Typography variant="h4">Roles Management</Typography>
      <div className='users-privileges-container '>
        <div className='users-container'>
          <Typography variant="h6">Users</Typography>
          <div className='box'>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Operator"
                name="radio-buttons-group"
              >
                {USER_TYPES.map(type => (
                  <FormControlLabel key={type.id} value={type.title} control={<Radio />} label={type.title} onClick={() => setCurrentRole(type.id)} />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div className='roles-container'>
          <Typography variant="h6">Roles</Typography>
          <div className='box'>
            <FormControl style={{ width: '50%' }}>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue={list[0]?.title || 'System'}
                name="radio-buttons-group"
              >
                {list.map((route, i) => (
                  <FormControlLabel key={route.id} onClick={() => {
                    setCurrentRouteIndex(i)
                  }} value={route.title} control={<Radio />} label={route.title} />
                ))}
              </RadioGroup>
            </FormControl>
            <FormControl>
              <FormGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
              >
                {currentRouteChildrens.length > 0 && currentRouteChildrens.map((route, i) => (
                  <FormControlLabel
                    key={route.title}
                    control={
                      <Checkbox disabled={route.title === 'Status'} checked={route.checked} onChange={() => handleCheck(i)} name={route.title} />
                    }
                    label={route.title}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </div>
        </div>
      </div>
      <div className='buttons-container'>
        <Button disableElevation variant="contained" size="medium" color="success" onClick={sendNewConfig}>
          SAVE & Apply
        </Button>
        <Button disableElevation variant="contained" size="medium" color="error" onClick={resetList}>CANCEL</Button>
      </div>
    </div>
  )
}

export default UsersPrivileges            