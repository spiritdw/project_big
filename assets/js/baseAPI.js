// 注意每次调用$.get()或者$.post()或者$.ajax()的时候
// 会先调用ajaxPrefilter这个函数
// 在这个函数中，可以拿到我们给Ajax提供的配置对象
$.ajaxPrefilter(function(options) {
    // console.log(options.url);
    // 在发起真正的ajax请求之前，统一拼接请求的根路径
    options.url = 'http://ajax.frontend.itheima.net' + options.url
    console.log(options.url);


    //统一为有权限的接口,设置header请求头
    if (options.url.indexOf('/my/') !== 1) {
        options.headers = {
            Authorization: localStorage.getItem('token') || ''
        }
    }
})