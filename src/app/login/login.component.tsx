import React, {useCallback} from 'react';
import {useNavigate} from "react-router-dom";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import {useAuth} from '../_shared/modules/auth/hooks/use-auth';

import './login.style.scss';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const {login} = useAuth();
  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const userName =  data.get('userName') as string;
    const password = data.get('password') as string;
    await login(userName, password);
    navigate('/main', {replace: true});
  }, [navigate, login]);
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          margin="normal"
          required
          fullWidth
          id="userName"
          label="User Name"
          name="userName"
          autoComplete="userName"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{
            mt: 3,
            mb: 2,
          }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
};
