import React from 'react'
import './twocards.css'

function Twocards() {
    return (
        <div className="card-container">
          {/* For larger screens, display two cards in a row */}
          <div className="card">
            <h2>Unlock Your ABC Earning Potential</h2>
            <p>Are you ready to take your earning potential to the next level? With ABC, you have multiple avenues to monetize your content seamlessly. From subscriptions and tips to merchandise sales and NFTS, ABC helps you diversify your revenue streams and maximize your income.</p>
            <img src="images/mobileedit.png" alt="Image 1" className='imaget' />
          </div>
          <div className="card">
            <h2>Boost Your Sales with Built-in E-commerce</h2>
            <p>Take control of your brand and boost your sales with ABC's built-in e-commerce functionality. Showcase and sell your exclusive products, whether it's merchandise, digital downloads, or personalized experiences. Integrate your store effortlessly and turn your creative ideas into profitable ventures.</p>
            <img src="images/photr1.png" alt="Image 2" className='imaget2' />
          </div>
        </div>
      );
}

export default Twocards