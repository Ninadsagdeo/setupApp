import Axios from "axios";

export const getCall = url => {

    Axios.get(url).then(response => {
        return response
    }).catch(error => {
        return error;
    })
}

export const postCall = (url, data) => {
    Axios.post(url, data).then(response => {
        return response
    }).catch(error => {
        return error;
    })
}

export async const asyncGetCall = url => {
    try {
        const response = await Axios.get(url).then(
            response => {
                return response
            }
        );;
        return response;

    } catch (error) {
        return error;
    }
}

export async const asyncPostCall = (url, data) => {
    try {
        const response = await Axios.post(url, data).then(
            response => {
                return response
            }
        );
        return response;
    } catch (error) {
        return error;
    }
}