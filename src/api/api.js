
import axios from '../utils/request';
import md5 from 'md5'

//登录
export const $login = (params, mode) =>{
    //md5加密
    params.password = md5(params.password).toString().toUpperCase();
    if(mode === 1){
        return axios({
            method: 'POST',
            url: '/user/login',
            headers:{
                'Context-Type': 'application/json' //@RequestBody传对象方式
            },
            data: params
            }
        ).then(response => {
            // console.log(response.data);
            // let statusCode = response.data.statusCode;
            // let message = response.data.message;不能返回除promise外的数据结构
            return response;//返回response用于第二次回调
        }).catch(err =>{
            console.log(err);
        })
    }
    else if(mode === 2){
        return axios({
                method: 'POST',
                url: '/doctor/login',
                headers:{
                    'Context-Type': 'application/json'
                },
                data: params
            }
        ).then(response => {
            console.log(response.data);
            return response;
        }).catch(err =>{
            console.log(err);
        })
    }
    else if(mode === 3){
        return axios({
                method: 'POST',
                url: '/manager/login',
                headers:{
                    'Context-Type': 'application/json'
                },
                data: params
            }
        ).then(response => {
            console.log(response.data);
            return response;
        }).catch(err =>{
            console.log(err);
        })
    }
    else{
        return null;
    }
}

//用户查询预约
export function checkAllAppointment(){
    return axios({
        method: "GET",
        url: "/appointments/getAllAppointment",
        headers: {
            'Context-Type': 'application/json'
        }}).then(response => {
            console.log(response)
    })
}