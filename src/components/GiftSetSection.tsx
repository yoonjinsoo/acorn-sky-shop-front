
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Check } from 'lucide-react';

const GiftSetSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-brand-beige/80 to-brand-beige/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block bg-brand-green/10 text-brand-green px-4 py-1 rounded-full text-sm font-medium mb-4"
          >
            특별한 선물
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="section-title"
          >
            소중한 분들을 위한 <span className="text-brand-green relative inline-block">
              선물세트
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-brand-green/30 rounded-full"></span>
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-brand-brown max-w-2xl mx-auto mt-4"
          >
            정성을 담은 하늘찬도토리공장 선물세트로 소중한 분들께 건강과 맛을 선물하세요.
            참기름, 들기름, 참깨소금의 품격 있는 구성으로 감사의 마음을 전합니다.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden relative"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-green/5 rounded-full -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-brand-light-brown/5 rounded-full translate-y-1/3 -translate-x-1/4"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-96 lg:h-auto overflow-hidden">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1 }}
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" 
                alt="명절 선물 세트"
                className="w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              
              <div className="absolute top-6 left-6">
                <span className="bg-white text-brand-green text-sm font-bold px-4 py-2 rounded-lg shadow-lg flex items-center">
                  <span className="w-2 h-2 bg-brand-green rounded-full mr-2"></span>
                  프리미엄 선물세트
                </span>
              </div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 bg-brand-green/90 text-white text-xs rounded-full">BEST</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">명절 선물</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">인기상품</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">전통방식 참기름 선물세트</h3>
                <p className="text-white/80 text-sm mt-2">소중한 분들을 위한 최고의 선물</p>
              </div>
            </div>
            
            <div className="p-8 lg:p-12 flex flex-col justify-center relative">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="text-brand-green font-medium">프리미엄 선물 세트</span>
                <h3 className="text-3xl font-serif font-bold text-brand-dark-brown mt-2 mb-4">참기름, 들기름, 참깨소금 <br/>3종 세트</h3>
                <p className="text-brand-brown mb-8 leading-relaxed">
                  국내산 참깨로 정성껏 짜낸 고소한 참기름, 담백한 들기름, 그리고 
                  고운 참깨와 천일염을 블렌딩한 참깨소금을 한 세트에 담았습니다.
                  고급스러운 패키지로 특별한 날 선물하기 좋습니다.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-3 mb-8"
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mr-3">
                    <Check size={14} />
                  </div>
                  <span className="text-brand-dark-brown">100% 국내산 최상급 원료</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mr-3">
                    <Check size={14} />
                  </div>
                  <span className="text-brand-dark-brown">전통 방식 압착 착유</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mr-3">
                    <Check size={14} />
                  </div>
                  <span className="text-brand-dark-brown">고급 선물 포장</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green mr-3">
                    <Check size={14} />
                  </div>
                  <span className="text-brand-dark-brown">안심 배송 서비스</span>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0 border-t border-gray-100 pt-6"
              >
                <div>
                  <div className="text-brand-brown text-sm line-through mb-1">50,000원</div>
                  <div className="flex items-end">
                    <span className="text-2xl font-bold text-brand-green">45,000</span>
                    <span className="text-lg text-brand-green font-medium ml-1">원</span>
                    <span className="ml-2 bg-brand-green/10 text-brand-green text-xs px-2 py-1 rounded">10% 할인</span>
                  </div>
                </div>
                
                <Link to="/gift" className="btn-primary flex items-center justify-center px-8 group">
                  선물세트 보기
                  <ChevronRight size={18} className="ml-1 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftSetSection;
