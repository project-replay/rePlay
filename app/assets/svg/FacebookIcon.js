import React from 'react';
import { SvgXml } from 'react-native-svg';
export default function BabyProducts() {
	const svgMarkup = `<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.9575 13.5612C26.9575 6.07142 20.923 0 13.4788 0C6.03454 0 0 6.07142 0 13.5612C0 20.3298 4.92913 25.94 11.3726 26.9575V17.481H7.95069V13.5612H11.3726V10.5735C11.3726 7.17495 13.3848 5.29743 16.4639 5.29743C17.9383 5.29743 19.481 5.56238 19.481 5.56238V8.8994H17.7811C16.1071 8.8994 15.585 9.94495 15.585 11.0175V13.5601H19.3253L18.7253 17.481H15.585V26.9575C22.0284 25.9405 26.9575 20.3298 26.9575 13.5612Z" fill="#1877F2"/>
</svg>
`;
	const SvgImage = () => <SvgXml xml={svgMarkup} width='301px' />;

	return <SvgImage />;
}
