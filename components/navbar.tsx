/* eslint-disable @next/next/no-img-element */
import { useEffect } from "react";
import { AiOutlineMenu } from 'react-icons/ai';


function Navbar() {

    const toggleMenu = () => {
        const panel = document.getElementsByClassName('nav-menu-small')[0];
        if (panel.classList.contains('hidden')) {
            panel.classList.replace('hidden', "block");
        }
        else {
            panel.classList.add('hidden');
        }
    }

    const roll = async (id: string, isForSmallScreen?: boolean) => {
        document.getElementById(id)?.scrollIntoView(true);
        if (isForSmallScreen) {
            toggleMenu();
        }
    }

    useEffect(() => {
        window.onscroll = function () { scrollFunction() };
        function scrollFunction() {
            const navbar = document.getElementsByClassName("navbar")[0];
            const navName = document.getElementsByClassName("nav-name")[0];
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                navbar.classList.replace('h-20', 'h-14')
                navName.classList.replace('md:text-2xl', 'md:text-base')
            } else {
                navbar.classList.replace('h-14', 'h-20')
                navName.classList.replace('md:text-base', 'md:text-2xl')
            }
        }
    }, [])

    return (
        <div className="navbar z-50 h-20 flex items-center justify-between whitespace-nowrap fixed top-0 w-full bg-white shadow shadow- transition-all duration-700 text-center ">
            <p className="nav-name md:text-2xl text-lg font-Bungee pt-1 float-left transition-all duration-700 uppercase text-gray-700 -translate-x-5 cursor-pointer" onClick={() => {
                document.getElementById('home')?.scrollIntoView(true);
            }}>raziq <span>&#8729;</span> ali</p>
            <div className="hidden md:block h-full">
                <ul className="nav-list inline-flex gap-6 translate-x-8 h-full items-center justify-center">
                    <li className="items-center inline-flex cursor-pointer capitalize tracking-wide text-sm font-medium h-full hover:text-gray-500 transition-all duration-200 " onClick={() => roll('home')}>home</li>
                    <li className="items-center inline-flex cursor-pointer capitalize tracking-wide text-sm font-medium h-full hover:text-gray-500 transition-all duration-200 " onClick={() => roll('about')}>about</li>
                    <li className="items-center inline-flex cursor-pointer capitalize tracking-wide text-sm font-medium h-full hover:text-gray-500 transition-all duration-200 " onClick={() => roll('portfolio')}>portfolio</li>
                    <li className="items-center inline-flex cursor-pointer capitalize tracking-wide text-sm font-medium h-full hover:text-gray-500 transition-all duration-200 " onClick={() => roll('timeline')}>timeline</li>
                    <li className="items-center inline-flex cursor-pointer capitalize tracking-wide text-sm font-medium h-full hover:text-gray-500 transition-all duration-200 " onClick={() => roll('contact')}>contact</li>
                </ul>
            </div>
            <div className="md:hidden relative">
                <div className="h-5 w-5 mt-1 cursor-pointer" onClick={() => {
                    toggleMenu();
                }}>
                    <AiOutlineMenu className="h-full w-full" />
                </div>
                <div className="nav-menu-small absolute right-0 top-8 h-fit w-fit border-t-4 border-orange-500 bg-white pb-1 hidden">
                    <ul className="text-left">
                        <li className="py-1 pl-6 pr-10 capitalize tracking-wide text-sm font-medium hover:text-gray-500 hover:bg-slate-100 transition-all duration-200 cursor-pointer" onClick={() => roll('home', true)}>home</li>
                        <li className="py-1 pl-6 pr-10 capitalize tracking-wide text-sm font-medium hover:text-gray-500 hover:bg-slate-100 transition-all duration-200 cursor-pointer" onClick={() => roll('about', true)}>about</li>
                        <li className="py-1 pl-6 pr-10 capitalize tracking-wide text-sm font-medium hover:text-gray-500 hover:bg-slate-100 transition-all duration-200 cursor-pointer" onClick={() => roll('portfolio', true)}>portfolio</li>
                        <li className="py-1 pl-6 pr-10 capitalize tracking-wide text-sm font-medium hover:text-gray-500 hover:bg-slate-100 transition-all duration-200 cursor-pointer" onClick={() => roll('timeline', true)}>timeline</li>
                        <li className="py-1 pl-6 pr-10 capitalize tracking-wide text-sm font-medium hover:text-gray-500 hover:bg-slate-100 transition-all duration-200 cursor-pointer" onClick={() => roll('contact', true)}>contact</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Navbar;