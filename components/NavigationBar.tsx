import styled from 'styled-components';

const NavigationBar = () => {
  return (
    <GnbWrapper>
      <div className="logoArea">
        <img src="/images/carta_logo_symbol.png" />
      </div>
    </GnbWrapper>
  );
};

export default NavigationBar;

const GnbWrapper = styled.div`
  height: 100vh;
  width: 64px;
  background-color: #fafafc;
  z-index: 1300;
  padding: 16px 4px 32px;

  .logoArea {
    width: 100%;
    padding: 0 8px;
    > img {
      width: 100%;
      height: auto;
    }
  }
`;
