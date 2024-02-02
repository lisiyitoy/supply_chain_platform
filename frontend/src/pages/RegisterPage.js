import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import ScopedCssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box } from "@mui/material";
import Stack from '@mui/material/Stack';
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import ApplicationBar from "../components/ApplicationBar";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function RegisterPage() {
  const [didRegister, setDidRegister] = useState(false)
  const [isRegisteredSuccess, setIsRegisteredSuccess] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const classes = useStyles();

  const handleSubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    };
    
    fetch("/api/register-user", requestOptions)
      .then((response) => {
        setDidRegister(true);
        if (response.status == 201) {
          setIsRegisteredSuccess(true);
        } else {
          setIsRegisteredSuccess(false);
        }
      })
      
  };

  const registerForm = () =>
  <div>
    <ApplicationBar/>
    <Container maxWidth="xs">
      <ScopedCssBaseline>
        <div className={classes.paper}>
          <Typography variant="h4">
            注册
          </Typography>
          <Box className={classes.form}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="name"
                  label="姓名"
                  onChange={(event) => setName(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="邮箱"
                  name="email"
                  autoComplete="email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="密码"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              注册
            </Button>
            <Grid>
              {
                didRegister && !isRegisteredSuccess && 
                <Typography align="center" color="textPrimary">
                  注册失败, 请重新尝试
                </Typography>
              }
            </Grid>
          </Box>
        </div>
      </ScopedCssBaseline>
    </Container>
  </div>

  const successRegistered = () => 
    <div>
      <ApplicationBar/>
      <Container maxWidth="xs">
        <ScopedCssBaseline>
          <div className={classes.paper}>
            <Box mb={2}>
              <Stack direction="row" alignItems="center" gap={1}>
                <CheckCircleIcon sx={{color: "ForestGreen"}}/> 
                <Typography variant="h5">
                  注册成功！
                </Typography>
              </Stack>
            </Box>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              to="/login"
              component={Link}
            >
              前往登录
            </Button>
          </div>
        </ScopedCssBaseline>
      </Container>
    </div>

  if (didRegister) {
    if (isRegisteredSuccess) {
      return successRegistered();
    } else {
      return registerForm();
    }
  } else {
    return registerForm();
  }
}
