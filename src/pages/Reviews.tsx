
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

// Mock data for reviews
const reviews = [
  {
    id: 1,
    name: "김지현",
    rating: 5,
    date: "2025-04-20",
    content: "참기름이 정말 고소하고 맛있어요. 부모님이 너무 좋아하셔서 정기배송으로 신청했어요.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    product: "프리미엄 참기름"
  },
  {
    id: 2,
    name: "이민수",
    rating: 5,
    date: "2025-04-18",
    content: "선물세트로 구매했는데 포장이 너무 예쁘고 내용물도 만족스러웠습니다. 받으신 분들도 다들 좋아하셨어요.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    product: "프리미엄 3종 선물세트"
  },
  {
    id: 3,
    name: "박서영",
    rating: 4,
    date: "2025-04-15",
    content: "들기름 향이 정말 좋아요. 나물 무칠 때 사용하면 정말 맛있어집니다!",
    image: "",
    product: "고급 들기름"
  },
  {
    id: 4,
    name: "최현우",
    rating: 5,
    date: "2025-04-10",
    content: "도토리묵이 쫄깃하고 식감이 일품이에요. 묵무침 해먹었는데 가족들이 너무 맛있다고 하네요. 다음에는 다른 제품도 시도해볼 예정입니다.",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    product: "도토리묵"
  },
  {
    id: 5,
    name: "정미경",
    rating: 5,
    date: "2025-04-05",
    content: "정기배송으로 신청해서 매달 받아보고 있어요. 변함없는 품질과 맛에 만족합니다. 특히 참깨소금은 어디서도 맛볼 수 없는 고소함이 있어요.",
    image: "",
    product: "참깨소금 선물세트"
  },
  {
    id: 6,
    name: "강동원",
    rating: 4,
    date: "2025-03-28",
    content: "명절 선물로 구매했는데, 포장이 고급스럽고 구성도 알차서 만족했습니다. 배송도 빨라서 좋았어요.",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    product: "명절 선물 세트"
  }
];

// Mock data for Instagram feeds
const instagramPosts = [
  {
    id: 1,
    username: "@foodlover_kim",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    likes: 230,
    caption: "하늘찬도토리공장의 참기름으로 만든 비빔밥! 고소함이 두배! 🍚 #하늘찬도토리공장 #참기름 #비빔밥"
  },
  {
    id: 2,
    username: "@cooking_mom",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    likes: 175,
    caption: "새로 발견한 보물! 하늘찬도토리공장 들기름으로 무친 나물은 진짜 별미예요 😋 #하늘찬 #들기름 #건강한식사"
  },
  {
    id: 3,
    username: "@chef_park",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    likes: 312,
    caption: "전통방식으로 만든 참기름의 풍미가 살아있네요. 오늘 요리에 활용했더니 한층 업그레이드! #하늘찬도토리공장 #셰프추천 #고소함"
  },
];

const Reviews = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Page Header */}
        <motion.section 
          className="py-12 bg-brand-beige/20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-brand-dark-brown">
                고객 <span className="text-brand-green">후기</span>
              </h1>
              <p className="text-brand-brown">
                하늘찬도토리공장의 제품을 경험하신 소중한 고객님들의 후기입니다.
              </p>
            </div>
          </div>
        </motion.section>
        
        {/* Customer Reviews */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold mb-8 text-center text-brand-dark-brown">
              구매 <span className="text-brand-green">후기</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <motion.div 
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl overflow-hidden shadow-md"
                >
                  {review.image && (
                    <div className="h-52 overflow-hidden">
                      <img 
                        src={review.image} 
                        alt={`${review.name}의 후기 이미지`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            size={18} 
                            fill={i < review.rating ? "#4B6D5A" : "none"} 
                            className={i < review.rating ? "text-brand-green" : "text-gray-300"} 
                          />
                        ))}
                      </div>
                      <span className="text-sm text-brand-brown">
                        {new Date(review.date).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-brand-dark-brown mb-1">{review.name}</h3>
                    <div className="inline-block bg-brand-beige/40 text-brand-brown text-xs px-2 py-1 rounded-full mb-3">
                      {review.product}
                    </div>
                    <p className="text-brand-brown">{review.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="bg-white border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white transition-colors duration-300 px-8 py-3 rounded-lg font-medium">
                후기 더보기
              </button>
            </div>
          </div>
        </section>
        
        {/* Instagram Feed */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold mb-2 text-center text-brand-dark-brown">
              SNS <span className="text-brand-green">후기</span>
            </h2>
            <p className="text-center text-brand-brown mb-8">
              Instagram에서 #하늘찬도토리공장 태그로 찾아보세요
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {instagramPosts.map((post) => (
                <motion.div 
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl overflow-hidden shadow-md"
                >
                  <div className="p-3 border-b">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-brand-green/20 rounded-full mr-3"></div>
                      <span className="font-medium text-brand-dark-brown">{post.username}</span>
                    </div>
                  </div>
                  
                  <div className="aspect-square">
                    <img 
                      src={post.image} 
                      alt={`Instagram post by ${post.username}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-4">
                    <div className="flex items-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-brand-dark-brown">{post.likes} likes</span>
                    </div>
                    <p className="text-sm text-brand-brown">
                      <span className="font-medium">{post.username}</span> {post.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10 text-center">
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-brand-green hover:underline"
              >
                Instagram에서 더보기
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </section>
        
        {/* Write a Review */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-serif font-bold mb-8 text-center text-brand-dark-brown">
              후기 <span className="text-brand-green">작성하기</span>
            </h2>
            
            <div className="max-w-2xl mx-auto">
              <motion.div 
                className="bg-gray-50 rounded-2xl shadow-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <label className="block text-brand-dark-brown font-medium mb-2">제품 선택</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent">
                    <option value="">구매하신 제품을 선택해주세요</option>
                    <option value="1">프리미엄 참기름</option>
                    <option value="2">고급 들기름</option>
                    <option value="3">참깨소금 선물세트</option>
                    <option value="4">프리미엄 3종 선물세트</option>
                    <option value="5">도토리묵</option>
                    <option value="6">올방개묵</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label className="block text-brand-dark-brown font-medium mb-2">평점</label>
                  <div className="flex space-x-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button key={rating} className="text-gray-300 hover:text-brand-green">
                        <Star size={24} />
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-brand-dark-brown font-medium mb-2">후기 내용</label>
                  <textarea
                    className="w-full p-4 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
                    rows={5}
                    placeholder="제품에 대한 솔직한 후기를 작성해주세요."
                  ></textarea>
                </div>
                
                <div className="mb-8">
                  <label className="block text-brand-dark-brown font-medium mb-2">사진 첨부 (선택)</label>
                  <div className="flex items-center justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        <p className="mt-1 text-sm text-gray-500">이미지를 끌어다 놓거나 클릭하세요</p>
                        <p className="text-xs text-gray-500">(최대 5MB)</p>
                      </div>
                      <input type="file" className="hidden" />
                    </label>
                  </div>
                </div>
                
                <button className="w-full py-4 bg-brand-green hover:bg-brand-green/90 text-white rounded-xl font-bold transition-colors">
                  후기 작성하기
                </button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Reviews;
