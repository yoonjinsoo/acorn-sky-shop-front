
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-beige text-brand-dark-brown pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">하늘찬도토리공장</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>경기도 고양시 덕양구 통일로1290번길 22 (내유동)</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>010-9988-4057 / 010-9317-2896</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:contact@skyacorn.com" className="hover:underline">
                  contact@skyacorn.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:underline">브랜드 소개</Link>
              </li>
              <li>
                <Link to="/products" className="hover:underline">제품</Link>
              </li>
              <li>
                <Link to="/subscription" className="hover:underline">정기배송</Link>
              </li>
              <li>
                <Link to="/gift" className="hover:underline">선물하기</Link>
              </li>
              <li>
                <Link to="/reviews" className="hover:underline">후기</Link>
              </li>
            </ul>
          </div>
          
          {/* Customer Support */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">고객센터</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="hover:underline">자주 묻는 질문</Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:underline">배송 안내</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">1:1 문의</Link>
              </li>
              <li className="flex items-center space-x-4 mt-4">
                <a href="https://instagram.com" className="hover:text-brand-green transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="https://facebook.com" className="hover:text-brand-green transition-colors">
                  <Facebook size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer */}
        <div className="border-t border-brand-light-brown/30 pt-6 mt-6">
          <div className="flex flex-col md:flex-row md:justify-between space-y-4 md:space-y-0">
            <div className="text-sm">
              <p>상호명: 하늘찬도토리 | 대표자: 손연지 | 사업자등록번호: 325-66-00322</p>
              <p>업태: 제조업, 도매 및 소매업 | 종목: 식품임가공, 식품 전분</p>
            </div>
            <div className="text-sm flex space-x-4">
              <Link to="/privacy" className="hover:underline">개인정보 처리방침</Link>
              <Link to="/terms" className="hover:underline">이용약관</Link>
              <Link to="/refund" className="hover:underline">환불정책</Link>
            </div>
          </div>
          <div className="text-sm text-center md:text-left mt-4">
            <p>© {new Date().getFullYear()} 하늘찬도토리공장. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
