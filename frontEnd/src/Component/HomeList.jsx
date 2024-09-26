import React from 'react';

function HomeList() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-gray-100 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
          <div className="bg-blue-900 text-white p-8 rounded-lg relative max-w-md mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-center">
              Shop The Best Selection Of <span className="text-yellow-400">Kids Bag</span>
            </h2>
            <p className="mb-6 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
            </p>
            <div className="sm:flex items-center space-x-4 justify-center">
              <span className="sm:text-xl font-bold line-through">$64.87</span>
              <span className="sm:text-2xl font-bold text-yellow-400">$54.99</span>
            </div>
            <div className="mt-6 space-x-4 flex justify-center">
              <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Buy Now</button>
              <button className="bg-transparent border border-white text-white py-2 px-4 rounded hover:bg-white hover:text-blue-900">Add To Cart</button>
            </div>
            <div className="absolute top-4 right-4 w-6 h-6 bg-yellow-400 rounded-full"></div>
            <div className="absolute bottom-4 right-8 w-4 h-4 bg-blue-400 rounded-full"></div>
            <div className="absolute bottom-12 left-6 w-6 h-6 bg-yellow-500 rounded-full"></div>
          </div>

          <div className="relative">
            <div className="flex justify-center">
              <img
                src="https://i.pinimg.com/236x/d1/7f/77/d17f777fd01ba0edafb262c1fb589db5.jpg"
                alt="Kids Bag"
                className="rounded-full border-4 border-blue-900 w-64 h-64 object-cover"
              />
            </div>
            <div className="flex space-x-6 mt-6 justify-center">
              <img
                src="https://i.pinimg.com/474x/0b/09/11/0b09117c57e481eb5fb8154ab8b1eddf.jpg"
                alt="Small Bag 1"
                className="rounded-full w-20 h-20 object-cover"
              />
              <img
                src="https://i.pinimg.com/236x/7d/41/a5/7d41a516e7f3a9e0af8b132b18b9b357.jpg"
                alt="Small Bag 2"
                className="rounded-full w-20 h-20 object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="bg-white shadow-lg p-8 rounded-lg">
            <div className="flex items-center space-x-4">
              <img src="https://i.pinimg.com/474x/79/84/e6/7984e6c2773847304eef1711e2ae40eb.jpg" alt="Unique Bag" className="w-32 h-32 object-cover" />
              <div>
                <h3 className="text-lg font-bold">Unique Bag</h3>
                <p className="text-gray-500">
                  Lorem ipsum dolor sit amet, <br />
                  consectetur adipiscing elit, <br />
                  sed do eiusmod tempor incididunt ut <br />
                  labore et dolore magna aliqua.
                </p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Explore</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeList;
