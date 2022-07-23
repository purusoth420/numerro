import axios from 'axios';

export const homepage = {
    pixabay : 'https://pixabay.com/api/?per_page=30&key=',
    pixabaykey : '28701053-77bb3ba75e209ee18ae00ab97',
    pexels : 'https://api.pexels.com/v1/search/?page=1&per_page=30&query=',
    // pexels : 'https://api.pexels.com/v1/curated',search/?page=2&per_page=1&query=nature
    pexelskey : '563492ad6f9170000100000116be1b142b274dfe8b03e28dc493ded0',
    unsplash : 'https://api.unsplash.com/search/photos?per_page=30&query=',
    unsplashkey:'KvCq-3r3Y3CfGvdq27kxCLlosp20z0ojLvNDESx1_zw'

}

// export const pixaby = async ({query}) => {
//     await axios.get(`https://pixabay.com/api/?key=28701053-77bb3ba75e209ee18ae00ab97&q=${query}`).then((res)=>{
//        return res.status == 200
//     })
// }
