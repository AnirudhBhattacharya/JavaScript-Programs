/* 
 * String Properties
 * 
 * Display only string values of a given object
 * 
 */

const movie = {
    title : 'AB',
    year : 2019,
    Stream : 'SE',
    Exp: 5.9
};

function showProperties(obj) {
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);

}

showProperties(movie);