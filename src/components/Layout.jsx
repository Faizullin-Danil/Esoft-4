import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Box } from '@mui/material';
import { useTheme } from '../context/ThemeContext';

const Layout = () => {
  const { isDarkTheme } = useTheme();

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: isDarkTheme ? 'black' : 'white'
    }}>
      <Header />
      <Box sx={{
        flex: 1,
        pt: '80px',
        backgroundColor: isDarkTheme ? 'black' : 'white'
      }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;