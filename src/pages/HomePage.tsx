import CardNft from 'components/CardNft'
import React from 'react'
import Navbar from '../components/Navbar'
import Slider from 'react-slick';
import CardNft2 from 'components/CardNft2';
import { menuConfig, profileMenuConfig } from 'configs/MenuConfig';
import styled from 'styled-components';

const FooterMenuItem = styled.div`
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    color: var(--bs-success);
  }
`;

export default function HomePage() {
  return (
    <>
      <section style={{ marginTop: '3rem', marginBottom: '3rem' }}>
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

      <section style={{ marginBottom: '3rem' }}>
        <div className="d-flex align-items-center mb-4" style={{ gap: 20 }}>
          <div className="fw-bold" style={{ fontSize: '1.5rem' }}>Hot Collections</div>
          <button className="btn btn-primary px-3 rounded-pill">See All Collections</button>
        </div>
        <Slider arrows dots={false} infinite slidesToShow={3} slidesToScroll={1}>
          {[0,1,2,3,4,5].map(i => (
            <div className='px-3 my-3'>
              <CardNft hot/>
            </div>
          ))}
        </Slider>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <div className="d-flex align-items-center mb-4" style={{ gap: 20 }}>
          <div className="fw-bold" style={{ fontSize: '1.5rem' }}>Most Hype</div>
          <button className="btn btn-primary px-3 rounded-pill">See Hype</button>
        </div>
        <div className="row row-cols-3 g-4">
          {[0,1,2,3,4,5,6,7,8].map(i => (
            <div>
              <div className="d-flex align-items-center" style={{ gap: 10 }}>
                <div className='fw-bold' style={{ fontSize: '1.5rem' }}>{i + 1}</div>
                <img src="https://picsum.photos/1000" alt="" className='rounded-circle' style={{ height: 70 }} />
                <div style={{ flexGrow: 1 }}>
                  <div className="fw-bold" style={{ fontSize: '1.2rem' }}>Just Ape</div>
                  <div className='mb-2'>Just Ape</div>
                  <div className='text-primary' style={{ fontSize: '.8rem' }}>Price: 300 ◎</div>
                </div>
                <div className='text-end'>
                  <div className="fw-bold text-success mb-3">+51.54%</div>
                  <div className="text-primary" style={{ fontSize: '.8rem' }}>◎ 2,500,000</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <img src={require('assets/images/home/home-highlight.png')} alt="" className='w-100' />
      </section>

      <section style={{ marginBottom: '5rem' }}>
        <div className="d-flex align-items-center mb-4" style={{ gap: 20 }}>
          <div className="fw-bold" style={{ fontSize: '1.5rem' }}>Recent Listed</div>
          <button className="btn btn-primary px-3 rounded-pill">See All</button>
        </div>
        <Slider dots={false} infinite slidesToScroll={1} slidesToShow={4}>
          {[0,1,2,3,4,5,6,7].map(i => (
            <div className='px-3 my-3'>
              <CardNft2/>
            </div>
          ))}
        </Slider>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <div className="text-center mb-5">
          <div className="fw-bold" style={{ fontSize: '5rem' }}>MVUniverse</div>
          <div className="fw-bold" style={{ fontSize: '1.5rem' }}>"Anyone can learn from this marketplace."</div>
        </div>
        <div className="row row-cols-3 gx-5" style={{ marginBottom: '5rem' }}>
          <div className='text-center'>
            <div className="fw-bold" style={{ fontSize: '3rem' }}>Simplest</div>
            <div>Simplest place for NFT beginner to be part of step one to the Metaverse</div>
          </div>
          <div className='text-center'>
            <div className="fw-bold" style={{ fontSize: '3rem' }}>Fastest</div>
            <div>Fastest to sell your NFT, or be famous NFT Project</div>
          </div>
          <div className='text-center'>
            <div className="fw-bold" style={{ fontSize: '3rem' }}>Easiest</div>
            <div>Easiest marketplace to use as an artist or even if youre a NFT collector</div>
          </div>
        </div>
        <div className="row row-cols-2">
          <div>
            <div style={{ width: 500 }}>
              <div className="fw-bold mb-3" style={{ fontSize: '3rem' }}>What is a MVUniverse?</div>
              <div className="text-success fw-bold mb-3" style={{ fontSize: '1.5rem' }}>The Best Marketplace for NFTs art</div>
              <div className="mb-4">Our Marketplace is the best place for you as an artist to sell your arts and for you too if you are the collector of authentic rare arts that gives you a million benefits!</div>
              <button className="btn btn-success btn-lg px-5 fw-bold">Find out more</button>
            </div>
          </div>
          <div className="row row-cols-3">
            <div>
              <div className="fw-bold mb-2 fs-3">Marketplace</div>
              {menuConfig.find(m => m.name === 'Explore')?.children.map(child => (
                <FooterMenuItem>{child.name}</FooterMenuItem>
              ))}
            </div>
            <div>
              <div className="mb-4">
                <div className="fw-bold mb-2 fs-3">My Account</div>
                {profileMenuConfig.map(m => (
                  <FooterMenuItem>{m.name}</FooterMenuItem>
                ))}
              </div>
              <div>
                <div className="fw-bold mb-2 fs-3">Stats</div>
                {menuConfig.find(m => m.name === 'Stats')?.children.map(child => (
                  <FooterMenuItem>{child.name}</FooterMenuItem>
                ))}
              </div>
            </div>
            <div>
              <div className="fw-bold fs-2 mb-2">Company</div>
              <FooterMenuItem>About</FooterMenuItem>
              <FooterMenuItem>Career</FooterMenuItem>
              <FooterMenuItem>Venture</FooterMenuItem>
              <FooterMenuItem>Grants</FooterMenuItem>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <div className='d-flex justify-content-end' style={{ gap: 20 }}>
        <div className="fw-bold">Join the community</div>
        <a href="#" className='text-black fw-bold'>
          <i className="fab fa-discord me-2"></i>
          Discord
        </a>
        <a href="#" className='text-black fw-bold'>
          <i className="fab fa-twitter me-2"></i>
          Twitter
        </a>
      </div>
    </>
  )
}
