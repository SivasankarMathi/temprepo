// 40 mock products across multiple categories
const products = [
  // Mobiles
  { id: 1, title: 'Galaxy S24 Ultra', category: 'Mobiles', price: 1199.99, rating: 4.6, stock: 24, brand: 'Samsung', image: 'https://picsum.photos/seed/mobile1/400/400', description: 'Flagship smartphone with 200MP camera and S-Pen support.' },
  { id: 2, title: 'iPhone 15 Pro', category: 'Mobiles', price: 1099.0, rating: 4.8, stock: 15, brand: 'Apple', image: 'https://picsum.photos/seed/mobile2/400/400', description: 'Titanium design, A17 Pro chip, and pro camera system.' },
  { id: 3, title: 'Pixel 8', category: 'Mobiles', price: 699.99, rating: 4.4, stock: 32, brand: 'Google', image: 'https://picsum.photos/seed/mobile3/400/400', description: 'Pure Android experience with the best-in-class camera AI.' },
  { id: 4, title: 'OnePlus 12', category: 'Mobiles', price: 799.0, rating: 4.5, stock: 18, brand: 'OnePlus', image: 'https://picsum.photos/seed/mobile4/400/400', description: 'Fast charging flagship killer with smooth 120Hz display.' },
  { id: 5, title: 'Redmi Note 13', category: 'Mobiles', price: 249.99, rating: 4.2, stock: 60, brand: 'Xiaomi', image: 'https://picsum.photos/seed/mobile5/400/400', description: 'Budget powerhouse with a big battery and great value.' },

  // Laptops
  { id: 6, title: 'MacBook Air M3', category: 'Laptops', price: 1299.0, rating: 4.9, stock: 12, brand: 'Apple', image: 'https://picsum.photos/seed/laptop1/400/400', description: 'Ultra-thin laptop with the powerful M3 chip and all-day battery.' },
  { id: 7, title: 'Dell XPS 13', category: 'Laptops', price: 1099.99, rating: 4.6, stock: 20, brand: 'Dell', image: 'https://picsum.photos/seed/laptop2/400/400', description: 'Premium ultrabook with InfinityEdge display.' },
  { id: 8, title: 'ThinkPad X1 Carbon', category: 'Laptops', price: 1499.0, rating: 4.7, stock: 9, brand: 'Lenovo', image: 'https://picsum.photos/seed/laptop3/400/400', description: 'Business-class durability with a legendary keyboard.' },
  { id: 9, title: 'ASUS ROG Zephyrus', category: 'Laptops', price: 1799.99, rating: 4.5, stock: 7, brand: 'ASUS', image: 'https://picsum.photos/seed/laptop4/400/400', description: 'Gaming laptop with RTX graphics and high refresh display.' },
  { id: 10, title: 'HP Spectre x360', category: 'Laptops', price: 1249.0, rating: 4.4, stock: 14, brand: 'HP', image: 'https://picsum.photos/seed/laptop5/400/400', description: 'Convertible 2-in-1 with a gorgeous OLED screen.' },

  // Audio
  { id: 11, title: 'Sony WH-1000XM5', category: 'Audio', price: 399.99, rating: 4.8, stock: 40, brand: 'Sony', image: 'https://picsum.photos/seed/audio1/400/400', description: 'Industry-leading noise cancelling over-ear headphones.' },
  { id: 12, title: 'AirPods Pro 2', category: 'Audio', price: 249.0, rating: 4.7, stock: 55, brand: 'Apple', image: 'https://picsum.photos/seed/audio2/400/400', description: 'Adaptive audio earbuds with active noise cancellation.' },
  { id: 13, title: 'Bose QuietComfort', category: 'Audio', price: 329.99, rating: 4.6, stock: 30, brand: 'Bose', image: 'https://picsum.photos/seed/audio3/400/400', description: 'Comfortable headphones with world-class ANC.' },
  { id: 14, title: 'JBL Flip 6', category: 'Audio', price: 129.99, rating: 4.5, stock: 70, brand: 'JBL', image: 'https://picsum.photos/seed/audio4/400/400', description: 'Portable waterproof Bluetooth speaker with punchy bass.' },
  { id: 15, title: 'Sennheiser Momentum', category: 'Audio', price: 349.0, rating: 4.4, stock: 22, brand: 'Sennheiser', image: 'https://picsum.photos/seed/audio5/400/400', description: 'Audiophile-grade wireless headphones.' },

  // Wearables
  { id: 16, title: 'Apple Watch Series 9', category: 'Wearables', price: 429.0, rating: 4.7, stock: 33, brand: 'Apple', image: 'https://picsum.photos/seed/wear1/400/400', description: 'Advanced health tracking and a bright always-on display.' },
  { id: 17, title: 'Galaxy Watch 6', category: 'Wearables', price: 329.99, rating: 4.5, stock: 28, brand: 'Samsung', image: 'https://picsum.photos/seed/wear2/400/400', description: 'Sleek smartwatch with comprehensive fitness features.' },
  { id: 18, title: 'Fitbit Charge 6', category: 'Wearables', price: 159.99, rating: 4.3, stock: 45, brand: 'Fitbit', image: 'https://picsum.photos/seed/wear3/400/400', description: 'Fitness tracker with built-in GPS and heart rate.' },
  { id: 19, title: 'Garmin Fenix 7', category: 'Wearables', price: 699.99, rating: 4.8, stock: 11, brand: 'Garmin', image: 'https://picsum.photos/seed/wear4/400/400', description: 'Rugged multisport GPS watch for adventurers.' },
  { id: 20, title: 'Amazfit GTR 4', category: 'Wearables', price: 199.99, rating: 4.2, stock: 38, brand: 'Amazfit', image: 'https://picsum.photos/seed/wear5/400/400', description: 'Long battery life smartwatch with tons of sport modes.' },

  // Fashion
  { id: 21, title: 'Classic Denim Jacket', category: 'Fashion', price: 79.99, rating: 4.3, stock: 50, brand: 'Levi\'s', image: 'https://picsum.photos/seed/fashion1/400/400', description: 'Timeless denim jacket for everyday wear.' },
  { id: 22, title: 'Running Sneakers', category: 'Fashion', price: 119.99, rating: 4.6, stock: 42, brand: 'Nike', image: 'https://picsum.photos/seed/fashion2/400/400', description: 'Lightweight and breathable everyday running shoes.' },
  { id: 23, title: 'Leather Wallet', category: 'Fashion', price: 39.99, rating: 4.4, stock: 80, brand: 'Fossil', image: 'https://picsum.photos/seed/fashion3/400/400', description: 'Genuine leather bifold wallet with RFID protection.' },
  { id: 24, title: 'Cotton T-Shirt', category: 'Fashion', price: 24.99, rating: 4.1, stock: 120, brand: 'H&M', image: 'https://picsum.photos/seed/fashion4/400/400', description: 'Soft, breathable everyday crew-neck t-shirt.' },
  { id: 25, title: 'Aviator Sunglasses', category: 'Fashion', price: 149.99, rating: 4.5, stock: 26, brand: 'Ray-Ban', image: 'https://picsum.photos/seed/fashion5/400/400', description: 'Iconic aviator sunglasses with UV protection.' },

  // Home Appliances
  { id: 26, title: 'Air Fryer XL', category: 'Home Appliances', price: 129.99, rating: 4.6, stock: 34, brand: 'Philips', image: 'https://picsum.photos/seed/home1/400/400', description: 'Large capacity air fryer for healthier cooking.' },
  { id: 27, title: 'Robot Vacuum', category: 'Home Appliances', price: 399.99, rating: 4.4, stock: 19, brand: 'iRobot', image: 'https://picsum.photos/seed/home2/400/400', description: 'Smart robot vacuum with mapping and app control.' },
  { id: 28, title: 'Espresso Machine', category: 'Home Appliances', price: 549.0, rating: 4.7, stock: 13, brand: 'Breville', image: 'https://picsum.photos/seed/home3/400/400', description: 'Barista-quality espresso at home.' },
  { id: 29, title: 'Microwave Oven', category: 'Home Appliances', price: 149.99, rating: 4.2, stock: 40, brand: 'Panasonic', image: 'https://picsum.photos/seed/home4/400/400', description: 'Compact microwave with inverter technology.' },
  { id: 30, title: 'Stand Mixer', category: 'Home Appliances', price: 379.99, rating: 4.8, stock: 16, brand: 'KitchenAid', image: 'https://picsum.photos/seed/home5/400/400', description: 'Powerful stand mixer for baking enthusiasts.' },

  // Books
  { id: 31, title: 'The Pragmatic Programmer', category: 'Books', price: 44.99, rating: 4.9, stock: 100, brand: 'Addison-Wesley', image: 'https://picsum.photos/seed/book1/400/400', description: 'Classic guide to software craftsmanship.' },
  { id: 32, title: 'Atomic Habits', category: 'Books', price: 19.99, rating: 4.8, stock: 200, brand: 'Avery', image: 'https://picsum.photos/seed/book2/400/400', description: 'An easy and proven way to build good habits.' },
  { id: 33, title: 'Clean Code', category: 'Books', price: 39.99, rating: 4.7, stock: 90, brand: 'Prentice Hall', image: 'https://picsum.photos/seed/book3/400/400', description: 'A handbook of agile software craftsmanship.' },
  { id: 34, title: 'Sapiens', category: 'Books', price: 24.99, rating: 4.6, stock: 150, brand: 'Harper', image: 'https://picsum.photos/seed/book4/400/400', description: 'A brief history of humankind.' },
  { id: 35, title: 'Deep Work', category: 'Books', price: 21.99, rating: 4.5, stock: 110, brand: 'Grand Central', image: 'https://picsum.photos/seed/book5/400/400', description: 'Rules for focused success in a distracted world.' },

  // Sports
  { id: 36, title: 'Yoga Mat Premium', category: 'Sports', price: 49.99, rating: 4.4, stock: 65, brand: 'Manduka', image: 'https://picsum.photos/seed/sport1/400/400', description: 'Non-slip eco-friendly yoga mat.' },
  { id: 37, title: 'Adjustable Dumbbells', category: 'Sports', price: 299.99, rating: 4.7, stock: 21, brand: 'Bowflex', image: 'https://picsum.photos/seed/sport2/400/400', description: 'Space-saving adjustable dumbbell set.' },
  { id: 38, title: 'Basketball Official', category: 'Sports', price: 29.99, rating: 4.5, stock: 88, brand: 'Spalding', image: 'https://picsum.photos/seed/sport3/400/400', description: 'Official size and weight indoor/outdoor basketball.' },
  { id: 39, title: 'Cycling Helmet', category: 'Sports', price: 89.99, rating: 4.6, stock: 37, brand: 'Giro', image: 'https://picsum.photos/seed/sport4/400/400', description: 'Lightweight ventilated cycling helmet.' },
  { id: 40, title: 'Tennis Racket Pro', category: 'Sports', price: 199.99, rating: 4.3, stock: 24, brand: 'Wilson', image: 'https://picsum.photos/seed/sport5/400/400', description: 'Professional-grade tennis racket for advanced players.' },
]

export default products
