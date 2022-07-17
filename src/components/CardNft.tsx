import React from 'react'
import IconHot from 'assets/images/navbar/navbar-explore-hot-collections.svg';

interface CardNftProps {
  height?: number,
  hot?: boolean
}

export default function CardNft({ height = 350, hot = false }: CardNftProps) {
  return (
    <div className='rounded position-relative' style={{ boxShadow: '0px 0px 18px 0px rgba(230,230,230,1)' }}>
      {hot && (
        <div className='position-absolute' style={{ top: 20, right: 20 }}>
          <img src={IconHot} alt="" style={{ height: 18 }} />
        </div>
      )}
      <img src="https://picsum.photos/1000" alt="" className='rounded-top w-100' style={{ height, objectFit: 'cover' }} />
      <div className='rounded-bottom d-flex align-items-center p-3' style={{ gap: 10 }}>
        <img src="https://picsum.photos/200" alt="" className='rounded-circle' style={{ objectFit: 'cover', height: 38 }} />
        <div style={{ flexGrow: 1 }}>
          <div className='fw-bold' style={{ lineHeight: 1, fontSize: '.8rem' }}>Trippin</div>
          <div className='text-primary fw-bold' style={{ fontSize: '.8rem' }}>Trippin' Ape Tribe</div>
        </div>
        <div className="text-primary" style={{ cursor: 'pointer' }}>
          <i className="fa fa-external-link"></i>
        </div>
      </div>
    </div>
  )
}
