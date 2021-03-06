let resume = `# XXX
137xxxxxxxx | XXX邮箱 | 居住地
Profile：XXX
Github: XXX
应聘岗位 | 前端开发工程师

## 专业技能
- HTML5, CSS3 & JavaScript
    - 能够使用原生 JavaScript 独立制作精美网页
    - 掌握 HTML5 如 canvas 、 nav 等语义化标签及 WebStorage API 等
    - 掌握 CSS3 动画、过渡、弹性盒子布局、媒体查询等响应式设计常用技术
- React & React Native
    - 有 React 的开发经历，理解 JSX 、组件、 props 、 state 及生命周期等
    - 有 React Native 移动端开发的经历，掌握原生 UI 组件、 React Navigation 、动画等 API 的使用
- 移动端开发
    - 会使用 REM 、 vw / vh 、 媒体查询等技术制作适配手机设备的页面
- Node.js
    - 搭配 Express 和 Socket.IO 开发在线聊天室，并已将项目部署上线
- Webpack
    - 有使用 Webpack 打包项目的经验，了解其管理资源的方法，如 css-loader 、 file-loader 等
- 其他
    - 熟悉 jQuery 常用 API ，如 DOM 操作、特效、事件等。曾使用原生 JavaScript 封装简易版的 $.ajax()
    - 掌握 Scss 、 Less 的使用，理解嵌套规则、父选择器 & 、变量、混合等的使用
    - 理解 MVC 、 MVVM 思想，掌握 HTTP 基础等

## 项目经验
### XXX
- 关键词：\`JavaScript\`、\`CSS3\`、\`Promise\`、\`Markdown\`
- 源码链接：xxx
- 预览链接：xxx
- 描述：xxx

### XXX
- 关键词：\`React\`、\`React Native\`、\`组件化思想\`、\`3D 转换\`、\`动画\`、\`渐变\`、\`内外阴影\`
- 源码链接：xxx
- 预览链接：xxx
- 描述：xxx

### XXX
- 关键词：\`HTML5\`、\`Canvas\`、\`ES6\`、\`JavaScript\`
- 源码链接：xxx
- 预览链接：xxx
- 描述：xxx

### XXX
- 关键词：\`jQuery\`、\`Loop模式\`、\`缩略图模式\`、\`Rem\`、\`适配移动端\`、\`ES6\`
- 源码链接：xxx
- 预览链接：xxx
- 描述：xxx

### XXX
- 关键词：\`jQuery\`、\`CSS3 过渡动画\`、\`组件化思想\`、\`MVC 思想\`、\`媒体查询\`
- 源码链接：xxx
- 预览链接：xxx
- 描述：xxx

### XXX
- 关键词：\`Node.js\`、\`Socket.IO\`、\`Express\`
- 源码链接：xxx
- 预览链接：xxx
- 描述：xxx

## 教育经历
### XXX
XXX - XXX
- 专业学历：xxx xxx
`

let code_ready = `/*
 * 面试官您好
 * 我是XXX
 * 下面我将向您展示制作简历的过程
 */

/* 为简历添加一个过渡，使变化看起来更柔和 */
* {
  transition: all 0.3s;
}
/* 再加个背景色 */
body {
  background: #455A64;
}
/* 给代码加个边框 */
#code_body {
  width: 100%;
  border: 1px solid #CFD8DC;
  background: #CFD8DC;
  padding: 16px;
  overflow: auto;
}

/* 让代码高亮起来 */
.token.comment, .token.punctuation {
  color: #757575;
}
.token.selector {
  color: #007400;
}
.token.property {
  color: #cf1f1f;
}

/* 
 * 给它们来个特效
 * 让它们在被编辑的时候产生“呼吸”的效果
 */
.breathe {
  animation: breathe 3s ease 0s infinite;
}


/* 现在开始写简历 */

/* 让代码框腾出一些的位置给我的简历框 */
#options {
  width: 32%;
}
/* 准备一个白纸 */
#paper {
  flex: 1;
  background: #fdfdfd;
  margin: 16px;
  overflow: auto;
  white-space: pre-wrap;
}

/* 接下来，请看右边 */

`

let code_marked = `
/* 
 * 接下来我要使用一个优秀的库 marked.js
 * 来使我的简历变成一篇 Markdown
 * (https://github.com/markedjs/marked)
 */
`

let code_beautify_resume = `
/* 调整我的简历，让它变得再好看一点 */
#paper {
  white-space: unset;
  padding: 0 32px;
  font-size: 14px;
}
#paper a {
  color: #455A64;
}
#paper ul {
  padding-left: 20px;
}
/* 让每个模块上下间隔明显一点 */
#paper > div {
  margin: 28px 0;
}

/* 接下来是精细的调整 */

/* 首先，调整我的“基础信息”板块 */
#paper h1 {
  font-size: 22px;
  margin-bottom: 10px;
}
#information {
  text-align: center;
}
#information p {
  line-height: 24px;
  white-space: pre-wrap;
}

/* 然后是详细介绍模块 */
#paper h2 {
  font-size: 16px;
  border-bottom: 1px solid #455A64;
  padding-bottom: 6px;
  margin-bottom: 6px;
}
#paper h3 {
  display: inline-block;
  font-size: 14px;
  margin: 6px 0;
}
#skills > ul ul {
  margin: 4px 0;
}
#skills li, #works li, #education li {
  margin-bottom: 4px;
}

/* 调整“教育经历”中时间的位置 */
#internship, #education {
  position: relative;
}
#internship p, #education p {
  position: absolute;
  right: 0px;
  top: 40px;
}


/* 接下来添加个头像吧！ */
`

let code_photo = `
/* 把我的头像放在个人信息里 */
#information {
  position: relative;
}
#information img {
  width: 90px;
  position: absolute;
  right: 0px;
  top: -10px;
}
/* 让多余的照片隐藏吧~ */
#information {
  overflow: hidden;
}

/* 
 * 这就是我的简历
 * 期待和您进行更深的接触
 * 
 *                     *^_^*
 */
`

writeCode(code_ready, '').then(() => {
  $('#paper').addClass('breathe')
  $('#code_body').removeClass('breathe')
  writeResume().then(() => {
    $('#code_body').addClass('breathe')
    $('#paper').removeClass('breathe')
    writeCode(code_marked, code_ready).then(() => {
      $('#paper')[0].innerHTML = marked(resume)
      $('#paper').prepend('<div id="information"></div>', '<div id="skills"></div>', '<div id="works"></div>', '<div id="internship"></div>', '<div id="education"></div>')
      $('#information').append($('h1'), $('p').first())
      $('#skills').append($('h2:contains("技能")'), $('ul').first())
      $('#education').append($('h2:contains("教育")'), $('h3:contains("学院")'), $('p').last(), $('ul').last())
      $('#internship').append($('h2:contains("实习")'), $('h3:contains("公司")'), $('#paper > p'), $('#paper > ul').last())
      $('#works').append($('h2:contains("项目")'), $('#paper').children().not($('div')))
    }).then(() => {
      $('#paper')[0].scrollTop = 0
      writeCode(code_beautify_resume, code_ready + code_marked).then(() => {
        $('#information').append('<img src="./images/avatar.png" alt="头像" />')
      }).then(() => {
        writeCode(code_photo, code_ready + code_marked + code_beautify_resume).then(() => {
          $('#paper').addClass('breathe')
          $('#code_body').removeClass('breathe')
          setTimeout(() => {
            $('#options').css({ 'width': '23%' })
            $('#options').append('<a class="downloadResume" href="resume.pdf" target="_blank" download="前端开发-蔡嘉琳">下载 PDF 简历</a>')
          }, 1000)
        })
      })
    })
  })
})


function writeCode(code, origin) {
  let n = 1
  return new Promise(resolve => {
    let intervalID = setInterval(() => {
      code_body.innerHTML = Prism.highlight(origin + code.substr(0, n), Prism.languages.css, 'css');
      code_style.innerHTML = origin + code.substr(0, n)
      code_body.scrollTop = code_body.scrollHeight
      n++
      if (n === code.length) {
        window.clearInterval(intervalID)
        resolve.call(undefined)
      }
    }, 0)
  })
}
function writeResume() {
  let n = 1
  return new Promise(resolve => {
    let intervalID = setInterval(() => {
      paper.innerHTML = resume.substr(0, n)
      paper.scrollTop = paper.scrollHeight
      n++
      if (n === resume.length) {
        window.clearInterval(intervalID)
        resolve.call(undefined)
      }
    }, 1)
  })
}