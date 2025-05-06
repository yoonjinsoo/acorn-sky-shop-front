
import React, { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This would normally connect to a newsletter service
    if (email) {
      toast({
        title: "구독 신청 완료!",
        description: "하늘찬도토리공장의 소식을 이메일로 받아보실 수 있습니다.",
      });
      setEmail('');
    }
  };
  
  return (
    <section className="py-16 bg-brand-green text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">하늘찬도토리공장 소식 받기</h2>
          <p className="mb-8">
            신제품 출시, 이벤트, 맛있는 레시피까지 정기적으로 받아보세요.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="이메일 주소를 입력하세요"
              className="flex-grow px-4 py-3 rounded-md border-0 text-brand-dark-brown focus:ring-2 focus:ring-brand-light-brown"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit" 
              className="bg-white text-brand-green px-6 py-3 rounded-md font-medium hover:bg-brand-light-brown hover:text-white transition-colors"
            >
              구독하기
            </button>
          </form>
          
          <p className="text-sm mt-4 text-white/80">
            구독은 언제든지 취소하실 수 있습니다. 개인정보는 뉴스레터 발송 목적으로만 사용됩니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;
