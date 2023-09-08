var isEn = localStorage.getItem("isEn");
init()
function init() {
    const language = localStorage.getItem('isEn')
    if (!language) {
        localStorage.setItem('isEn', 1)
    }
}
const changeLang = () => {
    const language = localStorage.getItem('isEn')
    if (language == 1) {
        localStorage.setItem('isEn', 2)
    } else {
        localStorage.setItem('isEn', 1)
    }
    location.reload()
}

function getUrlParams(url = '') {
    // 通过 ? 分割获取后面的参数字符串
    let urlStr = url || window.location.href.split('?')[1]
    // 创建空对象存储参数
    let obj = {};
    // 再通过 & 将每一个参数单独分割出来
    let paramsArr = urlStr.split('&')
    for (let i = 0, len = paramsArr.length; i < len; i++) {
        // 再通过 = 将每一个参数分割为 key:value 的形式
        let arr = paramsArr[i].split('=')
        obj[arr[0]] = arr[1];
    }
    return obj
}

function appendHeader(d) {
    $('.menu-wrap').html(`
    <div class="menu">
    <div class="left">
      <a href="./index.html"><img src="./img/logo.png" alt="" /></a>
    </div>
    <div class="right">
      <div class="top">
        <img class="phone" src="./img/Frame@2x.png" alt="" />
        <span><a href="tel:${d.appMobile}">${d.appMobile}</a></span>
        <span class="lang" onclick="changeLang()">${isEn == 1 ? 'EN' : '中文'}</span>
        <img class="search" src="./img/search-2-line@2x.png" alt="" />
      </div>
      <div class="bottom">
        <ul>
          <li>关于我们</li>
          <li>能力与解决方案</li>
          <li>产品领域</li>
          <li>新闻资讯</li>
          <li>客户中心</li>
          <li>加入我们</li>
        </ul>
      </div>
    </div>
  </div>
    `)
}

function showUrl(url) {
    if (url) {
        const item = JSON.parse(url);
        if (item.length) {
            return "http://www.mstonepharma.com:9000" + item[0].path;
        } else {
            return null;
        }
    } else {
        return null;
    }
}
$(() => {
    createCss('./css/public.css')
    createScript('./js/api.js')
    createScript('./js/form.js')
    createScript('./js/footer.js')
    createScript('https://unpkg.com/sweetalert/dist/sweetalert.min.js')
    setTimeout(() => {
        appendForm()
        appendFooter()
    }, 50);
});

function createScript(url) {
    var script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
}
function createCss(url) {
    var link = document.createElement('link');
    link.rel = 'stylesheet'
    link.href = url;
    document.head.appendChild(link);
}

const appenLayout2Menu = (_index) => {
    const list = [
        { name: '公司介绍', enName: 'About', path: './about.html' },
        { name: '发展历程', enName: 'History', path: './history.html' },
        { name: '管理团队', enName: 'Management team', path: '' },
        { name: '资质荣誉', enName: 'Qualification honor', path: '' },
        { name: '商业道德准则', enName: 'Business ethics', path: '' },
        { name: '实验室及设备', enName: 'Laboratory and equipment', path: '' }
    ]
    let html = ``
    list.forEach((i,index) => {
        const cls = index === _index? 'active' : null
        html+= `
            <a class="${cls}" href =" ${i.path}">${isEn == 1 ? i.name : i.enName}</a>
        `
    });
    $('.Layoutlr .left').html(html)
}