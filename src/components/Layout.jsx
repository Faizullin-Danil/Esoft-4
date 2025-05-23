import { Outlet } from "react-router-dom";
import Header from "./Header";
import {Box} from '@mui/material'

const Layout = () => {
  return (
    <Box>
      <Header />
      <Box sx={{display: 'flex', mt: '80px', height: '100vh', width: '100%' }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;