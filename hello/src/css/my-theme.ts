import styled, {createGlobalStyle,css,DefaultTheme} from 'styled-components';

//테마별 컬러를 정할 수 있다.
export const theme: DefaultTheme = {
    borderRadius : '5px',

    colors: {
        main: "cyan",
        secondary: 'magenta',
    }
};


// 글로벌 환경을 적용시킨다.
export const MyGlobalStyle = createGlobalStyle`
 html,
 body{
    background : black;
 }

 *{
     box-sizing: border-box;
 }
`;

// // and this theme is fully typed as well
// export cssHelper = css`
//   border: 1px solid ${props => props.theme.borderRadius};
// `;
