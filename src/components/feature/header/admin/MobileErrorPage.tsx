import { useNavigate } from 'react-router-dom';

import CompleteBtn from '@gdsc/components/common/button/CompleteBtn';
import { LazyLoadImg } from '@gdsc/components/common/img/LazyLoadingImg';

import ErrorImg from '@gdsc/assets/admin/error.png';

import {
  MobileTitleWrapper,
  MobileContentContainer,
  MobileWarningText,
  MobileWarningContent,
  MobileButtonWrapper,
  MobileContentWrapper,
  MobileContainer,
} from './AdminTitle.style';

const MobileErrorPage = () => {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <MobileTitleWrapper>ADMIN PAGE</MobileTitleWrapper>
      <MobileContentWrapper>
        <MobileContentContainer>
          <LazyLoadImg
            image={{
              alt: '',
              src: `${ErrorImg}`,
              width: 35,
              height: 35,
            }}
          />
          <MobileWarningText>Beware</MobileWarningText>
          <MobileWarningContent>
            ADMIN PAGE는 PC 환경에서만
            <br />
            이용 가능합니다.
          </MobileWarningContent>
          <MobileButtonWrapper>
            <CompleteBtn
              type='button'
              color='navy'
              backgroundColor='navy'
              hoverColor='gray'
              size='md'
              onClick={() => navigate('/')}
            >
              홈으로 돌아가기
            </CompleteBtn>
          </MobileButtonWrapper>
        </MobileContentContainer>
      </MobileContentWrapper>
    </MobileContainer>
  );
};

export default MobileErrorPage;
