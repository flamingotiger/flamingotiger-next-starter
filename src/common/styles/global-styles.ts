import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
	
	/* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure,
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	
	body {
		line-height: 1;
	}
	
	ol, ul {
		list-style: none;
	}
	
	blockquote, q {
		quotes: none;
	}
	
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	
	table {
		border-spacing: 0;
		border-collapse: collapse;
	}
	
	tr {
		margin-top: -1px;
	}
	
	a {
		text-decoration: none;
	}
	
	img {
		display: block;
		width: 100%;
		height: 100%;
	}
	
	svg {
		display: block;
		width: 100%;
		height: 100%;
	}
	
	/* input 기본 스타일 초기화 */
	input {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		outline: none;
	}
	
	input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  
	* {
		-webkit-appearance: none;
		-moz-appearance: none;
		appearance: none;
		outline: none;
		box-sizing: border-box;
	}
	
  body{
    font-family: "Nanum Gothic",-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  button {
    cursor: pointer;
  }
  
  @media only screen and (max-width: 768px) {
    body {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 576px) {
    body {
      font-size: 10px;
    }
  }
`;

export default GlobalStyle;
