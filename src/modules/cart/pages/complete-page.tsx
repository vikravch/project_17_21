import React from 'react';
import OrderComplete from "../presentation/components/order-complete/order-complete";
import {useLocation} from "react-router";

const CompletePage = () => {
  const location = useLocation();
  return (
    <>
      <OrderComplete/>
    </>
  );
};

export default CompletePage;