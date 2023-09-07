import axios from 'axios';
import * as actionTypes from './actionTypes';
import { baseUrl } from './baseUrl';

export const addComment = (dishId, comment, rating, author ) => dispatch=>{
    const newComment = {
        dishId: dishId,
        comment: comment,
        rating: rating,
        author: author,
        
    }
    newComment.date = new Date().toISOString();

    axios.post(baseUrl + 'comments', newComment)
    .then((response) => response.data)
    .then((comment) => dispatch(commentConcat(comment)))
}
export const commentConcat = (comment) => {
    return {
        type: actionTypes.ADD_COMMENT,
        payload: comment
    }
}

export const commentLoading = () => {
    return {
        type: actionTypes.COMMENT_LOADING
    }
}
export const loadComments = (comments) => {
    return {
        type: actionTypes.LOAD_COMMENTS,
        payload: comments
    }
}
export const fetchComments = () => {
    return (dispatch) => {
        dispatch(commentLoading());

        axios.get(baseUrl + 'comments')
        .then((response) => response.data)
        .then((comments) => dispatch(loadComments(comments)))
    }
}


export const loadDishes = (dishes) => {
    return {
        type: actionTypes.LOAD_DISHES,
        payload: dishes
    }
}

export const dishesLoading = () => {
    return {
        type: actionTypes.DISHES_LOADING
    }
}

export const dishesFailed = (errMessage) => {
    return {
        type: actionTypes.DISHES_FAILED,
        payload: errMessage
    }
}
export const fetchDishes = () => {
    return (dispatch) => {
        dispatch(dishesLoading());

        axios.get(baseUrl + 'dishes')
        .then((response)=> response.data)
        .then((dishes)=> dispatch(loadDishes(dishes)))
        .catch((error) => dispatch(dishesFailed(error.message)))
    }
}