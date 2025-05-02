import {Box, Container, Typography} from '@mui/material';

const InfoHeader = () => {
    return (
        <>
            <Box sx={{width:"50%", margin: "30px auto", }}>
                <Container sx={{backgroundColor: "red", display: "flex", justifyContent: "center" , alignItems:"center", borderRadius: "3px" }}>
                    <Box >
                    <Typography sx={{color: "white", fontSize: "20px", fontWeight: "bold"}}>
                        here you find your best news of the year
                    </Typography>
                    </Box>

                    <Box sx={{display: "flex",  justifyContent: "space-between", width: "100px", margin: "auto", gap: "10px", marginLeft: "55px"}}>
                        <img src="https://www.pngall.com/wp-content/uploads/10/Google-Play-Logo-Transparent.png" alt="googel play" style={{width:"130px"}} />
                        <img src="https://www.pngall.com/wp-content/uploads/10/Google-Play-Logo-Transparent.png" alt="app store"style={{width:"130px"}} />
                    </Box>

                </Container>
            </Box>
        </>
    )
}

export default InfoHeader;