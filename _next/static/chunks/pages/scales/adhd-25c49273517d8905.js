(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[447],{4139:(e,s,t)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/scales/adhd",function(){return t(5197)}])},5197:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>x});var l=t(8017),a=t(4109),i=t(6402);class r extends a.Component{render(){let{question:e,degree:s,onAnswerChange:t}=this.props;return(0,l.jsxs)("div",{className:"question-item",children:[(0,l.jsxs)("p",{className:"text-gray-800",children:[e.id,". ",e.text]}),(0,l.jsxs)("div",{className:"flex justify-between items-center my-4",children:[(0,l.jsx)("div",{className:"text-sm text-gray-500 flex items-center",children:s[0]}),(0,l.jsx)("div",{className:"flex gap-8",children:[4,3,2,1,0].map(s=>(0,l.jsxs)("label",{className:"radio-label",children:[(0,l.jsx)("input",{type:"radio",name:"q".concat(e.id),value:s,className:"hidden peer",onChange:()=>t(e.id,s)}),(0,l.jsx)("div",{className:"w-4 h-4 border-2 border-gray-300 rounded-full peer-checked:border-green-600 peer-checked:bg-green-600"})]},s))}),(0,l.jsx)("div",{className:"text-sm text-gray-500 flex items-center",children:s[1]})]})]})}}t(6002);class n extends a.Component{getResultText(){let{score:e}=this.props;return e>=12?"您的得分较高，建议进一步咨询专业医生获取专业建议。":e>=8?"您的得分中等，如有困扰建议咨询专业医生。":"您的得分较低，暂时无需过分担心。"}render(){let{score:e,showModal:s,onClose:t}=this.props;return s?(0,l.jsxs)("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:[(0,l.jsx)("div",{className:"fixed inset-0 bg-black/60",onClick:t}),(0,l.jsxs)("div",{className:"bg-white rounded-lg p-6 max-w-md w-full mx-4 relative z-10",children:[(0,l.jsxs)("div",{className:"flex justify-between items-center mb-4",children:[(0,l.jsx)("h3",{className:"text-xl font-semibold text-gray-900",children:"量表结果"}),(0,l.jsx)("button",{className:"text-gray-400 hover:text-gray-500",onClick:t,children:(0,l.jsx)("i",{className:"ri-close-line text-xl"})})]}),(0,l.jsxs)("div",{className:"space-y-6",children:[(0,l.jsxs)("div",{className:"flex justify-between items-center p-4 rounded-lg bg-gradient-to-r from-green-600/10 to-indigo-600/10",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h4",{className:"text-sm font-medium text-gray-500",children:"A部分"}),(0,l.jsx)("p",{className:"text-lg font-semibold mt-1",children:"注意力障碍"})]}),(0,l.jsx)("div",{className:"text-4xl font-bold bg-gradient-to-r from-green-600 to-indigo-600 bg-clip-text text-transparent",children:e})]}),(0,l.jsxs)("div",{className:"flex justify-between items-center p-4 rounded-lg bg-gradient-to-r from-green-600/10 to-indigo-600/10",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h4",{className:"text-sm font-medium text-gray-500",children:"B部分"}),(0,l.jsx)("p",{className:"text-lg font-semibold mt-1",children:"多动/冲动障碍"})]}),(0,l.jsx)("div",{className:"text-4xl font-bold bg-gradient-to-r from-green-600 to-indigo-600 bg-clip-text text-transparent",children:e})]}),(0,l.jsxs)("div",{className:"border-t border-gray-200 pt-4",children:[(0,l.jsxs)("div",{className:"flex items-center mb-3",children:[(0,l.jsx)("i",{className:"ri-mental-health-line text-green-500 text-xl mr-2"}),(0,l.jsx)("h3",{className:"text-lg font-semibold",children:"测试结果表示"})]}),(0,l.jsx)("p",{className:"text-gray-600 bg-gray-50 p-4 rounded-lg",children:this.getResultText()})]}),(0,l.jsxs)("div",{className:"bg-yellow-50 p-4 rounded-lg",children:[(0,l.jsxs)("div",{className:"flex items-center mb-2",children:[(0,l.jsx)("i",{className:"ri-information-line text-yellow-500 mr-2"}),(0,l.jsx)("span",{className:"text-sm font-medium text-yellow-800",children:"注意事项"})]}),(0,l.jsxs)("div",{className:"text-sm text-yellow-700 space-y-1",children:[(0,l.jsx)("p",{children:"* 本测试仅供参考，不能作为诊断依据"}),(0,l.jsx)("p",{children:"* 如有困扰建议及时就医咨询"})]})]})]})]})]}):null}}let d=JSON.parse('{"Q":[{"id":1,"text":"当必须完成一件枯燥或者困难的计划任务时，你会粗心犯错:"},{"id":2,"text":"当正在做枯燥或重复性的工作时，你会走神想其他的事情:"},{"id":3,"text":"有人面对你说话时，你很难专心地听完他说的内容:"},{"id":0,"text":"当前 demo 仅为效果测试。量表结果的评估只是演示。"}]}');class c extends a.Component{render(){return(0,l.jsx)(i.A,{title:"成人 ADHD 自填量表 (ASRS) | 青衫 Neuro",description:"ADHD多动症成人测试量表，用于测试成年人的多动症情况。",children:(0,l.jsxs)("main",{className:"max-w-3xl mx-auto px-4 py-8",children:[(0,l.jsxs)("div",{className:"bg-white rounded-lg shadow-sm p-8",children:[(0,l.jsxs)("div",{className:"text-center mb-8",children:[(0,l.jsx)("h1",{className:"text-2xl font-semibold text-gray-900",children:"成人 ADHD 自填量表 (ASRS)"}),(0,l.jsx)("p",{className:"text-gray-500 mt-2",children:"焦虑抑郁等都可能造成分值偏高"}),(0,l.jsx)("p",{className:"text-sm text-gray-400 mt-1",children:"18Q-Chinese-Traditional.pdf"})]}),(0,l.jsxs)("form",{className:"space-y-8",onSubmit:this.handleSubmit,children:[(0,l.jsx)("div",{className:"space-y-6",children:d.Q.map(e=>(0,l.jsx)(r,{question:e,degree:["经常这样","从来没有"],onAnswerChange:this.handleRadioChange},e.id))}),(0,l.jsx)("button",{type:"submit",className:"w-full bg-gradient-to-r from-green-600 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-green-600/90 hover:to-indigo-600/90 transition-all duration-200 shadow-lg shadow-green-600/20",children:"提交答案"})]})]}),(0,l.jsx)(n,{score:this.state.score,showModal:this.state.showModal,onClose:this.closeModal})]})})}constructor(...e){super(...e),this.state={answers:{},showModal:!1,score:0},this.handleRadioChange=(e,s)=>{this.setState(t=>({answers:{...t.answers,[e]:parseInt(s)}}))},this.handleSubmit=e=>{if(e.preventDefault(),Object.keys(this.state.answers).length<d.Q.filter(e=>0!==e.id).length){alert("请完成量表所有问题的作答");return}let s=Object.values(this.state.answers).reduce((e,s)=>e+s,0);this.setState({score:s,showModal:!0})},this.closeModal=()=>{this.setState({showModal:!1})}}}let x=c}},e=>{var s=s=>e(e.s=s);e.O(0,[674,21,636,593,792],()=>s(4139)),_N_E=e.O()}]);