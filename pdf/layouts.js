const logoRu = `<svg viewBox="0 0 390.961 190.273" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0)">
<path d="M356.041 51.343V14.385L282.132 47.222V0L207.372 33.213V107.968L281.285 75.134V96.763L355.134 63.954V77.083L390.652 61.307V35.971L356.041 51.343Z" fill="#FC7303"/>
<path d="M63.999 171.567L76.168 130.78H89.801L70.308 190.725H58.14L44.845 150.047L31.436 190.725H19.267L0 130.78H13.972L25.915 171.567L39.097 130.554H50.703L63.999 171.567Z" fill="black"/>
<path d="M153.13 190.273V108.019H166.765V190.273H153.13Z" fill="black"/>
<path d="M176.647 190.273V108.019H190.281V190.273H176.647Z" fill="black"/>
<path d="M272.393 190.273H258.759V130.78H272.393V144.188C276.112 135.287 282.985 129.202 293.463 129.653V144.076H292.675C280.731 144.076 272.393 151.847 272.393 167.623V190.273Z" fill="black"/>
<path d="M370.116 129.54C383.075 129.54 390.961 137.766 390.961 152.301V190.274H377.328V156.47C377.328 147.005 372.934 141.936 365.272 141.936C357.835 141.936 352.539 147.117 352.539 156.696V190.274H338.907V156.359C338.907 147.117 334.399 141.936 326.848 141.936C319.301 141.936 314.117 147.569 314.117 156.81V190.274H300.483V130.78H314.117V139.793C317.949 134.497 323.132 129.539 332.259 129.539C340.823 129.539 346.793 133.708 349.949 140.016C354.794 133.708 361.102 129.54 370.116 129.54V129.54Z" fill="black"/>
<path d="M225.099 129.876C217.805 129.876 212.364 131.028 207.33 132.845V145.299C212.3 143.318 217.015 142.046 223.183 142.046C232.649 142.046 237.832 146.553 237.832 154.778V156.243C233.212 154.778 228.593 153.764 221.381 153.764C207.524 153.764 197.268 160.075 197.268 172.922V173.145C197.268 185.089 207.183 191.511 218.451 191.511C227.466 191.511 233.662 187.791 237.72 182.949V190.272H251.241V155.001C251.239 139.118 242.676 129.876 225.099 129.876V129.876ZM238.057 168.75C238.057 176.188 231.296 181.257 222.283 181.257C215.859 181.257 210.79 178.103 210.79 172.47V172.241C210.79 166.156 215.859 162.665 224.424 162.665C229.719 162.665 234.566 163.681 238.058 165.032V168.75H238.057Z" fill="black"/>
<path d="M118.683 129.876C110.977 129.876 105.345 131.173 100.07 133.172V145.636C105.357 143.461 110.25 142.045 116.769 142.045C126.234 142.045 131.418 146.552 131.418 154.777V156.242C126.798 154.777 122.179 153.763 114.967 153.763C101.108 153.763 90.854 160.074 90.854 172.921V173.144C90.854 185.088 100.77 191.51 112.037 191.51C121.051 191.51 127.248 187.79 131.305 182.948V190.271H144.826V155C144.825 139.118 136.261 129.876 118.683 129.876V129.876ZM131.642 168.75C131.642 176.188 124.882 181.257 115.868 181.257C109.445 181.257 104.374 178.103 104.374 172.47V172.241C104.374 166.156 109.445 162.665 118.009 162.665C123.304 162.665 128.15 163.681 131.643 165.032V168.75H131.642Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0">
<rect width="390.961" height="190.273" fill="white"/>
</clipPath>
</defs>
</svg>`;

const header = `
<style>
header {
    display: flex;
    justify-content: center;
    width: 100%;
}
header .logo {
    width: 45px;
}
header .logo svg {
    width: 100%;
}
</style>
<header><div class="logo">${logoRu}</div></header>
`;

const footer = `
<style>
footer {
    width: 100%;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 10px;
    color: #a6a6a6;
    text-align: center;
}
</style>
<footer><span class="pageNumber"></span></footer>
`;

module.exports = {
    structure: {
        index: `
            <div class="pdf-index">
                <div class="pdf-index-logo">${logoRu}</div>
                Wallarm API Security Platform Documentation
            </div>
        `,
        header,
        footer
    }
};
