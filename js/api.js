const paoFix = "http://www.mstonepharma.com:9000/"
async function post(url, parmas, callBack) {
    $.ajax({
        type: "POST",
        url: paoFix + url,
        data: parmas,
        contentType: "application/x-www-form-urlencoded",
        success: function (data) {
            callBack(data.data)
        }
    });
}