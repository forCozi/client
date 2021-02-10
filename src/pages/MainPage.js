import React from 'react';
import Carousel from '../components/common/Carousel';
import PromoItem, {
  promoMocks,
  promoSettings,
} from '../components/main/PromoItem';
import Banner from '../components/main/Banner';
import CustomerService from '../components/main/cs/CustomerService';
import NewPro from '../components/main/product/NewPro';
import News from '../components/main/news/News';
import Solution from '../components/main/solution/Solution';
import { newsItems1, newsItems2 } from '../mocks/newsData';
import ButtonFix from '../components/common/buttons/ButtonFix';

export default function MainPage() {
  return (
    <div>
      <Banner />
      <Carousel
        title="진행 중인 이벤트 및 프로모션"
        ItemComponent={PromoItem}
        data={promoMocks}
        setting={promoSettings}
      />
      <NewPro />
      <Solution />
      <News newsItems={newsItems1} />
      <CustomerService />
      <News newsItems={newsItems2} />
      <ButtonFix />
    </div>
  );
}
