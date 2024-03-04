import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {HOME} from "../HOME/HOME";
import {HEADPHONES} from "../HEADPHONES/HEADPHONES";
import {SPEAKERS} from "../SPEAKER/SPEAKERS";
import {EARPHONES} from "../EARPHONES/EARPHONES";
import { MAINAPP } from "../APP/MAINAPP";
import { CHECKOUT } from "../CHECKOUT/CHECKOUT";
import { ProductDetailHeadphones1 } from "../PRODUCT-DETAIL-HEADPHONES-1/PRODUCT-DETAIL-HEADPHONES-1";
import { ProductDetailHeadphones2 } from "../PRODUCT-DETAIL-HEADPHONES-2/PRODUCT-DETAIL-HEADPHONES-2";
import { ProductDetailHeadphones3 } from "../PRODUCT-DETAIL-HEADPHONES-3/PRODUCT-DETAIL-HEADPHONES-3";
import { ProductDetailSpeaker1 } from "../PRODUCT-DETAIL-SPEAKER-1/PRODUCT-DETAIL-SPEAKER-1";
import { ProductDetailSpeaker2 } from "../PRODUCT-DETAIL-SPEAKER-2/PRODUCT-DETAIL-SPEAKER-2";
import { ProductDetailEarphones1 } from "../PRODUCT-DETAIL-EARPHONES-1/PRODUCT-DETAIL-EARPHONES-1";

export const ROUTES = () => {
  return (
    <>
      <Router>
        <MAINAPP />
        <Routes>
          <Route index element={<HOME />} />
          <Route path="/home" index element={<HOME />} />
          <Route path="/headphones/" element={<HEADPHONES />} />
          <Route
            path="/headphones/product-detail-headphones-1"
            element={<ProductDetailHeadphones1 />}
          /> 
          <Route
            path="/headphones/product-detail-headphones-2"
            element={<ProductDetailHeadphones2 />}
          />
          <Route
            path="/headphones/product-detail-headphones-3"
            element={<ProductDetailHeadphones3 />}
          />
          <Route path="/speakers/" element={<SPEAKERS />} />
          <Route
            path="/speakers/product-detail-speakers-1"
            element={<ProductDetailSpeaker1 />}
          />
          <Route
            path="/speakers/product-detail-speakers-2"
            element={<ProductDetailSpeaker2 />}
          />
          <Route path="/earphones/" element={<EARPHONES />} />
          <Route
            path="/earphones/product-detail-earphones-1"
            element={<ProductDetailEarphones1 />}
          />
          <Route path="/checkout/" element={<CHECKOUT />} />
        </Routes>
      </Router>
    </>
  );
};

// export default ROUTES;
