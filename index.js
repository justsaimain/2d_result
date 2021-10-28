/*
All these code are wrote by justsaimain
If you want to need something about these code, contact me.
Facebook - www.facebook.com/justsaimain
Telegram - t.me/justsaimain
Mail - saimain.primary@gmail.com
*/

$(document).ready(function () {
    // variables

    const evening_url =
        "https://script.googleusercontent.com/macros/echo?user_content_key=VjGocMJHO7EPlGEZPk_V9MzllOqghFAdgQkxrBAmT9J3qDeR-3NgtsLWgHtabHbGRdX5_NfM0zA2Bd0hOfQykpUOP4xSVVebm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnA7wpYBcbC8hS8Zu_VBreS6KtPupjXSgETgIjyauKKelwsQVRMwQshXOk5PE_R0eujOmbnRGq-tk&lib=MZI6bu7bMuCZFcGtLMvcWq-02rlMmUn9c";
    const noon_url =
        "https://script.googleusercontent.com/macros/echo?user_content_key=-4PRxiSnM6MxlXdK0fYVyLWJ9PgnapxhmwDzx94fIB5CWufAWfSxZ85kV4Szcz2VfLoW_W13vRo2Bd0hOfQykuPIBLgAuQBOm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBhMKdr3mjZlOgpWGgftRlCZZJ-qd3lNGu_IBuGnyapFnqJ7rg5NvOFWn12Fp1Dxq7d8MAdYOYtX&lib=MYSvdm741KiQvKD1gOuNd9lc8OvjxXfAZ";
    const morning_mt_url =
        "https://script.googleusercontent.com/macros/echo?user_content_key=vVUVTEjsbabJ1nfFPH32dt3opLgDX20Xb_8U2sS26TP7qzzCpMj0n1QbueobDo5EdZx4SVEN1cakGAbfzbIRODXKkfLv6eJcm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDD7obfcXE_L0m1mn1qzzILd-GteJ15N_YeDOFvd95OSEYJLtBXFnAfFAcnuCPeQx3rQ0hWtQzda&lib=MjjbybzegotMTK8wYZnTVQ5bBiXdpBKA1";
    const evening_mt_url =
        "https://script.googleusercontent.com/macros/echo?user_content_key=dNACemmIJRUy4dnjCQrm9tPwddLmRcwUJ7Rs0FP9KBsEoTvYJvkfgjmmd55rKPsZNIt3pd7Li47Sz_4V3HmTS_KfBym41g_5m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOW1kFVCr77v2Wvew0ZoxB7Dno9mf12V9K7JclQVpp8Y22gJ1kHZcY1zPf1HvSD0VJcdv3aNHr6K&lib=MYtiK1dSqd5PtgpQy1u0RKlkuA_MrNV96";

    const twoD_url = "https://www.myanmar2d3d.com/2d.json";

    // functions

    function insertDecimal(num) {
        return Number((num / 1000).toFixed(3));
    }

    const getModernInternet = function () {
        // modern and internet
        $.ajax({
            url: morning_mt_url,
            type: "GET",
            dataType: "json",
            data: {},
            success: function (result) {
                const data = result.user[0];
                const date = data["Date"];
                const apk = data["Apk"];
                const modern = data["Modern"];
                const internet = data["Internet"];
                var today = new Date();
                var d_day = `${today.getDate()}/${
                    today.getMonth() + 1
                }/${today.getFullYear()}`;

                // update number
                if (date == d_day) {
                    $(".today-morning-modern").text(modern);
                    $(".today-morning-internet").text(internet);
                }
            },
            error: function () {
                console.log("error");
            },
        });

        $.ajax({
            url: evening_mt_url,
            type: "GET",
            dataType: "json",
            data: {},
            success: function (result) {
                const data = result.user[0];
                const date = data["Date"];
                const apk = data["Apk"];
                const modern = data["Modern"];
                const internet = data["Internet"];
                var today = new Date();
                var d_day = `${today.getDate()}/${
                    today.getMonth() + 1
                }/${today.getFullYear()}`;
                // update number
                if (date == d_day) {
                    $(".today-evening-modern").text(modern);
                    $(".today-evening-internet").text(internet);
                }
            },
            error: function () {
                console.log("error");
            },
        });
    };

    const getNoonFinalData = function () {
        // get noon data
        $.ajax({
            url: noon_url,
            type: "GET",
            dataType: "json",
            tryCount: 0,
            retryLimit: 3,
            data: {},
            success: function (result) {
                const data = result.twoD[0];
                const set = data["Set"];
                const value = data["Value"];
                const num = data["No."];
                var getTime = new Date();
                var update_time = `${getTime.getFullYear()}-${
                    getTime.getUTCMonth() + 1
                }-${getTime.getDate()} ${getTime.getHours()}:${getTime.getMinutes()}:${getTime.getSeconds()}`;

                // update number

                $(".today-noon-set").text(set);
                $(".today-noon-value").text(value);
                $(".today-noon-result").text(num);
                $(".lucky_number").text(num);
                $(".update-time").html(
                    `<span style="color:#52B356">&#10003;</span> Updated: ${update_time}`
                );
            },
            error: function (xhr, textStatus, errorThrown) {
                if (textStatus == "timeout") {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }
                if (xhr.status == 500) {
                    //handle error
                } else {
                    //handle error
                }
            },
        });
    };

    const getEveningFinalData = function () {
        // get evening data
        $.ajax({
            url: evening_url,
            type: "GET",
            dataType: "json",
            tryCount: 0,
            retryLimit: 3,
            data: {},
            success: function (result) {
                const data = result.twoD[0];
                const date = data["Date"];
                const set = data["Set"];
                const value = data["Value"];
                const num = data["No."];
                var getTime = new Date();
                var update_time = `${getTime.getFullYear()}-${
                    getTime.getUTCMonth() + 1
                }-${getTime.getDate()} ${getTime.getHours()}:${getTime.getMinutes()}:${getTime.getSeconds()}`;

                // update number
                $(".today-evening-set").text(set);
                $(".today-evening-value").text(value);
                $(".today-evening-result").text(num);
                $(".lucky_number").text(num);
                $(".update-time").html(
                    `<span style="color:#52B356">&#10003;</span> Updated: ${update_time}`
                );
            },
            error: function (xhr, textStatus, errorThrown) {
                if (textStatus == "timeout") {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }
                if (xhr.status == 500) {
                    //handle error
                } else {
                    //handle error
                }
            },
        });

        // get noon data

        $.ajax({
            url: noon_url,
            type: "GET",
            dataType: "json",
            tryCount: 0,
            retryLimit: 3,
            data: {},
            success: function (result) {
                const data = result.twoD[0];
                const set = data["Set"];
                const value = data["Value"];
                const num = data["No."];
                var getTime = new Date();
                var update_time = `${getTime.getFullYear()}-${
                    getTime.getUTCMonth() + 1
                }-${getTime.getDate()} ${getTime.getHours()}:${getTime.getMinutes()}:${getTime.getSeconds()}`;

                // update number

                $(".today-noon-set").text(set);
                $(".today-noon-value").text(value);
                $(".today-noon-result").text(num);
                $(".update-time").html(
                    `<span style="color:#52B356">&#10003;</span> Updated: ${update_time}`
                );
            },
            error: function (xhr, textStatus, errorThrown) {
                if (textStatus == "timeout") {
                    this.tryCount++;
                    if (this.tryCount <= this.retryLimit) {
                        //try again
                        $.ajax(this);
                        return;
                    }
                    return;
                }
                if (xhr.status == 500) {
                    //handle error
                } else {
                    //handle error
                }
            },
        });
    };

    const gettingEveningData = function () {
        $.ajax({
            url: twoD_url,
            type: "GET",
            dataType: "json",
            cache: false,
            data: {},
            success: function (result) {
                const last_set = result.index[0].last;
                const total_value = result.index[0].total_value;
                var getTime = new Date();
                var update_time = `${getTime.getFullYear()}-${
                    getTime.getUTCMonth() + 1
                }-${getTime.getDate()} ${getTime.getHours()}:${getTime.getMinutes()}:${getTime.getSeconds()}`;
                const last_value = insertDecimal(
                    parseInt(total_value.toString().substring(0, 8))
                ).toFixed(2);

                // update number

                var first_num = last_set.toString().slice(-1);
                var last_num = parseInt(last_value.toString().slice(-4));
                var two2_result = first_num + last_num;

                $(".today-evening-set").text(last_set);
                $(".today-evening-value").text(last_value);
                $(".lucky_number").text(two2_result);
                $(".update-time").html(
                    `<span style="color:#52B356">&#128472;</span> Updated: ${update_time}`
                );

                $(".lucky_number").addClass("lucky_number_blinking");
                $(".today-evening-set").addClass("data_number_blinking");
                $(".today-evening-value").addClass("data_number_blinking");

                console.log("Evening Data Update");
            },
            error: function () {
                console.log("error");
            },
        });
    };

    const getttingNoonData = function () {
        $.ajax({
            url: twoD_url,
            type: "GET",
            dataType: "json",
            cache: false,
            data: {},
            success: function (result) {
                const last_set = result.index[0].last;
                const total_value = result.index[0].total_value;
                var getTime = new Date();
                var update_time = `${getTime.getFullYear()}-${
                    getTime.getUTCMonth() + 1
                }-${getTime.getDate()} ${getTime.getHours()}:${getTime.getMinutes()}:${getTime.getSeconds()}`;
                const last_value = insertDecimal(
                    parseInt(total_value.toString().substring(0, 8))
                ).toFixed(2);

                // update number

                var first_num = last_set.toString().slice(-1);
                var last_num = parseInt(last_value.toString().slice(-4));
                var two2_result = first_num + last_num;

                $(".today-noon-set").text(last_set);
                $(".today-noon-value").text(last_value);
                $(".lucky_number").text(two2_result);
                $(".update-time").html(
                    `<span style="color:#52B356">&#128472;</span> Updated: ${update_time}`
                );
                $(".lucky_number").addClass("lucky_number_blinking");

                $(".lucky_number").addClass("lucky_number_blinking");
                $(".today-noon-set").addClass("data_number_blinking");
                $(".today-noon-value").addClass("data_number_blinking");

                console.log("Noon Data Update");
            },
            error: function () {
                console.log("error");
            },
        });
    };

    const getOldNum = function () {
        // noon data
        $.ajax({
            url: noon_url,
            type: "GET",
            dataType: "json",
            data: {},
            success: function (result) {
                const data = result.twoD[1];
                const set = data["Set"];
                const value = data["Value"];
                const num = data["No."];
                var today = new Date();
                var update_time = `${today.getFullYear()}-${
                    today.getMonth() + 1
                }-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

                // update number
                $(".today-noon-set").text(set);
                $(".today-noon-value").text(value);
                $(".today-noon-result").text(num);
            },
            error: function () {
                console.log("error");
            },
        });

        $.ajax({
            url: evening_url,
            type: "GET",
            dataType: "json",
            data: {},
            success: function (result) {
                const data = result.twoD[1];
                const set = data["Set"];
                const date = data["Date"];
                const value = data["Value"];
                const num = data["No."];
                var today = new Date();
                var update_time = `${today.getFullYear()}-${
                    today.getUTCMonth() + 1
                }-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

                // update number
                $(".today-evening-set").text(set);
                $(".today-evening-value").text(value);
                $(".today-evening-result").text(num);
                $(".lucky_number").text(num);
                $(".update-time").html(
                    `<span style="color:#52B356">&#10003;</span> Result : ${date}`
                );
            },
            error: function () {
                console.log("error");
            },
        });

        $.ajax({
            url: morning_mt_url,
            type: "GET",
            dataType: "json",
            data: {},
            success: function (result) {
                const data = result.user[1];
                const date = data["Date"];
                const apk = data["Apk"];
                const modern = data["Modern"];
                const internet = data["Internet"];
                var today = new Date();
                var d_day = `${today.getDate()}/${
                    today.getMonth() + 1
                }/${today.getFullYear()}`;

                // update number
                if (date == d_day) {
                    $(".today-morning-modern").text(modern);
                    $(".today-morning-internet").text(internet);
                }
            },
            error: function () {
                console.log("error");
            },
        });

        $.ajax({
            url: evening_mt_url,
            type: "GET",
            dataType: "json",
            data: {},
            success: function (result) {
                const data = result.user[1];
                const date = data["Date"];
                const apk = data["Apk"];
                const modern = data["Modern"];
                const internet = data["Internet"];
                var today = new Date();
                var d_day = `${today.getDate()}/${
                    today.getMonth() + 1
                }/${today.getFullYear()}`;
                // update number
                if (date == d_day) {
                    $(".today-evening-modern").text(modern);
                    $(".today-evening-internet").text(internet);
                }
            },
            error: function () {
                console.log("error");
            },
        });
    };

    // start working

    const now = new Date().getTime();
    // const now = new Date().setHours(16, 31);
    const noon = new Date().setHours(12, 1);
    const evening = new Date().setHours(16, 30);
    const noon_working_time = new Date().setHours(10, 0);
    const evening_working_time = new Date().setHours(15, 0);

    if (now > evening) {
        console.log("Get today all data and stop loading all remove interval");
        getEveningFinalData();
    } else if (now > noon_working_time && now < noon) {
        console.log("Start Working for Noon Data");
        getttingNoonData();
    } else if (now > noon && now < evening_working_time) {
        console.log(
            "Get Noon Final Data and Stop Working before Evening Working Time"
        );
        getNoonFinalData();
    } else if (now > evening_working_time && now < evening) {
        console.log("Start Working for Evening Data");
        gettingEveningData();
    } else {
        console.log("Still not start working for today");
    }

    setInterval(() => {
        getModernInternet();
    }, 5000);
});
