
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const GiftSetSection = () => {
  return (
    <section className="py-16 bg-brand-beige">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="section-title">특별한 날을 위한 <span className="text-brand-green">선물세트</span></h2>
          <p className="text-brand-brown max-w-2xl mx-auto">
            정성을 담은 하늘찬도토리공장 선물세트로 소중한 분들께 건강과 맛을 선물하세요.
            참기름, 들기름, 참깨소금의 품격 있는 구성으로 감사의 마음을 전합니다.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-80 lg:h-auto">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" 
                alt="명절 선물 세트"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-brand-green text-white text-sm font-medium px-3 py-1 rounded-full">
                인기 상품
              </div>
            </div>
            
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-brand-green font-medium">프리미엄 선물 세트</span>
              <h3 className="text-3xl font-serif font-bold text-brand-dark-brown mt-2 mb-4">참기름, 들기름, 참깨소금 3종 세트</h3>
              <p className="text-brand-brown mb-6">
                국내산 참깨로 정성껏 짜낸 고소한 참기름, 담백한 들기름, 그리고 
                고운 참깨와 천일염을 블렌딩한 참깨소금을 한 세트에 담았습니다.
                고급스러운 패키지로 특별한 날 선물하기 좋습니다.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-brand-green mr-3"></div>
                  <span>100% 국내산 최상급 원료</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-brand-green mr-3"></div>
                  <span>전통 방식 압착 착유</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-brand-green mr-3"></div>
                  <span>고급 선물 포장</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div>
                  <span className="text-lg font-medium text-brand-dark-brown">가격</span>
                  <div className="text-2xl font-bold text-brand-green mt-1">45,000원</div>
                </div>
                <Link to="/gift" className="btn-primary flex items-center">
                  선물세트 보기
                  <ChevronRight size={18} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSetSection;
