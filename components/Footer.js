import Link from "next/link";
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative bg-gradient-to-b from-[#000211] via-[#010312] to-[#020316] text-gray-300 h-fit w-full overflow-hidden">
            <div className="border-t border-gray-700"></div>

            <div className="mx-auto px-6 py-12 max-sm:px-1">
                <div className="flex justify-around items-center max-md:items-start">

                    {/* Company Info */}
                    <div className="w-fit max-sm:w-min max-sm:text-center">
                    <Link href={'/'} className="flex gap-2 justify-center items-center w-fit h-fit max-sm:flex-col">
                    <img src="/logo.png" alt="" className="w-8 h-8 max-sm:w-6 max-sm:h-6" />
                    <h2 className="text-3xl font-bold text-[aqua] max-md:text-xl max-sm:text-[1.2rem] max-md:text-lg]">Waxwing</h2></Link>
                        <p className="mt-2 text-[16px] text-gray-200 max-md:text-[14px]">
                            Providing top-notch services.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col justify-center items-center w-fit">
                        <h3 className="text-xl font-bold text-white max-sm:text-lg">Quick Links</h3>
                        <ul className="mt-2 flex gap-3 max-md:flex-col max-md:items-center">
                            <li><Link href="/" className="text-white font-semibold text-[16px] hover:text-[aqua] transition max-md:text-[14px]">Privacy</Link></li>
                            <li><Link href="/about" className="text-white font-semibold text-[16px] hover:text-[aqua] transition max-md:text-[14px]">Terms</Link></li>
                            <li><Link href="/services" className="text-white font-semibold text-[16px] hover:text-[aqua] transition max-md:text-[14px]">Shop</Link></li>
                            <li><Link href="/contact" className="text-white font-semibold text-[16px] hover:text-[aqua] transition max-md:text-[14px]">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="w-fit flex justify-center socialcontainer">
                        {/* <h3 className="text-xl font-semibold text-white opacity-0">Follow Us</h3> */}
                        <ul className="example-2">
                            <li className="icon-content">
                                <a
                                    href="https://linkedin.com/"
                                    aria-label="LinkedIn"
                                    data-social="linkedin"                              
                                >
                                    <div className="filled"></div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        className="bi bi-linkedin"
                                        viewBox="0 0 16 16"

                                    >
                                        <path
                                            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </a>
                            </li>

                            <li className="icon-content">
                                <a href="https://www.github.com/" aria-label="GitHub" data-social="github">
                                    <div className="filled"></div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        className="bi bi-github"
                                        viewBox="0 0 16 16"

                                    >
                                        <path
                                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </a>
                            </li>
                            <li className="icon-content">
                                <a
                                    href="https://www.instagram.com/"
                                    aria-label="Instagram"
                                    data-social="instagram"
                                >
                                    <div className="filled"></div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        className="bi bi-instagram"
                                        viewBox="0 0 16 16"

                                    >
                                        <path
                                            d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                </a>
                            </li>
                            <li className="icon-content">
                                <a href="https://fiverr.com/" aria-label="fiverr" data-social="fiverr">
                                    <div className="filled"></div>
                                    <svg color="white" width="16" height="16" viewBox="-2.5 -2 24 24" xmlns="http://www.w3.org/2000/svg"><path d='M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z'/><circle cx='14.375' cy='1.875' r='1.875'/></svg>
                                </a>
                            </li>
                            <li className="icon-content">
                                <a href="https://freelancer.com/" aria-label="Freelaner" data-social="freelancer">
                                    <div className="filled"></div>
                                    <svg fill="black" viewBox="-0.16 0 87.266 60.333" xmlns="http://www.w3.org/2000/svg" width="26px" height="20px"><path d="M56.897 0l6.624 9.29L97.036 0M22.075 72.333l18.13-17.725-10.912-11.71M54.152 0l-9.69 8.738 16.298.608M16.482 0l3.48 7.133 19.18 1.195M26.75 36.986l14.17-26.434L-.23 8.328M28.4 38.662L41.785 53.04 56.55 38.567l4.582-26.957-17.993-.918"/></svg>
                                </a>
                            </li>
                            <li className="icon-content">
                                <a href="https://upwork.com/" aria-label="Upwork" data-social="upwork">
                                    <div className="filled"></div>
                                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 45 45" width="50px" height="50px"><path d="M 1 9 C 0.448 9 0 9.448 0 10 L 0 24.115234 C 0 30.276234 4.6829844 35.631469 10.833984 35.980469 C 16.730984 36.314469 21.747875 32.176391 22.796875 26.650391 C 23.366875 27.420391 23.94625 28.135969 24.53125 28.792969 L 21.001953 43.771484 C 20.932953 44.069484 21.002406 44.380094 21.191406 44.621094 C 21.382406 44.859094 21.670563 45 21.976562 45 L 27.095703 45 C 27.559703 45 27.959406 44.687328 28.066406 44.236328 C 28.687406 41.615328 29.660969 37.508156 30.542969 33.785156 L 31.453125 34.3125 C 33.618125 35.4335 35.815 36 38 36 C 45.192 36 50.926 29.641 49.875 22.25 C 49.179 17.354 45.414078 13.318344 40.580078 12.277344 C 34.951078 11.064344 29.525359 13.949141 27.193359 18.744141 C 27.193359 18.744141 26.934562 19.318578 26.726562 19.892578 C 25.076563 17.046578 24.107609 14.094078 23.599609 11.955078 C 23.414609 11.175078 23.137469 9.762875 23.105469 9.671875 C 22.966469 9.268875 22.589109 9 22.162109 9 L 17 9 C 16.448 9 16 9.448 16 10 L 16 24.300781 C 16 26.649781 14.287219 28.750516 11.949219 28.978516 C 9.2672187 29.240516 7 27.13 7 24.5 L 7 10 C 7 9.448 6.552 9 6 9 L 1 9 z M 38 19 C 40.757 19 43 21.243 43 24 C 43 26.757 40.757 29 38 29 C 35.775 29 33.713531 27.658281 32.269531 26.488281 C 32.796531 24.263281 33.15025 22.773047 33.15625 22.748047 C 33.72425 20.541047 35.717 19 38 19 z"/></svg>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </div>

            {/* Copyright */}
            {/* <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                © {new Date().getFullYear()} MyBusiness. All rights reserved.
            </div> */}
        </footer>
    );
};

export default Footer;
