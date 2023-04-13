// var baseUrl = "http://localhost:3001/api";
var baseUrl = "http://43.130.196.59:3001/api";

function request(url, params) {
    var config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    }
    if (params) {
        config.body = JSON.stringify(params)
    }
    return new Promise((resolve, reject) => {
        fetch(url.indexOf("http://") > -1 ? url : (baseUrl + url), config).then((response) => {
            return response.json();
        }).then((responseData) => {
            if (responseData && responseData.successful) {
                console.log(responseData && responseData.result)
                resolve(responseData && responseData.result);
            } else {
                reject(responseData);
            }
        }).catch(error => {
            reject(error);
        })
    })
}

export function sendDeviceAndGetVersion(params) {
    return request("/common/sendDeviceAndGetVersion", params)
}

export function signUp(params) {
    return request("/auth/signUp", params)
}

export function sendCode(params) {
    return request("/auth/sendCode", params)
}

export function signIn(params) {
    return request("/auth/signIn", params)
}

export function deleteAccount(params){
    return request("/user/deleteAccount", params)
}

export function getUserinfo(id) {
    return request("/user/getUserinfo", { id })
}

export function editUserinfo(params) {
    return request("/user/editUserinfo", params)
}

export function resetPassword(params) {
    return request("/user/resetPassword", params)
}

export function feedback(params) { // type,content,user(id),device{},time,
    return request("/user/feedback", params)
}

export function getFeedbacks(params) { 
    return request("/user/getFeedbacks", params)
}

export function likeBlog(params) { // userId,blogId,like:true/false
    return request("/user/likeBlog", params)
}

export function getBlogs(params) { // page,pageSize
    return request("/common/getBlogs", params)
}

