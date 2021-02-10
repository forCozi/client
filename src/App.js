import React from 'react';
import { Link, Route } from 'react-router-dom';
import './assets/css/reset.css';
import Layout from './components/common/layout/Layout';
import Alert from './components/common/message/Alert';
import ListPage from './pages/ListPage';
import MainPage from './pages/MainPage';
import UserRouter from './pages/user';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <>
      <Layout>
        {/* 메인페이지 */}
        <Route path="/" component={MainPage} exact />
        {/* 유저 */}
        <Route path="/user" component={UserRouter} />
        {/* 리스트 페이지 */}
        <Route path="/list/:id" component={ListPage} />
        {/* 디테일 페이지 */}
        <Route path="/detail/:id" component={DetailPage} />
        <Link to="/user/payment">asdasd</Link>
      </Layout>
      <Alert />
    </>
  );
}

export default App;
