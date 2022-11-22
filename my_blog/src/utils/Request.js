import axios from 'axios'

import { ElLoading } from 'element-plus'
import router from '@/router'

const contentTypeJson = "application/json";


const request = (config) => {
    let { url, params, dataType = 'form', showLoading = 'true' } = config;
    let contentType = contentTypeJson;

    const instantce = axios.create({
        baseURL: '/api',
        timeout: 10 * 1000,
        headers: {
            'Content-Type': contentType,
            'X-Requested-With': 'XMLHttpRequest',
        }
    })

    let loading = null;
    instantce.interceptors.request.use(
        (config) => {
            if (showLoading) {
                loading = ElLoading.service({
                    lock: true,
                    text: 'Loading......',
                    background: 'rgba(0, 0, 0, 0.7)',
                })
            }
            // let token = state.token || ''
            // if (token) {
            //     //把token添加到请求头部
            //     config.headers = {
            //         authorization: token
            //     };
            // }
            return config;
        },
        (error) => {
            if (showLoading && loading) {
                loading.close();
            }
            // message.error("发送请求失败");
            return Promise.reject("发送请求失败");
        }
    )

    //请求后拦截
    instantce.interceptors.response.use(
        (response) => {
            if (showLoading && loading) {
                loading.close();
            }
            const responseData = response.data;
            if (responseData.status == "error") {
                if (config.errorCallback) {
                    config.errorCallback();
                }
                return Promise.reject(responseData.info);
            } else {
                if (responseData.code == 200) {
                    return responseData;
                } else if (responseData.code == 901) {
                    setTimeout(() => {
                        router.push("/login")
                    }, 2000);
                    return Promise.reject("登录超时");
                }
            }
        },
        (error) => {
            console.log(error);
            if (showLoading && loading) {
                loading.close();
            }
            return Promise.reject("网络异常");
        }
    )

    return instantce.post(url, params).catch(error => {
        // message.error(error)
        return null;
    })
}

export default request;