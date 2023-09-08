function appendFooter() {
    $.ajax({
        type: "GET",
        url: "http://www.mstonepharma.com:9000/app/1/get.do?id=1",
        success: function (data) {
            const d = data.data || {}
            // console.log(JSON.stringify(d, null, 2), "data---????-");
            // console.log(isEn, 'isEn');
            appendHeader(d);
            const html = `
            <div class="footer">
              <div class="info">
                <div class="title">
                  ${isEn == 1 ? '友情链接' : 'Links'}：
                  <a target="_blank" href="http://www.cde.org.cn/">${isEn == 1 ? '国家药品监督管理局药品审评中心' : 'CDE'}</a><span>|</span><a target="_blank" href="https://www.nmpa.gov.cn/">${isEn == 1 ? '国家药品监督管理局' : 'National Medical Products Administration'}</a><span>|</span><a target="_blank" href="https://www.fda.gov/">FDA</a>
                </div>
              </div>
              <div class="content">
                <div class="w-1200">
                  <div class="footerDiv">
                    <ul>
                      <li class="gs">
                        <div class="item-title">${isEn == 1 ? '公司' : 'Company'}</div>
                        <div class="item"><a>${isEn == 1 ? '关于明捷' : 'Introduction'}</a></div>
                        <div class="item"><a>${isEn == 1 ? '团队介绍' : 'History'}</a></div>
                        <div class="item"><a>${isEn == 1 ? '明捷服务' : 'Team'}</a></div>
                        <div class="item"><a>${isEn == 1 ? '资料下载' : 'Services'}</a></div>
                        <div class="item"><a>${isEn == 1 ? '加入明捷' : 'Join us'}</a></div>
                      </li>
                      <li class="contait">
                        <div class="item-title">${isEn == 1 ? '联系我们' : 'Contact Us'}</div>
                        <div class="item">${isEn == 1 ? '电话' : 'Phone'}：<a href="tel:${d.appMobile}">${d.appMobile}</a></div>
                        <div class="item">${isEn == 1 ? '邮箱' : 'Email'}：${d.appEmail}</div>
                        <div class="item">${d.appWorktime}</div>
                      </li>
                      <li class="address">
                        <div class="item-title">${isEn == 1 ? '公司地址' : 'Company address'}</div>
                        <div class="item">${isEn == 1 ? d.appAddress1 : d.appAddress1En}</div>
                      </li>
                      <li class="ewm">
                        <img src="./img/image 10@2x.png" alt="" />
                        <div class="gzh">${isEn == 1 ? '微信公众号' : 'Wechat'}</div>
                      </li>
                    </ul>
                    <div class="footerBootom">${isEn == 1 ? d.appCopyright : d.appCopyrightEn}</div>
                  </div>
                </div>
              </div>
            </div>
            `
            $('.footerWrap').html(html)
        }
    });

}