import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag, Gift as GiftIcon } from 'lucide-react';

const giftSets = [
  {
    id: 1,
    name: "전통 3종 세트",
    price: 40000,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "참기름, 들기름, 참깨소금으로 구성된 선물 세트",
    isNew: true
  },
  {
    id: 2,
    name: "프리미엄 2종 세트",
    price: 30000,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "고급 참기름과 들기름으로 구성된 선물 세트",
    isNew: false
  },
  {
    id: 3,
    name: "명절 선물 세트",
    price: 50000,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "참기름, 들기름, 참깨소금에 도토리묵을 함께 구성한 특별 선물 세트",
    isNew: true
  },
  {
    id: 4,
    name: "감사 선물 세트",
    price: 25000,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "감사의 마음을 전할 수 있는 참기름과 참깨소금 선물 세트",
    isNew: false
  }
];

const occasions = ["부모님", "명절", "집들이", "감사", "생일", "기념일"];
const packagingOptions = [
  {
    id: "basic",
    name: "기본 포장",
    price: 0,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300",
    description: "브랜드 전용 포장지와 리본으로 포장해드립니다."
  },
  {
    id: "premium",
    name: "프리미엄 포장",
    price: 5000,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300",
    description: "고급 한지와 전통 매듭으로 정성껏 포장해드립니다."
  },
  {
    id: "luxury",
    name: "명절 특별 포장",
    price: 8000,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300",
    description: "특별한 날을 위한 고급 선물 상자와 전통 포장으로 준비해드립니다."
  }
];

const Gift = () => {
  const [selectedGift, setSelectedGift] = React.useState(null);
  const [selectedPackaging, setSelectedPackaging] = React.useState(null);
  const [selectedOccasion, setSelectedOccasion] = React.useState(null);
  const [message, setMessage] = React.useState("");
  
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <motion.section 
          className="py-20 bg-brand-beige/20 relative overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-brand-dark-brown">
                마음을 담아 <span className="text-brand-green">선물</span>하세요
              </h1>
              <p className="text-lg text-brand-brown mb-8">
                소중한 분들에게 감사와 사랑의 마음을 전하는<br />
                하늘찬도토리공장의 정성이 담긴 선물 세트
              </p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-green/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </motion.section>
        
        {/* Occasions */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold mb-8 text-center text-brand-dark-brown">
              어떤 <span className="text-brand-green">특별한 날</span>을 위한 선물인가요?
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4">
              {occasions.map((occasion) => (
                <button
                  key={occasion}
                  className={`px-6 py-3 rounded-full transition-all ${
                    selectedOccasion === occasion 
                      ? "bg-brand-green text-white" 
                      : "bg-gray-100 text-brand-brown hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedOccasion(occasion)}
                >
                  {occasion}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Gift Options */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold mb-8 text-center text-brand-dark-brown">
              선물 <span className="text-brand-green">세트</span> 선택
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {giftSets.map((gift) => (
                <motion.div 
                  key={gift.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className={`border-2 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                      selectedGift === gift.id 
                        ? "border-brand-green shadow-lg" 
                        : "border-transparent shadow-md hover:shadow-lg"
                    }`}
                    onClick={() => setSelectedGift(gift.id)}
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-2/5">
                        <div className="relative h-48 md:h-full">
                          <img 
                            src={gift.image} 
                            alt={gift.name} 
                            className="w-full h-full object-cover"
                          />
                          {gift.isNew && (
                            <span className="absolute top-4 left-4 bg-brand-green text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                              NEW
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="p-6 md:w-3/5">
                        <h3 className="text-xl font-bold text-brand-dark-brown">{gift.name}</h3>
                        <p className="text-brand-brown mt-2 mb-4">{gift.description}</p>
                        
                        <div className="flex items-center justify-between mt-4">
                          <p className="text-lg font-bold text-brand-dark-brown">
                            {gift.price.toLocaleString()}원
                          </p>
                          
                          <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center">
                            {selectedGift === gift.id && (
                              <div className="w-3 h-3 rounded-full bg-brand-green"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Packaging Options */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold mb-8 text-center text-brand-dark-brown">
              포장 <span className="text-brand-green">방법</span> 선택
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packagingOptions.map((option) => (
                <motion.div 
                  key={option.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className={`border-2 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                      selectedPackaging === option.id 
                        ? "border-brand-green shadow-lg" 
                        : "border-transparent shadow-md hover:shadow-lg"
                    }`}
                    onClick={() => setSelectedPackaging(option.id)}
                  >
                    <div className="h-48">
                      <img 
                        src={option.image} 
                        alt={option.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-brand-dark-brown">{option.name}</h3>
                      <p className="text-sm text-brand-brown mt-1 mb-3">{option.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-brand-dark-brown">
                          {option.price > 0 ? `+${option.price.toLocaleString()}원` : "무료"}
                        </p>
                        
                        <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center">
                          {selectedPackaging === option.id && (
                            <div className="w-2.5 h-2.5 rounded-full bg-brand-green"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Message & Recipient Info */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold mb-8 text-center text-brand-dark-brown">
              메시지 <span className="text-brand-green">작성</span>
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <motion.div 
                className="bg-white rounded-2xl shadow-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <label className="block text-brand-dark-brown font-medium mb-2">선물 메시지</label>
                <textarea
                  className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
                  rows={5}
                  placeholder="받는 분께 전할 메시지를 작성해주세요."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                
                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-6 text-brand-dark-brown">받는 분 정보</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-brand-dark-brown font-medium mb-2">이름</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent" 
                        placeholder="받는 분의 이름"
                      />
                    </div>
                    <div>
                      <label className="block text-brand-dark-brown font-medium mb-2">연락처</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent" 
                        placeholder="연락 가능한 번호" 
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-brand-dark-brown font-medium mb-2">주소</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent mb-4" 
                        placeholder="받는 분의 주소" 
                      />
                    </div>
                  </div>
                  
                  <button
                    className={`w-full py-4 mt-8 rounded-xl font-bold text-white transition-all ${
                      selectedGift && selectedPackaging
                        ? "bg-brand-green hover:bg-brand-green/90"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                    disabled={!selectedGift || !selectedPackaging}
                  >
                    <GiftIcon className="inline-block mr-2" size={20} />
                    선물하기
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gift;
