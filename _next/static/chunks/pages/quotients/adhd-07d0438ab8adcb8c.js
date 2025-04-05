(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[778],{411:(e,t,s)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/quotients/adhd",function(){return s(4633)}])},4633:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>u});var r=s(8017),i=s(4109),n=s(4760),a=s(7132),l=s(9292),o=s(9061);s(4475);let c=e=>{let{icon:t,iconBg:s="bg-rose-100",content:i}=e;return(0,r.jsx)("div",{className:"bg-gray-50 border border-gray-100 rounded-lg p-4 mt-3",children:(0,r.jsxs)("div",{className:"inline-flex items-center justify-center",children:[(0,r.jsx)("span",{className:"flex-shrink-0 w-8 h-8 ".concat(s," rounded-full flex items-center justify-center"),children:t}),(0,r.jsx)("span",{className:"ml-3 text-left",children:i})]})})},d=e=>{let{showModal:t,onClose:s,content:i}=e;return t?(0,r.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[(0,r.jsx)("div",{className:"fixed inset-0 bg-black/60"}),(0,r.jsxs)("div",{className:"bg-white rounded-lg p-6 max-w-md w-full mx-4 relative z-10",children:[(0,r.jsx)("div",{className:"flex justify-between items-center mb-4",children:(0,r.jsx)("h3",{className:"text-xl font-semibold text-gray-900",children:"重要信息"})}),(0,r.jsx)("div",{className:"space-y-4 max-h-[60vh] overflow-y-auto pr-2",children:i}),(0,r.jsx)("div",{className:"mt-6 flex justify-center",children:(0,r.jsx)("button",{onClick:s,className:"px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200",children:"确定"})})]})]}):null},h=JSON.parse('{"Q":[{"id":1,"text":"当必须完成一件枯燥或者困难的计划任务时，你会粗心犯错:","scoresAagree":[4,3,2,1,0]},{"id":2,"text":"当正在做枯燥或重复性的工作时，你会走神想其他的事情:","scoresAagree":[4,3,2,1,0]},{"id":3,"text":"有人面对你说话时，你很难专心地听完他说的内容:","scoresAagree":[4,3,2,1,0]},{"id":4,"text":"一旦完成任何计划中最具挑战的部分之后，你觉得完成最后的细节是有困难的:","scoresAagree":[4,3,2,1,0]},{"id":5,"text":"当必须从事需要有组织规划性的任务时，你觉得井然有序地完成是有困难的:","scoresAagree":[4,3,2,1,0]},{"id":6,"text":"当有一件需要复杂思考的工作时，你经常逃避或是延后开始:","scoresAagree":[4,3,2,1,0]},{"id":7,"text":"在家里或是在工作时，你经常乱放东西或是找不到东西:","scoresAagree":[4,3,2,1,0]},{"id":8,"text":"你经常因身旁的活动或声音而分心:","scoresAagree":[4,3,2,1,0]},{"id":9,"text":"你认为记住约会或是必须要做的事情很困难:","scoresAagree":[4,3,2,1,0]},{"id":10,"text":"当你必须长时间坐着时，你会坐立不安或者扭动手脚:","scoresAagree":[4,3,2,1,0]},{"id":11,"text":"你在开会这样需要坐好的场合中离开座位:","scoresAagree":[4,3,2,1,0]},{"id":12,"text":"你觉得静不下来，坐不住而且烦躁不安:","scoresAagree":[4,3,2,1,0]},{"id":13,"text":"当有自己独处的时间时，你觉得使自己平静和放松很困难:","scoresAagree":[4,3,2,1,0]},{"id":14,"text":"你像被马达所驱动一样，觉得自己过度地活跃，不得不做事情:","scoresAagree":[4,3,2,1,0]},{"id":15,"text":"在社交场合中，你会发现自己话讲得太多:","scoresAagree":[4,3,2,1,0]},{"id":16,"text":"当与他人交谈时，你会在别人还没把话讲完前就插嘴或接话替对方把话讲完:","scoresAagree":[4,3,2,1,0]},{"id":17,"text":"在需要排队的场合时，你觉得长时间安静的排队很困难:","scoresAagree":[4,3,2,1,0]},{"id":18,"text":"你会在别人忙碌时打断别人:","scoresAagree":[4,3,2,1,0]}]}');var x=s(8872);class m extends i.Component{componentDidMount(){let e=n.A.get(this.state.quotientsName);e&&this.setState({answers:JSON.parse(e)})}getQuestionDetail(){return h.Q}calculateScores(){let e=0,t=0;return Object.entries(this.state.answers).forEach(s=>{let[r,i]=s,n=parseInt(r);n>=1&&n<=9?e+=i.value:n>=10&&n<=18&&(t+=i.value)}),{scoreA:e,scoreB:t}}calculateResult(e,t){let s,r;return e<=16?t<=16?(s="A",r="A"):t<=23?(s="C",r="A"):(s="C",r="B"):e<=23?(s=t<=16?"B":t<=23?"D":"E",r="A"):(s=t<=16?"B":t<=23?"E":"D",r="B"),({A:{A:"您不太可能有ADHD"},B:{A:"您很有可能有ADHD-I（注意力缺失为主）",B:"您非常有可能有ADHD-I（注意力缺失为主）"},C:{A:"您很有可能有ADHD-H（多动/冲动障碍为主）",B:"您非常有可能有ADHD-H（多动/冲动障碍为主）"},D:{A:"您很有可能有ADHD-C（注意力缺失与多动/冲动障碍混合）",B:"您非常有可能有ADHD-C（注意力缺失与多动/冲动障碍混合）"},E:{A:"您很有可能有ADHD-C（注意力缺失与多动/冲动障碍混合，其中多动/冲动障碍比较严重）",B:"您很有可能有ADHD-C（注意力缺失与多动/冲动障碍混合，其中注意力缺失比较严重）"}})[s][r]}render(){let{showResultModal:e,showInfoModal:t,scoreA:s,scoreB:i,result:n,answers:h}=this.state,m=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{icon:(0,r.jsx)("i",{className:"ri-information-2-line text-xl text-rose-400"}),content:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{className:"text-gray-600",children:["焦虑 / 抑郁 / 睡眠障碍",(0,r.jsx)("strong",{children:"等其他情况"}),"均有可能造成分值偏高"]}),(0,r.jsxs)("p",{className:"text-gray-500 mt-2",children:["本量表",(0,r.jsx)("strong",{children:"仅供筛查"}),"，",(0,r.jsx)("strong",{children:"不代表"}),"确诊或作为诊断依据"]})]})}),(0,r.jsx)(c,{icon:(0,r.jsx)("i",{className:"ri-lightbulb-line text-xl text-primary"}),iconBg:"bg-green-100",content:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("p",{className:"text-xs text-gray-600",children:"本量表参考文献："}),(0,r.jsxs)("p",{className:"text-xs text-gray-500 mt-1",children:[(0,r.jsx)("a",{href:"https://www.hcp.med.harvard.edu/ncs/ftpdir/adhd/adhd/18Q_Chinese%20(Traditional)_final.pdf",target:"_blank",rel:"noopener noreferrer",className:"underline hover:text-gray-600 transition-colors",children:"18Q-Chinese-Traditional.pdf"})," ","转自世界卫生组织 Composite International Diagnostic Interview"]}),(0,r.jsxs)("p",{className:"text-xs text-gray-500 mt-2",children:["* 本站符合 GDPR 欧盟通用数据保护条例。页面会在您的本地浏览器中使用 Cookie 临时存储量表填写选项，且会在2小时后自动",(0,r.jsx)("button",{onClick:this.clearAnswersCookie,className:"underline hover:text-gray-600 transition-colors",children:"删除"}),"。"]})]})})]});return(0,r.jsx)(a.A,{title:"成人 ADHD 自填量表 (ASRS) | 青衫 Neuro",description:"注意力缺陷过动障碍（ADHD）成人测试量表，用于筛查成年人存在ADHD的可能性",children:(0,r.jsxs)("main",{className:"max-w-3xl mx-auto px-4 py-8",children:[(0,r.jsxs)("div",{className:"bg-white rounded-lg shadow-sm p-8",children:[(0,r.jsxs)("div",{className:"text-center mb-8",children:[(0,r.jsx)("h1",{className:"text-2xl font-semibold text-gray-900 mb-4",children:"成人 ADHD 自填量表 (ASRS)"}),(0,r.jsx)("div",{className:"mt-2",children:m})]}),(0,r.jsx)(d,{showModal:t,onClose:this.closeInfoModal,content:m}),(0,r.jsxs)("form",{className:"space-y-8",onSubmit:this.handleSubmit,children:[(0,r.jsx)("div",{className:"space-y-10",children:this.getQuestionDetail().map(e=>{var t;return(0,r.jsx)(l.A,{question:e,degree:["经常这样","从来没有"],onAnswerChange:this.handleRadioChange,checkedIndex:null===(t=h[e.id])||void 0===t?void 0:t.index},"quotients_".concat(e.id))})}),(0,r.jsx)("button",{type:"submit",className:"w-full bg-gradient-to-r from-green-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-green-600/90 hover:to-indigo-600/90 transition-all duration-200 shadow-lg shadow-green-600/20",children:"提交"})]})]}),(0,r.jsx)(o.A,{scores:[{title:"A部分",subtitle:"注意力障碍",score:s},{title:"B部分",subtitle:"多动/冲动障碍",score:i}],result:n,showModal:e,onClose:this.closeModal}),(0,r.jsx)(x.A,{isShowButton:!0,isShowProgress:!0})]})})}constructor(...e){super(...e),this.state={quotientsName:"answers_adhd",answers:{},showResultModal:!1,showInfoModal:!0,scoreA:0,scoreB:0,result:""},this.closeModal=()=>{this.setState({showResultModal:!1})},this.closeInfoModal=()=>{this.setState({showInfoModal:!1})},this.handleRadioChange=(e,t,s)=>{let r={...this.state.answers,[e]:{index:s,value:parseInt(t)}};n.A.set(this.state.quotientsName,JSON.stringify(r),{expires:1/12}),this.setState({answers:r})},this.clearAnswersCookie=()=>{n.A.remove(this.state.quotientsName),this.setState({answers:{}})},this.handleSubmit=e=>{if(e.preventDefault(),Object.keys(this.state.answers).length<this.getQuestionDetail().filter(e=>0!==e.id).length){alert("请完成量表所有问题的作答");return}let{scoreA:t,scoreB:s}=this.calculateScores(),r=this.calculateResult(t,s);this.setState({scoreA:t,scoreB:s,result:r,showResultModal:!0})}}}let u=m},4760:(e,t,s)=>{"use strict";function r(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)e[r]=s[r]}return e}s.d(t,{A:()=>i});var i=function e(t,s){function i(e,i,n){if("undefined"!=typeof document){"number"==typeof(n=r({},s,n)).expires&&(n.expires=new Date(Date.now()+864e5*n.expires)),n.expires&&(n.expires=n.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var a="";for(var l in n){if(n[l])a+="; "+l,!0!==n[l]&&(a+="="+n[l].split(";")[0])}return document.cookie=e+"="+t.write(i,e)+a}}return Object.create({set:i,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var s=document.cookie?document.cookie.split("; "):[],r={},i=0;i<s.length;i++){var n=s[i].split("="),a=n.slice(1).join("=");try{var l=decodeURIComponent(n[0]);if(r[l]=t.read(a,l),e===l)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){i(e,"",r({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,r({},this.attributes,t))},withConverter:function(t){return e(r({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(s)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})},8872:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var r=s(8017),i=s(4109);s(4475);class n extends i.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll)}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}render(){let{visible:e,progress:t}=this.state,{isShowProgress:s,isShowButton:i}=this.props;if(!i&&!s)return null;let n=36*Math.PI;return(0,r.jsx)("div",{className:"fixed right-4 bottom-4 z-50",children:(0,r.jsxs)("div",{className:"relative w-10 h-10",children:[i&&e&&(0,r.jsx)("button",{onClick:this.scrollToTop,className:"absolute inset-0 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-secondary flex items-center justify-center z-10","aria-label":"回到顶部",children:(0,r.jsx)("i",{className:"ri-arrow-up-line text-xl text-gray-600"})}),s&&(0,r.jsxs)("svg",{className:"absolute transform -rotate-90 w-10 h-10 z-20 pointer-events-none",viewBox:"0 0 ".concat(40," ").concat(40),children:[(0,r.jsx)("circle",{className:"text-gray-200",strokeWidth:4,stroke:"currentColor",fill:"transparent",r:18,cx:20,cy:20}),(0,r.jsx)("circle",{className:"text-primary transition-all duration-300",strokeWidth:4,strokeDasharray:n,strokeDashoffset:n-t/100*n,strokeLinecap:"round",stroke:"currentColor",fill:"transparent",r:18,cx:20,cy:20})]})]})})}constructor(...e){super(...e),this.state={visible:!1,progress:0},this.handleScroll=()=>{let{isShowProgress:e,isShowButton:t}=this.props;if(e){let e=document.querySelector("footer"),t=0;if(e){let s=window.scrollY,r=e.offsetTop;t=Math.min(s/(r-window.innerHeight)*100,100),this.setState({progress:t})}else t=document.documentElement.scrollTop/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100,this.setState({progress:t})}t&&(window.scrollY>300?this.setState({visible:!0}):this.setState({visible:!1}))},this.scrollToTop=()=>{window.scrollTo({top:0,behavior:"smooth"})}}}let a=n},9061:(e,t,s)=>{"use strict";s.d(t,{A:()=>n});var r=s(8017);s(4109),s(4475);let i=e=>{let{title:t,subtitle:s,score:i}=e;return(0,r.jsxs)("div",{className:"flex justify-between items-center p-4 rounded-lg bg-gradient-to-r from-primary/10 to-indigo-600/10",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{className:"text-sm font-medium text-gray-500",children:t}),(0,r.jsx)("p",{className:"text-lg font-semibold mt-1",children:s})]}),(0,r.jsx)("div",{className:"text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent",children:i})]})},n=e=>{let{scores:t,result:s,showModal:n,onClose:a}=e;return n?(0,r.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[(0,r.jsx)("div",{className:"fixed inset-0 bg-black/60",onClick:a}),(0,r.jsxs)("div",{className:"bg-white rounded-lg p-6 max-w-md w-full mx-4 relative z-10 max-h-[90vh] overflow-y-auto",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,r.jsx)("h3",{className:"text-xl font-semibold text-gray-900",children:"量表结果"}),(0,r.jsx)("button",{className:"text-gray-400 hover:text-gray-500",onClick:a,children:(0,r.jsx)("i",{className:"ri-close-line text-xl"})})]}),(0,r.jsxs)("div",{className:"space-y-6",children:[t.map((e,t)=>(0,r.jsx)(i,{...e},t)),(0,r.jsxs)("div",{className:"border-t border-gray-200 pt-4",children:[(0,r.jsxs)("div",{className:"flex items-center mb-3",children:[(0,r.jsx)("i",{className:"ri-mental-health-line text-primary text-xl mr-2"}),(0,r.jsx)("h3",{className:"text-lg font-semibold",children:"测试结果表示"})]}),(0,r.jsx)("p",{className:"text-gray-600 bg-gray-50 p-4 rounded-lg",children:s})]}),(0,r.jsxs)("div",{className:"bg-yellow-50 p-4 rounded-lg",children:[(0,r.jsxs)("div",{className:"flex items-center mb-2",children:[(0,r.jsx)("i",{className:"ri-information-line text-yellow-500 mr-2"}),(0,r.jsx)("span",{className:"text-sm font-medium text-yellow-800",children:"注意事项"})]}),(0,r.jsxs)("div",{className:"text-sm text-yellow-700 space-y-1",children:[(0,r.jsxs)("p",{children:["* 焦虑 / 抑郁 / 睡眠障碍",(0,r.jsx)("strong",{children:"等其他情况"}),"均有可能造成分值偏高"]}),(0,r.jsxs)("p",{children:["* 本量表",(0,r.jsx)("strong",{children:"仅供筛查"}),"，",(0,r.jsx)("strong",{children:"不代表"}),"确诊或作为诊断依据"]})]})]})]})]})]}):null}},9292:(e,t,s)=>{"use strict";s.d(t,{A:()=>a});var r=s(8017),i=s(4109);class n extends i.Component{render(){let{question:e,degree:t,onAnswerChange:s,checkedIndex:i}=this.props;return(0,r.jsxs)("div",{className:"question-item",children:[(0,r.jsxs)("p",{className:"text-lg text-gray-900",children:[e.id,". ",e.text]}),(0,r.jsxs)("div",{className:"flex items-center justify-center my-6",children:[(0,r.jsx)("div",{className:"text-gray-700 items-center text-center break-words mr-2 md:mr-6",children:t[0]}),(0,r.jsx)("div",{className:"flex gap-1 md:gap-8 items-center",children:e.scoresAagree.map((t,n)=>{let a="w-5 h-5 md:w-6 md:h-6";return 0===n||n===e.scoresAagree.length-1?a="w-8 h-8 md:w-9 md:h-9":1===n||n===e.scoresAagree.length-2?a="w-7 h-7 md:w-8 md:h-8":n===e.scoresAagree.length-3&&(a="w-6 h-6 md:w-7 md:h-7"),(0,r.jsxs)("label",{className:"radio-label items-center justify-center",children:[(0,r.jsx)("input",{type:"radio",name:e.id,id:"".concat(e.id,"_").concat(n),value:t,className:"hidden peer",checked:i===n,onChange:()=>s(e.id,t,n)}),(0,r.jsx)("div",{className:"".concat(a," border-2 border-gray-500 rounded-full peer-checked:border-primary peer-checked:bg-primary duration-200")})]},"quotients_".concat(e.id,"_").concat(n))})}),(0,r.jsx)("div",{className:"text-gray-700 items-center text-center break-words ml-2 md:ml-6",children:t[1]})]})]})}}let a=n}},e=>{var t=t=>e(e.s=t);e.O(0,[979,132,636,593,792],()=>t(411)),_N_E=e.O()}]);