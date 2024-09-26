import React from 'react';
import Header from './Header';
import Footer from './Footer';

const ShopAllProducts = () => {
  // Tusaale ahaan, ku dar liiska alaabtaada halkan
  const products = [
    { id: 1, 
        name: 'Shorts', price: '$20', image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600' },
    { id: 2, name: 'Jeans', price: '$30', image: 'https://img.freepik.com/premium-photo/stack-folded-denim-jeans-varying-shades-arranged-neatly-dark-background_1313089-31232.jpg?ga=GA1.1.1913717233.1723135609&semt=ais_hybrid' },
    { id: 3, name: 'Jackets ', price: '$25', image: 'https://i.pinimg.com/236x/81/24/07/812407141b3de2df72d0104a74991046.jpg' },
    { id: 4, name: 'Hoodies', price: '$40', image: 'https://img.freepik.com/premium-photo/white-hoodie-advertisment_1059430-107223.jpg?ga=GA1.1.1913717233.1723135609&semt=ais_hybrid' },
    { id: 5,  name: 'Sweaters', price: '$20', image: 'https://img.freepik.com/premium-photo/christmas-sweaters-some-which-are-stacked-together-with-festive-holiday-background_1215721-2020.jpg?ga=GA1.1.1913717233.1723135609&semt=ais_hybrid' },
    { id: 6, name: 'Pants', price: '$30', image: 'https://i.pinimg.com/236x/e9/1a/e1/e91ae1f4494f5265a5cb04c5909b0b4a.jpg' },
    { id: 7, name: 'Activewear ', price: '$25', image: 'https://i.pinimg.com/236x/93/14/74/93147458c404ef9c933f10499569f38d.jpg' },
    { id: 8, name: 'Hoodies', price: '$40', image: 'https://img.freepik.com/premium-photo/white-hoodie-advertisment_1059430-107223.jpg?ga=GA1.1.1913717233.1723135609&semt=ais_hybrid' },
];

  return (
   <> <Header/>
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Shop All Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-md rounded-lg p-4">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-blue-500 font-bold">{product.price}</p>
            <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ShopAllProducts;
