
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const About = () => {
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
                <span className="text-brand-green">자연</span>과 <span className="text-brand-green">정성</span>이 만나는 곳
              </h1>
              <p className="text-lg text-brand-brown mb-8">
                하늘찬방앗간은 경기도 고양시 일산에서 20여 년간 전통 방식으로 
                참기름, 들기름, 참깨소금을 만들어 왔습니다.
              </p>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-green/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        </motion.section>
        
        {/* Our Story Section */}
        <motion.section 
          className="py-20 bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-serif font-bold mb-6 text-brand-dark-brown">
                  우리의 <span className="text-brand-green">이야기</span>
                </h2>
                <div className="space-y-4 text-brand-brown">
                  <p>
                    하늘찬방앗간은 2003년에 경기도 고양시에서 작은 공방으로 시작했습니다. 
                    대표 손연지는 어릴 적 할머니께서 만들어주시던 도토리묵과 참기름의 맛을 
                    잊지 못하고, 그 정성과 전통을 이어가기로 결심했습니다.
                  </p>
                  <p>
                    국내산 최상급 원재료만을 사용하며, 첨가물 없이 순수한 방식으로 제품을 생산합니다.
                    도토리, 올방개, 메밀부침가루, 감자떡가루와 같은 자연 식품부터 
                    정성스레 만든 도토리묵, 올방개묵, 청포묵까지, 자연의 맛을 정직하게 담아냅니다.
                  </p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800" 
                    alt="하늘찬방앗간 스토리"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Our Values */}
        <motion.section 
          className="py-20 bg-brand-beige/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center text-brand-dark-brown">
              우리의 <span className="text-brand-green">가치</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <div className="w-16 h-16 flex items-center justify-center bg-brand-green/10 rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-dark-brown">정직한 원재료</h3>
                <p className="text-brand-brown">
                  100% 국내산 최상급 원재료만을 사용합니다. 첨가물이나 방부제 없이 정직하게 만듭니다.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <div className="w-16 h-16 flex items-center justify-center bg-brand-green/10 rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-dark-brown">전통 제조 방식</h3>
                <p className="text-brand-brown">
                  현대적인 기술과 전통적인 방식이 조화를 이루어 최상의 맛과 품질을 보장합니다.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <div className="w-16 h-16 flex items-center justify-center bg-brand-green/10 rounded-full mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-dark-brown">정성을 담다</h3>
                <p className="text-brand-brown">
                  모든 제품에 정성과 마음을 담아 고객에게 건강하고 맛있는 식품을 제공합니다.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
        
        {/* Contact Info */}
        <motion.section 
          className="py-20 bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-brand-beige/20 p-8 md:p-12 rounded-2xl">
              <h2 className="text-3xl font-serif font-bold mb-8 text-center text-brand-dark-brown">
                찾아오시는 <span className="text-brand-green">길</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="bg-white p-6 rounded-xl shadow-md">
                    <h3 className="font-bold text-xl mb-4 text-brand-dark-brown">연락처 정보</h3>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-brand-green/10 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-brand-dark-brown font-semibold">주소</p>
                          <p className="text-brand-brown">경기도 고양시 덕양구 통일로1290번길 22 (내유동)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-brand-green/10 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-brand-dark-brown font-semibold">전화번호</p>
                          <p className="text-brand-brown">010-9988-4057</p>
                          <p className="text-brand-brown">010-9317-2896</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-brand-green/10 rounded-full mr-4">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-brand-dark-brown font-semibold">이메일</p>
                          <p className="text-brand-brown">info@haneulchan.co.kr</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
                    <p className="text-gray-500">지도 영역 (Kakao Maps 등 연동 가능)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
