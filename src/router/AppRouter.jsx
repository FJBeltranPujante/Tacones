
import { Route, Navigate, Routes } from "react-router-dom";


import { Navbar } from '../ui/components/Navbar';
import { Dealbar } from '../ui/components/Dealbar';
import { ShopPage } from '../sections/pages/ShopPage';
import { AboutPage } from '../sections/pages/AboutPage';
import { ContactPage } from '../sections/pages/ContactPage';


export const AppRouter = () => {
  return (
    <>

    <Navbar />
    <Dealbar />


     <Routes>
        <Route path="shop" element={<ShopPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />


        <Route path="/" element={<Navigate to="/shop" />} />
      </Routes>
    </>
  )
}