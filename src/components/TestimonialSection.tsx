
import React from 'react';

const testimonials = [
  {
    id: 1,
    content: "하늘찬도토리공장 참기름은 정말 고소해요. 맛국수에 한 방울만 떨어뜨려도 향이 확 퍼져서 감동입니다.",
    author: "김미영",
    location: "서울시"
  },
  {
    id: 2,
    content: "명절 선물로 3종 세트를 드렸더니 부모님께서 너무 좋아하셨어요. 건강한 선물을 드린 것 같아 뿌듯합니다.",
    author: "이준호",
    location: "부산시"
  },
  {
    id: 3,
    content: "들기름의 고소함이 다른 제품과 차원이 달라요. 나물 무칠 때 넣으면 확실히 맛이 살아납니다.",
    author: "박서연",
    location: "고양시"
  }
];

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">고객 <span className="text-brand-green">리뷰</span></h2>
        <p className="text-center text-brand-brown max-w-2xl mx-auto mb-12">
          하늘찬도토리공장 제품을 사용해보신 고객님들의 생생한 후기입니다.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-brand-beige p-6 rounded-lg shadow-md card-hover"
            >
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star} 
                    className="w-5 h-5 text-yellow-500" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-brand-brown italic mb-6">"{testimonial.content}"</p>
              
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-brand-dark-brown">{testimonial.author}</p>
                  <p className="text-sm text-brand-brown">{testimonial.location}</p>
                </div>
                <div className="text-xs bg-white text-brand-brown px-2 py-1 rounded-full">
                  인증 구매자
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a href="/reviews" className="btn-secondary">
            모든 후기 보기
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
