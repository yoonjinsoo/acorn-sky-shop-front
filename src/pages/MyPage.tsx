
import React from 'react';
import { User, Package, Settings, ShoppingBag, LogOut } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';

const MyPage = () => {
  const user = {
    name: '김도토리',
    email: 'acorn@example.com',
    phone: '010-1234-5678',
    address: '서울시 강남구 역삼동 123-45',
    signupDate: '2023-05-15',
    point: 2500
  };
  
  const orders = [
    { id: 'ORD-20240501-001', date: '2024-05-01', status: '배송완료', items: 3, total: 45000 },
    { id: 'ORD-20240415-002', date: '2024-04-15', status: '배송중', items: 1, total: 25000 },
    { id: 'ORD-20240328-003', date: '2024-03-28', status: '주문확인', items: 2, total: 36000 }
  ];
  
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row gap-8">
              {/* User Profile Card */}
              <div className="w-full md:w-1/3">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex flex-col items-center">
                    <div className="h-24 w-24 bg-brand-green/10 rounded-full flex items-center justify-center">
                      <User size={48} className="text-brand-green" />
                    </div>
                    <h2 className="mt-4 text-xl font-bold text-brand-dark-brown">{user.name}</h2>
                    <p className="text-sm text-brand-brown">{user.email}</p>
                    <div className="mt-2 px-3 py-1 bg-brand-green/10 rounded-full">
                      <span className="text-sm text-brand-green font-medium">적립금: {user.point.toLocaleString()}원</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center text-sm">
                      <Package size={16} className="mr-2 text-brand-green" />
                      <span className="text-brand-brown">주문/배송 내역</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <ShoppingBag size={16} className="mr-2 text-brand-green" />
                      <span className="text-brand-brown">장바구니</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Settings size={16} className="mr-2 text-brand-green" />
                      <span className="text-brand-brown">정보 수정</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <LogOut size={16} className="mr-2 text-brand-green" />
                      <span className="text-brand-brown">로그아웃</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="w-full md:w-2/3">
                <Tabs defaultValue="orders">
                  <TabsList className="bg-white shadow-sm rounded-lg">
                    <TabsTrigger value="orders" className="flex-1">주문 내역</TabsTrigger>
                    <TabsTrigger value="info" className="flex-1">개인 정보</TabsTrigger>
                    <TabsTrigger value="reviews" className="flex-1">나의 후기</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="orders" className="mt-6">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="p-5 border-b border-gray-100">
                        <h3 className="text-lg font-bold text-brand-dark-brown">최근 주문 내역</h3>
                      </div>
                      
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">주문번호</th>
                              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">주문일자</th>
                              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
                              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상품 수</th>
                              <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">결제금액</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-100">
                            {orders.map(order => (
                              <tr key={order.id} className="hover:bg-gray-50">
                                <td className="py-3 px-4 text-sm text-brand-dark-brown">{order.id}</td>
                                <td className="py-3 px-4 text-sm text-brand-brown">{order.date}</td>
                                <td className="py-3 px-4">
                                  <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                                    order.status === '배송완료' ? 'bg-green-100 text-green-800' : 
                                    order.status === '배송중' ? 'bg-blue-100 text-blue-800' : 
                                    'bg-yellow-100 text-yellow-800'
                                  }`}>
                                    {order.status}
                                  </span>
                                </td>
                                <td className="py-3 px-4 text-sm text-brand-brown">{order.items}개</td>
                                <td className="py-3 px-4 text-sm font-medium text-brand-dark-brown">{order.total.toLocaleString()}원</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="info" className="mt-6">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-lg font-bold text-brand-dark-brown mb-4">회원 정보</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-brand-brown mb-1">이름</label>
                          <div className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-brand-dark-brown">{user.name}</div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-brand-brown mb-1">이메일</label>
                          <div className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-brand-dark-brown">{user.email}</div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-brand-brown mb-1">연락처</label>
                          <div className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-brand-dark-brown">{user.phone}</div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-brand-brown mb-1">주소</label>
                          <div className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-brand-dark-brown">{user.address}</div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-brand-brown mb-1">가입일</label>
                          <div className="px-4 py-2 border border-gray-200 rounded-lg text-sm text-brand-dark-brown">{user.signupDate}</div>
                        </div>
                        <button className="mt-4 w-full py-2 bg-brand-green text-white rounded-lg hover:bg-brand-green/90">
                          정보 수정하기
                        </button>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="reviews" className="mt-6">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-lg font-bold text-brand-dark-brown mb-4">내가 작성한 후기</h3>
                      <div className="text-center py-8">
                        <p className="text-brand-brown">작성한 후기가 없습니다.</p>
                        <button className="mt-4 px-6 py-2 bg-brand-green text-white rounded-lg hover:bg-brand-green/90">
                          후기 작성하기
                        </button>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MyPage;
