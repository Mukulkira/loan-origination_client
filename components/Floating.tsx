"use client";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Switch from '@mui/material/Switch';
import SpeedDial, { SpeedDialProps } from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { MonetizationOnRounded, WarningAmberRounded } from '@mui/icons-material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: 'absolute',
  '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const actions = [
  { icon: <WarningAmberRounded />, name: 'EWS',label:'ews' },
  { icon: <MonetizationOnRounded />, name: 'Lead Generation',label:'lead' },
];

export default function Floating() {
  const [direction, setDirection] =
    React.useState<SpeedDialProps['direction']>('up');
  const [hidden, setHidden] = React.useState(false);

  const handleDirectionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDirection(
      (event.target as HTMLInputElement).value as SpeedDialProps['direction'],
    );
  };

  const handleHiddenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHidden(event.target.checked);
  };

  const router=useRouter();

  return (
    <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1,position:'fixed', right:0, bottom:'1rem' }}>
      {/* <FormControlLabel
        control={
          <Switch checked={hidden} onChange={handleHiddenChange} color="primary" />
        }
        label="Hidden"
      /> */}
      {/* <FormControl component="fieldset" sx={{ mt: 1, display: 'flex' }}>
        <FormLabel component="legend">Direction</FormLabel>
        <RadioGroup
          aria-label="direction"
          name="direction"
          value={direction}
          onChange={handleDirectionChange}
          row
        >
          <FormControlLabel value="up" control={<Radio />} label="Up" />
          <FormControlLabel value="right" control={<Radio />} label="Right" />
          <FormControlLabel value="down" control={<Radio />} label="Down" />
          <FormControlLabel value="left" control={<Radio />} label="Left" />
        </RadioGroup>
      </FormControl> */}
      <Box sx={{ position: 'fixed', height: 320,bottom:100 }}>
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          hidden={hidden}
          icon={<SpeedDialIcon />}
          direction={direction}
        >
          {actions.map((action) => (
            // <Link href={`?search=${action.label}`}>
                <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={() => router.push(`?search=${action.label}`)}
                />
            // </Link>
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
  );
}