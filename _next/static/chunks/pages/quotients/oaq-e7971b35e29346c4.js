(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[650],{203:(e,s,t)=>{"use strict";t.d(s,{A:()=>i});var r=t(8017);t(4109),t(6002);let a=e=>{let{title:s,subtitle:t,score:a}=e;return(0,r.jsxs)("div",{className:"flex justify-between items-center p-4 rounded-lg bg-gradient-to-r from-primary/10 to-indigo-600/10",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{className:"text-sm font-medium text-gray-500",children:s}),(0,r.jsx)("p",{className:"text-lg font-semibold mt-1",children:t})]}),(0,r.jsx)("div",{className:"text-4xl font-bold bg-gradient-to-r from-primary to-indigo-600 bg-clip-text text-transparent",children:a})]})},i=e=>{let{scores:s,result:t,showModal:i,onClose:l}=e;return i?(0,r.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[(0,r.jsx)("div",{className:"fixed inset-0 bg-black/60",onClick:l}),(0,r.jsxs)("div",{className:"bg-white rounded-lg p-6 max-w-md w-full mx-4 relative z-10 max-h-[90vh] overflow-y-auto",children:[(0,r.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,r.jsx)("h3",{className:"text-xl font-semibold text-gray-900",children:"量表结果"}),(0,r.jsx)("button",{className:"text-gray-400 hover:text-gray-500",onClick:l,children:(0,r.jsx)("i",{className:"ri-close-line text-xl"})})]}),(0,r.jsxs)("div",{className:"space-y-6",children:[s.map((e,s)=>(0,r.jsx)(a,{...e},s)),(0,r.jsxs)("div",{className:"border-t border-gray-200 pt-4",children:[(0,r.jsxs)("div",{className:"flex items-center mb-3",children:[(0,r.jsx)("i",{className:"ri-mental-health-line text-primary text-xl mr-2"}),(0,r.jsx)("h3",{className:"text-lg font-semibold",children:"测试结果表示"})]}),(0,r.jsx)("p",{className:"text-gray-600 bg-gray-50 p-4 rounded-lg",children:t})]}),(0,r.jsxs)("div",{className:"bg-yellow-50 p-4 rounded-lg",children:[(0,r.jsxs)("div",{className:"flex items-center mb-2",children:[(0,r.jsx)("i",{className:"ri-information-line text-yellow-500 mr-2"}),(0,r.jsx)("span",{className:"text-sm font-medium text-yellow-800",children:"注意事项"})]}),(0,r.jsxs)("div",{className:"text-sm text-yellow-700 space-y-1",children:[(0,r.jsx)("p",{children:"* 本测试仅供参考，不能作为诊断依据"}),(0,r.jsx)("p",{children:"* 如有困扰建议及时就医咨询"})]})]})]})]})]}):null}},647:(e,s,t)=>{"use strict";t.d(s,{A:()=>l});var r=t(8017),a=t(4109);class i extends a.Component{render(){let{question:e,degree:s,onAnswerChange:t,scores:a}=this.props;return(0,r.jsxs)("div",{className:"question-item",children:[(0,r.jsxs)("p",{className:"text-gray-800",children:[e.id,". ",e.text]}),(0,r.jsxs)("div",{className:"flex justify-between items-center my-4",children:[(0,r.jsx)("div",{className:"text-sm text-gray-500 flex items-center",children:s[0]}),(0,r.jsx)("div",{className:"flex gap-4 md:gap-8",children:e.scoresAagree.map(s=>(0,r.jsxs)("label",{className:"radio-label",children:[(0,r.jsx)("input",{type:"radio",name:e.id,value:s,className:"hidden peer",onChange:()=>t(e.id,s)}),(0,r.jsx)("div",{className:"w-4 h-4 md:w-6 md:h-6 border-2 border-gray-300 rounded-full peer-checked:border-primary peer-checked:bg-primary"})]},s))}),(0,r.jsx)("div",{className:"text-sm text-gray-500 flex items-center",children:s[1]})]})]})}}let l=i},1447:(e,s,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/quotients/oaq",function(){return t(9930)}])},2525:(e,s,t)=>{"use strict";t.d(s,{A:()=>l});var r=t(8017),a=t(4109);t(6002);class i extends a.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll)}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}render(){let{visible:e,progress:s}=this.state,{isShowProgress:t,isShowButton:a}=this.props;if(!a&&!t)return null;let i=36*Math.PI;return(0,r.jsx)("div",{className:"fixed right-4 bottom-4 z-50",children:(0,r.jsxs)("div",{className:"relative w-10 h-10",children:[a&&e&&(0,r.jsx)("button",{onClick:this.scrollToTop,className:"absolute inset-0 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-primary-light flex items-center justify-center z-10","aria-label":"回到顶部",children:(0,r.jsx)("i",{className:"ri-arrow-up-line text-xl text-gray-600"})}),t&&(0,r.jsxs)("svg",{className:"absolute transform -rotate-90 w-10 h-10 z-20 pointer-events-none",viewBox:"0 0 ".concat(40," ").concat(40),children:[(0,r.jsx)("circle",{className:"text-gray-200",strokeWidth:4,stroke:"currentColor",fill:"transparent",r:18,cx:20,cy:20}),(0,r.jsx)("circle",{className:"text-primary transition-all duration-300",strokeWidth:4,strokeDasharray:i,strokeDashoffset:i-s/100*i,strokeLinecap:"round",stroke:"currentColor",fill:"transparent",r:18,cx:20,cy:20})]})]})})}constructor(...e){super(...e),this.state={visible:!1,progress:0},this.handleScroll=()=>{let{isShowProgress:e,isShowButton:s}=this.props;if(e){let e=document.querySelector("footer"),s=0;if(e){let t=window.scrollY,r=e.offsetTop;s=Math.min(t/(r-window.innerHeight)*100,100),this.setState({progress:s})}else s=document.documentElement.scrollTop/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100,this.setState({progress:s})}s&&(window.scrollY>300?this.setState({visible:!0}):this.setState({visible:!1}))},this.scrollToTop=()=>{window.scrollTo({top:0,behavior:"smooth"})}}}let l=i},9930:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>x});var r=t(8017),a=t(4109),i=t(6402),l=t(647),o=t(203);let n=JSON.parse('{"I":[{"id":1,"text":"当别人问我我的情绪怎样时，我总是回答不出来:","scoresAagree":[5,4,3,2,1]},{"id":2,"text":"我不知道该如何描述我的感觉:","scoresAagree":[5,4,3,2,1]},{"id":3,"text":"我喜欢找出个人问题中的复杂情感，而不是只用实用方面来描述问题:","scoresAagree":[1,2,3,4,5]},{"id":4,"text":"当其他人受伤或不快，我很难想象他们的情绪:","scoresAagree":[5,4,3,2,1]},{"id":5,"text":"人们总是让我多描述一下我的情绪，好像我说的不够多一样:","scoresAagree":[5,4,3,2,1]},{"id":6,"text":"性生活作为娱乐对我来说没什么意义:","scoresAagree":[5,4,3,2,1]},{"id":7,"text":"我可以很容易的描述出我的情绪:","scoresAagree":[1,2,3,4,5]},{"id":8,"text":"如果不知道你内心深处的情绪，你就不能好好生活:","scoresAagree":[1,2,3,4,5]},{"id":9,"text":"人们有的时候对我感到不快，而我却想象不出为什么:","scoresAagree":[5,4,3,2,1]},{"id":10,"text":"人们告诉我，我不会正确听取他们的感受。事实上，我正在竭尽全力去理解他们所说的话:","scoresAagree":[5,4,3,2,1]},{"id":11,"text":"当我不快的时候，我发现我很难辨别什么情感造成了这种不快:","scoresAagree":[5,4,3,2,1]},{"id":12,"text":"向他人描述我自己的情绪很难:","scoresAagree":[5,4,3,2,1]},{"id":13,"text":"我倾向于和朋友做体力活动而不是谈论各自的情绪经历:","scoresAagree":[5,4,3,2,1]},{"id":14,"text":"我不常做白日梦:","scoresAagree":[5,4,3,2,1]},{"id":15,"text":"人们默认我应该了解或猜到他们的需求，我不喜欢这一点，好像他们让我读他们的内心一样:","scoresAagree":[5,4,3,2,1]},{"id":16,"text":"我有时感到身体里有奇怪的感觉:","scoresAagree":[5,4,3,2,1]},{"id":17,"text":"对我来说，性生活更多是功能行为而不是情感行为:","scoresAagree":[5,4,3,2,1]},{"id":18,"text":"有些人说我很冷漠或是不回应他们的需求:","scoresAagree":[5,4,3,2,1]},{"id":19,"text":"我不总是做梦，做的梦也很无聊:","scoresAagree":[5,4,3,2,1]},{"id":20,"text":"朋友们曾说过或暗示过，我总是走脑不走心:","scoresAagree":[5,4,3,2,1]},{"id":21,"text":"我辨别不了我隐约感到的情绪正在我身上发生:","scoresAagree":[5,4,3,2,1]},{"id":22,"text":"我总是问别人，他们在我的处境下会感到什么，这可以帮助我理解要做什么:","scoresAagree":[5,4,3,2,1]},{"id":23,"text":"在选择优先做的事时，我发现考虑自己的情绪和考虑实用性一样重要:","scoresAagree":[1,2,3,4,5]},{"id":24,"text":"我的想象力主要用于实际操作，例如，如何解决问题或构建有用的想法或物品:","scoresAagree":[5,4,3,2,1]},{"id":25,"text":"在性生活中，我总是感到无能、尴尬、不舒服，甚至有时感觉恶心（躯体上的）:","scoresAagree":[5,4,3,2,1]},{"id":26,"text":"当被卷入复杂难以处理的关系时，我有时会有很奇怪的躯体症状:","scoresAagree":[5,4,3,2,1]},{"id":27,"text":"我倾向依靠他人来解读人际、社交场合的情绪细节:","scoresAagree":[5,4,3,2,1]},{"id":28,"text":"我不喜欢在聊天中大量谈论情绪问题而不是日常活动，因为这会减少我的乐趣:","scoresAagree":[5,4,3,2,1]},{"id":29,"text":"我总是不知道别人想从性关系中获得什么:","scoresAagree":[5,4,3,2,1]},{"id":30,"text":"和我亲近的人抱怨我忽视他们的情绪:","scoresAagree":[5,4,3,2,1]},{"id":31,"text":"我很喜欢听别人描述在和我处境相似时的情绪，这样可以帮助我理解我自己可能出现的情感:","scoresAagree":[5,4,3,2,1]},{"id":32,"text":"我的想象总是自发、不可控制、不可预测的:","scoresAagree":[1,2,3,4,5]},{"id":33,"text":"帮助别人时，我更愿意提供体力方面的帮助而不是情感方面的:","scoresAagree":[5,4,3,2,1]},{"id":34,"text":"我有令人奇怪的身体感觉，连我的朋友/熟人都不明白:","scoresAagree":[5,4,3,2,1]},{"id":35,"text":"我很难描述对于某件重要事件的感觉:","scoresAagree":[5,4,3,2,1]},{"id":36,"text":"我的想象可以被我控制使用，一般不会自发、突然出现:","scoresAagree":[5,4,3,2,1]},{"id":37,"text":"我根据原则而不是直觉做决定:","scoresAagree":[5,4,3,2,1]}]}');var c=t(2525);class d extends a.Component{getQuestionDetail(){return n.I}calculateScores(){let e=0;return Object.entries(this.state.answers).forEach(s=>{let[t,r]=s;e+=r}),e}calculateResult(e){return e<=94?"非诉情障碍":e<=112?"可能有诉情障碍":"诉情障碍"}render(){return(0,r.jsx)(i.A,{title:"G2述情障碍测试量表 | 青衫 Neuro",description:"述情障碍又译作“情感表达不能”或“情感难言症”",children:(0,r.jsxs)("main",{className:"max-w-3xl mx-auto px-4 py-8",children:[(0,r.jsxs)("div",{className:"bg-white rounded-lg shadow-sm p-8",children:[(0,r.jsxs)("div",{className:"text-center mb-8",children:[(0,r.jsx)("h1",{className:"text-2xl font-semibold text-gray-900",children:"OAQ- G2述情障碍测试量表"}),(0,r.jsx)("p",{className:"text-sm text-gray-500 mt-2",children:"*本量表仅供参考，不能作为诊断依据。"}),(0,r.jsxs)("div",{className:"text-xs text-gray-400 mt-2 space-y-1",children:[(0,r.jsx)("p",{children:"本量表参考文献："}),(0,r.jsxs)("ul",{className:"list-disc pl-4 space-y-1",children:[(0,r.jsx)("li",{children:"青衫取得了OAQ- G2（Online Alexithymia Questionnaire）量表作者授权，将量表翻译成中文版：OAQ- G2述情障碍在线测试"}),(0,r.jsx)("li",{children:(0,r.jsx)("a",{href:"https://www.amazon.com/Emotionally-Dumb-Alexithymia-Jason-Thompson-ebook/dp/B0038VZJ9U/",target:"_blank",rel:"noopener noreferrer",className:"hover:text-gray-600",children:"Jason著有与述情障碍相关的两本书（点击购买）"})})]})]})]}),(0,r.jsxs)("form",{className:"space-y-8",onSubmit:this.handleSubmit,children:[(0,r.jsx)("div",{className:"space-y-6",children:this.getQuestionDetail().map(e=>(0,r.jsx)(l.A,{question:e,degree:["赞同","反对"],onAnswerChange:this.handleRadioChange},"quotients_".concat(e.id)))}),(0,r.jsx)("button",{type:"submit",className:"w-full bg-gradient-to-r from-green-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-green-600/90 hover:to-indigo-600/90 transition-all duration-200 shadow-lg shadow-green-600/20",children:"提交答案"})]})]}),(0,r.jsx)(o.A,{scores:[{title:"测试分数",subtitle:"得分",score:this.state.score}],result:this.state.result,showModal:this.state.showModal,onClose:this.closeModal}),(0,r.jsx)(c.A,{isShowButton:!0,isShowProgress:!0})]})})}constructor(...e){super(...e),this.state={answers:{},showModal:!1,score:0,result:""},this.closeModal=()=>{this.setState({showModal:!1})},this.handleRadioChange=(e,s)=>{this.setState(t=>({answers:{...t.answers,[e]:parseInt(s)}}))},this.handleSubmit=e=>{if(e.preventDefault(),Object.keys(this.state.answers).length<this.getQuestionDetail().filter(e=>0!==e.id).length){alert("请完成量表所有问题的作答");return}let s=this.calculateScores(),t=this.calculateResult(s);this.setState({score:s,result:t,showModal:!0})}}}let x=d}},e=>{var s=s=>e(e.s=s);e.O(0,[233,21,636,593,792],()=>s(1447)),_N_E=e.O()}]);