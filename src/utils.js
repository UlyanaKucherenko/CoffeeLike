import {firestore} from './firebase/firebase.utils.js';

const getDrinks= async() =>{
    try {
        const res = firestore.collection(`coffee`);
        const parsedRes = await res.get();
        let getData =[];
        parsedRes.forEach(function(item) {
            getData.push( item.data());
        });
        return getData;
    } 
    catch (error) {
        console.log(error)
    }
};

const favouriteCoffeeArray = JSON.parse(localStorage.getItem("favoriteDrinks"));

const shopingListArray = JSON.parse(localStorage.getItem("shopCart"));

export {
    getDrinks,
    favouriteCoffeeArray,
    shopingListArray
}