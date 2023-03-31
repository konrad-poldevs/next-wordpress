import Head from "next/head";
import { FC } from "react";
import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  title?: string;
  description?: string;
  children?: JSX.Element | JSX.Element[];
};

const Layout: FC<LayoutProps> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
