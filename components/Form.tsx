import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

function form() {
  return (
    <div className='form'>
      <p>Kontakt meg</p>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="first-name"
          label="Fornavn"
          defaultValue="Fornavn"
        />
         <TextField
          required
          id="last-name"
          label="Etternavn"
          defaultValue="Etternavn"
        />
         <TextField
          id="e-mail"
          label="E-post"
          defaultValue="E-Post"
        />
        <TextField
          id="tlf"
          label="Tlf"
          defaultValue="Tlf"
          //check if the input is valid - formik
          />
      </div>
    </Box>
    <Box>
      <p>Hvor ønsker du å møtes?</p>
    <p>Fysisk hos Solstuen</p><Checkbox {...label} />
    <p>Telefonmøte</p><Checkbox {...label} />

    <p>Hem kommer på timen?</p>
    <p>Jeg kommer alene</p><Checkbox {...label} />
    <p>Jeg kommer med partner</p><Checkbox {...label} />
    <p>Jeg kommer med familien</p><Checkbox {...label} />

    <p>Hvor ønsker du å bli kontaktet?</p>
    <p>På mail</p><Checkbox {...label} />
    <p>På telefon</p><Checkbox {...label} />
    </Box>
    <Box>
      <p>Skriv kort hva du/dere ønsker å snakke om</p>
    <TextField
          id="comment"
          />
    </Box>
    <Box>
    <Button variant="contained">Send</Button>
    </Box>
  </div>
  )
}

export default form