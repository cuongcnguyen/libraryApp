import React, {useEffect, useState} from 'react';
import './App.css';
import LoginSignup from './Views/LoginSignup';
import ShopGridSidebar from './Views/ShopGridSidebar';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Outlet, useOutletContext } from 'react-router-dom';
import Card from './Components/Card';
import { Book, PaginationProps, ShopCartProps, ShopDetailProps, ShopGridSidebarProps } from './Interface/interface';
import ShopDetail from './Views/ShopDetail';
import queryString from 'query-string';

const App : React.FC = ()=> {
  const [books, setBooks] = useState<Book[]>([]);

  // -------------All Filter maybe---------
  const [filters, setFilters] = useState({
    _limit: 6,
    _page:1
  })

  // ---------Call API whenever filters change----------
  useEffect(() => {
    const getBook = async() =>{
      const paramsString = queryString.stringify(filters);
      console.log(paramsString);
      const res = await axios.get(`http://localhost:8000/books?${paramsString}`);
      console.log(res);

      const {data,pagination} = res.data;
      
      setBooks(data); 
      setPagination(pagination);
    }
    getBook();    
  }, [filters]);

  const [selectedFilter, setSelectedFilter] = useState(null);
  // -----------Search functionality------
  const [query, setQuery] = useState<string>('');  
  const handleInputSearch = (e:any) =>{
    setQuery(e.target.value)
  }
  const searchedBooks = books.filter((book)=> book.title.toLowerCase().includes(query.toLowerCase()));
  // -------------Filter functionality-----------

  const handleChange = (e:any) =>{
    setSelectedFilter(e.target.value)
  }
  const filterBooks = (items:Book[], selected:any, query:string)=>{
    let filteredBooks = items;
    // Data from the search bar
    if (query) {
      filteredBooks = searchedBooks;
    }
    // Data from filter option
    if (selected){
      filteredBooks = filteredBooks.filter(({author, genre, title}) => author === selected || genre === selected || title === selected )
    }

    return filteredBooks.map(({id,image, title, genre, author, star, price, in_stock})=>(
      <Card 
        key={Math.random()}
        id = {id}           
        image = {image}     
        title={title}
        genre={genre}
        author={author}
        star={star}
        price={price}
        in_stock={in_stock}
      />
    ))
  }
  const result = filterBooks(books, selectedFilter, query);

  // ------------------Pagination-------------------
  const [pagination, setPagination] = useState({
    _page:1,
    _limit:6,
    _totalRows:1
  });
  
  
  const handlePageChange = (newPage:any) =>{
    console.log('New page: ',newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  return (
    // <div className="App">
    //   {/* <LoginSignup/> */}
    //   <ShopGridSidebar />
    // </div>
    // <Router>
    //   <Routes>
    //     {/* <Route path='/' element={<ShopGridSidebar handleChange={handleChange} result={result} query={query} handleInputSearch={handleInputSearch} />}></Route> */}
    //     {/* <Route path='/signup' element={<LoginSignup />}></Route> */}
    //     <Route path='/' element={<ShopDetail handleChange={handleChange} query={query} handleInputSearch={handleInputSearch} />}></Route>

    //   </Routes>
    // </Router>

    <Outlet context={{handleChange, query,handleInputSearch,result, pagination, onPageChange:handlePageChange}} />
    // <LoginSignup/>
  );
}

export default App;

export function useShopGridSidebarProps(){
  return useOutletContext<ShopGridSidebarProps>();
}

export function useShopDetailProps(){
  return useOutletContext<ShopDetailProps>();
}

export function usePaginationProps(){
  return useOutletContext<PaginationProps>();
}

export function useShopCartProps(){
  return useOutletContext<ShopCartProps>();
}
