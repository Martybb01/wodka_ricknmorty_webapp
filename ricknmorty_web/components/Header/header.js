import Link from 'next/link';
import React from 'react';

export const Header = () => {
    return (
        <header className="mx-auto bg-gray-800 text-white h-20 w-full flex gap-3 px-5 py-1 items-center justify-center ">
                        <Link href={"/"}>Home</Link>
                <h1 className="text-2xl font-semibold px-6">Rick&#38;Morty web app</h1>
                        <Link href={"/characters"}>Characters</Link>
                   
            
        </header>
    );
}
