import React from "react";
import CafeGallery from "/src/components/blocks/cafe-galery/cafe-galery";
import Order from "/src/components/blocks/order/order";

function OrderPage({ slides, orderOptions }) {
  return (
    <>
      <CafeGallery slides={slides} />
      <Order orderOptions={orderOptions} />
    </>
  );
}

export default OrderPage;
