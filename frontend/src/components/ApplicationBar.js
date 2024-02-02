import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from 'react-router-dom';

export default function ApplicationBar() {
  return (
    <ScopedCssBaseline>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar 
          position="static"
          sx={{ bgcolor: "DimGray" }}
        >
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} ml={2}>
            <i>Supply Chain Risk Prediction</i>
          </Typography>
          <Box mr={2}>
            <Button sx={{fontSize: 20}} color="inherit" to='/' component={Link} >
              主页
            </Button>
          </Box>
          <Box mr={2}>
            <Button sx={{fontSize: 20}} color="inherit" to='/login' component={Link} >
              登录
            </Button>
          </Box>
          <Box mr={2}>
            <Button sx={{fontSize: 20}} color="inherit" to='/register' component={Link} >
              注册
            </Button>
          </Box>
        </Toolbar>
        </AppBar>
      </Box>
    </ScopedCssBaseline>
  );
}