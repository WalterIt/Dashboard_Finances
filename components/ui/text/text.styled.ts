import  {createGlobalStyle} from 'styled-components';

const GlobalText = createGlobalStyle`
    h1, .h1 {
        font-size: 96px;
        line-height: 112px;
        font-weight: 500;
    }
    h2, .h2 {
        font-size: 60px;
        line-height: 72px;
        font-weight: 500;
    }
    h3, .h3 {
        font-size: 48px;
        line-height: 56px;
        font-weight: 500;
    }
    h4, .h4 {
        font-size: 32px;
        line-height: 40px;
        font-weight: 500;
    }
    h5, .h5 {
        font-size: 24px;
        line-height: 32px;
        font-weight: 500;
    }
    h6, .h6 {
        font-size: 20px;
        line-height: 32px;
        font-weight: 500;
    }
    .subtitle1 {
        font-size: 16px;
        line-height: 28px;
        font-weight: 400;
    }
    .subtitle2 {
        font-size: 14px;
        line-height: 21px;
        font-weight: 500;
    }
    .body1 {
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;
    }
    .body2 {
        font-size: 14px;
        line-height: 21px;
        font-weight: 400;
    }
    .caption {
        font-size: 12px;
        line-height: 15px;
        font-weight: 400;
    }
    .overline {
        fotn-size: 12px;
        line-height: 15px;
        font-weight: 400;
        text-transform: uppercase;
    }
`;

export default GlobalText;