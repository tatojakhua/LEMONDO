import React from 'react';
import type { Metadata } from 'next';
import './global.css';
import { ProductsContextProvider } from '@/context/products/ProductsContextProvider';

export const metadata: Metadata = {
  title: 'Zoommer',
  description: 'Zoomer E-commerce',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ProductsContextProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ProductsContextProvider>
  );
}
