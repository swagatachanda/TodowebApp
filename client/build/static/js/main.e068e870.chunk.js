(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{113:function(e,t,s){},114:function(e,t,s){},116:function(e,t,s){},122:function(e,t,s){},123:function(e,t,s){},126:function(e,t,s){},127:function(e,t,s){},128:function(e,t,s){},129:function(e,t,s){},131:function(e,t,s){},174:function(e,t,s){},177:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),i=s(22),c=s.n(i),o=(s(113),s(15)),r=s(16),l=s(18),d=s(17),u=(s(114),s(60)),h=s(11),p=s(6),j=s(7),b=s.n(j),g=s(14),f=(s(116),new RegExp(/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/)),m=s(41),v=s.n(m),y=s(39),x=s.n(y),O=s(1),w=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={Name:"",Email:"",pass:!1,msg:"",password:"",correctmsg:"",visibility:!1},a.change=a.change.bind(Object(p.a)(a)),a.validemail=a.validemail.bind(Object(p.a)(a)),a.check=a.check.bind(Object(p.a)(a)),a.signup=a.signup.bind(Object(p.a)(a)),a.setname=a.setname.bind(Object(p.a)(a)),a.visibleon=a.visibleon.bind(Object(p.a)(a)),a.visibleoff=a.visibleoff.bind(Object(p.a)(a)),a}return Object(r.a)(s,[{key:"visibleon",value:function(){this.state.visibility||(this.refs.pass.type="text",this.setState({visibility:!0})),this.refs.showpassoff.style.display="block",this.refs.showpasson.style.display="none"}},{key:"visibleoff",value:function(){this.state.visibility&&(this.refs.pass.type="password",this.setState({visibility:!1})),this.refs.showpassoff.style.display="none",this.refs.showpasson.style.display="block"}},{key:"setname",value:function(e){this.setState({Name:e.target.value})}},{key:"validemail",value:function(e){return this.setState({Email:e.target.value}),f.test(e.target.value)?(e.target.style.color="green",!0):(e.target.focus(),e.target.style.color="red",!1)}},{key:"change",value:function(e){this.setState({pass:!1,password:e.target.value})}},{key:"check",value:function(e){e.target.value!==this.state.password?this.setState({msg:"Password not a match"}):this.setState({pass:!0,msg:""})}},{key:"signup",value:function(){var e=Object(g.a)(b.a.mark((function e(t){var s,a=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.pass){e.next=3;break}return this.setState({msg:"Fill the details correctly"}),e.abrupt("return");case 3:return s={name:this.state.Name,email:this.state.Email,password:this.state.password},console.log(s),"/api/user/new",e.next=8,fetch("/api/user/new",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(e){console.log(e),e.status?(a.setState({correctmsg:"Your account has been successfully created"}),window.location.assign("/")):a.setState({msg:e.error})}));case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsx)("div",{className:"content-container",children:Object(O.jsxs)("div",{className:"login-container",children:[Object(O.jsxs)("div",{className:"username",children:[Object(O.jsx)("div",{className:"label",children:"Name"}),Object(O.jsxs)("div",{className:"input-field",children:[Object(O.jsx)("input",{type:"text",className:"input uname",required:!0,placeholder:"Enter your name",onChange:this.setname}),Object(O.jsx)("div",{className:"border"})]})]}),Object(O.jsxs)("div",{className:"username",children:[Object(O.jsx)("div",{className:"label",children:"Email"}),Object(O.jsxs)("div",{className:"input-field",children:[Object(O.jsx)("input",{type:"text",className:"input email",required:!0,placeholder:"Enter your email",onBlur:this.validemail}),Object(O.jsx)("div",{className:"border"})]})]}),Object(O.jsxs)("div",{className:"password",children:[Object(O.jsx)("div",{className:"label",children:"Password"}),Object(O.jsxs)("div",{className:"input-field",children:[Object(O.jsxs)("div",{className:"whole-input",style:{display:"flex"},children:[Object(O.jsx)("input",{type:"password",ref:"pass",className:"input pass p1",required:!0,placeholder:"",onChange:this.change}),Object(O.jsxs)("div",{className:"show-icon",style:{display:"flex",paddingTop:"12px"},children:[Object(O.jsx)(x.a,{onClick:this.visibleon,ref:"showpasson"}),Object(O.jsx)(v.a,{style:{display:"none"},ref:"showpassoff",onClick:this.visibleoff})]})]}),Object(O.jsx)("div",{className:"border"})]})]}),Object(O.jsxs)("div",{className:"password",children:[Object(O.jsx)("div",{className:"label",children:"Confirm Password"}),Object(O.jsxs)("div",{className:"input-field",children:[Object(O.jsx)("div",{className:"whole-input",children:Object(O.jsx)("input",{type:"password",className:"input pass p2",required:!0,placeholder:"",onChange:this.check})}),Object(O.jsx)("div",{className:"border"})]})]}),Object(O.jsxs)("div",{className:"button-container",children:[Object(O.jsx)("div",{className:"error-message",style:{color:"red"},children:this.state.msg}),Object(O.jsx)("div",{className:"correct=message",style:{color:"green"},children:this.state.correctmsg}),Object(O.jsx)("div",{className:"button login",onClick:this.signup,children:Object(O.jsx)("div",{className:"button-label",children:"Sign Up"})}),Object(O.jsx)("div",{className:"button login",children:Object(O.jsx)("div",{className:"button-label",children:Object(O.jsx)("a",{href:"/",children:"Login to existing account"})})})]})]})})}}]),s}(n.a.Component),k=(s(122),s(37)),S=s(211),N=s(210),C=s(208),T=Object(C.a)((function(e){return{backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),I=n.a.createContext();function D(e){var t=e.children,s=T(),a=n.a.useState(!1),i=Object(k.a)(a,2),c=i[0],o=i[1],r=function(){o(!1)};return Object(O.jsxs)(I.Provider,{value:{handleClose:r,handleToggle:function(){o(!c)}},children:[Object(O.jsx)(S.a,{className:s.backdrop,open:c,onClick:r,children:Object(O.jsx)(N.a,{color:"inherit"})}),t]})}var L=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={Email:"",pass:!1,msg:"",password:"",link:"",visibility:!1,correctmsg:""},a.validemail=a.validemail.bind(Object(p.a)(a)),a.login=a.login.bind(Object(p.a)(a)),a.change=a.change.bind(Object(p.a)(a)),a.visibleon=a.visibleon.bind(Object(p.a)(a)),a.visibleoff=a.visibleoff.bind(Object(p.a)(a)),a.forgetpass=a.forgetpass.bind(Object(p.a)(a)),a}return Object(r.a)(s,[{key:"forgetpass",value:function(){var e=Object(g.a)(b.a.mark((function e(){var t,s,a=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==(t={email:this.state.Email}).email){e.next=5;break}return this.setState({msg:"Enter your email first"}),setTimeout((function(){a.refs.error.style.display="none"}),2e3),e.abrupt("return");case 5:return this.context.handleToggle(),localStorage.setItem("code",t.email),s="/api/user/forgetpassword",console.log(t,s),e.next=11,fetch(s,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then(function(){var e=Object(g.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.status){e.next=5;break}a.setState({correctmsg:"Code sent to mail"}),window.location.assign("/forgetpass"),e.next=9;break;case 5:return a.context.handleClose(),a.setState({msg:t.error}),setTimeout((function(){a.refs.error.style.display="none"}),2e3),e.abrupt("return");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"visibleon",value:function(){this.state.visibility||(this.refs.pass.type="text",this.setState({visibility:!0})),this.refs.showpassoff.style.display="block",this.refs.showpasson.style.display="none"}},{key:"visibleoff",value:function(){this.state.visibility&&(this.refs.pass.type="password",this.setState({visibility:!1})),this.refs.showpassoff.style.display="none",this.refs.showpasson.style.display="block"}},{key:"validemail",value:function(e){return this.setState({Email:e.target.value}),f.test(e.target.value)?(e.target.style.color="green",!0):(e.target.focus(),e.target.style.color="red",!1)}},{key:"change",value:function(e){this.setState({pass:!1,password:e.target.value})}},{key:"login",value:function(){var e=Object(g.a)(b.a.mark((function e(t){var s,a,n=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s={email:this.state.Email,password:this.state.password},console.log(s),""!==s.email&&""!==s.password){e.next=5;break}return this.setState({msg:"Fill up the fields"}),e.abrupt("return");case 5:return a="/api/user/login",console.log(s,a),e.next=9,fetch(a,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then(function(){var e=Object(g.a)(b.a.mark((function e(t){var s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.status?(console.log(t.logged.cookie.expires),localStorage.setItem("data",t.data._id),localStorage.setItem("logged",t.logged.islogged),localStorage.setItem("expiry",t.logged.cookie.expires),s="/note/all/".concat(localStorage.getItem("data")),localStorage.setItem("url",s),window.location.assign("/mypage")):n.setState({msg:t.error});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(O.jsx)("div",{className:"content-container",children:Object(O.jsxs)("div",{className:"login-container",children:[Object(O.jsxs)("div",{className:"username",children:[Object(O.jsx)("div",{className:"label",children:"Email"}),Object(O.jsxs)("div",{className:"input-field",children:[Object(O.jsx)("input",{type:"text",className:"input email",required:!0,placeholder:"Enter your email",onBlur:this.validemail}),Object(O.jsx)("div",{className:"border"})]})]}),Object(O.jsxs)("div",{className:"password",children:[Object(O.jsx)("div",{className:"label",children:"Password"}),Object(O.jsxs)("div",{className:"input-field",children:[Object(O.jsxs)("div",{className:"whole-input",style:{display:"flex"},children:[Object(O.jsx)("input",{type:"password",ref:"pass",className:"input pass p1",required:!0,placeholder:"",onChange:this.change}),Object(O.jsxs)("div",{className:"show-icon",style:{display:"flex",paddingTop:"12px"},children:[Object(O.jsx)(x.a,{onClick:this.visibleon,ref:"showpasson"}),Object(O.jsx)(v.a,{style:{display:"none"},ref:"showpassoff",onClick:this.visibleoff})]})]}),Object(O.jsx)("div",{className:"border"})]})]}),Object(O.jsxs)("div",{className:"button-container",children:[Object(O.jsx)("div",{className:"error-message",style:{color:"red"},ref:"error",children:this.state.msg}),Object(O.jsx)("div",{className:"correct=message",style:{color:"green"},children:this.state.correctmsg}),Object(O.jsx)("div",{className:"button login",onClick:this.forgetpass,children:Object(O.jsx)("div",{className:"button-label",children:"Forget Password?"})}),Object(O.jsxs)("div",{className:"button login",children:[Object(O.jsx)("div",{children:Object(O.jsx)("a",{href:"/signup",className:"button-label",children:"Create an Account"})}),Object(O.jsx)("div",{className:"button-login",children:Object(O.jsx)("div",{className:"label-pass",onClick:this.login,children:"Login"})})]})]})]})})}}]),s}(n.a.Component);L.contextType=I;var _=L,E=s(89),P=s.n(E),A=s(212),J=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={visibility:!1,passcode:"",id_:""},a.visibleon=a.visibleon.bind(Object(p.a)(a)),a.visibleoff=a.visibleoff.bind(Object(p.a)(a)),a.setpass=a.setpass.bind(Object(p.a)(a)),a.checkcode=a.checkcode.bind(Object(p.a)(a)),a.updatepass=a.updatepass.bind(Object(p.a)(a)),a}return Object(r.a)(s,[{key:"updatepass",value:function(){var e=Object(g.a)(b.a.mark((function e(){var t,s=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"api/user/login/forgetpassword",t={id:this.state.id_,password:this.refs.newpass.value},console.log(t),e.next=5,fetch("api/user/login/forgetpassword",{method:"PATCH",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){console.log(e),s.refs.errmsg.innerHTML=e.data,window.location.assign("/mypage")}));case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setpass",value:function(e){this.setState({passcode:e.target.value})}},{key:"checkcode",value:function(){var e=Object(g.a)(b.a.mark((function e(){var t,s,a=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(this.state.passcode),console.log(localStorage.getItem("code")),null!=localStorage.getItem("code")){e.next=7;break}return this.refs.err.style.display="block",this.refs.err.innerHTML="Email cannot be found. Please go back to the login page to enter your email first.",setTimeout((function(){a.refs.err.style.display="none"}),2e3),e.abrupt("return");case 7:return t={passcode:this.state.passcode},s="api/user/matchpass/@".concat(localStorage.getItem("code")),e.next=11,fetch(s,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then(function(){var e=Object(g.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.status?(a.setState({id_:t.data._id}),a.refs.pass.style.display="block",a.refs.passbutton.style.display="block",localStorage.removeItem("code")):(a.refs.err.style.display="block",a.refs.err.innerHTML=t.error,setTimeout((function(){a.refs.err.style.display="none"}),2e3));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"visibleon",value:function(){this.state.visibility||(this.refs.newpass.type="text",this.setState({visibility:!0})),this.refs.showpassoff.style.display="block",this.refs.showpasson.style.display="none"}},{key:"visibleoff",value:function(){this.state.visibility&&(this.refs.newpass.type="password",this.setState({visibility:!1})),this.refs.showpassoff.style.display="none",this.refs.showpasson.style.display="block"}},{key:"render",value:function(){return Object(O.jsx)("div",{className:"content-container",children:Object(O.jsxs)("div",{className:"login-container",children:[Object(O.jsx)("div",{className:"msg",children:"Enter the correct code sent in your mail to change the password"}),Object(O.jsxs)("div",{className:"username",children:[Object(O.jsx)("div",{className:"label",children:"Code"}),Object(O.jsxs)("div",{className:"input-field",children:[Object(O.jsx)("input",{type:"text",class:"input code",ref:"passcodecheck",required:!0,placeholder:"",onChange:this.setpass}),Object(O.jsx)(A.a,{onClick:this.checkcode,children:"OK"}),Object(O.jsx)("div",{style:{color:"black"},children:"(If you dont recieve the code in your mail, please check your spambox)"}),Object(O.jsx)("div",{className:"border",ref:"err",style:{color:"red"}})]})]}),Object(O.jsxs)("div",{className:"password",style:{display:"none"},ref:"pass",children:[Object(O.jsx)("div",{className:"label",children:"Password"}),Object(O.jsxs)("div",{className:"input-field",children:[Object(O.jsxs)("div",{className:"whole-input",style:{display:"flex"},children:[Object(O.jsx)("input",{type:"password",ref:"newpass",className:"input pass",required:!0,placeholder:""}),Object(O.jsxs)("div",{className:"show-icon",style:{display:"flex",paddingTop:"12px"},children:[Object(O.jsx)(x.a,{onClick:this.visibleon,ref:"showpasson"}),Object(O.jsx)(v.a,{style:{display:"none"},ref:"showpassoff",onClick:this.visibleoff})]})]}),Object(O.jsx)("div",{className:"border",ref:"errmsg"})]})]}),Object(O.jsxs)("div",{className:"button-container",children:[Object(O.jsx)("div",{className:"error-message"}),Object(O.jsx)("div",{className:"button login",style:{display:"none"},ref:"passbutton",children:Object(O.jsx)(A.a,{onClick:this.updatepass,children:"Change"})})]})]})})}}]),s}(n.a.Component),M=(s(123),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={login:"Login",signup:"Sign Up"},a.logout=a.logout.bind(Object(p.a)(a)),a}return Object(r.a)(s,[{key:"logout",value:function(){fetch("/api/user/logout").then((function(e){return e.json()})).then((function(e){console.log(e),localStorage.setItem("logged",e.logged.islogged),localStorage.removeItem("data"),localStorage.removeItem("expiry"),window.location.assign("/")}))}},{key:"render",value:function(){return Object(O.jsx)(u.a,{children:Object(O.jsxs)("div",{children:[Object(O.jsx)("header",{className:"toolbar",children:Object(O.jsxs)("nav",{className:"toolbar__navigation",children:[Object(O.jsx)("div",{children:Object(O.jsx)(P.a,{onClick:this.props.drawer,style:{cursor:"pointer"},className:"toggle"})}),Object(O.jsx)("div",{className:"toolbar__logo",children:Object(O.jsx)("a",{href:"/login",children:"Wecome to my notes\ud83d\udccb"})}),Object(O.jsx)("div",{className:"spacer"}),Object(O.jsx)("div",{className:"toolbar__items",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)("div",{children:this.props.search})}),Object(O.jsx)("li",{children:Object(O.jsx)("div",{className:"username",children:this.props.login})}),Object(O.jsx)("li",{children:Object(O.jsx)("div",{className:"username",onClick:this.logout,children:this.props.signup})})]})})]})}),Object(O.jsxs)(h.c,{children:[Object(O.jsx)(h.a,{path:"/signup",children:Object(O.jsx)(w,{})}),Object(O.jsx)(h.a,{path:"/forgetpass",children:Object(O.jsx)(J,{})})]})]})})}}]),s}(n.a.Component)),F=(s(126),s(90)),z=s(100),q=s.n(z),H=s(98),Z=s.n(H),Y=s(101),B=s.n(Y),U=s(97),$=s.n(U),R=s(96),K=s.n(R),W=s(99),G=s.n(W),Q=s(95),V=s.n(Q),X=(s(127),function(e){return Object(O.jsx)("nav",{className:"sidedrawer",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)("div",{children:e.login})}),Object(O.jsx)("li",{children:Object(O.jsx)("div",{onClick:e.click,children:e.signup})}),Object(O.jsx)("li",{children:Object(O.jsx)("div",{children:e.searchbar})})]})})}),ee=(s(128),function(e){return Object(O.jsx)("div",{className:"backdrop",onClick:e.click})}),te=(s(129),s(94)),se=s.n(te),ae=s(91),ne=s.n(ae),ie=(s(130),s(131),n.a.forwardRef((function(e,t){return Object(O.jsx)("button",{onClick:e.onClick,ref:t,className:"datepicker",children:e.value||e.placeholder})}))),ce=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={selecteddate:null},a.datevalue=a.datevalue.bind(Object(p.a)(a)),a}return Object(r.a)(s,[{key:"datevalue",value:function(e){this.setState({selecteddate:e}),localStorage.setItem("url","/note/all/".concat(localStorage.getItem("data"),"?date=").concat(e)),window.location.assign("/mypage")}},{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)(ne.a,{selected:this.state.selecteddate,onChange:this.datevalue,dateFormat:"dd/MM/yyyy",showYearDropdown:!0,scrollableMonthYearDropdown:!0,customInput:Object(O.jsx)(ie,{}),placeholderText:"Select a date"})})}}]),s}(a.Component),oe=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={values:""},a.change=a.change.bind(Object(p.a)(a)),a.valuechange=a.valuechange.bind(Object(p.a)(a)),a.valuechange_year=a.valuechange_year.bind(Object(p.a)(a)),a.searchtext=a.searchtext.bind(Object(p.a)(a)),a}return Object(r.a)(s,[{key:"searchtext",value:function(){var e="/note/all/".concat(localStorage.getItem("data"),"?content=").concat(this.refs.text.value);console.log(e),localStorage.setItem("url",e),window.location.assign("/mypage")}},{key:"valuechange",value:function(e){var t="/note/all/".concat(localStorage.getItem("data"),"?month=").concat(e.currentTarget.value);console.log(t),localStorage.setItem("url",t),window.location.assign("/mypage")}},{key:"valuechange_year",value:function(e){var t="/note/all/".concat(localStorage.getItem("data"),"?year=").concat(e.currentTarget.value);console.log(t),localStorage.setItem("url",t),window.location.assign("/mypage")}},{key:"change",value:function(e){console.log(e.currentTarget.value),"month"===e.currentTarget.value?(this.refs.monthly.style.display="block",this.refs.yearly.style.display="none",this.refs.Input.style.display="none",this.refs.date.style.display="none"):"year"===e.currentTarget.value?(this.refs.yearly.style.display="block",this.refs.monthly.style.display="none",this.refs.Input.style.display="none",this.refs.date.style.display="none"):"content"===e.currentTarget.value?(this.refs.yearly.style.display="none",this.refs.monthly.style.display="none",this.refs.Input.style.display="block",this.refs.date.style.display="none"):"date"===e.currentTarget.value&&(this.refs.yearly.style.display="none",this.refs.monthly.style.display="none",this.refs.Input.style.display="none",this.refs.date.style.display="block")}},{key:"render",value:function(){return Object(O.jsxs)("div",{className:"Searchbar",children:[Object(O.jsxs)("select",{onChange:this.valuechange,style:{display:"none"},onfocus:"this.size=5;",onblur:"this.size=1;",ref:"monthly",children:[Object(O.jsx)("option",{value:"Search",style:{display:"none"},children:"Month"}),Object(O.jsx)("option",{value:"Jan",children:"January"}),Object(O.jsx)("option",{value:"Feb",children:"February"}),Object(O.jsx)("option",{value:"Mar",children:"March"}),Object(O.jsx)("option",{value:"Apr",children:"April"}),Object(O.jsx)("option",{value:"May",children:"May"}),Object(O.jsx)("option",{value:"Jun",children:"June"}),Object(O.jsx)("option",{value:"Jul",children:"July"}),Object(O.jsx)("option",{value:"Aug",children:"August"}),Object(O.jsx)("option",{value:"Sep",children:"September"}),Object(O.jsx)("option",{value:"Oct",children:"October"}),Object(O.jsx)("option",{value:"Nov",children:"November"}),Object(O.jsx)("option",{value:"Dec",children:"December"})]}),Object(O.jsxs)("select",{onChange:this.valuechange_year,style:{display:"none"},onfocus:"this.size=5;",onblur:"this.size=1;",ref:"yearly",children:[Object(O.jsx)("option",{value:"Search",style:{display:"none"},children:"Year"}),Object(O.jsx)("option",{value:"2019",children:"2019"}),Object(O.jsx)("option",{value:"2020",children:"2020"}),Object(O.jsx)("option",{value:"2021",children:"2021"})]}),Object(O.jsxs)("div",{className:"search",style:{display:"none"},ref:"Input",children:[Object(O.jsx)("input",{type:"text",placeholder:"Enter some words",className:"searchcontent",ref:"text"}),Object(O.jsx)(se.a,{style:{paddingLeft:"10px"},className:"icon",onClick:this.searchtext})]}),Object(O.jsx)("div",{style:{display:"none"},ref:"date",children:Object(O.jsx)(ce,{ref:"datepicker"})}),Object(O.jsxs)("select",{onChange:this.change,children:[Object(O.jsx)("option",{value:"Search",style:{display:"none"},children:"Search"}),Object(O.jsx)("option",{value:"month",children:"Search by Month"}),Object(O.jsx)("option",{value:"year",children:"Search by Year"}),Object(O.jsx)("option",{value:"content",children:"Search by Content"}),Object(O.jsx)("option",{value:"date",children:"Search by Date"})]})]})}}]),s}(n.a.Component),re=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(o.a)(this,s),(a=t.call(this,e)).state={addelement:"",details:[],id:"",userdetails:{},image:null,sidebaropen:!1},a.add=a.add.bind(Object(p.a)(a)),a.setname=a.setname.bind(Object(p.a)(a)),a.deleteelem=a.deleteelem.bind(Object(p.a)(a)),a.logout=a.logout.bind(Object(p.a)(a)),a.onsave=a.onsave.bind(Object(p.a)(a)),a.setid=a.setid.bind(Object(p.a)(a)),a.onselectfile=a.onselectfile.bind(Object(p.a)(a)),a.uploadpic=a.uploadpic.bind(Object(p.a)(a)),a.triggerpopup=a.triggerpopup.bind(Object(p.a)(a)),a.deleteobj=a.deleteobj.bind(Object(p.a)(a)),a.removefile=a.removefile.bind(Object(p.a)(a)),a.opensidebar=a.opensidebar.bind(Object(p.a)(a)),a.backdropclose=a.backdropclose.bind(Object(p.a)(a)),a}return Object(r.a)(s,[{key:"backdropclose",value:function(){this.setState({sidebaropen:!1})}},{key:"opensidebar",value:function(){this.setState((function(e){return{sidebaropen:!e.sidebaropen}}))}},{key:"triggerpopup",value:function(e){var t=this;if(null!=this.state.image){var s=e.currentTarget.id;return this.refs["ref_".concat(e.currentTarget.id)].style.display="block",this.refs["ref_".concat(e.currentTarget.id)].innerHTML="Please upload your previous image to save changes or clear the previous file",void setTimeout((function(){t.refs["ref_".concat(s)].style.display="none"}),2e3)}this.refs.InputField.click(),this.setState({id:e.currentTarget.id}),console.log(e.currentTarget.id)}},{key:"removefile",value:function(e){this.refs.InputField.value=null,this.refs["".concat(e.currentTarget.id)].style.display="none",this.setState({image:null})}},{key:"deleteobj",value:function(){var e=Object(g.a)(b.a.mark((function e(t){var s,a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(new Date(Date.now()).toLocaleString()>=new Date(localStorage.getItem("expiry")).toLocaleString())){e.next=4;break}window.location.assign("/"),e.next=13;break;case 4:return this.context.handleToggle(),s="/note/deletephoto/".concat(t.currentTarget.id),console.log(s),e.next=9,fetch(s,{method:"DELETE",headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.text()}));case 9:return a={edit:"Last updated on"},n="/note/update/".concat(this.state.id),e.next=13,fetch(n,{method:"PATCH",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){window.location.assign("/mypage")}));case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"uploadpic",value:function(){var e=Object(g.a)(b.a.mark((function e(t){var s,a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(new Date(Date.now()).toLocaleString()>=new Date(localStorage.getItem("expiry")).toLocaleString())){e.next=4;break}window.location.assign("/"),e.next=21;break;case 4:return e.prev=4,this.context.handleToggle(),s="/note/update/".concat(this.state.id),console.log(s),a={edit:"Last updated on"},e.next=11,fetch(s,{method:"PATCH",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(a)}).then((function(e){return e.json()}));case 11:return(n=new FormData).append("image",this.state.image),e.next=15,fetch("/note/upload/".concat(this.state.id),{method:"POST",body:n}).then((function(e){return e.json()})).then((function(e){console.log(e),window.location.assign("/mypage")}));case 15:e.sent,e.next=21;break;case 18:e.prev=18,e.t0=e.catch(4),console.log(e.t0);case 21:case"end":return e.stop()}}),e,this,[[4,18]])})));return function(t){return e.apply(this,arguments)}}()},{key:"onselectfile",value:function(e){console.log(e.target.files),this.setState({image:e.target.files[0]}),e.target.files&&e.target.files.length>0&&(this.refs["".concat(this.state.id)].style.display="block",this.refs.filestore.style.cursor="pointer")}},{key:"setid",value:function(e){console.log(e.currentTarget.id),this.setState({id:e.currentTarget.id}),console.log(this.state.id)}},{key:"logout",value:function(){fetch("/api/user/logout").then((function(e){return e.json()})).then((function(e){console.log(e),localStorage.setItem("logged",e.logged.islogged),localStorage.removeItem("data"),localStorage.removeItem("expiry"),localStorage.removeItem("url"),window.location.assign("/")}))}},{key:"setname",value:function(e){this.setState({addelement:e.target.value})}},{key:"deleteelem",value:function(){var e=Object(g.a)(b.a.mark((function e(t){var s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(new Date(Date.now()).toLocaleString()>=new Date(localStorage.getItem("expiry")).toLocaleString())){e.next=4;break}window.location.assign("/"),e.next=9;break;case 4:return this.context.handleToggle(),s="/note/delete/".concat(t.currentTarget.id),console.log(s),e.next=9,fetch(s,{method:"DELETE",headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){console.log(e),"deleted"===e.data&&window.location.assign("/mypage")}));case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"add",value:function(){var e=Object(g.a)(b.a.mark((function e(){var t,s,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(new Date(Date.now()).toLocaleString()>=new Date(localStorage.getItem("expiry")).toLocaleString())){e.next=4;break}window.location.assign("/"),e.next=12;break;case 4:return this.context.handleToggle(),t=localStorage.getItem("data"),s={userId:t,content:this.state.addelement,edit:"Created on"},console.log(s),a="/note/new",console.log(a),e.next=12,fetch(a,{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(e){console.log(e),e.status&&window.location.assign("/mypage")}));case 12:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(g.a)(b.a.mark((function e(){var t,s,a=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log(new Date(localStorage.getItem("expiry")).toLocaleString()),console.log(new Date(Date.now()).toLocaleString()),console.log(localStorage.getItem("logged")),t="/note/all/".concat(localStorage.getItem("data")),console.log(t),"".concat(localStorage.getItem("url"))!=t){e.next=10;break}return e.next=8,fetch(t).then((function(e){return e.json()})).then((function(e){e.status&&(a.setState({details:e.data}),console.log(e.data))}));case 8:e.next=13;break;case 10:return e.next=12,fetch(localStorage.getItem("url")).then((function(e){return e.json()})).then((function(e){e.status&&(a.setState({details:e.data}),console.log(e.data))}));case 12:localStorage.setItem("url",t);case 13:return s="/api/user/".concat(localStorage.getItem("data")),console.log(s),e.next=17,fetch(s).then((function(e){return e.json()})).then((function(e){e.status&&a.setState({userdetails:e.data})}));case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"onsave",value:function(){var e=Object(g.a)(b.a.mark((function e(t){var s,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(new Date(Date.now()).toLocaleString()>=new Date(localStorage.getItem("expiry")).toLocaleString())){e.next=4;break}window.location.assign("/"),e.next=12;break;case 4:return this.context.handleToggle(),console.log(this.state.id),s="/note/update/".concat(this.state.id),console.log(s),a={content:t,edit:"Last updated on"},console.log(a),e.next=12,fetch(s,{method:"PATCH",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(a)}).then((function(e){return e.json()})).then((function(e){console.log(e),window.location.assign("/mypage")}));case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t,s=this,a=this.state.details,n=this.state.userdetails;return this.state.sidebaropen&&(e=Object(O.jsx)(X,{login:n.email,signup:"Logout",click:this.logout,searchbar:Object(O.jsx)(oe,{})}),t=Object(O.jsx)(ee,{click:this.backdropclose})),Object(O.jsxs)("div",{className:"whole",children:[Object(O.jsxs)("div",{className:"add",children:[Object(O.jsx)(M,{login:n.email,signup:Object(O.jsx)(V.a,{}),search:Object(O.jsx)(oe,{}),drawer:this.opensidebar}),e,t,Object(O.jsx)("textarea",{type:"text",placeholder:"Add your note",onChange:this.setname}),Object(O.jsx)(K.a,{className:"plus",onClick:this.add})]}),Object(O.jsx)("ul",{children:a.map((function(e){return Object(O.jsxs)("div",{className:"details",children:[Object(O.jsx)("div",{id:"all-details",children:Object(O.jsxs)("div",{className:"name",children:[Object(O.jsx)("div",{className:"date",children:Object(O.jsxs)("em",{children:[e.edit," ",new Date(e.dot).toLocaleString()]})}),Object(O.jsx)("div",{className:"content-name",children:e.todoname}),Object(O.jsx)("div",{style:{height:"20px"}}),Object(O.jsx)("div",{className:"content",id:e._id,onClick:s.setid,style:{whiteSpace:"pre-wrap"},children:Object(O.jsx)(F.a,{id:e._id,type:"textarea",value:e.content,onSave:s.onsave})}),Object(O.jsx)("div",{className:"image-set",style:{display:"none"},children:Object(O.jsx)("input",{type:"file",accept:"image/*",className:"upload",onChange:s.onselectfile,ref:"InputField"})}),Object(O.jsxs)("div",{className:"list",children:[Object(O.jsx)("div",{id:e._id,onClick:s.setid,children:e.photoUrl.map((function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("img",{src:e,alt:"avatar",style:{width:"85px",height:"85px"}}),Object(O.jsx)($.a,{onClick:s.deleteobj,id:e.split("/").slice(-1)[0],style:{cursor:"pointer"}})]})}))}),Object(O.jsx)("div",{className:"addimage",children:Object(O.jsx)(Z.a,{onClick:s.triggerpopup,style:{cursor:"pointer"},id:e._id})})]}),Object(O.jsxs)("div",{className:"image-upload",ref:e._id,style:{display:"none",marginTop:"20px"},children:[Object(O.jsx)(G.a,{onClick:s.removefile,ref:"filestore",className:"file-remove",id:e._id}),Object(O.jsx)(q.a,{style:{color:"black"}}),Object(O.jsx)(A.a,{onClick:s.uploadpic,children:"Upload"})]})]})}),Object(O.jsx)("div",{className:"error",ref:"ref_".concat(e._id),style:{display:"none"}}),Object(O.jsx)("div",{className:"modify",children:Object(O.jsx)(B.a,{className:"delete-item",id:e._id,onClick:s.deleteelem})})]})}))}),Object(O.jsx)("div",{style:{height:"40px"}})]})}}]),s}(n.a.Component);re.contextType=I;var le=re,de=s(102),ue=s.n(de),he=(s(174),function(){return Object(O.jsx)("div",{className:"footername",children:Object(O.jsxs)("div",{children:[Object(O.jsx)(ue.a,{}),"Copyright\xa0 MyNotes2021"]})})}),pe=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){var e;console.log(localStorage.getItem("logged"));return new Date(Date.now()).toLocaleString()>=new Date(localStorage.getItem("expiry")).toLocaleString()&&(localStorage.setItem("logged",!1),localStorage.removeItem("data")),e=null!=localStorage.getItem("data")&&localStorage.getItem("logged")?Object(O.jsx)(le,{}):(localStorage.removeItem("logged"),localStorage.removeItem("data"),localStorage.removeItem("expiry"),localStorage.removeItem("url"),Object(O.jsx)(_,{})),Object(O.jsxs)("div",{style:{marginTop:"120px"},children:[Object(O.jsxs)("div",{className:"App__Aside",style:{height:"100%"},children:[Object(O.jsx)(M,{}),Object(O.jsx)(u.a,{children:Object(O.jsxs)(h.c,{children:[Object(O.jsx)(h.a,{exact:!0,path:"/",children:e}),Object(O.jsx)(h.a,{path:"/mypage",children:e})]})})]}),Object(O.jsx)(he,{})]})}}]),s}(n.a.Component),je=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,214)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),i(e),c(e)}))};c.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(D,{children:Object(O.jsx)(pe,{})})}),document.getElementById("root")),je()}},[[177,1,2]]]);
//# sourceMappingURL=main.e068e870.chunk.js.map