import React, { useEffect, useState } from 'react';
import * as S from './Search.style';

const Search = ({
  newKeyword,
  setNewKeyword,
  setIsSearchClicked,
  homeMartList,
  setSelectedMart,
  center,
}) => {
  const [keywords, setKeywords] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const result = localStorage.getItem('keywords') || '[]';
      setKeywords(JSON.parse(result));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('keywords', JSON.stringify(keywords));
  }, [keywords]);

  const handleKeyword = e => {
    setNewKeyword(e.target.value);
    setIsSubmitted(false);
  };

  const filteredList = homeMartList
    .filter(
      mart =>
        mart.martName.includes(newKeyword) ||
        mart.martNumberAddress.includes(newKeyword) ||
        mart.martRoadNameAddress.includes(newKeyword)
    )
    .slice(-3);

  const onClickBack = e => {
    e.preventDefault();
    setIsSearchClicked(false);
    setNewKeyword('');
  };

  const onClickKeyword = (id, text) => {
    const filteredKeyword = keywords.filter(keyword => {
      return keyword.id !== id;
    });
    setNewKeyword(text);
    setIsSubmitted(true);
    setKeywords([{ id: Date.now(), text: text }, ...filteredKeyword]);
  };

  const handleAddKeyword = e => {
    e.preventDefault();
    setKeywords([{ id: Date.now(), text: newKeyword }, ...keywords]);
    setIsSubmitted(true);
  };

  const handleRemoveKeyword = id => {
    const filteredKeyword = keywords.filter(keyword => {
      return keyword.id !== id;
    });
    setKeywords(filteredKeyword);
  };

  const onClickMart = id => {
    const selectedMart = homeMartList.filter(mart => {
      return mart.martId === id;
    });
    setIsSearchClicked(false);
    setSelectedMart(selectedMart);
    setNewKeyword('');
  };

  // 중심에서 마트까지 거리 계산하는 기능
  // const calculateDistance = () => {
  //   filteredList.map(({ lat, lng }) => {
  //     if()
  //   });
  // };

  return (
    <S.SearchBox>
      <form onSubmit={e => handleAddKeyword(e)}>
        <S.HeaderBox>
          <S.Back
            alt="arrow"
            src="images/signup/arrow.png"
            onClick={onClickBack}
          />
          <S.SearchBar
            type="text"
            value={newKeyword}
            placeholder="동주소, 마트 검색"
            onChange={handleKeyword}
          />
          <div />
        </S.HeaderBox>
      </form>
      <S.KeywordBox>
        {isSubmitted ? (
          <>
            <S.KeywordTitle>검색 결과</S.KeywordTitle>
            {filteredList.length > 0 ? (
              <S.SearchedList>
                {filteredList.map(({ martId, martName, martNumberAddress }) => (
                  <S.SearchedItem
                    key={martId}
                    onClick={() => onClickMart(martId)}
                  >
                    <div>
                      <S.MartName>{martName}</S.MartName>
                      <S.MartAddress>{martNumberAddress}</S.MartAddress>
                    </div>
                    <S.Distance>거리</S.Distance>
                  </S.SearchedItem>
                ))}
              </S.SearchedList>
            ) : (
              <S.EmptyList>
                검색 결과가 없어요!
                <br />
                다른 마트를 검색해주세요.
              </S.EmptyList>
            )}
          </>
        ) : (
          <>
            <S.KeywordTitle>최근 검색어</S.KeywordTitle>
            <ul>
              {keywords.length > 0 ? (
                keywords.map(({ id, text }) => (
                  <S.KeywordItem key={id}>
                    <p onClick={() => onClickKeyword(id, text)}>{text}</p>
                    <S.DeleteBtn
                      type="button"
                      onClick={() => {
                        handleRemoveKeyword(id);
                      }}
                    >
                      <img alt="delete" src="./images/closeImg.png" />
                    </S.DeleteBtn>
                  </S.KeywordItem>
                ))
              ) : (
                <div />
              )}
            </ul>
          </>
        )}
      </S.KeywordBox>
      <S.HideFooter />
    </S.SearchBox>
  );
};

export default Search;
