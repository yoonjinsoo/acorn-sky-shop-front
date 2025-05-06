
import React from 'react';

const features = [
  {
    id: 1,
    icon: "🌱",
    title: "국내산 원료만 사용",
    description: "국내 농가에서 정성껏 재배한 최상급 원재료만 사용합니다."
  },
  {
    id: 2,
    icon: "🔥",
    title: "전통 압착 방식",
    description: "현대식 기계가 아닌 전통 압착 방식으로 영양소를 그대로 담습니다."
  },
  {
    id: 3,
    icon: "🌿",
    title: "무첨가 원칙",
    description: "인공 첨가물 없이 자연 그대로의 맛과 향을 전달합니다."
  },
  {
    id: 4,
    icon: "📦",
    title: "신선 배송",
    description: "제조 후 최대한 빠르게 고객님께 신선한 제품을 전달합니다."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-16 bg-brand-beige/30">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">하늘찬도토리공장 <span className="text-brand-green">특별함</span></h2>
        <p className="text-center text-brand-brown max-w-2xl mx-auto mb-12">
          자연과 전통을 소중히 여기는 하늘찬도토리공장은 건강한 먹거리를 위해 다음과 같은 원칙을 지킵니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center card-hover"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-serif font-bold text-brand-dark-brown mb-3">{feature.title}</h3>
              <p className="text-brand-brown">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
