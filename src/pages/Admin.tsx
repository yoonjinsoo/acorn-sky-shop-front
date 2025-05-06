
import React, { useState } from 'react';
import { LayoutDashboard, Users, Package, ShoppingCart, Settings, ChevronRight, LogOut, BarChart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { motion } from 'framer-motion';

const Admin = () => {
  // Mock data for demo
  const stats = [
    { title: '총 매출', value: '12,450,000원', change: '+12%', icon: BarChart },
    { title: '총 주문', value: '132건', change: '+8%', icon: ShoppingCart },
    { title: '신규 회원', value: '28명', change: '+5%', icon: Users },
    { title: '재고 상품', value: '15종', change: '-2%', icon: Package }
  ];
  
  const recentOrders = [
    { id: 'ORD-20240506-001', customer: '김민수', date: '2024-05-06', total: 46000, status: '배송준비중' },
    { id: 'ORD-20240505-002', customer: '이지연', date: '2024-05-05', total: 32000, status: '결제완료' },
    { id: 'ORD-20240505-003', customer: '박준호', date: '2024-05-05', total: 78000, status: '결제완료' },
    { id: 'ORD-20240504-004', customer: '최서영', date: '2024-05-04', total: 25000, status: '배송중' },
    { id: 'ORD-20240503-005', customer: '정도윤', date: '2024-05-03', total: 41000, status: '배송완료' }
  ];
  
  const products = [
    { id: 1, name: '전통 참기름', stock: 24, price: 18000, sales: 56 },
    { id: 2, name: '국산 들기름', stock: 18, price: 15000, sales: 42 },
    { id: 3, name: '참깨소금', stock: 32, price: 12000, sales: 78 },
    { id: 4, name: '도토리묵', stock: 8, price: 10000, sales: 35 },
    { id: 5, name: '명절 선물 세트', stock: 15, price: 50000, sales: 12 }
  ];
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-6 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sidebar */}
              <div className="w-full md:w-64 flex-shrink-0">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4 bg-brand-green text-white">
                    <h2 className="text-lg font-bold flex items-center">
                      <LayoutDashboard className="mr-2" size={20} />
                      관리자 대시보드
                    </h2>
                  </div>
                  
                  <nav className="p-2">
                    <ul className="space-y-1">
                      {[
                        { icon: LayoutDashboard, label: '대시보드', active: true },
                        { icon: ShoppingCart, label: '주문 관리', active: false },
                        { icon: Package, label: '상품 관리', active: false },
                        { icon: Users, label: '회원 관리', active: false },
                        { icon: Settings, label: '환경 설정', active: false }
                      ].map((item, index) => (
                        <li key={index}>
                          <button
                            className={`w-full flex items-center justify-between p-3 rounded-md text-sm ${
                              item.active 
                                ? 'bg-brand-green/10 text-brand-green font-medium' 
                                : 'text-brand-dark-brown hover:bg-gray-50'
                            }`}
                          >
                            <div className="flex items-center">
                              <item.icon size={16} className="mr-2" />
                              {item.label}
                            </div>
                            {item.active && <ChevronRight size={16} />}
                          </button>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <button className="w-full flex items-center p-3 rounded-md text-sm text-red-600 hover:bg-red-50">
                        <LogOut size={16} className="mr-2" />
                        로그아웃
                      </button>
                    </div>
                  </nav>
                </div>
              </div>
              
              {/* Main Content */}
              <div className="flex-grow">
                {/* Stats Overview */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  {stats.map((stat, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                            <p className="text-2xl font-bold">{stat.value}</p>
                          </div>
                          <div className="h-12 w-12 rounded-full bg-brand-green/10 flex items-center justify-center">
                            <stat.icon className="h-6 w-6 text-brand-green" />
                          </div>
                        </div>
                        <div className={`text-xs font-medium mt-2 ${
                          stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {stat.change} 지난 달 대비
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                
                <Tabs defaultValue="orders" className="space-y-6">
                  <TabsList className="bg-white shadow-sm rounded-lg">
                    <TabsTrigger value="orders" className="flex-1">최근 주문</TabsTrigger>
                    <TabsTrigger value="products" className="flex-1">인기 상품</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="orders">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">최근 주문 내역</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-gray-100">
                                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">주문번호</th>
                                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">고객명</th>
                                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">날짜</th>
                                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">금액</th>
                                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상태</th>
                                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                              {recentOrders.map((order) => (
                                <tr key={order.id} className="hover:bg-gray-50">
                                  <td className="py-3 px-4 text-sm text-brand-dark-brown">{order.id}</td>
                                  <td className="py-3 px-4 text-sm font-medium text-brand-dark-brown">{order.customer}</td>
                                  <td className="py-3 px-4 text-sm text-brand-brown">{order.date}</td>
                                  <td className="py-3 px-4 text-sm text-brand-dark-brown">{order.total.toLocaleString()}원</td>
                                  <td className="py-3 px-4">
                                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                                      order.status === '배송완료' ? 'bg-green-100 text-green-800' :
                                      order.status === '배송중' ? 'bg-blue-100 text-blue-800' :
                                      order.status === '배송준비중' ? 'bg-yellow-100 text-yellow-800' :
                                      'bg-gray-100 text-gray-800'
                                    }`}>
                                      {order.status}
                                    </span>
                                  </td>
                                  <td className="py-3 px-4 text-right">
                                    <button className="text-sm text-brand-green hover:underline">상세보기</button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  
                  <TabsContent value="products">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">인기 상품 현황</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-gray-100">
                                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">상품명</th>
                                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">재고</th>
                                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">가격</th>
                                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">판매량</th>
                                <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                              {products.map((product) => (
                                <tr key={product.id} className="hover:bg-gray-50">
                                  <td className="py-3 px-4 text-sm font-medium text-brand-dark-brown">{product.name}</td>
                                  <td className="py-3 px-4 text-sm text-brand-brown">
                                    {product.stock <= 10 ? (
                                      <span className="text-red-600 font-medium">{product.stock}개</span>
                                    ) : (
                                      <span>{product.stock}개</span>
                                    )}
                                  </td>
                                  <td className="py-3 px-4 text-sm text-brand-dark-brown">{product.price.toLocaleString()}원</td>
                                  <td className="py-3 px-4 text-sm text-brand-dark-brown">{product.sales}개</td>
                                  <td className="py-3 px-4 text-right">
                                    <button className="text-sm text-brand-green hover:underline">수정</button>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
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

export default Admin;
