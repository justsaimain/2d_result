/*
All these code are wrote by justsaimain
If you want to need something about these code, contact me.
Facebook - www.facebook.com/justsaimain
Telegram - t.me/justsaimain
Mail - saimain.primary@gmail.com
*/

$(document).ready(function () {
    const api_url =
        "https://script.google.com/macros/s/AKfycbx56cVIE5RA_Jwvr7vYuETObu94KLfo4HpE_L3Wz91jw6klSeUAm8x-cYcbUYwH08S2/exec";
    const evening_url =
        "https://script.googleusercontent.com/macros/echo?user_content_key=VjGocMJHO7EPlGEZPk_V9MzllOqghFAdgQkxrBAmT9J3qDeR-3NgtsLWgHtabHbGRdX5_NfM0zA2Bd0hOfQykpUOP4xSVVebm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnA7wpYBcbC8hS8Zu_VBreS6KtPupjXSgETgIjyauKKelwsQVRMwQshXOk5PE_R0eujOmbnRGq-tk&lib=MZI6bu7bMuCZFcGtLMvcWq-02rlMmUn9c";
    const noon_url =
        "https://script.googleusercontent.com/macros/echo?user_content_key=-4PRxiSnM6MxlXdK0fYVyLWJ9PgnapxhmwDzx94fIB5CWufAWfSxZ85kV4Szcz2VfLoW_W13vRo2Bd0hOfQykuPIBLgAuQBOm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBhMKdr3mjZlOgpWGgftRlCZZJ-qd3lNGu_IBuGnyapFnqJ7rg5NvOFWn12Fp1Dxq7d8MAdYOYtX&lib=MYSvdm741KiQvKD1gOuNd9lc8OvjxXfAZ";
    const morning_mt_url =
        "https://script.googleusercontent.com/macros/echo?user_content_key=vVUVTEjsbabJ1nfFPH32dt3opLgDX20Xb_8U2sS26TP7qzzCpMj0n1QbueobDo5EdZx4SVEN1cakGAbfzbIRODXKkfLv6eJcm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDD7obfcXE_L0m1mn1qzzILd-GteJ15N_YeDOFvd95OSEYJLtBXFnAfFAcnuCPeQx3rQ0hWtQzda&lib=MjjbybzegotMTK8wYZnTVQ5bBiXdpBKA1";
    const evening_mt_url =
        "https://script.googleusercontent.com/macros/echo?user_content_key=dNACemmIJRUy4dnjCQrm9tPwddLmRcwUJ7Rs0FP9KBsEoTvYJvkfgjmmd55rKPsZNIt3pd7Li47Sz_4V3HmTS_KfBym41g_5m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnOW1kFVCr77v2Wvew0ZoxB7Dno9mf12V9K7JclQVpp8Y22gJ1kHZcY1zPf1HvSD0VJcdv3aNHr6K&lib=MYtiK1dSqd5PtgpQy1u0RKlkuA_MrNV96";


    const now = new Date().getTime();
    const noon = new Date().setHours(12, 1);
    const evening = new Date().setHours(16, 30);
    const noon_working_time = new Date().setHours(10, 0);
    const evening_working_time = new Date().setHours(15, 0);

    const getOldNum = function () {
        // noon data
        $.ajax({
            url: noon_url,
            type: "GET",
            dataType: "json",
            data: {},
            success: function (result) {
                var data = result.twoD[0];
                const set = data["Set"];
                const value = data["Value"];
                const num = data["No."];

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
                const data = result.twoD[0];
                const set = data["Set"];
                const date = data["Date"];
                const value = data["Value"];
                const num = data["No."];

                // update number
                $(".today-evening-set").text(set);
                $(".today-evening-value").text(value);
                $(".today-evening-result").text(num);
                $(".lucky_number").text(num);
                $('.update-time').text("✔ " + date );
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

    const getData = function () {
        $.ajax({
            url: api_url,
            type: "GET",
            dataType: "json",
            data: {},
            success: function (result) {
                var morning_modern = result["morning_modern"];
                var evening_modern = result["noon_modern"];
                var morning_internet = result["morning_internet"];
                var evening_internet = result["noon_internet"];
                var market_status = result["market_status"];
                var noon_result = result["noon_2d"];
                var evening_result = result["evening_2d"];

                var live_set = result["live"]["set"];
                var live_value = result["live"]["value"];
                var live_result = result["live"]["result"];

                var last_update = result["last_update"];

                $(".today-morning-modern").text(morning_modern);
                $(".today-morning-internet").text(morning_internet);

                $(".today-evening-modern").text(evening_modern);
                $(".today-evening-internet").text(evening_internet);

                if (market_status == "Pre-Open2") {
                    $(".lucky_number").text(noon_result);
                }

                if (noon_result == "--") {
                    if (market_status == "Open(I)") {
                        $(".lucky_number").addClass("lucky_number_blinking");
                        $(".today-noon-set").addClass("data_number_blinking");
                        $(".today-noon-value").addClass("data_number_blinking");

                        $(".today-noon-set").text(live_set);
                        $(".today-noon-value").text(live_value);
                        $(".lucky_number").text(live_result);

                        $(".update-time").text("⏳ " + last_update);
                    }
                } else {
                    if (market_status == "Intermission") {
                        $(".lucky_number").text(noon_result);
                        $(".update-time").text("✔ " + last_update);
                    }

                    $(".today-noon-set").text(live_set);
                    $(".today-noon-value").text(live_value);
                    $(".today-noon-result").text(noon_result);
                }

                if (evening_result == "--") {
                    if (market_status == "Open(II)" || now < evening) {
                        $(".lucky_number").addClass("lucky_number_blinking");
                        $(".today-evening-set").addClass(
                            "data_number_blinking"
                        );
                        $(".today-evening-value").addClass(
                            "data_number_blinking"
                        );

                        $(".today-evening-set").text(live_set);
                        $(".today-evening-value").text(live_value);
                        $(".lucky_number").text(live_result);

                        $(".update-time").text("⏳ " + last_update);
                    }
                }

                if (market_status == "Closed") {
                    getOldNum();
                }

                console.log(result);
            },
            error: function () {
                console.log("error");
            },
        });
    };

    getData();

    setInterval(() => {
        getData();
    }, 5000);
});
