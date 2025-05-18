import BookList from '../components/BookList'
import Filters from '../components/Filters';

const MainPage = () => {

    return (
        <div>
            <Filters />
            <BookList />
        </div>
    );
};

export default MainPage;