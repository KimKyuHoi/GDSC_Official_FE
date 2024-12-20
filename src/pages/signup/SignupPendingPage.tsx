import styled from '@emotion/styled';

import homeIcon from '@gdg/assets/HomeIcon.svg';
import CommonBtn from '@gdg/components/common/button/CommonBtn';
import Text from '@gdg/components/common/typography/Text';
import { AuthWrapper, AuthBox } from '@gdg/styles/AuthModalStyle';
import { displayCenter } from '@gdg/styles/LayoutStyle';

import logo from '/GDSC.svg';

const CompleteContainer = styled.div`
  ${displayCenter}
  flex-direction: column;
  align-items: center;
  gap: 20px;

  margin-bottom: 40px;
`;

const SignupPendingPage = () => {
  return (
    <>
      <AuthWrapper>
        <AuthBox variant='primary'>
          <CompleteContainer>
            <img src={logo} alt='logo' width='40px' height='20px' />
            <Text size='xl' weight='bold'>
              운영진 승인을 기다려 주세요!
            </Text>
            <Text size='sm'>
              운영진의 승인 이후 정식 회원으로 등록됩니다.
              {'\n'}
              길게는 2-3일까지 소요될 수 있습니다.
            </Text>
          </CompleteContainer>
          <CommonBtn
            backgroundColor='blue'
            color='blue'
            hoverColor='blue'
            type='submit'
            size='lg'
            width='60%'
            height='45px'
            padding='5px'
            mdWidth='90%'
            mdHeight='45px'
            mWidth='90%'
            mHeight='45px'
            mPadding='5px'
          >
            <img src={homeIcon} alt='home' />
            <Text size='lg' weight='bold'>
              홈으로
            </Text>
          </CommonBtn>
        </AuthBox>
      </AuthWrapper>
    </>
  );
};

export default SignupPendingPage;
