"use client";
import { useEffect } from "react";
import useApiStore from "../lib/store";
import Footer from "../parts/Footer";
import Header from "../parts/Header";


const Layout = ({ children }) => {
  const { data, isLoading, error, fetchData } = useApiStore();

	useEffect(() => {
	  // Fetch data when component mounts
	  fetchData('https://api.local/wp-json/acf/v3/options/options');
	}, [fetchData]);
  
	if (isLoading) {
	  return <div>Loading...</div>;
	}
  
	if (error) {
	  return <div>Error: {error}</div>;
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