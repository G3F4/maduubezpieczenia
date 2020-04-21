import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import { AppContext } from "../App";

export default function ResponsiveDialog({ children, title, openButton, style }) {
  const [open, setOpen] = React.useState(false);
  const { showSidebar, hideSidebar } = React.useContext(AppContext);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClickOpen = () => {
    setOpen(true);
    hideSidebar();
  };

  const handleClose = () => {
    setOpen(false);
    showSidebar();
  };

  return (
    <div style={style || { textAlign: 'right', marginTop: 20, marginRight: 10 }}>
      <div onClick={handleClickOpen}>
        {openButton || (
          <Button variant="contained" color="primary">
            Więcej
          </Button>
        )}
      </div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 20 }}>
              {title}
            </div>
            <div>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
              </IconButton>
            </div>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ fontSize: 16 }}>
            {children}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}