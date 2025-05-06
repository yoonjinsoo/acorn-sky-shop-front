
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative w-full min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-brand-beige via-brand-beige/70 to-white">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyLjMuMjIgMy4zNS42NkwzNiAzNlYxOHpNMTggMzZsMTAuNjctMTAuNjdBOS45OCA5Ljk4IDAgMDAxOCAyNHYxMnoiIGZpbGw9IiMyNDI2MkIiLz48L2c+PC9zdmc+')] bg-repeat" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block bg-brand-green/10 text-brand-green px-4 py-1 rounded-full text-sm font-medium border border-brand-green/30"
            >
              20년 전통의 건강한 먹거리
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-brand-dark-brown leading-tight"
            >
              자연을 담아 <br/>
              <span className="text-brand-green relative">
                정직하게 만듭니다
                <span className="absolute -bottom-3 left-0 right-0 h-1 bg-brand-green/30 rounded-full"></span>
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-brand-brown max-w-lg leading-relaxed"
            >
              경기도 고양시 일산에서 정성껏 만든 참기름, 들기름, 참깨소금으로 
              <span className="font-medium text-brand-dark-brown"> 건강한 식탁</span>을 선물해드립니다.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4"
            >
              <Link to="/products" className="btn-primary group flex items-center justify-center">
                <span>제품 둘러보기</span>
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/gift" className="btn-secondary">
                선물세트 보기
              </Link>
            </motion.div>
          </div>
          
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative z-10 h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" 
                alt="참기름 선물세트" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-8 left-8 right-8 text-white"
              >
                <p className="font-medium text-lg">명절 대표 선물</p>
                <h3 className="text-3xl font-serif font-bold">참기름 선물세트</h3>
                <div className="mt-4 flex items-center">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm">
                    Best Seller
                  </span>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-brand-green/20 blur-2xl z-0"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full bg-brand-light-brown/30 blur-2xl z-0"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-brand-brown mb-2">아래로 스크롤</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-9 border-2 border-brand-brown/40 rounded-full flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-brand-brown rounded-full"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
