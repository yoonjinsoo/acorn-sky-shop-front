
import React, { useState } from 'react';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Cart = () => {
  // Sample cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: '전통 참기름',
      price: 18000,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300'
    },
    {
      id: 2,
      name: '국산 들기름',
      price: 15000,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300'
    },
    {
      id: 3,
      name: '참깨소금',
      price: 12000,
      quantity: 3,
      image: 'https://images.unsplash.com/photo-1621185250890-4688dfd3f707?auto=format&fit=crop&w=300&q=80'
    }
  ]);

  // Update item quantity
  const updateQuantity = (id, change) => {
    setCartItems(
      cartItems.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingFee = subtotal >= 50000 ? 0 : 3000;
  const total = subtotal + shippingFee;

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
            <h1 className="text-3xl font-serif font-bold text-brand-dark-brown mb-8 flex items-center">
              <ShoppingCart className="mr-3 text-brand-green" size={28} />
              장바구니
            </h1>

            {cartItems.length > 0 ? (
              <div className="flex flex-col md:flex-row gap-8">
                {/* Cart Items */}
                <div className="w-full md:w-2/3">
                  <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6 border-b border-gray-100">
                      <h2 className="text-lg font-bold text-brand-dark-brown">장바구니 상품 ({cartItems.length})</h2>
                    </div>
                    
                    <ul className="divide-y divide-gray-100">
                      {cartItems.map(item => (
                        <li key={item.id} className="p-6">
                          <div className="flex flex-col sm:flex-row items-center">
                            <div className="w-24 h-24 flex-shrink-0 mb-4 sm:mb-0">
                              <img 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-cover rounded-md"
                              />
                            </div>
                            <div className="flex-grow sm:ml-6 text-center sm:text-left">
                              <h3 className="text-lg font-medium text-brand-dark-brown">{item.name}</h3>
                              <p className="text-brand-brown mt-1">{item.price.toLocaleString()}원</p>
                            </div>
                            <div className="flex items-center mt-4 sm:mt-0">
                              <button 
                                onClick={() => updateQuantity(item.id, -1)}
                                className="p-1 rounded-md bg-gray-100 hover:bg-gray-200"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="mx-3 w-8 text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, 1)}
                                className="p-1 rounded-md bg-gray-100 hover:bg-gray-200"
                              >
                                <Plus size={16} />
                              </button>
                              <button 
                                onClick={() => removeItem(item.id)}
                                className="ml-6 p-2 text-red-500 hover:text-red-700"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </div>
                          <div className="mt-4 sm:text-right">
                            <p className="font-medium text-brand-dark-brown">
                              {(item.price * item.quantity).toLocaleString()}원
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Order Summary */}
                <div className="w-full md:w-1/3">
                  <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                    <h2 className="text-lg font-bold text-brand-dark-brown mb-6">주문 요약</h2>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-brand-brown">상품 금액</span>
                        <span className="text-brand-dark-brown font-medium">{subtotal.toLocaleString()}원</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-brand-brown">배송비</span>
                        <span className="text-brand-dark-brown font-medium">
                          {shippingFee > 0 
                            ? `${shippingFee.toLocaleString()}원`
                            : '무료'
                          }
                        </span>
                      </div>
                      
                      {shippingFee > 0 && (
                        <div className="bg-brand-green/10 text-sm text-brand-green rounded-md p-3 text-center">
                          {(50000 - subtotal).toLocaleString()}원 더 구매 시 무료배송
                        </div>
                      )}
                      
                      <div className="border-t border-gray-100 pt-4 mt-4">
                        <div className="flex justify-between">
                          <span className="text-lg font-bold text-brand-dark-brown">총 결제금액</span>
                          <span className="text-lg font-bold text-brand-green">{total.toLocaleString()}원</span>
                        </div>
                      </div>
                      
                      <Button className="w-full bg-brand-green hover:bg-brand-green/90 mt-4">
                        결제하기
                      </Button>
                      
                      <Link to="/products" className="block text-center text-sm text-brand-brown hover:text-brand-green mt-4">
                        쇼핑 계속하기
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                  <ShoppingCart size={32} className="text-gray-400" />
                </div>
                <h2 className="text-xl font-bold text-brand-dark-brown mb-2">장바구니가 비어있습니다</h2>
                <p className="text-brand-brown mb-6">원하는 상품을 장바구니에 담아보세요.</p>
                <Link to="/products">
                  <Button className="bg-brand-green hover:bg-brand-green/90">
                    쇼핑 시작하기
                  </Button>
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
