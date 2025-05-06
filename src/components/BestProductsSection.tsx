
import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: "프리미엄 참기름",
    price: 18000,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "100% 국내산 참깨로 만든 고소한 참기름",
    isNew: true
  },
  {
    id: 2,
    name: "고급 들기름",
    price: 20000,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "산뜻한 향이 일품인 프리미엄 들기름",
    isNew: false
  },
  {
    id: 3,
    name: "참깨소금 선물세트",
    price: 15000,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "참깨와 천일염을 블렌딩한 건강한 조미료",
    isNew: false
  },
  {
    id: 4,
    name: "프리미엄 3종 선물세트",
    price: 45000,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "참기름, 들기름, 참깨소금을 한번에",
    isNew: true
  }
];

const BestProductsSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">베스트 상품</h2>
        <p className="text-center text-brand-brown max-w-2xl mx-auto mb-12">
          가장 사랑받는 하늘찬도토리공장의 베스트셀러 제품입니다.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link 
              to={`/products/${product.id}`} 
              key={product.id} 
              className="group"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md card-hover">
                <div className="relative h-48">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {product.isNew && (
                    <span className="absolute top-2 right-2 bg-brand-green text-white text-sm font-medium px-2 py-1 rounded">
                      NEW
                    </span>
                  )}
                </div>
                
                <div className="p-4">
                  <h3 className="font-serif font-bold text-lg text-brand-dark-brown">{product.name}</h3>
                  <p className="text-brand-brown text-sm mt-1 mb-2">{product.description}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-brand-green font-bold">{product.price.toLocaleString()}원</span>
                    <button className="text-sm bg-brand-beige text-brand-dark-brown px-3 py-1 rounded-md hover:bg-brand-brown hover:text-white transition-colors">
                      장바구니
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link to="/products" className="btn-primary">
            모든 제품 보기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BestProductsSection;
