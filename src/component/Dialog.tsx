import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import React from "react";

interface Props {
    setOpen: (open: boolean) => void;
    isVisibleCancle?: boolean;
    cancleCallBack?: () => void;
    confirmCallBack?: () => void;
    content: React.ReactNode;
    title: string;
}

export const CustomDialog = (props: Props) => {

    const cancalClick = () => {
        props.setOpen(false);
        if (props.cancleCallBack) {
            props.cancleCallBack();
        }
    };

    const confirmClick = () => {
        props.setOpen(false);
        if (props.confirmCallBack) {
            props.confirmCallBack();
        }
    };

    const handleClose = () => {
        props.setOpen(false);
    };

    return (
        <div>
            <Dialog
                open={true}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {
                            props.content
                        }
                    </DialogContentText>
                </DialogContent>
                <DialogActions>

                    {
                        props.isVisibleCancle &&
                        <Button onClick={cancalClick} color="primary">
                            取消
                        </Button>
                    }

                    <Button onClick={confirmClick} color="primary" autoFocus>
                        确定
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
