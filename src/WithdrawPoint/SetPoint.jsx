import React from 'react';
import * as S from './SetPoint.style';
import { Link, useLocation } from 'react-router-dom';

const SetPoint = () => {
  const location = useLocation();
  const formatNumber = num => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const accountHolderName = location.state?.accountHolderName || '';
  const withdrawalPoints = location.state?.withdrawalPoints
    ? parseInt(location.state.withdrawalPoints, 10)
    : 0;

  if (!location.state) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {/* <S.Container>
        <S.Name>{accountHolderName}님</S.Name>
        <S.Inform style={{ color: '#FF6A21' }}>
          &nbsp;&nbsp;{formatNumber(withdrawalPoints)}원
        </S.Inform>
        <S.InformPoint>&nbsp;&nbsp;인출 요청이 완료되었습니다!</S.InformPoint>
        <S.WithdrawNotify>
          인출 요청 후 7일 이내 등록된 계좌로 입금됩니다.
        </S.WithdrawNotify>
      </S.Container>
      <Link to="/mypage">
        <S.FinBtn>확인</S.FinBtn>
      </Link> */}
      아아아ㅏ
    </div>
  );
};

export default SetPoint;
