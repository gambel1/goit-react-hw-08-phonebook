import { Typography } from 'antd';
import { TitleBox, TitleT } from './Home.styled';

export default function Home() {
  const { Title } = Typography;
  return (
    <TitleBox className="container">
      <TitleT>
        <Title>
          Phonebook welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </Title>
      </TitleT>
    </TitleBox>
  );
}
