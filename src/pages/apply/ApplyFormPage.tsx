import Star from '@gdg/components/feature/star/Star';
import ApplyForm from '@gdg/pages/apply/components/ApplyForm';
import { ApplyFormMetaData } from '@gdg/router/components/MetaData';
import { DisplayLayout } from '@gdg/styles/LayoutStyle';

const ApplyFormPage = () => {
  return (
    <>
      <ApplyFormMetaData />
      <DisplayLayout>
        <ApplyForm />
        {[...Array(25)].map((_, index) => (
          <Star
            key={index}
            top={`${Math.random() * 30}%`}
            left={`${Math.random() * 100}%`}
          />
        ))}
      </DisplayLayout>
    </>
  );
};

export default ApplyFormPage;
