import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "프리미엄 참기름",
    price: 18000,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "100% 국내산 참깨로 만든 고소한 참기름",
    isNew: true,
    tag: "베스트셀러"
  },
  {
    id: 2,
    name: "고급 들기름",
    price: 20000,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "산뜻한 향이 일품인 프리미엄 들기름",
    isNew: false,
    tag: "추천"
  },
  {
    id: 3,
    name: "참깨소금 선물세트",
    price: 15000,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "참깨와 천일염을 블렌딩한 건강한 조미료",
    isNew: false,
    tag: "인기"
  },
  {
    id: 4,
    name: "프리미엄 3종 선물세트",
    price: 45000,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "참기름, 들기름, 참깨소금을 한번에",
    isNew: true,
    tag: "명절 선물"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const BestProductsSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-beige/50 rounded-bl-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-brand-beige/30 rounded-tr-[80px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-brand-green font-medium mb-3"
          >
            믿고 먹을 수 있는 건강한 먹거리
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="section-title inline-block relative"
          >
            베스트 상품
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-brand-green/30 rounded-full"></span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-brand-brown max-w-2xl mx-auto mt-4"
          >
            가장 많은 분들이 선택하신 하늘찬도토리공장의 인기 제품입니다.
            정성과 전통을 담아 건강한 맛을 전해드립니다.
          </motion.p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {products.map((product) => (
            <motion.div variants={item} key={product.id} className="group">
              <Link 
                to={`/products/${product.id}`}
                className="block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="relative h-56">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 to-transparent opacity-60"></div>
                  
                  {product.tag && (
                    <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-brand-dark-brown text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                      {product.tag}
                    </span>
                  )}
                  
                  {product.isNew && (
                    <span className="absolute top-4 left-4 bg-brand-green text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                      NEW
                    </span>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif font-bold text-xl text-brand-dark-brown group-hover:text-brand-green transition-colors duration-300">{product.name}</h3>
                  <p className="text-brand-brown text-sm mt-2 mb-3 line-clamp-2">{product.description}</p>
                  
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-brand-dark-brown font-bold text-lg">{product.price.toLocaleString()}원</span>
                    
                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-beige text-brand-dark-brown group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                      <ShoppingBag size={18} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            to="/products" 
            className="btn-primary inline-flex items-center px-8 py-3"
          >
            모든 제품 보기
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BestProductsSection;
