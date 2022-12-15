import SvgError from 'icons/SvgError';
import SvgHome from 'icons/SvgHome';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FullScreen from 'layouts/FullScreen';

const NotLoadedFile = () => {
  const navigate = useNavigate();

  const onClickRedirect = () => navigate('/');
  return 404;
  return (
    <FullScreen>
      <CenterScreen>
        <Item>
          <SvgWrapper>
            <SvgError />
          </SvgWrapper>
        </Item>
        <Item>
          <Phrases>Can't find this page</Phrases>
        </Item>
      </CenterScreen>

      <FollowWrapper>
        <FollowButtonWrapper>
          <FollowButton onClick={onClickRedirect}>
            <SvgHome />
          </FollowButton>
        </FollowButtonWrapper>
      </FollowWrapper>
    </FullScreen>
  );
};
const Item = styled.div`
  margin: 0 0 15px 0;
  &:last-child {
    margin: 0;
  }
`;
const Phrases = styled.div`
  font-size: 50px;
  font-weight: 600;
`;
const FollowWrapper = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;
const FollowButtonWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
const FollowButton = styled.button`
  all: unset;
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 50%;
  min-height: 75px;
  border-radius: 30px;
  background-color: rgba(25, 22, 17, 65%);
  &:hover {
    background-color: rgba(33, 29, 25, 65%);
  }
  &:active {
    background-color: rgba(49, 43, 37, 65%);
  }
  backdrop-filter: blur(18.75px);
  svg {
    height: 40px;
    width: 40px;
    fill: #fff;
  }
  z-index: 1;
  margin: 30px;
`;
const CenterScreen = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  z-index: 1;
`;
const SvgWrapper = styled.div`
  svg {
    height: 200px;
    width: 200px;
    fill: #e03131;
  }
`;
export default NotLoadedFile;
