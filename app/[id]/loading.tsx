import { Backdrop, Button, CircularProgress } from "@mui/material"

export default function (){
    return (
        <>
            {/* <Button onClick={handleOpen}>Show backdrop</Button> */}
                <Backdrop
                sx={{ color: '#fff', zIndex: 100 }}
                open={true}
                // onClick={handleClose}
                >
                <CircularProgress color="inherit" />
            </Backdrop>
        </>
    )
}