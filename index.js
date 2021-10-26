$(document).ready(function(){

    var today = new Date();
    var noon = '12:01';
    var evening = '16:30';
    var now_hour = today.getHours() + ':'+ today.getMinutes();
    var d_day = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

    

    const evening_working_time = '16:00';
    const noon_working_time = '11:30';
    const evening_url = 'https://script.googleusercontent.com/macros/echo?user_content_key=VjGocMJHO7EPlGEZPk_V9MzllOqghFAdgQkxrBAmT9J3qDeR-3NgtsLWgHtabHbGRdX5_NfM0zA2Bd0hOfQykpUOP4xSVVebm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnA7wpYBcbC8hS8Zu_VBreS6KtPupjXSgETgIjyauKKelwsQVRMwQshXOk5PE_R0eujOmbnRGq-tk&lib=MZI6bu7bMuCZFcGtLMvcWq-02rlMmUn9c';
    const noon_url = 'https://script.googleusercontent.com/macros/echo?user_content_key=-4PRxiSnM6MxlXdK0fYVyLWJ9PgnapxhmwDzx94fIB5CWufAWfSxZ85kV4Szcz2VfLoW_W13vRo2Bd0hOfQykuPIBLgAuQBOm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBhMKdr3mjZlOgpWGgftRlCZZJ-qd3lNGu_IBuGnyapFnqJ7rg5NvOFWn12Fp1Dxq7d8MAdYOYtX&lib=MYSvdm741KiQvKD1gOuNd9lc8OvjxXfAZ';
    const morning_mt_url = 'https://script.googleusercontent.com/macros/echo?user_content_key=vVUVTEjsbabJ1nfFPH32dt3opLgDX20Xb_8U2sS26TP7qzzCpMj0n1QbueobDo5EdZx4SVEN1cakGAbfzbIRODXKkfLv6eJcm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDD7obfcXE_L0m1mn1qzzILd-GteJ15N_YeDOFvd95OSEYJLtBXFnAfFAcnuCPeQx3rQ0hWtQzda&lib=MjjbybzegotMTK8wYZnTVQ5bBiXdpBKA1';
    const evening_mt_url = 'https://script.googleusercontent.com/macros/echo?user_content_key=dNACemmIJRUy4dnjCQrm9tPwddLmRcwUJ7Rs0FP9KBsEoTvYJvkfgjmmd55rKPsZNIt3pd7Li47Sz_4V3HmTS_KfBym41g_5m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOW1kFVCr77v2Wvew0ZoxB7Dno9mf12V9K7JclQVpp8Y22gJ1kHZcY1zPf1HvSD0VJcdv3aNHr6K&lib=MYtiK1dSqd5PtgpQy1u0RKlkuA_MrNV96';

    const getLastNum = function(){
        if(now_hour >= evening){
            // evening 2d
            $.ajax({
                url: 'https://script.googleusercontent.com/macros/echo?user_content_key=VjGocMJHO7EPlGEZPk_V9MzllOqghFAdgQkxrBAmT9J3qDeR-3NgtsLWgHtabHbGRdX5_NfM0zA2Bd0hOfQykpUOP4xSVVebm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnA7wpYBcbC8hS8Zu_VBreS6KtPupjXSgETgIjyauKKelwsQVRMwQshXOk5PE_R0eujOmbnRGq-tk&lib=MZI6bu7bMuCZFcGtLMvcWq-02rlMmUn9c',
                type: "GET", 
                dataType: "json",
                data: {
                },
                success: function (result) {
                    const data = result.twoD[0];
                    const date = data['Date'];
                    const set = data['Set'];
                    const value = data['Value'];
                    const num = data['No.'];
                    var update_time = `${today.getFullYear()}-${today.getUTCMonth() + 1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

                    // update number
                    if(set != '{{ twoDSetFinal }}\n\n- -'){
                        $('.lucky_number').text(num);
                        $('.update-time').text(`Updated: ${update_time}`);
                    }else{
                        $('.update-time').text(`Updated: ${update_time}`);
                    }

                    
                    
                },
                error: function () {
                    console.log("error");
                }
            });
        }else{
            // noon 2d
            $.ajax({
                url: 'https://script.googleusercontent.com/macros/echo?user_content_key=-4PRxiSnM6MxlXdK0fYVyLWJ9PgnapxhmwDzx94fIB5CWufAWfSxZ85kV4Szcz2VfLoW_W13vRo2Bd0hOfQykuPIBLgAuQBOm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBhMKdr3mjZlOgpWGgftRlCZZJ-qd3lNGu_IBuGnyapFnqJ7rg5NvOFWn12Fp1Dxq7d8MAdYOYtX&lib=MYSvdm741KiQvKD1gOuNd9lc8OvjxXfAZ',
                type: "GET", 
                dataType: "json",
                data: {
                },
                success: function (result) {
                    const data = result.twoD[0];
                    const date = data['Date'];
                    const set = data['Set'];
                    const value = data['Value'];
                    const num = data['No.'];
                    var update_time = `${today.getFullYear()}-${today.getUTCMonth() + 1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

                    // update number
                    if(set != '{{ twoDSetFinal }}\n\n- -'){
                        $('.lucky_number').text(num);
                        $('.update-time').text(`Updated: ${update_time}`);
                    }else{
                        $('.update-time').text(`Updated: ${update_time}`);
                    }
                   
                    
                },
                error: function () {
                    console.log("error");
                }
            });
        }
    }

    const getData = function(){
        
    
        if(now_hour >= evening){
            // evening data update with noon data
    
            // get noon data
            $.ajax({
                url: noon_url,
                type: "GET", 
                dataType: "json",
                data: {
                },
                success: function (result) {
                    const data = result.twoD[0];
                    const date = data['Date'];
                    const set = data['Set'];
                    const value = data['Value'];
                    const num = data['No.'];
    
                    // update number
                    
                    if(set != '{{ twoDSetFinal }}\n\n- -' && value != '{{ twoDSetFinal }}\n\n- -' && num != '{{ twoDSetFinal }}\n\n- -'){
                    
                        if(now_hour <= noon_working_time){
                            $('.today_noon_set').addClass('data_number_blinking');
                            $('.today_noon_value').addClass('data_number_blinking');
                            $('.today_noon_result').addClass('data_number_blinking');
                        }else{
                            $('.today_noon_set').removeClass('data_number_blinking');
                            $('.today_noon_value').removeClass('data_number_blinking');
                            $('.today_noon_result').removeClass('data_number_blinking');
                        }
                      
                        $('.today-noon-set').text(set);
                        $('.today-noon-value').text(value);
                        $('.today-noon-result').text(num);
                    }

                   
                    
                },
                error: function () {
                    console.log("error");
                }
            });
    
            // get evening data
            $.ajax({
                url: evening_url,
                type: "GET", 
                dataType: "json",
                data: {
                },
                success: function (result) {
                    const data = result.twoD[0];
                    const date = data['Date'];
                    const set = data['Set'];
                    const value = data['Value'];
                    const num = data['No.'];
    
                    // update number
    
                    if(set != '\n\n- -' && value != '\n\n- -' && num != '\n\n- -'){ 
                     
                        if(now_hour <= evening_working_time){
                            $('.today_evening_value').addClass('data_number_blinking');
                            $('.today_evening_value').addClass('data_number_blinking');
                            $('.today_evening_value').addClass('data_number_blinking');
                        }else{
                            $('.today_evening_value').removeClass('data_number_blinking');
                            $('.today_evening_value').removeClass('data_number_blinking');
                            $('.today_evening_value').removeClass('data_number_blinking');
                        }
                    
                    
                        $('.today-evening-set').text(set);
                        $('.today-evening-value').text(value);
                        $('.today-evening-result').text(num);
                    }
          
                    
                },
                error: function () {
                    console.log("error");
                }
            });
    
        }else{
            // noon data
    
            // get noon data
            $.ajax({
                url: noon_url,
                type: "GET", 
                dataType: "json",
                data: {
                },
                success: function (result) {
                    const data = result.twoD[0];
                    const date = data['Date'];
                    const set = data['Set'];
                    const value = data['Value'];
                    const num = data['No.'];
    
                    // update number
                    if(set != '{{ twoDSetFinal }}\n\n- -' && value != '{{ twoDSetFinal }}\n\n- -' && num != '{{ twoDSetFinal }}\n\n- -'){ 
                        
                        if(now_hour <= noon_working_time){
                            $('.today_noon_set').addClass('data_number_blinking');
                            $('.today_noon_value').addClass('data_number_blinking');
                            $('.today_noon_result').addClass('data_number_blinking');
                        }else{
                            $('.today_noon_set').removeClass('data_number_blinking');
                            $('.today_noon_value').removeClass('data_number_blinking');
                            $('.today_noon_result').removeClass('data_number_blinking');
                        }
                     
                        $('.today-noon-set').text(set);
                        $('.today-noon-value').text(value);
                        $('.today-noon-result').text(num);
                    }
                    
                },
                error: function () {
                    console.log("error");
                }
            });
        }
    }

    const getModernInternet = function(){
        // modern and internet
        if(now_hour >= '2:00'){
            $.ajax({
                url: morning_mt_url,
                type: "GET", 
                dataType: "json",
                data: {
                },
                success: function (result) {
                    const data = result.user[0];
                    const date = data['Date'];
                    const apk = data['Apk'];
                    const modern = data['Modern'];
                    const internet = data['Internet'];
        
                    // update number
        
                if(date == d_day){
                    $('.today-morning-modern').text(modern);
                    $('.today-morning-internet').text(internet);
                }  
                    
                },
                error: function () {
                    console.log("error");
                }
            });
        
            $.ajax({
                url: evening_mt_url,
                type: "GET", 
                dataType: "json",
                data: {
                },
                success: function (result) {
                    const data = result.user[0];
                    const date = data['Date'];
                    const apk = data['Apk'];
                    const modern = data['Modern'];
                    const internet = data['Internet'];
        
                    // update number
                    if(date == d_day){
                        $('.today-evening-modern').text(modern);
                        $('.today-evening-internet').text(internet);
                    }
                    
                    
                },
                error: function () {
                    console.log("error");
                }
            });
        }else{
            $.ajax({
                url: morning_mt_url,
                type: "GET", 
                dataType: "json",
                data: {
                },
                success: function (result) {
                    const data = result.user[0];
                    const date = data['Date'];
                    const apk = data['Apk'];
                    const modern = data['Modern'];
                    const internet = data['Internet'];
        
                    // update number
                    if(date == d_day){
                        $('.today-morning-modern').text(modern);
                        $('.today-morning-internet').text(internet);
                    }
                    
                },
                error: function () {
                    console.log("error");
                }
            });
        }
    }


    // int functions

    getLastNum();
    getData();
    getModernInternet();

    // functions call every 5 seconds
    setInterval(function() {
        getLastNum();
        getData();
        getModernInternet();
    }, 5000);
 
});