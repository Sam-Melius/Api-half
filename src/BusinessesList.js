import React from 'react';

export default function BusinessesList({ businesses }) {
  return (
    <div>
      {businesses.map((business, i) => <div key={business.name + i}>
        <p>{business.name}</p>
        <img src={business.image_url} />
      </div>)}
    </div>
  );
}
