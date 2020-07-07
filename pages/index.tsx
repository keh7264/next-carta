import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export default function Home() {
  return (
    <div>
      <CustomButton variant="contained" color="primary">
        Hello World
      </CustomButton>
    </div>
  );
}

const CustomButton = styled(Button)`
  color: #bbb;
`;
