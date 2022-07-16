import CardNft from 'components/CardNft'
import React from 'react'
import Navbar from '../components/Navbar'

export default function HomePage() {
  return (
    <div className='container pt-4'>
      <Navbar/>

      <section style={{ marginTop: '2rem' }}>
        <div className="d-flex align-items-center justify-content-between">
          <div style={{ width: 450 }}>
            <div className="text-primary mb-2" style={{ fontSize: '1.8rem', lineHeight: 1, fontWeight: 900 }}>Discover, collect, and sell an Authentic Unique NFTs</div>
            <div className='text-primary mb-4' style={{ fontWeight: 500, lineHeight: 1 }}>MVUniverse is the Simplest, Fastest, and Easiest NFTs Marketplace</div>
            <div className="d-flex" style={{ gap: 10 }}>
              <button className="btn btn-secondary rounded-pill px-5">Explore</button>
              <button className="btn btn-primary rounded-pill px-5">Create</button>
            </div>
          </div>
          <div style={{ width: 400 }}>
            <CardNft/>
          </div>
        </div>
      </section>
    </div>
  )
}
