import * as React from "react";
import * as PropTypes from 'prop-types'
import {makeStyles} from "@material-ui/core/styles";
import {Snackbar} from "@material-ui/core";
import MuiAlert, {AlertProps} from "@material-ui/lab/Alert";
import { useState } from "react";
import snackbarContentStyle from "../../../vendor/material-dashboard-react/components/snackbarContentStyle";

const useStyles = makeStyles(snackbarContentStyle as any);

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function CustomSnackbar(props: any) {
    const classes = useStyles({} as any);
    const {message, autoHideDuration, place, color} = props;

    const [open, setOpen] = useState(true);

    const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Snackbar
            anchorOrigin={{
                vertical: place.indexOf("t") === -1 ? "bottom" : "top",
                horizontal:
                    place.indexOf("l") !== -1
                        ? "left"
                        : place.indexOf("c") !== -1
                        ? "center"
                        : "right"
            }}
            open={open}
            onClose={handleClose}
            autoHideDuration={autoHideDuration}
        >
            <Alert severity={color}>{message}</Alert>
        </Snackbar>
    );
}

CustomSnackbar.propTypes = {
    message: PropTypes.string.isRequired,
    color: PropTypes.oneOf(["info", "success", "warning", "error"]),
    place: PropTypes.oneOf(["tl", "tr", "tc", "br", "bl", "bc"]),
    autoHideDuration: PropTypes.number
};
