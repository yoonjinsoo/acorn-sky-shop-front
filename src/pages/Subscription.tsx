
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const subscriptionOptions = [
  {
    id: 1,
    name: "참기름 정기배송",
    price: 15000,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "매월 신선한 참기름을 정기적으로 받아보세요",
    discountRate: 10
  },
  {
    id: 2,
    name: "들기름 정기배송",
    price: 17000,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "건강한 들기름을 정기적으로 집에서 받아보세요",
    discountRate: 10
  },
  {
    id: 3,
    name: "참기름 + 들기름 세트",
    price: 30000,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "참기름과 들기름을 함께 정기배송 받아보세요",
    discountRate: 15
  },
  {
    id: 4,
    name: "프리미엄 3종 세트",
    price: 40000,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "참기름, 들기름, 참깨소금 3종을 한 번에 받아보세요",
    discountRate: 20
  }
];

const deliveryIntervals = [
  { value: "2weeks", label: "2주마다" },
  { value: "month", label: "1개월마다" },
  { value: "2months", label: "2개월마다" },
  { value: "3months", label: "3개월마다" },
];

const Subscription = () => {
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [deliveryInterval, setDeliveryInterval] = React.useState("month");

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
                잊지 않고 <span className="text-brand-green">정기 배송</span>으로
              </h1>
              <p className="text-lg text-brand-brown mb-8">
                매번 주문할 필요 없이 원하는 주기에 맞춰<br />
                신선한 제품을 정기적으로 받아보세요.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  <Check size={18} className="text-brand-green mr-2" />
                  <span className="text-brand-dark-brown">최대 20% 할인</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  <Check size={18} className="text-brand-green mr-2" />
                  <span className="text-brand-dark-brown">언제든지 취소 가능</span>
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  <Check size={18} className="text-brand-green mr-2" />
                  <span className="text-brand-dark-brown">무료 배송</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-green/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </motion.section>
        
        {/* How It Works */}
        <motion.section 
          className="py-20 bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center text-brand-dark-brown">
              이렇게 <span className="text-brand-green">진행</span>됩니다
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative">
                <div className="bg-brand-beige/20 rounded-2xl p-8">
                  <div className="w-12 h-12 flex items-center justify-center bg-brand-green text-white rounded-full text-xl font-bold mb-6">1</div>
                  <h3 className="text-xl font-bold mb-4 text-brand-dark-brown">상품 선택</h3>
                  <p className="text-brand-brown">
                    원하는 상품과 배송 주기를 선택하세요. 언제든지 변경 가능합니다.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2">
                  <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.7071 8.70711C40.0976 8.31658 40.0976 7.68342 39.7071 7.29289L33.3431 0.928932C32.9526 0.538408 32.3195 0.538408 31.9289 0.928932C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM0 9H39V7H0V9Z" fill="#4B6D5A" fillOpacity="0.3"/>
                  </svg>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-brand-beige/20 rounded-2xl p-8">
                  <div className="w-12 h-12 flex items-center justify-center bg-brand-green text-white rounded-full text-xl font-bold mb-6">2</div>
                  <h3 className="text-xl font-bold mb-4 text-brand-dark-brown">결제 및 배송</h3>
                  <p className="text-brand-brown">
                    첫 결제 후 선택하신 주기에 맞춰 자동으로 결제되며 배송됩니다.
                  </p>
                </div>
                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2">
                  <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.7071 8.70711C40.0976 8.31658 40.0976 7.68342 39.7071 7.29289L33.3431 0.928932C32.9526 0.538408 32.3195 0.538408 31.9289 0.928932C31.5384 1.31946 31.5384 1.95262 31.9289 2.34315L37.5858 8L31.9289 13.6569C31.5384 14.0474 31.5384 14.6805 31.9289 15.0711C32.3195 15.4616 32.9526 15.4616 33.3431 15.0711L39.7071 8.70711ZM0 9H39V7H0V9Z" fill="#4B6D5A" fillOpacity="0.3"/>
                  </svg>
                </div>
              </div>
              
              <div>
                <div className="bg-brand-beige/20 rounded-2xl p-8">
                  <div className="w-12 h-12 flex items-center justify-center bg-brand-green text-white rounded-full text-xl font-bold mb-6">3</div>
                  <h3 className="text-xl font-bold mb-4 text-brand-dark-brown">맞춤 관리</h3>
                  <p className="text-brand-brown">
                    마이페이지에서 배송 주기, 수량 등을 자유롭게 조정할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Subscription Options */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center text-brand-dark-brown">
              정기배송 <span className="text-brand-green">상품</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {subscriptionOptions.map((option) => (
                <motion.div 
                  key={option.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div 
                    className={`border-2 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ${
                      selectedOption === option.id 
                        ? "border-brand-green shadow-lg" 
                        : "border-transparent shadow-md hover:shadow-lg"
                    }`}
                    onClick={() => setSelectedOption(option.id)}
                  >
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/3">
                        <img 
                          src={option.image} 
                          alt={option.name} 
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="p-6 md:w-2/3">
                        <div className="mb-2">
                          <span className="inline-block bg-brand-green/10 text-brand-green px-2 py-1 rounded-full text-xs font-medium">
                            {option.discountRate}% 할인
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-brand-dark-brown">{option.name}</h3>
                        <p className="text-brand-brown mt-2 mb-4">{option.description}</p>
                        
                        <div className="flex items-center justify-between mt-4">
                          <div>
                            <p className="text-lg font-bold text-brand-dark-brown">
                              {Math.round(option.price * (1 - option.discountRate / 100)).toLocaleString()}원
                              <span className="ml-2 text-sm line-through text-gray-400">
                                {option.price.toLocaleString()}원
                              </span>
                            </p>
                            <p className="text-sm text-brand-brown">정기구독 가격</p>
                          </div>
                          
                          <div className="w-6 h-6 rounded-full border-2 flex items-center justify-center">
                            {selectedOption === option.id && (
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
            
            {/* Delivery Options */}
            <motion.div 
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-6 text-brand-dark-brown">배송 주기 선택</h3>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {deliveryIntervals.map((interval) => (
                    <button
                      key={interval.value}
                      className={`px-4 py-3 rounded-lg border text-center transition-colors ${
                        deliveryInterval === interval.value
                          ? "bg-brand-green text-white border-brand-green"
                          : "bg-white text-brand-brown border-gray-200 hover:border-brand-green"
                      }`}
                      onClick={() => setDeliveryInterval(interval.value)}
                    >
                      {interval.label}
                    </button>
                  ))}
                </div>
                
                <button
                  className={`w-full py-4 rounded-xl font-bold text-white transition-all ${
                    selectedOption
                      ? "bg-brand-green hover:bg-brand-green/90"
                      : "bg-gray-300 cursor-not-allowed"
                  }`}
                  disabled={!selectedOption}
                >
                  정기배송 신청하기
                </button>
                
                <p className="text-xs text-gray-500 mt-4 text-center">
                  ※ 정기배송은 언제든지 마이페이지에서 수정 및 해지 가능합니다.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center text-brand-dark-brown">
              자주 묻는 <span className="text-brand-green">질문</span>
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold mb-3 text-brand-dark-brown">정기배송은 언제든지 취소할 수 있나요?</h3>
                  <p className="text-brand-brown">네, 마이페이지에서 언제든지 정기배송을 취소하거나 일시 중지할 수 있습니다. 다음 결제 3일 전까지 취소하시면 추가 결제가 진행되지 않습니다.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold mb-3 text-brand-dark-brown">배송 주기를 변경할 수 있나요?</h3>
                  <p className="text-brand-brown">네, 마이페이지 > 정기배송 관리에서 배송 주기를 언제든지 변경할 수 있습니다. 다음 결제 3일 전까지 변경하시면 새로운 주기로 적용됩니다.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold mb-3 text-brand-dark-brown">정기배송 상품을 변경할 수 있나요?</h3>
                  <p className="text-brand-brown">네, 마이페이지에서 정기배송 상품을 다른 제품으로 변경하실 수 있습니다. 다음 결제 3일 전까지 변경하시면 새로운 상품으로 배송됩니다.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold mb-3 text-brand-dark-brown">결제는 언제 이루어지나요?</h3>
                  <p className="text-brand-brown">첫 결제는 정기배송 신청 시 즉시 이루어지며, 이후 결제는 선택하신 배송 주기에 맞춰 자동으로 진행됩니다. 결제 예정일 하루 전에 안내 메시지를 보내드립니다.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Subscription;
