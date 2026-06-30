import { toast } from "react-toastify";

const getStoredReadList = () => {
    const storedListStr = localStorage.getItem('read-list');
    if (storedListStr) {
        return JSON.parse(storedListStr);
    }
    return [];
}

const addToStoredReadList = (id) => {
    const storedList = getStoredReadList();
    if (storedList.includes(id)) {
        toast.warning('This book is already in your read list!');
    } else {
        storedList.push(id);
        localStorage.setItem('read-list', JSON.stringify(storedList));
        toast.success('This book is added to your read list.');
    }
}

const getStoredWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    if (storedWishListStr) {
        return JSON.parse(storedWishListStr);
    }
    return [];
}

const addToStoredWishList = (id) => {
    const storedWishList = getStoredWishList();
    if (storedWishList.includes(id)) {
        toast.warning('This book is already in your wishlist!');
    } else {
        storedWishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList));
        toast.success('This book is added to your wishlist.');
    }
}

// FIXED: Added getStoredWishList to the exports
export { addToStoredReadList, addToStoredWishList, getStoredReadList, getStoredWishList };