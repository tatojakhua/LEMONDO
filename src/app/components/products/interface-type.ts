//--Products--//
export type ProductsType = {
  id: number;
  name: string;
  barCode: string;
  description: string | null;
  sellType: string | null;
  imageUrl: string;
  parentCategoryName: string;
  [key: string]: any;
};

//--Product--//
export type ProductType = {
  id: number;
  name: string;
  barCode: string;
  description: string | null;
  sellType: string | null;
  imageUrl: string;
  parentCategoryName: string;
  [key: string]: any;
};

export type ProductProps = {
  item: ProductType;
};
