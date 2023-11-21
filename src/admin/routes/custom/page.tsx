import React, { useState, useEffect } from 'react';
import Medusa from "@medusajs/medusa-js";
import AnalyticsTemplate from './templates/AnalyticsTemplate';
const medusa = new Medusa({
 baseUrl: "http://localhost:9000",
 maxRetries: 3,
});

const CustomPage = () => {
 const [products, setProducts] = useState([]);

 useEffect(() => {
   medusa.admin.products.list()
     .then(({ products }) => {
       setProducts(products);
     });
 }, []);

 return (
   <AnalyticsTemplate />
 );
};

export default CustomPage;
