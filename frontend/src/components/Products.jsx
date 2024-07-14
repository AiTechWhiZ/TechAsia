import React from 'react';
import '../styles/Products.css';
import Header from './Header';
import Footer from './Footer';
import product1Image from '../Images/Products/product1.jpg';
import product2Image from '../Images/Products/product2.jpg';
import product3Image from '../Images/Products/product3.jpg';

const Products = () => {
    const products = [
        { id: 1, image: product1Image, title: 'AIR STERILIZER CONTROLLER',  link: 'https://techasiamechatronics.com/product/air-sterilizer-controller/' },
        { id: 2, image: product2Image, title: 'Digital Timer (tA-01T)',  link: 'https://techasiamechatronics.com/product/digital-timer-ta-01t/' },
        { id: 3, image: product3Image, title: 'Condenser Motor Speed', link: 'https://techasiamechatronics.com/product/dvcb-digital-voltage-control-board/' },
        { id: 3, image: product3Image, title: 'Condenser Motor Speed', link: 'https://techasiamechatronics.com/product/dvcb-digital-voltage-control-board/' },
        { id: 3, image: product3Image, title: 'Condenser Motor Speed', link: 'https://techasiamechatronics.com/product/dvcb-digital-voltage-control-board/' },
        // Add more products as needed
    ];

    return (
        <main>
          <Header />
          <div className="page-header"></div>
            <div className='main-page'>
              <div className='items'>
                {products.map((product) => (
                  <div className="card" key={product.id}>
                    <a href={product.link} target="_blank" rel="noopener noreferrer">
                      <img
                        src={product.image}
                        className="card-img-top"
                        alt={product.title}
                      />
                    </a>
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          <Footer />
        </main>
    );
};

export default Products;
