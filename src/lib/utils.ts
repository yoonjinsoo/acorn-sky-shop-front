
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Product types and interfaces
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  isNew?: boolean;
  category?: string;
  stock?: number;
  detailImages?: string[];
  ingredients?: string;
  usage?: string;
  weight?: string;
}

// Mock products data
export const mockProducts: Product[] = [
  {
    id: 1,
    name: "프리미엄 참기름",
    price: 18000,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "100% 국내산 참깨로 만든 고소한 참기름",
    category: "oils",
    isNew: true,
    stock: 50,
    weight: "250ml",
    ingredients: "국내산 참깨 100%",
    usage: "나물, 비빔밥, 찌개 등 다양한 요리에 활용하세요."
  },
  {
    id: 2,
    name: "고급 들기름",
    price: 20000,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "산뜻한 향이 일품인 프리미엄 들기름",
    category: "oils",
    stock: 45,
    weight: "250ml",
    ingredients: "국내산 들깨 100%",
    usage: "나물 무침, 샐러드, 전 요리에 활용하세요."
  },
  {
    id: 3,
    name: "참깨소금 선물세트",
    price: 15000,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "참깨와 천일염을 블렌딩한 건강한 조미료",
    category: "seasonings",
    stock: 30,
    weight: "150g",
    ingredients: "국내산 참깨, 천일염",
    usage: "밥, 국, 찌개, 나물 등 모든 요리의 간을 맞출 때 사용하세요."
  },
  {
    id: 4,
    name: "프리미엄 3종 선물세트",
    price: 45000,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "참기름, 들기름, 참깨소금을 한번에",
    category: "gift-sets",
    isNew: true,
    stock: 25,
    weight: "참기름 250ml, 들기름 250ml, 참깨소금 150g",
    ingredients: "국내산 참깨, 들깨, 천일염",
    usage: "특별한 날 소중한 분들께 건강한 선물로 추천드립니다."
  },
  {
    id: 5,
    name: "도토리가루",
    price: 12000,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "국내산 도토리로 만든 건강한 가루",
    category: "powders",
    stock: 40,
    weight: "300g",
    ingredients: "국내산 도토리 100%",
    usage: "도토리묵, 도토리전 등 다양한 요리에 활용하세요."
  },
  {
    id: 6,
    name: "올방개가루",
    price: 14000,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "희귀한 올방개로 만든 건강 식품",
    category: "powders",
    stock: 35,
    weight: "250g",
    ingredients: "국내산 올방개 100%",
    usage: "올방개묵, 죽 등 다양한 요리에 활용하세요."
  },
  {
    id: 7,
    name: "메밀부침가루",
    price: 10000,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "국내산 메밀로 만든 건강한 부침가루",
    category: "powders",
    stock: 55,
    weight: "400g",
    ingredients: "국내산 메밀가루, 소금",
    usage: "부침개, 전, 튀김 등 다양한 요리에 활용하세요."
  },
  {
    id: 8,
    name: "감자떡가루",
    price: 9000,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
    description: "국내산 감자로 만든 떡가루",
    category: "powders",
    stock: 48,
    weight: "400g",
    ingredients: "국내산 감자 100%",
    usage: "감자떡, 감자전 등 다양한 요리에 활용하세요."
  }
];

// Categories for products
export const productCategories = [
  { id: "all", name: "전체" },
  { id: "oils", name: "기름류" },
  { id: "seasonings", name: "조미료" },
  { id: "powders", name: "가루류" },
  { id: "gift-sets", name: "선물세트" }
];

