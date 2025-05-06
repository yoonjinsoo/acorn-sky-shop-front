
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-brand-beige/30 py-16">
        <div className="text-center px-4">
          <h1 className="text-6xl font-serif font-bold text-brand-green mb-4">404</h1>
          <p className="text-xl md:text-2xl text-brand-dark-brown mb-6">페이지를 찾을 수 없습니다</p>
          <p className="text-brand-brown mb-8 max-w-md mx-auto">
            요청하신 페이지가 존재하지 않거나, 이동되었거나, 삭제되었을 수 있습니다.
          </p>
          <Link to="/" className="btn-primary">
            메인페이지로 돌아가기
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
