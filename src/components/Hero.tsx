
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative w-full min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-b from-brand-beige to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-dark-brown">
              자연을 담아 <br/>
              <span className="text-brand-green">정직하게 만듭니다</span>
            </h1>
            <p className="text-lg md:text-xl text-brand-brown max-w-lg">
              경기도 고양시 일산에서 정성껏 만든 참기름, 들기름, 참깨소금으로 
              건강한 식탁을 선물해드립니다.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Link to="/products" className="btn-primary">
                제품 둘러보기
              </Link>
              <Link to="/gift" className="btn-secondary">
                선물세트 보기
              </Link>
            </div>
          </div>
          
          <div className="relative h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" 
              alt="참기름 선물세트" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <p className="font-medium text-lg">인기상품</p>
              <h3 className="text-2xl font-serif font-bold">명절 선물세트</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
