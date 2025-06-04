import FadeInSection from "@/components/FadeinSection";

const ecommerceProjects = [
    {
        name: "Beauty & Skincare",
        desc: "Cosmetics, skincare products, & wellness items.",
        link: "https://www.vercel.com",
        img: "/Projectpage/beauty&skincare.png",
    },
    {
        name: "Fashion & Apparel",
        desc: "Trendy fashion layouts with lookbooks & styling.",
        img: "/Projectpage/fashion&apparel.jpg",
        link: "https://fashion-demo.com",
    },
    {
        name: "Digital Products",
        desc: "Sell software, eBooks, and digital assets easily.",
        img: "/Projectpage/digitalproduct.png",
        link: "https://digital-products-demo.com",
    },
    {
        name: "Handmade Goods",
        desc: "Cozy and artistic vibes for handmade stores.",
        img: "/Projectpage/handmade.avif",
        link: "https://handmade-shop-demo.com",
    },
];
const Store = () => {
    return (
        <div className='h-fit w-full py-20 flex flex-col gap-12 items-center justify-center bg-gradient-to-b from-[#020316] via-[#010312] to-[#000211]' id='stores'>
            {/* <div className=""> */}
            <FadeInSection direction="right" classes="flex flex-col items-center gap-5">
                <h1 className="text-gray-50 text-[2rem] sm:text-[2.4rem] md:text-[2.9rem] font-bold max-md:text-center ">Ecommerce Stores</h1>
                <p className="text-center text-sm sm:text-base w-[60%] text-white">We can build ecommerce stores (including Shopify & Amazon) and different stores to sell your products.</p>
            </FadeInSection>
            {/* </div> */}

            {/* <div className=""> */}
            <FadeInSection direction="left" classes="flex flex-wrap justify-center gap-5 px-4 py-8">

                {ecommerceProjects.map((store, index) => (
                    <a
                        key={index}
                        href={store.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-b from-[#000211] via-[#010312] to-[#020316] border border-[#003844] rounded-xl p-3 w-[200px] hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center hover:bg-[#003844]"
                    >
                        <div className="w-full h-28 mb-3 overflow-hidden rounded-lg">
                            <img
                                src={store.img}
                                alt={store.name}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <h3 className="text-base font-semibold text-white">{store.name}</h3>
                        <p className="text-sm text-gray-300 mt-1">{store.desc}</p>
                    </a>
                ))}
                    </FadeInSection>
            {/* </div> */}
        </div>
    )
}

export default Store
