import { AppBar, Toolbar } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Height, Menu } from "@mui/icons-material";
import Logo from "../../src/assets/images/inshorts.png"

const StyleAppBar = styled(AppBar)`
  background: #fff;
  height: 70px;
`;

const Header = () => {
  return (    
    <StyleAppBar position="static">
      <Toolbar>
        <Menu sx={{ color: "#000" }} />
        <img src={Logo} alt="Logo" style={{height: "50px", margin: "0 auto"} } />
      </Toolbar>
    </StyleAppBar>
  );
};

export default Header;
