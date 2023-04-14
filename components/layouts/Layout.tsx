import React from "react";
import Head from "next/head";
import { Navbar } from "../ui";

interface propsWithChildren {
  children: JSX.Element
	title: string
}

export const Layout = ({ children, title }: propsWithChildren) => {
  return (
		<>
			<Head>
				<title>{ title }</title>
				<meta name='author' content='Brodely Tovar' />
				<meta name='description' content={`informacion sobre pokemon XD`} />
				<meta name='keywords' content={`pokemon, XD`} />
			</Head>

			<Navbar />

			<main>
				<h2>Layout</h2>
				{children}
			</main>
		</>
	);
};
