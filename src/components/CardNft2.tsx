import React from 'react'

interface CardNft2Props {
  height?: number
}

export default function CardNft2({ height = 250 }: CardNft2Props) {
  return (
    <div className='bg-white rounded shadow p-4'>
      <img src="https://picsum.photos/1000" alt="" className='rounded w-100 mb-3' style={{ height, objectFit: 'cover' }} />
      <div className="fw-bold mb-1" style={{ fontSize: '1.3rem' }}>CryptoPunks33</div>
      <div className="text-muted mb-3">7880 collection for the earth and human environment</div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="text-primary" style={{ fontSize: '.8rem' }}>Price: 3.00 ◎</div>
        <div className="text-success fw-bold">+136.54%</div>
      </div>
    </div>
  )
}
