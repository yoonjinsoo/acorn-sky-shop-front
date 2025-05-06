
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const StorySection = () => {
  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-beige/30 rounded-full -translate-y-1/2 translate-x-1/2 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-beige/20 rounded-full translate-y-1/2 -translate-x-1/2 -z-10"></div>
      <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-brand-green/30 rounded-full -z-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-brand-light-brown/20 rounded-full -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block bg-brand-green/10 text-brand-green px-4 py-1 rounded-full text-sm font-medium mb-6">
              브랜드 이야기
            </span>
            
            <h2 className="section-title">
              자연의 <span className="text-brand-green relative inline-block">
                정성
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-brand-green/30 rounded-full"></span>
              </span>을 담은<br />하늘찬도토리공장
            </h2>
            
            <div className="mt-8 space-y-6 text-brand-brown">
              <p className="leading-relaxed">
                하늘찬도토리공장은 경기도 고양시 일산에서 <span className="font-medium text-brand-dark-brown">20여 년간 전통 방식</span>으로 
                참기름, 들기름, 참깨소금을 만들어 왔습니다. 국내산 최상급 원재료만을 
                사용하며, 첨가물 없이 순수한 방식으로 제품을 생산합니다.
              </p>
              
              <p className="leading-relaxed">
                도토리, 올방개, 메밀부침가루, 감자떡가루와 같은 자연 식품부터 
                정성스레 만든 도토리묵, 올방개묵, 청포묵까지, <span className="font-medium text-brand-dark-brown">자연의 맛을 
                정직하게 담아냅니다.</span>
              </p>
              
              <div className="flex justify-start pt-4">
                <Link 
                  to="/about" 
                  className="group flex items-center font-medium text-brand-dark-brown hover:text-brand-green transition-colors"
                >
                  <span className="border-b border-brand-dark-brown group-hover:border-brand-green transition-colors">
                    브랜드 스토리 자세히 보기
                  </span>
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 grid grid-cols-2 gap-4 relative"
          >
            <div className="space-y-4">
              <motion.div 
                whileHover="hover"
                className="relative rounded-2xl overflow-hidden shadow-lg h-40 transform -rotate-2"
              >
                <motion.img 
                  variants={imageVariants}
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" 
                  alt="제조 과정" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white text-sm font-medium">전통 방식 제조</div>
              </motion.div>
              
              <motion.div 
                whileHover="hover"
                className="relative rounded-2xl overflow-hidden shadow-lg h-56 transform rotate-1"
              >
                <motion.img 
                  variants={imageVariants}
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" 
                  alt="원재료" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white text-sm font-medium">최상급 원재료</div>
              </motion.div>
            </div>
            
            <div className="space-y-4 mt-6">
              <motion.div 
                whileHover="hover"
                className="relative rounded-2xl overflow-hidden shadow-lg h-56 transform rotate-2"
              >
                <motion.img 
                  variants={imageVariants}
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" 
                  alt="완성품" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white text-sm font-medium">정성이 담긴 제품</div>
              </motion.div>
              
              <motion.div 
                whileHover="hover"
                className="relative rounded-2xl overflow-hidden shadow-lg h-40 transform -rotate-1"
              >
                <motion.img 
                  variants={imageVariants}
                  src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400" 
                  alt="제품 포장" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-3 left-3 text-white text-sm font-medium">고급 선물 포장</div>
              </motion.div>
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-4 border-brand-beige/40 rounded-full -z-10"></div>
            <div className="absolute -top-5 -left-5 w-24 h-24 border-2 border-brand-green/20 rounded-full -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
