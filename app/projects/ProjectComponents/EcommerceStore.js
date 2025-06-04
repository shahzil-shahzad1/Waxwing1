const stores = [
    {
        img: "/Projectpage/clothingstore.avif",
        name: "Clothing Store",
        range: "5 years - 45years",
    },
    {
        img: "/Projectpage/shoesstore.avif",
        name: "Shoes Collection",
        range: "2 years - 65years",
    },
    {
        img: "/Projectpage/accessoriesstore.avif",
        name: "Accessories Store",
        range: "Technology, and home",
    },
]
const EcommerceStore = () => {
    return (
        <div className='h-fit my-10 py-5 flex gap-20 justify-center items-center flex-col' id='stores'>
            <div className="flex flex-col items-center gap-5">
                <h1 className="text-8xl font-extrabold">Online Stores.</h1>
                <p className="text-xl font-sans font-extralight text-gray-100 text-center w-[60%]">We can build attractive, optimized and user friendly Shopify stores. The stores build for Businesses and Entrepreneurs.</p>
            </div>

            <div className="flex justify-center gap-7 w-fit items-center flex-wrap relative">
                {
                    stores.map((store, index) => (
                        <div className="ecommercecard" key={index}>
                            <div className="ecommerceimg overflow-hidden"> 
                            <img src={store.img} alt={store.name} className="w-full h-full" />
                            </div>
                            <div className="text">
                                <p className="h3"> {store.name} </p>
                                <p className="p">{store.range} </p>
                                <a href="https://www.vercel.com" target="_blank" className="icon-box">
                                    <p className="span">Buy Online
                                    </p>
                                </a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default EcommerceStore
