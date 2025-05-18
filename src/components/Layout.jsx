import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Header />
      <Box sx={{display: 'flex', mt: '80px', alignItems: 'center'  }}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;