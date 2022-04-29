import ButtonGroup from '@mui/material/ButtonGroup'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import CircularProgress from '@mui/material/CircularProgress'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import React from 'react'
import "../index.css";


export default function Muistyle(){
     const [expanded, setExpanded] = React.useState(false);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
    return <div className='Muistyle'>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
        <Alert severity="error">This is an error alert — check it out!</Alert>
        <Alert severity="warning">This is a warning alert — check it out!</Alert>
        <Alert severity="info">This is an info alert — check it out!</Alert>
        <Alert severity="success">This is a success alert — check it out!</Alert>
        <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
         <CircularProgress color="secondary" />
         <CircularProgress color="success" />
         <CircularProgress color="inherit" />
        </Stack>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<div><h2>General settings</h2></div>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        />
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            General settings
          </Typography>
          </Accordion>
    </div>
}

