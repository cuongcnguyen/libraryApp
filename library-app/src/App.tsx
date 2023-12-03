import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React, {useCallback, useEffect, useState} from 'react';
import './App.css';
import LoginSignup from './Views/LoginSignup';
import ShopGridSidebar from './Views/ShopGridSidebar';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Outlet, useOutletContext } from 'react-router-dom';
import Card from './Components/Card';
import { Book, CartItem, PaginationProps, ShopCartProps, ShopDetailProps, ShopGridSidebarProps } from './Interface/interface';
import ShopDetail from './Views/ShopDetail';
import queryString from 'query-string';
import CardItem from './Components/CartItem';
import { useLocalStorage } from "./hooks/useLocalStorage";

const App : React.FC = ()=> {

  // -----------------Call API to get all the books in database----------------------
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  useEffect(()=>{
    const getAllBooks = async() =>{
      const res = await axios.get('http://localhost:8000/books');                
      setAllBooks(res.data);
      
    }
    getAllBooks();    
  },[])
  
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
      const res = await axios.get(`http://localhost:8000/books?${paramsString}`);
      

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
        key={id}
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
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  // ---------------HANDLING CART PAGE LOGIC----------------
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart", [])
  const cartQuantity = cartItems.reduce( (quantity,item) => item.quantity+quantity, 0 )

  // ---------Calculate total price of an order--------------------
  const [totalAmount, setTotalAmount] = useState(0)
  const getItemQuantity = (id:number) =>{
    return cartItems.find( item => item.id === id )?.quantity || 0
  }
  const increaseCartQuantity = (id:number) =>{
    setCartItems(currItems =>{
      //If the currItems is empty then add an item with the id in param and set quantity to 1, otherwise, increment the quantity of that item      
      if (currItems.find(item =>item.id === id ) == null) {
        return [...currItems, {id, quantity: 1}]
      } else {
        return currItems.map( item =>{
          if(item.id === id){
            return {...item, quantity:item.quantity +1 }
          } else{
            return item
          }
        } )
      }
      
    } )

  }

  const decreaseCartQuantity = (id:number) =>{
    setCartItems(currItems =>{
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map( item =>{
          if(item.id === id){
            return {...item, quantity:item.quantity -1 }
          } else{
            return item
          }
        } )
      }
      
    } )
  }
  const removeFromCart = (id:number)=>{
    setCartItems(currItems =>{
      return currItems.filter(item => item.id !== id)
    })
  }
  
  
  // const itemsInCart = useCallback(() => {
  //   return cartItems.map(item => (
  //     <CardItem 
  //       key={item.id}
  //       {...item}
  //       library={books}        
  //     />
  //   ))
  // },[cartItems] )
  const itemsInCart = () =>{
    return cartItems.map(item => (
      <CardItem 
        key={item.id}
        {...item}
        library={allBooks}        
      />
    ))
    
  }
  const resultCart = itemsInCart();


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

    <Outlet context={{handleChange, query,handleInputSearch,result, pagination, onPageChange:handlePageChange, getItemQuantity,increaseCartQuantity, decreaseCartQuantity, removeFromCart, cartQuantity, cartItems, resultCart, allBooks}} />
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

