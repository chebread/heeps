import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import FullScreen from '../layouts/FullScreen';
import SvgDot from 'icons/SvgDot';
import SvgShare from 'icons/SvgShare';
import SvgLeftArrow from 'icons/SvgLeftArrow';
import SvgFollow from 'icons/SvgFollow';

const Profile = () => {
  const { userId } = useParams();
  const userName = 'Sam smith';
  return (
    <FullScreen>
      <HeaderWrapper>
        <ProfileImage src="https://i.pinimg.com/originals/12/d0/cd/12d0cd704833e15b3d2478af9a709d93.jpg" />
        <Items>
          <BottomItems></BottomItems>
          <BottomItems>
            <UserName>{userName}</UserName>
          </BottomItems>
        </Items>
      </HeaderWrapper>
      <FollowWrapper>
        <FollowButtonWrapper>
          <FollowButton>
            <SvgFollow />
          </FollowButton>
        </FollowButtonWrapper>
      </FollowWrapper>
    </FullScreen>
  );
};
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
const UserId = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
const HeaderWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: calc(50% + 15px);
`;
const ProfileImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Items = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const BottomItems = styled.div`
  z-index: 1;
  width: calc(100% - 50px);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 25px;
  margin-right: 25px;
`;
const UserName = styled.div`
  font-size: 60px;
  font-weight: 600;
  color: white;
`;

export default Profile;
