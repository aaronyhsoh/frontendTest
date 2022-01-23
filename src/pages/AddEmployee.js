import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import isEmail from 'validator/lib/isEmail';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
const theme = createTheme();

export default function AddEmployee() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [gender, setGender] = useState('female')

    const onChange = event => {
        // TODO: validate textField logic
        console.log(event.target.id);
    }
    const onRadioChange = event => {
        setGender(event.target.value)
    }
  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
    <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Add Employee
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            helperText="test"
            error={false}
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="email"
            name="email"
            label="Email Address"
            fullWidth
            variant="standard"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="phone"
            name="phone"
            label="Phone Number"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            label="Gender"
            control={<RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={gender}
                onChange={onRadioChange}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                </RadioGroup>}
          />
        </Grid>
      </Grid>
    </React.Fragment>
    </Paper>
    </Container>
  );
}