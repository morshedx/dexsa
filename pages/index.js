import styled from 'styled-components';
import Seo from 'components/seo';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <div>
      <Seo />
      <Title>My page</Title>
    </div>
  );
}
