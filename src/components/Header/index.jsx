import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function Header() {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <AppBar position="static">
        <Toolbar>
            <CodeIcon className={classes.menuButton} />
            <Typography variant="h6" className={classes.title}>
            News
            </Typography>
            <Button color="inherit" onClick={handleClickOpen}>Register</Button>
        </Toolbar>
        </AppBar>

        <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
        <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
        </DialogContentText>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
        />
        </DialogContent>
        <DialogActions>
        <Button onClick={handleClose} color="primary">
            Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
            Subscribe
        </Button>
        </DialogActions>
    </Dialog>
    </div>
    );
}

export default Header;
