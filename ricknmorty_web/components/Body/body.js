import { Footer } from '../Footer/footer';
import { Header } from '../Header/header';
import Head from 'next/head';
import React from 'react';
import { Homepage } from './homepage';


export const Body = ({ children }) => {
    return (
        <main className="flex flex-col min-h-screen min-w-screen">
            <Head>
                <title>Rick&#38;Morty - Wodka42</title>
            </Head>
                <Header></Header>
            <div className="bg-blue-400 flex justify-center items-center flex-grow h-full">
                {children}
                  
            </div>
                <Footer></Footer>
        </main>
    );
}

