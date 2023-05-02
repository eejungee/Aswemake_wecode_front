import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from './Components/Container/Container';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Upload from './Upload/Upload';
import Mypage from './Mypage/Mypage';
import Favorite from './Favorite/Favorite';
import Detail from './Detail/Detail';
import WithdrawPoint from './WithdrawPoint/WithdrawPoint';
import SetPoint from './WithdrawPoint/SetPoint';
import AccountChange from './WithdrawPoint/AccountChange';
import AccountChangeInput from './AccountChange/AccountChageInput';
import SetAccountChange from './AccountChange/SetAccountChange';
import Suggest from './Suggest/Suggest';
import SuggestCompleted from './Suggest/SuggestCompleted';
import Search from './Home/HomeComponents/Search/Search';
import AccountRegi from './AccountRegi/AccountRegi';
import SetAccount from './AccountRegi/Component/SetAccount';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Container />}>
          <Route path="/home" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/favorite" element={<Favorite />} />
        </Route>
        <Route path="/detail" element={<Detail />} />
        <Route path="/" element={<Login />} />
        <Route path="/suggest" element={<Suggest />} />
        <Route
          path="/suggest/suggestCompleted"
          element={<SuggestCompleted />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/withdrawpoint" element={<WithdrawPoint />} />
        <Route path="/setpoint" element={<SetPoint />} />
        <Route path="/accountchange" element={<AccountChange />} />
        <Route path="/accountchangeinput" element={<AccountChangeInput />} />
        <Route path="/setaccountchange" element={<SetAccountChange />} />
        <Route path="/search" element={<Search />} />
        <Route path="/accountregi" element={<AccountRegi />} />
        <Route path="/setaccount" element={<SetAccount />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
