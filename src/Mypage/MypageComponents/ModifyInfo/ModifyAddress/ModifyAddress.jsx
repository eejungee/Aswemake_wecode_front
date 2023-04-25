import React from 'react';
import { useState } from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import Header from '../../../../Components/Header/Header';
import * as S from './ModifyAddress.style';

const ModifyAddress = ({ setModalOpen }) => {
  const [modifyAddress, setModifyAddress] = useState({
    postalCode: '',
    address: '',
    addressDetail: '',
  });

  const { postalCode, address, addressDetail } = modifyAddress;

  const onClickBack = () => {
    setModalOpen(prev => !prev);
  };

  const scriptUrl =
    'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
  const open = useDaumPostcodePopup(scriptUrl);

  const handleComplete = data => {
    let postalCode = data.zonecode;
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    setModifyAddress(prev => ({
      ...prev,
      postalCode,
      address: fullAddress,
    }));
  };

  const handleAddressClick = () => {
    open({ onComplete: handleComplete });
  };

  const handleAddressDetail = e => {
    setModifyAddress(prev => ({ ...prev, addressDetail: e.target.value }));
  };

  return (
    <S.ModifyAddress>
      <Header type="modifyAddress" onClickBack={onClickBack} />
      <S.ModifyAddressBody>
        <S.ModifyAddressTitle>주소</S.ModifyAddressTitle>
        <S.AddressInputWrap>
          <input value={postalCode} readOnly />
          <button onClick={handleAddressClick}>우편번호 검색</button>
        </S.AddressInputWrap>
        <S.AddressInput
          placeholder="주소를 입력해주세요."
          value={address}
          background="#f9f9f9"
          color="#707070"
          readOnly
        />
        <S.AddressInput
          placeholder="상세주소를 입력해주세요."
          value={addressDetail}
          onChange={handleAddressDetail}
          color="#252525"
        />
      </S.ModifyAddressBody>
      <S.ConfirmBtn disabled={addressDetail === ''} onClick={onClickBack}>
        확인
      </S.ConfirmBtn>
    </S.ModifyAddress>
  );
};

export default ModifyAddress;
