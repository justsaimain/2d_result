// TODO : show old data if not working time


$(document).ready(function(){

    var today = new Date();
    var noon = '12:01';
    var evening = '16:30';
    var now_hour = today.getHours() + ':'+ today.getMinutes();
    var d_day = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;

    

    const evening_working_time = '15:00';
    const noon_working_time = '11:00';
    const evening_url = 'https://script.googleusercontent.com/macros/echo?user_content_key=VjGocMJHO7EPlGEZPk_V9MzllOqghFAdgQkxrBAmT9J3qDeR-3NgtsLWgHtabHbGRdX5_NfM0zA2Bd0hOfQykpUOP4xSVVebm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnA7wpYBcbC8hS8Zu_VBreS6KtPupjXSgETgIjyauKKelwsQVRMwQshXOk5PE_R0eujOmbnRGq-tk&lib=MZI6bu7bMuCZFcGtLMvcWq-02rlMmUn9c';
    const noon_url = 'https://script.googleusercontent.com/macros/echo?user_content_key=-4PRxiSnM6MxlXdK0fYVyLWJ9PgnapxhmwDzx94fIB5CWufAWfSxZ85kV4Szcz2VfLoW_W13vRo2Bd0hOfQykuPIBLgAuQBOm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBhMKdr3mjZlOgpWGgftRlCZZJ-qd3lNGu_IBuGnyapFnqJ7rg5NvOFWn12Fp1Dxq7d8MAdYOYtX&lib=MYSvdm741KiQvKD1gOuNd9lc8OvjxXfAZ';
    const morning_mt_url = 'https://script.googleusercontent.com/macros/echo?user_content_key=vVUVTEjsbabJ1nfFPH32dt3opLgDX20Xb_8U2sS26TP7qzzCpMj0n1QbueobDo5EdZx4SVEN1cakGAbfzbIRODXKkfLv6eJcm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDD7obfcXE_L0m1mn1qzzILd-GteJ15N_YeDOFvd95OSEYJLtBXFnAfFAcnuCPeQx3rQ0hWtQzda&lib=MjjbybzegotMTK8wYZnTVQ5bBiXdpBKA1';
    const evening_mt_url = 'https://script.googleusercontent.com/macros/echo?user_content_key=dNACemmIJRUy4dnjCQrm9tPwddLmRcwUJ7Rs0FP9KBsEoTvYJvkfgjmmd55rKPsZNIt3pd7Li47Sz_4V3HmTS_KfBym41g_5m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOW1kFVCr77v2Wvew0ZoxB7Dno9mf12V9K7JclQVpp8Y22gJ1kHZcY1zPf1HvSD0VJcdv3aNHr6K&lib=MYtiK1dSqd5PtgpQy1u0RKlkuA_MrNV96';

    const twoD_url = 'https://www.myanmar2d3d.com/2d.json';

    function insertDecimal(num) {
        return Number((num / 1000).toFixed(3));
    }   


    const getOldNum = function(){
        // noon data
        $.ajax({
            url: noon_url,
            type: "GET", 
            dataType: "json",
            data: {
            },
            success: function (result) {
                const data = result.twoD[1];
                const date = data['Date'];
                const set = data['Set'];
                const value = data['Value'];
                const num = data['No.'];
                var update_time = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

                // update number
                $('.today-noon-set').text(set);
                $('.today-noon-value').text(value);
                $('.today-noon-result').text(num);
                $('.update-time').html(`<span style="color:#52B356">&#10003;</span> Updated: ${update_time}`);
            },
            error: function () {
                console.log("error");
            }
        });
      
        $.ajax({
            url: evening_url,
            type: "GET", 
            dataType: "json",
            data: {
            },
            success: function (result) {
                const data = result.twoD[1];
                const date = data['Date'];
                const set = data['Set'];
                const value = data['Value'];
                const num = data['No.'];
                var update_time = `${today.getFullYear()}-${today.getUTCMonth() + 1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`


                // update number
                $('.today-evening-set').text(set);
                $('.today-evening-value').text(value);
                $('.today-evening-result').text(num);
                $('.lucky_number').text(num);
                $('.update-time').html(`<span style="color:#52B356">&#10003;</span> Updated: ${update_time}`);
                
            },
            error: function () {
                console.log("error");
            }
        });
    }

    // const getData = function(){
        
    
    //     if(now_hour >= evening){
    //         // evening data update with noon data
    
    //         // get noon data
    //         $.ajax({
    //             url: noon_url,
    //             type: "GET", 
    //             dataType: "json",
    //             data: {
    //             },
    //             success: function (result) {
    //                 const data = result.twoD[0];
    //                 const date = data['Date'];
    //                 const set = data['Set'];
    //                 const value = data['Value'];
    //                 const num = data['No.'];
    
    //                 // update number
                    
    //                 if(set != '{{ twoDSetFinal }}\n\n- -' && value != '{{ twoDSetFinal }}\n\n- -' && num != '{{ twoDSetFinal }}\n\n- -'){
    //                     $('.today-noon-set').text(set);
    //                     $('.today-noon-value').text(value);
    //                     $('.today-noon-result').text(num);
    //                 }else{
    //                     $('.today-noon-set').text(result.twoD[1]['Set']);
    //                     $('.today-noon-value').text(result.twoD[1]['Value']);
    //                     $('.today-noon-result').text(result.twoD[1]['No.']);
    //                 }

                   
                    
    //             },
    //             error: function () {
    //                 console.log("error");
    //             }
    //         });
    
    //         // get evening data
    //         $.ajax({
    //             url: evening_url,
    //             type: "GET", 
    //             dataType: "json",
    //             data: {
    //             },
    //             success: function (result) {
    //                 const data = result.twoD[0];
    //                 const date = data['Date'];
    //                 const set = data['Set'];
    //                 const value = data['Value'];
    //                 const num = data['No.'];
    
    //                 // update number
    
    //                 if(set != '\n\n- -' && value != '\n\n- -' && num != '\n\n- -'){ 
                     
    //                     if(now_hour <= evening_working_time){
    //                         $('.today_evening_value').addClass('data_number_blinking');
    //                         $('.today_evening_value').addClass('data_number_blinking');
    //                         $('.today_evening_value').addClass('data_number_blinking');
    //                     }else{
    //                         $('.today_evening_value').removeClass('data_number_blinking');
    //                         $('.today_evening_value').removeClass('data_number_blinking');
    //                         $('.today_evening_value').removeClass('data_number_blinking');
    //                     }
                    
                    
    //                     $('.today-evening-set').text(set);
    //                     $('.today-evening-value').text(value);
    //                     $('.today-evening-result').text(num);
    //                 }
          
                    
    //             },
    //             error: function () {
    //                 console.log("error");
    //             }
    //         });
    
    //     }else{
    //         // noon data
    
    //         // get noon data
    //         $.ajax({
    //             url: noon_url,
    //             type: "GET", 
    //             dataType: "json",
    //             data: {
    //             },
    //             success: function (result) {
    //                 const data = result.twoD[0];
    //                 const date = data['Date'];
    //                 const set = data['Set'];
    //                 const value = data['Value'];
    //                 const num = data['No.'];
    
    //                 // update number
    //                 if(set != '{{ twoDSetFinal }}\n\n- -' && value != '{{ twoDSetFinal }}\n\n- -' && num != '{{ twoDSetFinal }}\n\n- -'){ 
                        
    //                     if(now_hour <= noon_working_time){
    //                         $('.today_noon_set').addClass('data_number_blinking');
    //                         $('.today_noon_value').addClass('data_number_blinking');
    //                         $('.today_noon_result').addClass('data_number_blinking');
    //                     }else{
    //                         $('.today_noon_set').removeClass('data_number_blinking');
    //                         $('.today_noon_value').removeClass('data_number_blinking');
    //                         $('.today_noon_result').removeClass('data_number_blinking');
    //                     }
                     
    //                     $('.today-noon-set').text(set);
    //                     $('.today-noon-value').text(value);
    //                     $('.today-noon-result').text(num);
    //                 }
                    
    //             },
    //             error: function () {
    //                 console.log("error");
    //             }
    //         });
    //     }
    // }

    const getModernInternet = function(){
        // modern and internet
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
    }

    
    const gettingEveningData = function(){
        $.ajax({
            url: twoD_url,
            type: "GET", 
            dataType: "json",
            cache:false,
            data: {
            },
            success: function (result) {
                
                const last_set = result.index[0].last;
                const total_value = result.index[0].total_value;
                var update_time = `${today.getFullYear()}-${today.getUTCMonth() + 1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
                const last_value = insertDecimal(parseInt(total_value.toString().substring(0,8))).toFixed(2);
    
                // update number
    

                var first_num = last_set.toString().slice(-1);
                var last_num = parseInt(last_value.toString().slice(-4));
                var two2_result = first_num + last_num;

                $('.today-evening-set').text(last_set);
                $('.today-evening-value').text(last_value);
                $('.lucky_number').text(two2_result);
                $('.update-time').html(`<span style="color:#52B356">&#10003;</span> Updated: ${update_time}`);

                $('.lucky_number').addClass('lucky_number_blinking');

                console.log('Evening Data Update');
            },
            error: function () {
                console.log("error");
            }
        });
    }

    const getttingNoonData = function(){
        $.ajax({
            url: twoD_url,
            type: "GET", 
            dataType: "json",
            cache:false,
            data: {
            },
            success: function (result) {
                
                const last_set = result.index[0].last;
                const total_value = result.index[0].total_value;
                var update_time = `${today.getFullYear()}-${today.getUTCMonth() + 1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
                const last_value = insertDecimal(parseInt(total_value.toString().substring(0,8))).toFixed(2);
    
                // update number
    

                var first_num = last_set.toString().slice(-1);
                var last_num = parseInt(last_value.toString().slice(-4));
                var two2_result = first_num + last_num;

                $('.today-noon-set').text(last_set);
                $('.today-noon-value').text(last_value);
                $('.lucky_number').text(two2_result);
                $('.update-time').html(`<span style="color:#52B356">&#10003;</span> Updated: ${update_time}`);
                $('.lucky_number').addClass('lucky_number_blinking');

                console.log('Noon Data Update');

            },
            error: function () {
                console.log("error");
            }
        });
    }

    const getNoonFinalData = function(){
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
            var update_time = `${today.getFullYear()}-${today.getUTCMonth() + 1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`

            // update number
            $('.today-noon-set').text(set);
            $('.today-noon-value').text(value);
            $('.today-noon-result').text(num);
            $('.lucky_number').text(num);
            $('.update-time').text(`Updated : ${update_time}`);

            console.log('Noon Final Data Success');
        },
        error: function () {
            console.log("error");
        }
        });
    }

    const getEveningFinalData = function(){
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
                var update_time = `${today.getFullYear()}-${today.getUTCMonth() + 1}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
    
                // update number
                $('.today-evening-set').text(set);
                $('.today-evening-value').text(value);
                $('.today-evening-result').text(num);
                $('.lucky_number').text(num);
                $('.update-time').text(`Updated : ${update_time}`);

                console.log('Evening Final Data Success');

            },
            error: function () {
                console.log("error");
            }
        });
    }

      


    // init

    $.ajax({
        url: twoD_url,
        type: "GET", 
        dataType: "json",
        cache:false,
        data: {
        },
        success: function (result) {
            const last_date_result = result.datetime;
            const last_date = last_date_result.toString().substring(0,10);
            const today_date = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
         
            if(last_date == today_date){
               
                if(now_hour > noon){
                    getNoonFinalData();
                    if(now_hour > evening){
                        getEveningFinalData();
                    }else {
                        if(now_hour > evening_working_time){
                            gettingEveningData();
                            setInterval(() => {
                                gettingEveningData();
                            }, 5000);
                        }else{
                            getNoonFinalData();
                        }
                    }
                }else{
                    if(now_hour > noon_working_time){
                        getttingNoonData();
                        setInterval(() => {
                            getttingNoonData();
                        }, 5000);
                    }
                }
                

            }else{
                getOldNum();
            }

        },
        error: function () {
            console.log("error");
        }
    });


  

    getModernInternet();

    // functions call every 5 seconds
    setInterval(function() {
        getModernInternet();
    }, 5000);
 
});