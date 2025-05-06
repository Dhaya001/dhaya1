
import { Product } from "@/types";

// Mock product data
export const products: Product[] = [
  {
    id: "1",
    name: "Modern Sofa",
    description: "A comfortable and stylish sofa perfect for any living room. Features plush cushions and durable fabric upholstery.",
    price: 999.99,
    category: "living",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5?q=80&w=2080&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=2069&auto=format&fit=crop"
    ],
    inStock: true,
    featured: true,
    dimensions: "86"W x 38"D x 37"H",
    material: "Polyester, wood",
    colors: ["Gray", "Navy", "Beige"]
  },
  {
    id: "2",
    name: "Wooden Coffee Table",
    description: "Solid oak coffee table with a modern design. Perfect centerpiece for your living room with ample surface space.",
    price: 349.99,
    category: "living",
    images: [
      "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=2070&auto=format&fit=crop"
    ],
    inStock: true,
    featured: true,
    dimensions: "48"W x 24"D x 18"H",
    material: "Solid oak, metal",
    colors: ["Natural", "Walnut", "Black"]
  },
  {
    id: "3",
    name: "Ergonomic Office Chair",
    description: "An adjustable office chair designed for comfort during long work sessions. Features lumbar support and breathable mesh back.",
    price: 249.99,
    category: "office",
    images: [
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=2073&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541558869434-2f8fa82032b5?q=80&w=2069&auto=format&fit=crop"
    ],
    inStock: true,
    featured: false,
    dimensions: "26"W x 26"D x 38-42"H",
    material: "Mesh, plastic, metal",
    colors: ["Black", "Gray"]
  },
  {
    id: "4",
    name: "Queen Bed Frame",
    description: "A modern platform bed frame with a padded headboard. Sturdy construction and elegant design for a restful night's sleep.",
    price: 699.99,
    category: "bedroom",
    images: [
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588046130717-0eb0c9a3ba15?q=80&w=2069&auto=format&fit=crop"
    ],
    inStock: true,
    featured: true,
    dimensions: "63"W x 84"L x 48"H",
    material: "Wood, upholstery",
    colors: ["Gray", "Beige", "Blue"]
  },
  {
    id: "5",
    name: "Dining Table Set",
    description: "A 6-person dining set including table and chairs. Perfect for family meals and entertaining guests.",
    price: 1299.99,
    category: "dining",
    images: [
      "https://images.unsplash.com/photo-1615066390804-d7b682813d01?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1604578762246-83e20624bdbd?q=80&w=2070&auto=format&fit=crop"
    ],
    inStock: true,
    featured: true,
    dimensions: "72"L x 42"W x 30"H",
    material: "Solid wood, veneer",
    colors: ["Walnut", "Oak", "White"]
  },
  {
    id: "6",
    name: "Bookshelf",
    description: "A versatile bookshelf with adjustable shelves. Perfect for displaying books and decorative items.",
    price: 199.99,
    category: "living",
    images: [
      "https://images.unsplash.com/photo-1588627541420-fce3f661b779?q=80&w=1887&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606170034800-7bfe80da5c61?q=80&w=2070&auto=format&fit=crop"
    ],
    inStock: true,
    featured: false,
    dimensions: "36"W x 12"D x 72"H",
    material: "Engineered wood",
    colors: ["White", "Black", "Brown"]
  },
  {
    id: "7",
    name: "Accent Chair",
    description: "A stylish accent chair that adds a pop of color and comfort to any room.",
    price: 249.99,
    category: "living",
    images: [
      "https://images.unsplash.com/photo-1586158291800-2665f07bba79?q=80&w=2023&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=2073&auto=format&fit=crop"
    ],
    inStock: true,
    featured: false,
    dimensions: "28"W x 30"D x 33"H",
    material: "Fabric, wood",
    colors: ["Mustard", "Blue", "Green"]
  },
  {
    id: "8",
    name: "TV Stand",
    description: "A modern TV stand with storage for electronics and media. Sleek design complementing any living space.",
    price: 399.99,
    category: "living",
    images: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2187&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593435713456-e84b84716566?q=80&w=1887&auto=format&fit=crop"
    ],
    inStock: true,
    featured: false,
    dimensions: "65"W x 18"D x 24"H",
    material: "Wood, metal",
    colors: ["Black", "White", "Walnut"]
  }
];

export const categories = [
  {
    name: "Living Room",
    slug: "living",
    description: "Comfortable and stylish furniture for your living space",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2080&auto=format&fit=crop"
  },
  {
    name: "Bedroom",
    slug: "bedroom",
    description: "Create a restful retreat with our bedroom collections",
    image: "https://images.unsplash.com/photo-1617104551722-3b2d51366400?q=80&w=1968&auto=format&fit=crop"
  },
  {
    name: "Dining Room",
    slug: "dining",
    description: "Elegant tables and chairs for memorable meals",
    image: "https://images.unsplash.com/photo-1595514535115-11f40c932550?q=80&w=1887&auto=format&fit=crop"
  },
  {
    name: "Office",
    slug: "office",
    description: "Productive and comfortable workspace solutions",
    image: "https://images.unsplash.com/photo-1593476123561-9516f2097158?q=80&w=2076&auto=format&fit=crop"
  }
];
