
import FeaturePage from "@/components/Feature";
import HeroPage from "@/components/Hero";
import CompanyLogoPage from "@/components/Company";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import CatagaryPage from "@/components/Catagary";
import ProductPage from "@/components/Product";



export default function Home() {
  return (
   <div>
    <HeroPage/>
    <CompanyLogoPage/>
    <CatagaryPage/>
    <ProductPage/>
    <FeaturePage/>
    <Footer/>
    <Copyright/>
    </div>
  );
};
