
import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    id: 1,
    icon: "🌱",
    title: "국내산 원료만 사용",
    description: "국내 농가에서 정성껏 재배한 최상급 원재료만 사용합니다.",
    delay: 0
  },
  {
    id: 2,
    icon: "🔥",
    title: "전통 압착 방식",
    description: "현대식 기계가 아닌 전통 압착 방식으로 영양소를 그대로 담습니다.",
    delay: 0.1
  },
  {
    id: 3,
    icon: "🌿",
    title: "무첨가 원칙",
    description: "인공 첨가물 없이 자연 그대로의 맛과 향을 전달합니다.",
    delay: 0.2
  },
  {
    id: 4,
    icon: "📦",
    title: "신선 배송",
    description: "제조 후 최대한 빠르게 고객님께 신선한 제품을 전달합니다.",
    delay: 0.3
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
  show: { opacity: 1, y: 0 }
};

const FeatureSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full bg-brand-beige/30 -z-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-gradient-to-br from-brand-green/5 to-brand-light-brown/5 rounded-bl-[200px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block bg-brand-green/10 text-brand-green px-4 py-1 rounded-full text-sm font-medium mb-4"
          >
            우리의 약속
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="section-title"
          >
            하늘찬도토리공장 <span className="text-brand-green">특별함</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-brand-brown max-w-2xl mx-auto mt-4"
          >
            자연과 전통을 소중히 여기는 하늘찬도토리공장은 건강한 먹거리를 위해 다음과 같은 원칙을 지킵니다.
          </motion.p>
        </div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={item}
              transition={{ duration: 0.5, delay: feature.delay }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-2xl shadow-lg flex flex-col items-center text-center relative overflow-hidden group"
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-green/5 via-transparent to-brand-light-brown/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="w-16 h-16 rounded-full bg-brand-beige flex items-center justify-center text-4xl mb-5 relative">
                {feature.icon}
                <div className="absolute inset-0 rounded-full border border-brand-brown/10 scale-110 group-hover:scale-125 opacity-50 transition-all duration-500"></div>
              </div>
              
              <h3 className="text-xl font-serif font-bold text-brand-dark-brown mb-3">{feature.title}</h3>
              <p className="text-brand-brown">{feature.description}</p>
              
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-10 h-10 overflow-hidden">
                <div className="absolute transform rotate-45 bg-brand-green/10 text-brand-green w-14 h-14 -top-7 -right-7"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
