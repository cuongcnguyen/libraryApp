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

export interface ShopGridSidebarProps{
    handleChange(e:any) : any,      
    query: any,
    handleInputSearch(e:any): any,
    result: any
}

export interface ShopDetailProps{
    query: any,
    handleInputSearch(e:any): any
}