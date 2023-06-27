import { Box, Typography, Grid } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/Github";
import './Footer.css'
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokenReducer";

function Footer() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    var footerComponent;

    if (token != "") {
        footerComponent = <Grid container direction="row" justifyContent="center" alignItems="center">
        <Grid alignItems="center" item xs={12}>

            <Box className='backFooter' marginTop='-5px'>

                <Box display="flex" alignItems="center" justifyContent="center" >
                    <a href="https://www.instagram.com/greenpowerhub23/" target="_blank">
                        <InstagramIcon className='redes' />
                    </a>
                    <a href="https://github.com/orgs/Projeto-Integrador-Generation/repositories" target="_blank">
                        <GitHubIcon className='redes' />
                    </a>
                </Box>
                <Box className="box2">
                    <a target="_blank" href="https://brasil.generation.org">
                        <Typography variant="subtitle2" gutterBottom align="center" className="texto a:link" >brasil.generation.org</Typography>
                    </a>
                    <a>
                        <Typography variant="subtitle2" align="center" gutterBottom className="texto2">© 2023</Typography>
                    </a>
                </Box>
            </Box>

        </Grid>
    </Grid>
    }

    return (
        <>
            {footerComponent}
        </>
    )
}
export default Footer;