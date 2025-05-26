import BookList from '../components/BookList'
import Filters from '../components/Filters';
import {Box} from '@mui/material'

const MainPage = () => {

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '99%'}}>
            <Filters />
            <BookList />
        </Box>
    );
};

export default MainPage;