'use client';
//Components
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
//Icons
import { MdLocationOn } from "react-icons/md";
import { CgMenu, CgClose  } from "react-icons/cg";

export default function HeaderNavbar() {
    const [currPage, setCurrPage] = useState<string>("rewards");
    const [open, setOpen] = useState<boolean>(false);

    return(
        <header className="w-full max-w-[120rem] relative shadow-lg ">
            <nav className="w-full px-5 lg:px-10 flex items-center justify-between">
                <div className="flex gap-5 items-center justify-start items-stretch">
                    <Image 
                        src={'/images/logo.jpeg'}
                        alt="logo"
                        width={50}
                        height={50}
                        className="me-5 my-5 "
                    />
                    <Link
                        href={'/'}
                        className={`self-stretch border-b border-b-5 items-center text-[#1e3932] font-bold uppercase duration-300
                                    hover:text-[#008248]
                                    hidden md:flex
                                    ${currPage === "menu" ? "border-[#008248]" : "border-transparent"}`}
                    >
                        Menu
                    </Link>
                    <Link
                        href={'/'}
                        className={`self-stretch border-b border-b-5 items-center text-[#1e3932] font-bold uppercase duration-300
                                    hover:text-[#008248]
                                    hidden md:flex
                                    ${currPage === "rewards" ? "border-[#008248]" : "border-transparent"}`}
                    >
                        Rewards
                    </Link>
                    <Link
                        href={'/'}
                        className={`self-stretch border-b border-b-5 items-center text-[#1e3932] font-bold uppercase duration-300
                                    hover:text-[#008248]
                                    hidden md:flex
                                    ${currPage === "giftcards" ? "border-[#008248]" : "border-transparent"}`}
                    >
                        Gift Cards
                    </Link>
                </div>
                <button
                    type="button"
                    title="menu"
                    onClick={() => setOpen(!open)}
                    className="text-black/50 cursor-pointer md:hidden active:rotate-180 duration-300"
                >
                    {!open ? <CgMenu size={35} /> : <CgClose size={35} />}
                </button>
                <div className="hidden md:flex gap-5 items-center justify-end">
                    <Link
                        href={'/'}
                        className={`text-[#1e3932] font-semibold duration-300 flex gap-1 items-center text-sm
                                    hover:text-[#008248]`}
                    >
                        <MdLocationOn size={25} /> Find a store
                    </Link>
                    <Link
                        href={'/'}
                        className="border border-2 rounded-full px-3 py-1 text-sm duration-300 font-semibold
                                    hover:bg-black/15"
                    >
                        Sign in
                    </Link>
                    <Link
                        href={'/'}
                        className="border border-2 bg-black text-white rounded-full px-3 py-1 text-sm duration-300 font-semibold
                                    hover:bg-black/75"
                    >
                        Join now
                    </Link>
                </div>
            </nav>
            <div className={`group/nav fixed md:hidden duration-500 w-full -bottom-22.5 h-full right-0 h-full bg-black/75
                            ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <div className={`duration-500 flex flex-col gap-2 p-5  ms-auto h-full bg-white
                                ${open ? "w-[75%]" : "w-0"}`}>
                    <Link
                        href={'/'}
                        className={`text-[#1e3932] text-nowrap font-semibold duration-300 text-xl
                                    hover:text-[#008248]`}
                    >
                        Menu
                    </Link>
                    <Link
                        href={'/'}
                        className={`text-[#1e3932] text-nowrap font-semibold duration-300 text-xl
                                    hover:text-[#008248]`}
                    >
                        Rewards
                    </Link>
                    <Link
                        href={'/'}
                        className={`text-[#1e3932] text-nowrap font-semibold duration-300 text-xl
                                    hover:text-[#008248]`}
                    >
                        Gift Cards
                    </Link>
                    <div className="flex gap-3 border-t py-3">
                        <Link
                            href={'/'}
                            className="border border-2 text-nowrap rounded-full px-3 py-1 text-sm duration-300 font-semibold
                                        hover:bg-black/15"
                        >
                            Sign in
                        </Link>
                        <Link
                            href={'/'}
                            className="border border-2 text-nowrap bg-black text-white rounded-full px-3 py-1 text-sm duration-300 font-semibold
                                        hover:bg-black/75"
                        >
                            Join now
                        </Link>
                    </div>
                    <Link
                        href={'/'}
                        className={`text-[#1e3932] text-nowrap font-semibold duration-300 flex gap-1 items-center text-sm
                                    hover:text-[#008248]`}
                    >
                        <MdLocationOn size={25} /> Find a store
                    </Link>
                </div>
            </div>
            <div className="bg-[#1e3932] px-10 py-3">
                <h1 className="uppercase text-white font-bold">Starbucks&#174; rewards</h1>
            </div>
        </header>
    );
}