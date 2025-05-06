
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "프리미엄 참기름",
    price: 18000,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "100% 국내산 참깨로 만든 고소한 참기름",
    category: "기름류",
    isNew: true,
    tag: "베스트셀러"
  },
  {
    id: 2,
    name: "고급 들기름",
    price: 20000,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "산뜻한 향이 일품인 프리미엄 들기름",
    category: "기름류",
    isNew: false,
    tag: "추천"
  },
  {
    id: 3,
    name: "참깨소금 선물세트",
    price: 15000,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "참깨와 천일염을 블렌딩한 건강한 조미료",
    category: "소금류",
    isNew: false,
    tag: "인기"
  },
  {
    id: 4,
    name: "프리미엄 3종 선물세트",
    price: 45000,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "참기름, 들기름, 참깨소금을 한번에",
    category: "선물세트",
    isNew: true,
    tag: "명절 선물"
  },
  {
    id: 5,
    name: "도토리묵",
    price: 12000,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "100% 국내산 도토리로 만든 쫄깃한 묵",
    category: "묵류",
    isNew: false,
    tag: ""
  },
  {
    id: 6,
    name: "올방개묵",
    price: 13000,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "고급 올방개로 만든 쫄깃한 식감의 묵",
    category: "묵류",
    isNew: false,
    tag: ""
  },
  {
    id: 7,
    name: "메밀부침가루",
    price: 8000,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "국내산 100% 메밀로 만든 부침가루",
    category: "가루류",
    isNew: false,
    tag: ""
  },
  {
    id: 8,
    name: "감자떡가루",
    price: 9000,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "국내산 감자로 만든 쫄깃한 떡가루",
    category: "가루류",
    isNew: true,
    tag: "신상품"
  }
];

const categories = ["전체", "기름류", "소금류", "묵류", "가루류", "선물세트"];

const Products = () => {
  const [activeCategory, setActiveCategory] = React.useState("전체");
  const [sortBy, setSortBy] = React.useState("추천순");
  
  // Filter products based on selected category
  const filteredProducts = React.useMemo(() => {
    if (activeCategory === "전체") return products;
    return products.filter(product => product.category === activeCategory);
  }, [activeCategory]);

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
                정성으로 만든 <span className="text-brand-green">제품</span>
              </h1>
              <p className="text-brand-brown">
                하늘찬도토리공장의 모든 제품들은 100% 국내산 최상급 원재료만을 사용하여 정성을 다해 만듭니다.
              </p>
            </div>
          </div>
        </motion.section>
        
        {/* Category Navigation */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center space-y-4 md:space-y-0">
              <div className="flex overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                <div className="flex space-x-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`px-4 py-2 rounded-full whitespace-nowrap ${
                        activeCategory === category
                          ? "bg-brand-green text-white"
                          : "bg-gray-100 text-brand-brown hover:bg-gray-200"
                      }`}
                      onClick={() => setActiveCategory(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <select
                className="form-select px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="추천순">추천순</option>
                <option value="낮은가격순">낮은가격순</option>
                <option value="높은가격순">높은가격순</option>
                <option value="최신순">최신순</option>
              </select>
            </div>
          </div>
        </section>
        
        {/* Products Grid */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link 
                    to={`/products/${product.id}`}
                    className="block bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full"
                  >
                    <div className="relative h-56">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      
                      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 to-transparent opacity-60"></div>
                      
                      {product.tag && (
                        <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-brand-dark-brown text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                          {product.tag}
                        </span>
                      )}
                      
                      {product.isNew && (
                        <span className="absolute top-4 left-4 bg-brand-green text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-sm">
                          NEW
                        </span>
                      )}
                    </div>
                    
                    <div className="p-6">
                      <h3 className="font-serif font-bold text-xl text-brand-dark-brown group-hover:text-brand-green transition-colors duration-300">{product.name}</h3>
                      <p className="text-brand-brown text-sm mt-2 mb-3 line-clamp-2">{product.description}</p>
                      
                      <div className="flex justify-between items-center mt-4">
                        <span className="text-brand-dark-brown font-bold text-lg">{product.price.toLocaleString()}원</span>
                        
                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-beige text-brand-dark-brown group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                          <ShoppingBag size={18} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-brand-brown text-lg">해당 카테고리에 제품이 없습니다.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
