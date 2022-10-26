import InputCard from 'components/InputCard';
import InputWrapper from 'components/InputWrapper';
import React from 'react'
import styled from 'styled-components'

export default function CreateNftPage() {
  return (
    <>
      <div className="row mt-5 mb-3">
        <div className="col-lg-6 col-12">
          <div className="fw-bold text-primary mb-3" style={{ fontSize: '2rem' }}>
            Create new items
          </div>
          <div className="text-primary fw-bold">Image, Video, Audio, or 3D Model</div>
          <div className="text-primary mb-3" style={{ fontSize: '.8rem' }}>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB</div>
          <StyledFileInput>
            <i className="far fa-plus-circle"></i>
          </StyledFileInput>
        </div>
        <div className="col-lg-6 col-12">
          
        </div>
      </div>

      <div className="mb-3">
        <div className="row row-cols-lg-2 row-cols-1 g-4 mb-3">
          <InputWrapper
            title='NFT Name'
            subtitle='What is the collection name.'>
            <input type="text" className="form-control" placeholder='Item name' />
          </InputWrapper>
          <InputWrapper
            title='External Link'
            subtitle="We will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.">
            <input type="text" className="form-control" placeholder='http://yourweb.com' />
          </InputWrapper>
        </div>
        <div className="mb-3">
          <InputWrapper
            title='Description'
            subtitle="The description will be included on the item's detail page underneath its image. Markdown syntax is supported.">
            <textarea className='form-control' rows={4} placeholder='Provide detailed description of your item'></textarea>
          </InputWrapper>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6 col-12">
            <InputWrapper
              title='Collection'
              subtitle='This is the collection where your item will appear.'>
              <select className='form-control' placeholder='Select Collection'>
                <option>Collection 1</option>
                <option>Collection 2</option>
                <option>Collection 3</option>
              </select>
            </InputWrapper>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-lg-6 col-12">
            <InputCard
              className='mb-3'
              title='Properties'
              subtitle='Textual traits that show up as rectangles'
              trailing={
                <span style={{ cursor: 'pointer' }}>
                  <i className='far fa-plus-circle' style={{ fontSize: '2rem' }}></i>
                </span>
              }
            />
            <InputCard
              className='mb-3'
              title='Levels'
              subtitle='Numerical traits that show as a progress bar'
              trailing={
                <span style={{ cursor: 'pointer' }}>
                  <i className='far fa-plus-circle' style={{ fontSize: '2rem' }}></i>
                </span>
              }
            />
            <InputCard
              className='mb-3'
              title='Stats'
              subtitle='Numerical traits that just show as numbers'
              trailing={
                <span style={{ cursor: 'pointer' }}>
                  <i className='far fa-plus-circle' style={{ fontSize: '2rem' }}></i>
                </span>
              }
            />
          </div>
          <div className="col-lg-6 col-12">
            <InputCard
              className='mb-3'
              title='Unlockable Content'
              subtitle='Include unlockable content that can only be revealed by the owner of the item'
              trailing={
                <div className='form-check form-switch'>
                  <input className='form-check-input' type='checkbox'/>
                </div>
              }
            />
            <InputCard
              className='mb-3'
              title='Explicit & Sensitive Content'
              subtitle='Set this item as explicit and sensitive content'
              trailing={
                <div className='form-check form-switch'>
                  <input className='form-check-input' type='checkbox'/>
                </div>
              }
            />
          </div>
        </div>
        <div className="row row-cols-lg-2 row-cols-1 mb-3">
          <InputWrapper
            title='Supply'
            subtitle='The number of items that can be minted. No gas cost to you!'>
            <input type="text" className="form-control" placeholder='1000 ex. (type the number of your collection supply here)' />
          </InputWrapper>
          <InputWrapper
            title='Blockchain'
            subtitle='Blockchain'>
            <select className="form-control" placeholder='ETH'>
              <option>ETH</option>
              <option>SOL</option>
            </select>
          </InputWrapper>
        </div>
        <div className="row row-cols-lg-2 row-cols-1 align-items-end">
          <InputWrapper
            title='Freeze Metadata'
            subtitle="Freezing your metadata will allow you to permanently lock and store all of this item's content in decentralized file storage.">
            <input type="text" className="form-control" placeholder='to freeze your metadata you need create your items first.' />
          </InputWrapper>
          <div className="text-end">
            <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </div>
    </>
  )
}


const StyledFileInput = styled.div`
  border-radius: .5rem;
  border: dashed 4px var(--bs-gray-400);
  background-color: var(--bs-gray-200);
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  i {
    font-size: 4rem;
    color: var(--bs-gray-400)
  }
`;