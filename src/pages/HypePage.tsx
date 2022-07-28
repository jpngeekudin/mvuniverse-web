import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import styled from 'styled-components';

export default function HypePage() {
  const [filterTimeframe, setFilterTimeframe] = useState<string>('24h');
  const [filterCategories, setFilterCategories] = useState<string>('All Categories');
  const [filterChains, setFilterChains] = useState<string>('All Chains');

  return (
    <div style={{ paddingTop: '6rem' }}>
      <div className="text-center" style={{ marginBottom: '8rem' }}>
        <div className="fw-bold mb-2" style={{ fontSize: '4rem' }}>Hype NFT</div>
        <div className='mb-4' style={{ fontSize: '1.5rem', fontWeight: 400 }}>The most hype NFTs on MVuniverse, ranked by volume, floor price and other statistics.</div>
        <div className='d-flex justify-content-center' style={{ gap: 20 }}>
          <Dropdown>
            <Dropdown.Toggle as={filterDropdownButton}>
              {filterTimeframe}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>24h</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle as={filterDropdownButton}>
              {filterCategories}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>All Categories</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown>
            <Dropdown.Toggle as={filterDropdownButton}>
              {filterChains}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>All Chains</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <div>
        <StyledTable className="table table-borderless">
          <thead>
            <th>Collection</th>
            <th>Volume</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Owners</th>
            <th>Items</th>
          </thead>
          <tbody>
            {[0,1,2,3,4,5,6,7,8,9].map(i => (
              <tr>
                <td>
                  <div className="d-flex align-items-center fw-bold" style={{ gap: 20 }}>
                    <div className="text-primary">{i + 1}.</div>
                    <img src='https://picsum.photos/100' alt="" className='rounded-circle' style={{ width: 35, height: 35, objectFit: 'cover' }} />
                    <div className="text-primary">Just Ape</div>
                  </div>
                </td>
                <td>
                  <span className="fw-bold">2,987,9</span>
                </td>
                <td>
                  <span className='fw-bold text-danger'>13,56%</span>
                </td>
                <td>
                  <span className="fw-bold text-success">12,01%</span>
                </td>
                <td>
                  <span className="fw-bold">22k</span>
                </td>
                <td>
                  <span className="fw-bold">100k</span>
                </td>
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </div>
    </div>
  )
}

const StyledTable = styled.table`
  border: none;

  thead {
    th {
      padding: .8rem .5rem;
    }
  }

  tbody {
    td {
      padding: .8rem 0.5rem;
    }
  }
`;

interface DropdownMenuItemProps {
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  labeledBy?: string;
  onClick: Function
}

const filterDropdownButton = React.forwardRef(({ children, onClick }: DropdownMenuItemProps, ref: React.Ref<HTMLAnchorElement>) => (
  <button className='btn btn-outline-primary' style={{ width: 150 }} onClick={e => onClick(e)}>
    {children}
  </button>
));
