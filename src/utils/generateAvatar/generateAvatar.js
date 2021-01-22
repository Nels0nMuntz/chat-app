// import tinycolor from "tinycolor2";
 
// const generateAvatar = hash => {
//     const [r, g, b] = hash.substr(0,3).split();
//     const color = tinycolor({r, g, b});
//     return color
// };

// export default  generateAvatar;

const stringToColor = function stringToColor(str) {
    let hash = 0;
    let color = '#';
    let value;

    if(!str) return color + '333333';
        

    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }

    for (let i = 0; i < 3; i++) {
        value = (hash >> (i * 8)) & 0xFF;
        color += ('00' + value.toString(16)).substr(-2);
    }

    return color;
};

const generateAvatar = fullname => stringToColor(fullname);

export default  generateAvatar;

// const name = 'Михаил';
// const letter = name[0];
// const backgroundColor = stringToColor(name);