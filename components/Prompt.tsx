"use client";

import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import clipboardCopy from 'clipboard-copy';
import toast from 'react-hot-toast';

type Props={
    content:string,
    setPromptData: React.Dispatch<React.SetStateAction<string>>
}

export default function AlertDialog({content,setPromptData}:Props) {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setPromptData("");
    setOpen(false);
  };
  const handleCopy=()=> {
    clipboardCopy(content);
    toast.success("Successfully Copied!");
  }

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            
            <p>{content}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCopy} autoFocus>
            Copy
          </Button>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
