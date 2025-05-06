
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Menu, ShoppingCart, Search, User, UserPlus, LayoutDashboard } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-serif font-bold text-brand-green">
            하늘찬도토리공장
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-brand-dark-brown hover:text-brand-green transition-colors">브랜드 소개</Link>
            <Link to="/products" className="text-brand-dark-brown hover:text-brand-green transition-colors">제품</Link>
            <Link to="/subscription" className="text-brand-dark-brown hover:text-brand-green transition-colors">정기배송</Link>
            <Link to="/gift" className="text-brand-dark-brown hover:text-brand-green transition-colors">선물하기</Link>
            <Link to="/reviews" className="text-brand-dark-brown hover:text-brand-green transition-colors">후기</Link>
          </nav>
          
          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button aria-label="검색" className="text-brand-dark-brown hover:text-brand-green transition-colors">
              <Search size={20} />
            </button>
            <Link to="/cart" className="text-brand-dark-brown hover:text-brand-green transition-colors">
              <ShoppingCart size={20} />
            </Link>
            <Link to="/mypage" className="text-brand-dark-brown hover:text-brand-green transition-colors">
              <User size={20} />
            </Link>
            <Link to="/signup" className="text-brand-dark-brown hover:text-brand-green transition-colors">
              <UserPlus size={20} />
            </Link>
            <Link to="/admin" className="text-brand-dark-brown hover:text-brand-green transition-colors">
              <LayoutDashboard size={20} />
            </Link>
            
            {/* Mobile menu button */}
            <button onClick={toggleMenu} className="md:hidden text-brand-dark-brown">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-60" : "max-h-0"
        )}>
          <nav className="flex flex-col space-y-3 pb-4">
            <Link to="/about" className="text-brand-dark-brown hover:text-brand-green transition-colors px-2 py-1">브랜드 소개</Link>
            <Link to="/products" className="text-brand-dark-brown hover:text-brand-green transition-colors px-2 py-1">제품</Link>
            <Link to="/subscription" className="text-brand-dark-brown hover:text-brand-green transition-colors px-2 py-1">정기배송</Link>
            <Link to="/gift" className="text-brand-dark-brown hover:text-brand-green transition-colors px-2 py-1">선물하기</Link>
            <Link to="/reviews" className="text-brand-dark-brown hover:text-brand-green transition-colors px-2 py-1">후기</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
