import { Footer } from '../Footer/footer';
import { Header } from '../Header/header';
import Head from 'next/head';
import React from 'react';
//	import Card from './card';


export const Body = ({ children }) => {
    return (
        <main className="flex flex-col min-h-screen min-w-screen">
            <Head>
                <title>Rick&#38;Morty - Wodka42</title>
            </Head>
                <Header></Header>
            <div className="bg-red-400 flex justify-between items-center flex-grow">
                {children} {/* Render other components passed as children */}
                  
            </div>
                <Footer></Footer>
        </main>
    );
}

