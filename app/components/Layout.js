"use client";
import { useEffect } from "react";
import useApiStore from "../lib/store";
import Footer from "../parts/Footer";
import Header from "../parts/Header";
import useApiStoreMenu from "../lib/storeMenus";


const Layout = ({ children }) => {
  const { isLoading, error, fetchData } = useApiStore();
  const { isMenuLoading, errorMenu, fetchDataMenu } = useApiStoreMenu();
	useEffect(() => {
	  // Fetch data when component mounts
	  fetchData('https://api.local/wp-json/acf/v3/options/options');
	  fetchDataMenu('http://api.local/wp-json/wp/v2/menu-items');
	}, [fetchData, fetchDataMenu]);
  
	if (isLoading || isMenuLoading) {
	  return <div>Loading...</div>;
	}
  
	if (error || errorMenu) {
	  return <div>Error: {error} {errorMenu}</div>;
	}
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;