import { Footer } from '../Footer/footer';
import { Header } from '../Header/header';
import React from 'react';
import Head from 'next/head';
//	import Card from './card';


export const Card = ({ children }) => {
    return (
        <main className="min-h-screen min-w-screen flex flex-col">
			<Head>
                <title>Rick&#38;Morty - Wodka42</title>
            </Head>
                <Header></Header>
            <div className="bg-blue-400 flex justify-between items-center flex-grow">
                {children} {/* Render other components passed as children */}
                {/* <Card title="Example Card" description="This is an example card." /> */}
            </div>
                <Footer></Footer>
        </main>
    );
}
