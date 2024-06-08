import React from 'react';

type ProductType = {
  id: number;
  name: string;
  barCode: string;
  description: string | null;
  sellType: string | null;
  [key: string]: any;
};

type ProductProps = {
  item: ProductType;
};

const Product: React.FC<ProductProps> = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Barcode: {item.barCode}</p>
      {/* Render other properties as needed */}
    </div>
  );
};

export default Product;
