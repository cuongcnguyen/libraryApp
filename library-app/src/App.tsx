import React, {useEffect, useState} from 'react';
import './App.css';
import LoginSignup from './Views/LoginSignup';
import ShopGridSidebar from './Views/ShopGridSidebar';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Outlet, useOutletContext } from 'react-router-dom';
import Card from './Components/Card';
import { Book, ShopDetailProps, ShopGridSidebarProps } from './Interface/interface';
import ShopDetail from './Views/ShopDetail';



const App : React.FC = ()=> {
  const [books, setBooks] = useState<Book[]>([]);

  // ---------Call API once when loading the page----------
  useEffect(() => {
    const getBook = async() =>{
      const res = await axios.get('http://localhost:8000/books');
      setBooks(res.data);      
    }
    getBook();    
  }, []);

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

    return filteredBooks.map(({image, title, genre, author, star, price, in_stock})=>(
      <Card 
        key={Math.random()}           
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

    <Outlet context={{handleChange, query,handleInputSearch,result}} />
  );
}

export default App;

export function useShopGridSidebarProps(){
  return useOutletContext<ShopGridSidebarProps>();
}

export function useShopDetailProps(){
  return useOutletContext<ShopDetailProps>();
}
