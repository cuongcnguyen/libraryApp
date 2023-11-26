import { ReactNode } from "react"

export interface Book{
    id: number,
    image: string,
    star: string,
    title: string,
    author: string,
    rent_times: number,
    price: string,
    genre: string,
    position: string,
    in_stock: number
}

export interface CartItem{
    id: number
    quantity: number  
}

export interface ShopGridSidebarProps{
    handleChange(e:any) : any,      
    query: any,
    handleInputSearch(e:any): any,
    result: any
}

export interface ShopDetailProps{
    query: any,
    handleInputSearch(e:any): any
    increaseCartQuantity(id:number):void
}

export interface PaginationProps{
    pagination: any,
    onPageChange(e:any): any
}

export interface ShopCartProps{
    query: any,
    handleInputSearch(e:any): any,
    children: ReactNode,

    getItemQuantity(id:number) : number,
    increaseCartQuantity (id:number) : void,
    decreaseCartQuantity (id:number) : void,
    removeFromCart (id:number) : void
    cartQuantity: number
    cartItems: CartItem[]
    resultCart:any
}