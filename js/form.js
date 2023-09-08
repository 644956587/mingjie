function appendForm() {
  const html = `
    <div class="pub-content">
      <div class="title">${ isEn == 1 ?  "联系我们" : "contact us"}</div>
      <div class="info">
        ${ isEn == 1 ?  "联系我们获取明捷医药最新内容" : "Contact us for the latest medical content"}
      </div>
    </div>
    <div class="form">
      <form role="form">
        <div class="item frist">
          <input
            type="text"
            class="form-control"
            id="form-name"
            placeholder="${ isEn == 1 ?  "*姓名" : "Name"}"
          />
          <input
            type="text"
            class="form-control"
            id="form-phone"
            placeholder="${ isEn == 1 ?  "*联系电话" : "Tel"}"
          />
        </div>
        <div class="item">
          <input
            type="form-email"
            class="form-control"
            id="email"
            placeholder="${ isEn == 1 ?  "邮箱" : "Email"}"
          />
        </div>
        <div class="item">
          <textarea
            id="form-remark"
            class="form-control"
            rows="4"
            placeholder="${ isEn == 1 ?  "关注的内容" : "Content of concern"}"
          ></textarea>
        </div>
        <div class="button" onclick="saveFrom()">${ isEn == 1 ?  "提交" : "Submit"}</div>
      </form>
    </div>
    `
  $('.contactUs').html(html)
}
function saveFrom() {
  const obj = {
    name: $('#form-name').val(),
    phone: $('#form-phone').val(),
    email: $('#form-email').val(),
    remark: $('#form-remark').val()
  }
  if(!obj.name) {
    swal({
      icon: "error",
      text: isEn == 1 ? "请输入姓名" :'Please enter a name',
      button: isEn == 1 ?  "确定" : "OK"
    });
    return false
  }
  if(!obj.phone) {
    swal({
      icon: "error",
      text: isEn == 1 ? "请输入联系电话" :'Please enter your contact number',
      button: isEn == 1 ?  "确定" : "OK"
    });
    return false
  }else {
    var re = /^1[3,4,5,6,7,8,9][0-9]{9}$/;
		var result = re.test(obj.phone); 
		if(!result) {
      swal({
        icon: "error",
        text: isEn == 1 ? "手机号码格式不正确" :'The format of the mobile phone number is not correct',
        button: isEn == 1 ?  "确定" : "OK"
      });
      return false
		}
  }
  console.log(obj,'obj');
  swal({
    icon: "success",
    button: isEn == 1 ?  "确定" : "OK"
  });
}