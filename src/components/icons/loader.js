import React from 'react';

const IconLoader = () => (
  // <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  //   <title>Loader Logo</title>
  //   <g>
  //     <g id="B" transform="translate(11.000000, 5.000000)">
  //       <path
  //         d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
  //         fill="currentColor"
  //       />
  //     </g>
  //     <path
  //       stroke="currentColor"
  //       strokeWidth="5"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       d="M 50, 5
  //                 L 11, 27
  //                 L 11, 72
  //                 L 50, 95
  //                 L 89, 73
  //                 L 89, 28 z"
  //     />
  //   </g>
  // </svg>
  <svg width="100" height="100" id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 100">
    <title>Loader Logo</title>
    <g>
      <g id="B" transform="translate(11.000000, 5.000000)">
        <path d="M61.15 57.4353C61.15 59.1235 60.8346 60.6261 60.2039 61.9432C59.5917 63.2603 58.7291 64.3827 57.616 65.3102C56.5215 66.2192 55.2229 66.9056 53.7203 67.3694C52.2362 67.8332 50.6315 68.0651 48.9063 68.0651C47.7005 68.0651 46.5781 67.963 45.5393 67.759C44.5189 67.5549 43.6007 67.3045 42.7844 67.0077C41.9867 66.7109 41.3096 66.4048 40.7531 66.0894C40.2151 65.774 39.8348 65.505 39.6122 65.2824C39.4081 65.0598 39.2504 64.7815 39.1391 64.4476C39.0464 64.0951 39 63.6314 39 63.0563C39 62.6482 39.0186 62.3142 39.0557 62.0545C39.0928 61.7763 39.1484 61.5536 39.2226 61.3867C39.2968 61.2197 39.3896 61.1084 39.5009 61.0528C39.6122 60.9786 39.742 60.9415 39.8905 60.9415C40.1502 60.9415 40.5119 61.0991 40.9757 61.4145C41.458 61.7299 42.0702 62.0731 42.8122 62.4441C43.5543 62.8151 44.4447 63.1676 45.4836 63.5015C46.541 63.8169 47.7561 63.9746 49.1289 63.9746C50.1678 63.9746 51.1139 63.8354 51.9672 63.5572C52.8391 63.2789 53.5812 62.8893 54.1933 62.3884C54.8241 61.869 55.3064 61.2383 55.6403 60.4962C55.9742 59.7542 56.1412 58.9101 56.1412 57.964C56.1412 56.9437 55.9093 56.0718 55.4455 55.3483C54.9818 54.6248 54.3696 53.9941 53.609 53.4561C52.8484 52.8996 51.9765 52.3987 50.9933 51.9535C50.0286 51.4897 49.0361 51.0259 48.0158 50.5621C46.9955 50.0798 46.003 49.5511 45.0384 48.976C44.0737 48.4009 43.2111 47.7238 42.4505 46.9447C41.6899 46.1655 41.0684 45.2565 40.5861 44.2177C40.1223 43.1602 39.8905 41.8988 39.8905 40.4332C39.8905 38.9306 40.1594 37.5949 40.6974 36.4262C41.254 35.2389 42.0146 34.2464 42.9792 33.4487C43.9624 32.651 45.1219 32.0481 46.4575 31.64C47.8118 31.2133 49.268 31 50.8263 31C51.624 31 52.4217 31.0742 53.2194 31.2226C54.0357 31.3525 54.7963 31.538 55.5012 31.7791C56.2247 32.0018 56.8647 32.2615 57.4212 32.5583C57.9778 32.8366 58.3395 33.0684 58.5065 33.254C58.692 33.4209 58.8126 33.5601 58.8682 33.6714C58.9239 33.7641 58.9702 33.894 59.0073 34.0609C59.0445 34.2093 59.0723 34.3948 59.0908 34.6175C59.1094 34.8401 59.1187 35.1276 59.1187 35.4801C59.1187 35.814 59.1001 36.1108 59.063 36.3705C59.0445 36.6303 59.0073 36.8529 58.9517 37.0384C58.896 37.2053 58.8126 37.3352 58.7013 37.428C58.6085 37.5022 58.4972 37.5393 58.3673 37.5393C58.1633 37.5393 57.8386 37.4094 57.3934 37.1497C56.9667 36.89 56.438 36.6024 55.8073 36.2871C55.1766 35.9531 54.4252 35.6563 53.5533 35.3966C52.7 35.1183 51.7353 34.9792 50.6594 34.9792C49.6576 34.9792 48.7857 35.1183 48.0437 35.3966C47.3016 35.6563 46.6894 36.0088 46.2071 36.454C45.7248 36.8992 45.363 37.428 45.1219 38.0401C44.8807 38.6523 44.7601 39.3016 44.7601 39.988C44.7601 40.9898 44.992 41.8524 45.4558 42.5759C45.9196 43.2994 46.5317 43.9394 47.2923 44.4959C48.0715 45.0525 48.9527 45.5626 49.9359 46.0264C50.9191 46.4902 51.9208 46.9632 52.9411 47.4455C53.9615 47.9093 54.9632 48.4287 55.9464 49.0038C56.9296 49.5604 57.8015 50.2282 58.5621 51.0074C59.3413 51.7679 59.9627 52.6769 60.4265 53.7344C60.9088 54.7732 61.15 56.0069 61.15 57.4353Z" fill="currentColor"
        />
      </g>
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M50 5L11 27V72L50 95L89 73V28L50 5Z" />
    </g>
  </svg>
);

export default IconLoader;
