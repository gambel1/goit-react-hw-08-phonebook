import { Typography } from 'antd';
import { TitleBox } from './Home.styled';

export default function Home() {
  const { Title } = Typography;
  return (
    <TitleBox className='container'>
      <Title>
        Phonebook welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Title>
    </TitleBox>
  );
}
