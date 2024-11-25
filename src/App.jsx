import './App.scss'
import Header from "./components/header/Header"
import Hero from './components/hero/Hero'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className='app'>
      <Header/>
      <div className='iphone-16-pro'>
      <Hero
        bg="gold"
        title={"iPhone 16 Pro"}
        cl="#fff"
        button1={"Learn more"}
        button2={"Buy"}
        url={"https://www.apple.com/v/home/bv/images/heroes/iphone-16-pro/hero_iphone16pro_avail__fnf0f9x70jiy_largetall.jpg"}
        desc={"Hello, Apple Intelligence."}   
        items={["Home", "about"]}   
      />
      </div>
      <div className='iphone-16'>
        <Hero
        bg="dodgerblue"
        title={"iPhone 16"}
        button1={"Learn more"}
        button2={"Buy"}
        cl="#fff"
        url={"https://www.apple.com/v/home/bv/images/heroes/iphone-16/hero_iphone16_avail__euwzls69btea_largetall.jpg"}
        desc={"Hello, Apple Intelligence."}
        items={["Home", "about", "contact"]}
      />
      </div>
      <div className='ipad-air'>
        <Hero
        bg="dodgerblue"
        title={"iPad Air"}
        button1={"Learn more"}
        button2={"Buy"}
        cl="#fff"
        url={"https://www.apple.com/v/home/bv/images/heroes/ipad-air/hero_ipad_air__enn6321t3tkm_largetall.jpg"}
        desc={"Two sizes. Faster chip. Does it all."}
        items={["Home", "about", "contact"]}
      />
      </div>
      <div className='airpods'>
        <div className='airpods-4'>
        <Footer
          bg="dodgerblue"
          title={"AirPods 4"}
          button1={"Learn more"}
          button2={"Buy"}
          cl="#fff"
          url={"https://www.apple.com/v/home/bv/images/promos/airpods-4/promo_airpods_4_avail__bl22kvpg6ez6_large.jpg"}
          desc={"Iconic. Now supersonic.Available with Active Noise Cancellation."}
        />
        </div>
        <div className='watch'>
        <Footer
          bg="dodgerblue"
          title={"Watch"}
          button1={"Learn more"}
          button2={"Buy"}
          cl="#fff"
          url={"https://www.apple.com/v/home/bv/images/promos/apple-watch-series-10/promo_apple_watch_series_10_avail_lte__c70y29goir42_large.jpg"}
          desc1={"SERIES 10"}
          desc={"Thinstant classic"}
        />
        </div>
        <div className='macbook-air'>
        <Footer
          bg="dodgerblue"
          title={"MacBook Air"}
          button1={"Learn more"}
          button2={"Buy"}
          cl="#fff"
          url={"https://www.apple.com/v/home/bv/images/promos/macbook-air-m3/promo_macbook_air_m3__e43jegok3wuq_medium.jpg"}
          desc={"Lean.Mean. M3 machine."}
        />
        </div>
        <div className='apple-for-small-business'>
        <Footer
          bg="dodgerblue"
          title={"Apple For Small Business"}
          button1={"Learn more"}
          button2={"Buy"}
          cl="#fff"
          url={"https://www.apple.com/v/home/bv/images/promos/apple-small-business/promo_asb__gajxkvbkiqie_medium.png"}
          desc1={"SERIES 10"}
          desc={"Thinstant classic"}
        />
        </div>
        <div className='carrier-deals'>
        <Footer
          bg="dodgerblue"
          title={"Carrier Deals at Apple"}
          button1={"Learn more"}
          button2={"Buy"}
          cl="#fff"
          url={"https://www.apple.com/v/home/bv/images/promos/carriers/promo_carrier__e0izvxwqosgi_medium.jpg"}
          desc1={"Get up to $1000 in credit on a new iPhone"}
          desc={"Trade in may be required"}
        />
        </div>
        <div className='trade-in'>
        <Footer
          bg="dodgerblue"
          title={"Trade In"}
          button1={"Learn more"}
          button2={"Buy"}
          cl="#fff"
          url={"https://www.apple.com/v/home/bv/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_medium.jpg"}
          desc1={"SERIES 10"}
          desc={"Thinstant classic"}
        />
        </div>
    </div>
    </div>
  )
}

export default App


