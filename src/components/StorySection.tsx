
import React from 'react';
import { Link } from 'react-router-dom';

const StorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="section-title">자연의 <span className="text-brand-green">정성</span>을 담은<br />하늘찬도토리공장</h2>
            <p className="text-brand-brown mb-6">
              하늘찬도토리공장은 경기도 고양시 일산에서 20여 년간 전통 방식으로 
              참기름, 들기름, 참깨소금을 만들어 왔습니다. 국내산 최상급 원재료만을 
              사용하며, 첨가물 없이 순수한 방식으로 제품을 생산합니다.
            </p>
            <p className="text-brand-brown mb-6">
              도토리, 올방개, 메밀부침가루, 감자떡가루와 같은 자연 식품부터 
              정성스레 만든 도토리묵, 올방개묵, 청포묵까지, 자연의 맛을 
              정직하게 담아냅니다.
            </p>
            <Link to="/about" className="btn-secondary inline-block mt-2">
              브랜드 스토리 자세히 보기
            </Link>
          </div>
          
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" 
                alt="제조 과정" 
                className="rounded-lg h-40 w-full object-cover shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" 
                alt="원재료" 
                className="rounded-lg h-56 w-full object-cover shadow-md"
              />
            </div>
            <div className="space-y-4 mt-6">
              <img 
                src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" 
                alt="완성품" 
                className="rounded-lg h-56 w-full object-cover shadow-md"
              />
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" 
                alt="제품 포장" 
                className="rounded-lg h-40 w-full object-cover shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
