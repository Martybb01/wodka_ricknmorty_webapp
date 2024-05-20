import Link from 'next/link';
import React from 'react';

export const Header = () => {
    return (
        <header className="mx-auto bg-gray-800 text-white h-20 w-full flex gap-3 px-8 py-1 items-center justify-between ">
                <h1 className="text-2xl font-semibold px-6">Rick&#38;Morty web app</h1>
                        <Link href={"/"} className='items-end'>Home</Link>
        </header>
    );
}
