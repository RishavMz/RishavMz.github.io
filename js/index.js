$( document ).ready( function() {

    var entries1 = [ 
       
    { image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg', url: "#", width: '50', height: '50',  target: '_top' },
    { image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg',  url: "#", width: '50', height: '50',  target: '_top' },
    { image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg', url: "#",  width: '50', height: '50',  target: '_top' },
    { image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',  url: "#", width: '50', height: '50',  target: '_top' },
    { image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',  url: "#", width: '50', height: '50',  target: '_top' },
    { image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg',  url: "#", width: '50', height: '50',  target: '_top' },
    { image: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',  url: "#", width: '50', height: '50',  target: '_top' },
    ];

    var entries2 = [
        { image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg', url: "#",  width: '50', height: '50',  target: '_top' },
        { image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',  url: "#", width: '50', height: '50',  target: '_top' },
        { image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',  url: "#", width: '50', height: '50',  target: '_top' },
        { image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',  url: "#", width: '50', height: '50',  target: '_top' },
        { image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg',  url: "#", width: '50', height: '50',  target: '_top' },
        { image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',  url: "#", width: '50', height: '50',  target: '_top' },
        { image: 'https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg"',  url: "#", width: '50', height: '50',  target: '_top' },
        { image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg',  url: "#", width: '50', height: '50',  target: '_top' },
        { image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',  url: "#", width: '50', height: '50',  target: '_top' },
        { image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original-wordmark.svg',  url: "#", width: '50', height: '50',  target: '_top' },
        { image: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg',  url: "#", width: '50', height: '50',  target: '_top' },

       /* { image:   ,  url: "#", width: '50', height: '50',  target: '_top' },
        { image:   ,  url: "#", width: '50', height: '50',  target: '_top' },
        { image:   ,  url: "#", width: '50', height: '50',  target: '_top' },
        { image:   ,  url: "#", width: '50', height: '50',  target: '_top' },

        { image:   ,  url: "#", width: '50', height: '50',  target: '_top' },
*/


    ];

    var settings1 = {

        entries: entries1,
        width: 300,
        height: 300,
        radius: '65%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: 'white',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 2,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '15',
        fontColor: '#fff',
        fontWeight: 'normal',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '11',
        tooltipFontColor: '#fff',
        tooltipFontWeight: 'normal',//bold
        tooltipFontStyle: 'normal',//italic 
        tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'left',
        tooltipDiffX: 0,
        tooltipDiffY: 10

    };

    var settings2 = {

        entries: entries2,
        width: 300,
        height: 300,
        radius: '65%',
        radiusMin: 75,
        bgDraw: true,
        bgColor: 'white',
        opacityOver: 1.00,
        opacityOut: 0.05,
        opacitySpeed: 6,
        fov: 800,
        speed: 2,
        fontFamily: 'Oswald, Arial, sans-serif',
        fontSize: '15',
        fontColor: '#fff',
        fontWeight: 'normal',//bold
        fontStyle: 'normal',//italic 
        fontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        fontToUpperCase: true,
        tooltipFontFamily: 'Oswald, Arial, sans-serif',
        tooltipFontSize: '11',
        tooltipFontColor: '#fff',
        tooltipFontWeight: 'normal',//bold
        tooltipFontStyle: 'normal',//italic 
        tooltipFontStretch: 'normal',//wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
        tooltipFontToUpperCase: false,
        tooltipTextAnchor: 'left',
        tooltipDiffX: 0,
        tooltipDiffY: 10

    };

    $( '#skill1' ).svg3DTagCloud( settings1 );
    $( '#skill2' ).svg3DTagCloud( settings2 );

} );