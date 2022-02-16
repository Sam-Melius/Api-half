import React from 'react';

export default function BusinessesList({ businesses }) {
  return (
    <div>
      {businesses.map((business, i) => <div key={business.name + i}>
        <p>Business Name: {business.name}</p>
        <p>Price: {business.price}</p>
        <img src={business.image_url} />
      </div>)}
    </div>
  );
}
