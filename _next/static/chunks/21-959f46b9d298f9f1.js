"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[21],{6402:(e,s,t)=>{t.d(s,{A:()=>g});var a=t(8017),i=t(4109),r=t(4425),c=t.n(r),l=t(6392),n=t.n(l),x=t(5522),h=t(1471),d=t.n(h);t(6002);class m extends i.Component{render(){return(0,a.jsx)("nav",{className:"bg-white shadow-sm",children:(0,a.jsxs)("div",{className:"max-w-7xl mx-auto px-4",children:[(0,a.jsxs)("div",{className:"flex justify-between h-16",children:[(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsxs)("a",{href:"/",className:"flex items-center",children:[(0,a.jsx)("i",{className:"ri-brain-line text-green-600 text-2xl mr-2"}),(0,a.jsx)("span",{className:"".concat(n().className," text-xl text-gray-900"),children:"青衫 Neuro"})]})}),(0,a.jsx)("div",{className:"md:hidden flex items-center",children:(0,a.jsx)("button",{onClick:this.toggleMobileMenu,className:"text-gray-500 hover:text-purple-400",children:(0,a.jsx)("i",{className:"ri-".concat(this.state.isMobileMenuOpen?"close":"menu","-line text-2xl")})})}),(0,a.jsxs)("div",{className:"hidden md:flex items-center space-x-8",children:[(0,a.jsx)(d(),{href:"/",className:this.isActive("/"),children:"量表"}),(0,a.jsx)(d(),{href:"/about",className:this.isActive("/about"),children:"关于"}),(0,a.jsx)(d(),{href:"/medical-map",className:this.isActive("/medical-map"),children:"就诊地图"}),(0,a.jsx)(d(),{href:"/res",className:this.isActive("/res"),children:"资源引索"}),(0,a.jsx)(d(),{href:"#",className:this.isActive("/terms"),children:"使用条款"})]})]}),this.state.isMobileMenuOpen&&(0,a.jsx)("div",{className:"md:hidden",children:(0,a.jsxs)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:[(0,a.jsx)(d(),{href:"/",className:"block px-3 py-2 rounded-md ".concat(this.isActive("/")),children:"量表"}),(0,a.jsx)(d(),{href:"/about",className:"block px-3 py-2 rounded-md ".concat(this.isActive("/about")),children:"关于"}),(0,a.jsx)(d(),{href:"/medical-map",className:"block px-3 py-2 rounded-md ".concat(this.isActive("/medical-map")),children:"就诊地图"}),(0,a.jsx)(d(),{href:"/res",className:"block px-3 py-2 rounded-md ".concat(this.isActive("/res")),children:"资源引索"}),(0,a.jsx)(d(),{href:"#",className:"block px-3 py-2 rounded-md ".concat(this.isActive("/terms")),children:"使用条款"})]})})]})})}constructor(...e){super(...e),this.state={isMobileMenuOpen:!1},this.isActive=e=>this.props.router.pathname===e?"text-green-600 font-medium":"text-gray-500 hover:text-purple-400",this.toggleMobileMenu=()=>{this.setState(e=>({isMobileMenuOpen:!e.isMobileMenuOpen}))}}}let o=(0,x.withRouter)(m);class j extends i.Component{render(){return(0,a.jsx)("footer",{className:"bg-white mt-8",children:(0,a.jsxs)("div",{className:"max-w-7xl mx-auto px-4 py-12",children:[(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex items-center mb-4",children:[(0,a.jsx)("i",{className:"ri-brain-line text-green-600 text-2xl mr-2"}),(0,a.jsx)("span",{className:"font-['Pacifico'] text-xl text-gray-900",children:"青衫 Neuro"})]}),(0,a.jsx)("p",{className:"text-gray-500 text-sm",children:"致力于孤独症谱系权威资讯资源"}),(0,a.jsxs)("a",{href:"https://qingshanasd.cn/",className:"text-gray-500 hover:text-green-600 transition-colors duration-300 text-sm inline-flex items-center mt-1",children:[(0,a.jsx)("i",{className:"ri-earth-line text-sm mr-1"}),"qingshanasd.cn"]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:"font-medium text-gray-900 mb-4",children:"资源"}),(0,a.jsxs)("ul",{className:"space-y-2",children:[(0,a.jsx)("li",{children:(0,a.jsx)(d(),{href:"/",className:"text-gray-500 hover:text-gray-900 text-sm",children:"量表自测"})}),(0,a.jsx)("li",{children:(0,a.jsx)(d(),{href:"/medical-map",className:"text-gray-500 hover:text-gray-900 text-sm",children:"就诊地图"})}),(0,a.jsx)("li",{children:(0,a.jsx)(d(),{href:"/res",className:"text-gray-500 hover:text-gray-900 text-sm",children:"资源引索"})})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:"font-medium text-gray-900 mb-4",children:"关于"}),(0,a.jsxs)("ul",{className:"space-y-2",children:[(0,a.jsx)("li",{children:(0,a.jsx)(d(),{href:"/about",className:"text-gray-500 hover:text-gray-900 text-sm",children:"关于我们"})}),(0,a.jsx)("li",{children:(0,a.jsx)(d(),{href:"#",className:"text-gray-500 hover:text-gray-900 text-sm",children:"使用条款"})})]})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h4",{className:"font-medium text-gray-900 mb-4",children:"联系"}),(0,a.jsxs)("ul",{className:"space-y-2",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"mailto:contact@qingshanasd.com",className:"text-gray-500 hover:text-gray-900 text-sm",children:"邮件"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://www.zhihu.com/people/QingshanAspie",target:"_blank",className:"text-gray-500 hover:text-gray-900 text-sm",children:"知乎"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"#",target:"_blank",className:"text-gray-500 hover:text-gray-900 text-sm",children:"微信公众号"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"https://github.com/ittuann/qingshanasd",target:"_blank",className:"text-gray-500 hover:text-gray-900 text-sm",children:"GitHub"})})]})]})]}),(0,a.jsx)("div",{className:"border-t mt-12 pt-8",children:(0,a.jsxs)("div",{className:"flex flex-col items-center space-y-4",children:[(0,a.jsx)("p",{className:"text-center text-gray-500 text-sm",children:"\xa9 2025 青衫 Neuro. All rights reserved."}),(0,a.jsx)("div",{className:"flex items-center space-x-2",children:(0,a.jsxs)("p",{className:"text-center text-gray-500 text-sm",children:["除特别说明外，本站内容均采用",(0,a.jsx)("a",{href:"https://creativecommons.org/licenses/by-nc-nd/4.0/",target:"_blank",className:"text-green-600 hover:text-green-600/80 transition",children:"知识共享署名-非商业性使用-禁止演绎 4.0 国际许可协议"}),"进行许可。"]})}),(0,a.jsx)("div",{className:"flex items-center space-x-2",children:(0,a.jsx)("a",{href:"https://creativecommons.org/licenses/by-nc-nd/4.0/",target:"_blank",rel:"license",children:(0,a.jsx)("img",{src:"/cc-by-nc-nd.svg",alt:"CC BY-NC-ND 4.0",width:"88",height:"31"})})}),(0,a.jsx)("div",{className:"flex flex-col items-center space-y-2 mt-4",children:(0,a.jsxs)("a",{href:"https://github.com/ittuann/qingshanasd",target:"_blank",className:"flex items-center space-x-2 text-gray-600 hover:text-gray-900",children:[(0,a.jsx)("i",{className:"ri-github-fill"}),(0,a.jsx)("span",{children:"网站开源代码"})]})})]})})]})})}}class g extends i.Component{render(){let{children:e,title:s="青衫 Neuro",description:t="致力于孤独症谱系权威资讯资源"}=this.props;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(c(),{children:[(0,a.jsx)("title",{children:s}),(0,a.jsx)("meta",{name:"description",content:t}),(0,a.jsx)("meta",{name:"keywords",content:"ASD,ADHD"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"})]}),(0,a.jsxs)("div",{className:"bg-gray-50 min-h-screen flex flex-col",children:[(0,a.jsx)(o,{}),(0,a.jsx)("main",{className:"flex-grow",children:e}),(0,a.jsx)(j,{})]})]})}}}}]);