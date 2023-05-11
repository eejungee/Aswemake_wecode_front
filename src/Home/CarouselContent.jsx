import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import * as S from './CarouselContent.style';

const CarouselContent = ({ mart, onClickMartItem }) => {
  const token = localStorage.getItem('token');
  const params = useParams();
  const [isFavorite, setIsFavorite] = useState(false);

  const sendFavoriteRequest = (favoriteCheck, successMsg, errorMsg) => {
    fetch(`https://flyers.qmarket.me/api/favorite/${params.id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
      body: JSON.stringify({ favoriteCheck }),
    }).then(response => {
      if (response.ok) {
        console.log(successMsg);
      } else {
        console.error(errorMsg);
      }
    });
  };

  const onClickFavorite = () => {
    console.log('favorite?', mart.isFavorite);
  };

  return (
    <S.MartBox key={mart.martId}>
      <S.CarouselBox>
        <div>
          <S.CarouselImg
            src={
              mart.martFlyerImages === '0'
                ? './images/flyernone.png'
                : mart.martFlyerImages[0].imageUrl
            }
            alt="전단지"
            onClick={onClickMartItem(mart.martId)}
          />
        </div>
        <S.CarouselContent>
          <S.MartTitleLi>
            <S.MartTitle onClick={onClickMartItem(mart.martId)}>
              {mart.martName}
            </S.MartTitle>
            <S.StarImg
              src={
                mart.isFavorite
                  ? '/images/clickedFavorite.png'
                  : '/images/favorite.png'
              }
              onClick={() => onClickFavorite({ id: mart.martId })}
            />
          </S.MartTitleLi>
          <S.MartContentBox>
            <S.AddressAndPhone onClick={onClickMartItem(mart.martId)}>
              {mart.martNumberAddress}
            </S.AddressAndPhone>
            <S.AddressAndPhone>{mart.martPhoneNumber}</S.AddressAndPhone>
          </S.MartContentBox>
        </S.CarouselContent>
      </S.CarouselBox>
    </S.MartBox>
  );
};

export default CarouselContent;