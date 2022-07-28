import Case from 'case';
import React from 'react'
import { Dropdown } from 'react-bootstrap';
import styled from 'styled-components';

export default function ExplorePage() {
  const filterStatusList = ['sales', 'listing', 'offers', 'collectionOffers', 'transfer'];

  return (
    <div className="row mt-5">

      {/* sidebar */}
      <div className="col-lg-3 col-12">
        <div className="d-flex mb-3" style={{ gap: 10 }}>
          <div style={{ flexGrow: 1 }}>
            <Dropdown>
              <Dropdown.Toggle as={filterDropdownButton}>
                Filter
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Filter</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div style={{ flexGrow: 1 }}>
            <Dropdown>
              <Dropdown.Toggle as={filterDropdownButton}>
                Sort
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Ascending</Dropdown.Item>
                <Dropdown.Item>Descending</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className='p-3 rounded' style={{ boxShadow: '0px 0px 18px 0px rgba(230,230,230,1)' }}>
          <div className='mb-3'>
            <div className="d-flex justify-content-between text-primary">
              <div className="fw-bold">Status</div>
              <span style={{ cursor: 'pointer' }}><i className="fa fa-chevron-up"></i></span>
            </div>
            <div className='text-muted mt-3'>
              {filterStatusList.map(filter => (
                <div className="d-flex justify-content-between mb-2">
                  <div>{Case.title(filter)}</div>
                  <input type="checkbox" className="form-input-check" />
                </div>
              ))}
            </div>
          </div>
          <div className="mb-3">
            <div className="d-flex justify-content-between text-primary">
              <div className="fw-bold">Collections</div>
              <span style={{ cursor: 'pointer' }}><i className="fa fa-chevron-down"></i></span>
            </div>
          </div>
          <div className="mb-3">
            <div className="d-flex justify-content-between text-primary">
              <div className="fw-bold">Chains</div>
              <span style={{ cursor: 'pointer' }}><i className="fa fa-chevron-down"></i></span>
            </div>
          </div>
        </div>
      </div>  

      {/* contents */}
      <div className="col-lg-9 col-12">
        <StyledTable className='table table-borderless'>
          <thead>
            <th>Items</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>From</th>
            <th>To</th>
            <th>Time</th>
          </thead>
          <tbody>
            {[0,1,2,3,4,5,6,7,8,9].map(i => (
              <tr key={i}>
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
                  <span className="fw-bold">1</span>
                </td>
                <td>
                  <span className="fw-bold text-success">JustApe</span>
                </td>
                <td>
                  <span className="fw-bold text-success">12x123asd</span>
                </td>
                <td>
                  <span className="fw-bold">a minute ago</span>
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
      text-align: center;
    }
  }

  tbody {
    td {
      padding: .8rem 0.5rem;
      text-align: center;
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
  <button className='btn btn-sm btn-primary' style={{ width: 150 }} onClick={e => onClick(e)}>
    {children}
  </button>
));
