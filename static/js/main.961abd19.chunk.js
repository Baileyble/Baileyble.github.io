(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{23:function(e,t,a){e.exports=a(44)},28:function(e,t,a){},29:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),l=(a(28),a(29),a(2)),s=a(3),o=a(5),m=a(4),u=a(6),h=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={activeLink:e.activeLink},n}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"navLinks"},r.a.createElement("li",null,r.a.createElement(u.Link,{duration:1e3,smooth:!0,to:"home",className:"".concat("home"===this.state.activeLink?"active":"")},"Home")),r.a.createElement("li",null,r.a.createElement(u.Link,{duration:1e3,smooth:!0,to:"code",className:"".concat("code"===this.state.activeLink?"active":"")},"Code")),r.a.createElement("li",null,r.a.createElement(u.Link,{duration:1e3,smooth:!0,to:"design",className:"".concat("design"===this.state.activeLink?"active":"")},"Design")),r.a.createElement("li",null,r.a.createElement(u.Link,{duration:1e3,smooth:!0,to:"about",className:"".concat("about"===this.state.activeLink?"active":"")},"About")),r.a.createElement("li",null,r.a.createElement(u.Link,{duration:1e3,smooth:!0,to:"contact",className:"".concat("contact"===this.state.activeLink?"active":"")},"Contact"))))}}]),a}(n.Component),d=function(e){return r.a.createElement("button",{className:"toggleButton",onClick:e.click},r.a.createElement("div",{className:"toggleButtonLine"}),r.a.createElement("div",{className:"toggleButtonLine"}),r.a.createElement("div",{className:"toggleButtonLine"}))},v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={activeLink:e.activeLink},n}return Object(s.a)(a,[{key:"render",value:function(){return this.props.navDrawerOpen?r.a.createElement("nav",{className:"navDrawer"},r.a.createElement("div",{onClick:this.props.click,className:"navDrawerX"},r.a.createElement("p",null,"X")),r.a.createElement("div",{className:"navDrawerList"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.Link,{onClick:this.props.click,duration:1,smooth:!1,to:"home",className:"".concat("home"===this.state.activeLink?"active":"")},"Home")),r.a.createElement("li",null,r.a.createElement(u.Link,{onClick:this.props.click,duration:1,smooth:!1,to:"code",className:"".concat("code"===this.state.activeLink?"active":"")},"Code")),r.a.createElement("li",null,r.a.createElement(u.Link,{onClick:this.props.click,duration:1,smooth:!1,to:"design",className:"".concat("design"===this.state.activeLink?"active":"")},"Design")),r.a.createElement("li",null,r.a.createElement(u.Link,{onClick:this.props.click,duration:1,smooth:!1,to:"about",className:"".concat("about"===this.state.activeLink?"active":"")},"About")),r.a.createElement("li",null,r.a.createElement(u.Link,{onClick:this.props.click,duration:1,smooth:!1,to:"contact",className:"".concat("contact"===this.state.activeLink?"active":"")},"Contact"))))):r.a.createElement("div",null)}}]),a}(n.Component),p=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).navToggleClickHandler=function(){n.setState((function(e){return{navDrawerOpen:!e.navDrawerOpen}}))},n.state={activeLink:"home",navDrawerOpen:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e;return this.state.navDrawerOpen||(e=r.a.createElement(d,{click:this.navToggleClickHandler})),r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{activeLink:this.state.activeLink,click:this.navToggleClickHandler,navDrawerOpen:this.state.navDrawerOpen}),r.a.createElement("div",{className:"homeBackgroundImage",id:"home"},r.a.createElement("div",{className:"homeBackgroundOverlay"},r.a.createElement("div",{className:"homeHeader"},r.a.createElement("div",{className:"navWrapper"},e)),r.a.createElement("div",{className:"homeTextWrapper"},r.a.createElement("h1",null,"Hi, I'm Bailey"),r.a.createElement("h3",null,"Front-End Developer & Designer"),r.a.createElement("h5",null,"A UX Designer turned Front-End Developer specializing in React Development.")),r.a.createElement(h,{activeLink:this.state.activeLink}))))}}]),a}(n.Component),g=[{id:0,name:"Bailey Le Photography",image:"https://live.staticflickr.com/65535/50130223653_4fa737c316_c.jpg",link:"https://baileyble.github.io/Bailey-Le-Photography/",type:"Project"},{id:1,name:"Caeser's Cipher Challenge",image:"https://live.staticflickr.com/65535/50130791011_631d9fd5bd_c.jpg",link:"https://codepen.io/Baiey/pen/OJyVbgy?editors=0010",type:"Challenge"},{id:2,name:"Financial Portal",image:"https://live.staticflickr.com/65535/50131067037_cfa2046dc2_h.jpg",link:"https://github.com/Baileyble/finance-portal",type:"Project"},{id:3,name:"baileyle.dev",image:"https://live.staticflickr.com/65535/50131226943_de5c143cd3_z.jpg",link:"https://github.com/Baileyble/Baileyble.github.io",type:"Project"},{id:4,name:"Constrained Writing",image:"https://live.staticflickr.com/65535/50273400781_30ea649745_h.jpg",link:"https://codepen.io/Baiey/pen/rNemeRG",type:"Challenge"}],k=a(8),E=a(9),b=function(e){var t=i.a.findDOMNode(e);return{width:t.offsetWidth,left:t.offsetLeft}},f=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).resize=function(){n.forceUpdate(),n.setState({projectWidth:b(n.content).width,projectsXCoordinate:0,currentFirstProject:1,leftArrow:"",rightArrow:"active"})},n.myRef=r.a.createRef(),n.state={codeProjects:g,projectWidth:0,projectsXCoordinate:0,currentFirstProject:1,leftArrow:"",rightArrow:"active"},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.content&&this.setState({projectWidth:b(this.content).width}),this.wrapper&&this.setState({projectsXCoordinate:b(this.wrapper).left}),window.addEventListener("resize",this.resize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resize)}},{key:"onClickRight",value:function(){this.state.currentFirstProject<this.state.codeProjects.length&&(this.setState({projectsXCoordinate:this.state.projectsXCoordinate-=this.state.projectWidth,currentFirstProject:this.state.currentFirstProject+=1}),this.state.currentFirstProject===this.state.codeProjects.length?this.setState({rightArrow:""}):this.state.currentFirstProject>1&&this.setState({leftArrow:"active"}))}},{key:"onClickLeft",value:function(){this.state.currentFirstProject>1&&(this.setState({projectsXCoordinate:this.state.projectsXCoordinate+=this.state.projectWidth,currentFirstProject:this.state.currentFirstProject-=1}),this.state.currentFirstProject<this.state.codeProjects.length&&this.setState({rightArrow:"active"}),1===this.state.currentFirstProject&&this.setState({leftArrow:""}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"codeProjectsContainer"},r.a.createElement("div",{ref:function(t){return e.wrapper=t},style:{left:this.state.projectsXCoordinate},className:"codeProjectWrapper"},this.state.codeProjects.map((function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{ref:function(t){return e.content=t},target:"_blank",rel:"noopener noreferrer",href:t.link},r.a.createElement("div",{className:"codeProjectImg",style:{backgroundImage:"url("+t.image+")"}},r.a.createElement("div",{className:"codeProjectOverlay"},r.a.createElement("h3",null,r.a.createElement("span",null,t.name)))),r.a.createElement("div",{className:"codeProjectCTA"},r.a.createElement("h3",null,r.a.createElement("span",null,"View ",t.type)))))}))),r.a.createElement("div",{className:"codeProjectBtns"},r.a.createElement("button",{className:this.state.leftArrow,onClick:function(){return e.onClickLeft()}},r.a.createElement(k.a,{size:"2x",icon:E.a})," "),r.a.createElement("button",{className:this.state.rightArrow,onClick:function(){return e.onClickRight()}},r.a.createElement(k.a,{size:"2x",icon:E.b})," ")))}}]),a}(n.Component),j=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).navToggleClickHandler=function(){n.setState((function(e){return{navDrawerOpen:!e.navDrawerOpen}}))},n.state={activeLink:"code",navDrawerOpen:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e;return this.state.navDrawerOpen||(e=r.a.createElement(d,{click:this.navToggleClickHandler})),r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{activeLink:this.state.activeLink,click:this.navToggleClickHandler,navDrawerOpen:this.state.navDrawerOpen}),r.a.createElement("div",{className:"codeBackground",id:"code"},r.a.createElement("div",{className:"codeContent"},r.a.createElement("div",{className:"codeHeader"},r.a.createElement("h2",null,"Code Projects"),r.a.createElement("div",{className:"navWrapper"},e)),r.a.createElement(f,null)),r.a.createElement(h,{activeLink:this.state.activeLink})))}}]),a}(n.Component),w=[{id:0,name:"Safe Eats SLC",image:"https://live.staticflickr.com/65535/50131017332_2a6c47bbff_c.jpg",description:"Safe Eats SLC is an app that allows users to access restaurant health ratings in Salt Lake City, Utah. It was created as a UX design project during a UX design bootcamp at Devmountain.",link:"https://uxdesign.cc/safe-eats-slc-a-ux-case-study-5a90916390ac",linkText:"Read The Case Study"},{id:1,name:"Ecopost",image:"https://live.staticflickr.com/65535/50131017277_2e7858353c_b.jpg",description:"Ecopost was designed as a UX design project for Devmountain's UX design bootcamp. Ecopost is website dedicated to making the process of recycling electronics as convenient as possible. Through our website users would be able to order a box to ship their device to be recycled.",link:"https://medium.com/bailey-le/ecopost-a-ux-case-study-8563269982f",linkText:"Read The Case Study"},{id:2,name:"Tippr",image:"https://cdn.dribbble.com/users/2369311/screenshots/9075058/media/c5f742c9e59081b3f521c29382fcdf30.png",description:"Tippr is a simple tip calculator that me and an iOS dev friend collaborated on for a practice project.\n",link:"https://apps.apple.com/us/app/tippr-tip-calculator/id1468993634",linkText:"View on App Store"},{id:3,name:"FlashStash",image:"https://cdn.dribbble.com/users/2369311/screenshots/5095672/flashstash.gif",description:"Flashstash is an app that allows users to create decks of flashcards that they can study with. The app allows users to test themselves with their flashcards and it keeps track of the amount they got right or wrong. For this project I worked with an iOS student at Devmountain to create the app.",link:"https://dribbble.com/shots/5095672-Flashstash-iOS-App",linkText:"View on Dribbble"}],C=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={designProjects:w,selectedProject:0,currentFirstProject:1,leftArrow:"",rightArrow:"active"},n}return Object(s.a)(a,[{key:"onClickProject",value:function(e){this.setState({selectedProject:e})}},{key:"onClickRight",value:function(){this.state.selectedProject<this.state.designProjects.length-1&&(this.setState({selectedProject:this.state.selectedProject+=1,currentFirstProject:this.state.currentFirstProject+=1}),this.state.currentFirstProject===this.state.designProjects.length?this.setState({rightArrow:""}):this.state.currentFirstProject>1&&this.setState({leftArrow:"active"}))}},{key:"onClickLeft",value:function(){this.state.selectedProject>0&&(this.setState({selectedProject:this.state.selectedProject-=1,currentFirstProject:this.state.currentFirstProject-=1}),this.state.currentFirstProject<this.state.designProjects.length&&this.setState({rightArrow:"active"}),1===this.state.currentFirstProject&&this.setState({leftArrow:""}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"designProjectsContainer"},r.a.createElement("div",{className:"designProjectList"},r.a.createElement("ul",null,this.state.designProjects.map((function(t){return e.state.selectedProject===t.id?r.a.createElement("li",null,r.a.createElement("a",{className:"active",onClick:function(){return e.onClickProject(t.id)}},t.name)):r.a.createElement("li",null,r.a.createElement("a",{onClick:function(){return e.onClickProject(t.id)}},t.name))})))),r.a.createElement("div",{className:"designProjectContent"},this.state.designProjects.map((function(t){return e.state.selectedProject===t.id&&null!=t.link?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"designProjectImg",style:{backgroundImage:"url("+t.image+")"}}),r.a.createElement("h3",{className:"mobileName"},t.name),r.a.createElement("p",null,t.description),r.a.createElement("h4",null,r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:t.link},t.linkText))):e.state.selectedProject===t.id?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"designProjectImg",style:{backgroundImage:"url("+t.image+")"}}),r.a.createElement("p",null,t.description)):void 0})),r.a.createElement("div",{className:"designProjectBtns"},r.a.createElement("button",{className:this.state.leftArrow,onClick:function(){return e.onClickLeft()}},r.a.createElement(k.a,{size:"2x",icon:E.a})," "),r.a.createElement("button",{className:this.state.rightArrow,onClick:function(){return e.onClickRight()}},r.a.createElement(k.a,{size:"2x",icon:E.b})," "))))}}]),a}(n.Component),y=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).navToggleClickHandler=function(){n.setState((function(e){return{navDrawerOpen:!e.navDrawerOpen}}))},n.state={activeLink:"design",navDrawerOpen:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e;return this.state.navDrawerOpen||(e=r.a.createElement(d,{click:this.navToggleClickHandler})),r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{activeLink:this.state.activeLink,click:this.navToggleClickHandler,navDrawerOpen:this.state.navDrawerOpen}),r.a.createElement("div",{className:"designBackground",id:"design"},r.a.createElement("div",{className:"designContent"},r.a.createElement("div",{className:"designHeader"},r.a.createElement("h2",null,"Design Projects"),r.a.createElement("div",{className:"navWrapper"},e)),r.a.createElement(C,null)),r.a.createElement(h,{activeLink:this.state.activeLink})))}}]),a}(n.Component),O=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).navToggleClickHandler=function(){n.setState((function(e){return{navDrawerOpen:!e.navDrawerOpen}}))},n.state={activeLink:"about",navDrawerOpen:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e;return this.state.navDrawerOpen||(e=r.a.createElement(d,{click:this.navToggleClickHandler})),r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{activeLink:this.state.activeLink,click:this.navToggleClickHandler,navDrawerOpen:this.state.navDrawerOpen}),r.a.createElement("div",{className:"aboutBackground",id:"about"},r.a.createElement("div",{className:"aboutContent"},r.a.createElement("div",{className:"aboutHeader"},r.a.createElement("h2",null,"About Me"),r.a.createElement("div",{className:"navWrapper"},e)),r.a.createElement("div",{className:"aboutContainer"},r.a.createElement("div",{className:"aboutImage",style:{backgroundImage:"url(https://live.staticflickr.com/65535/50131016147_68e5949a45_h.jpg)"}}),r.a.createElement("div",{className:"aboutText"},r.a.createElement("h3",null,"Hi, I'm Bailey"),r.a.createElement("p",null,"I\u2019m a Frontend Developer & Designer based out of NC. Originally starting as a UX Designer after attending Devmountain\u2019s UX Design bootcamp, I have decided to transition into a Frontend Developer role becoming a jack of all trades when it comes to digital product development. Combining my experience with UX/UI skills such as user research, ideation and designing with my knowledge of HTML, CSS, JS & React to be able to create amazing digital experiences."),r.a.createElement("p",{className:"secondParagraph"},"Currently, I am working as a UX/UI Designer for Quintevents in Charlotte, NC. I am now searching for new opportunities as a Front-End Developer. "),r.a.createElement("h5",null,r.a.createElement("a",{target:"_blank",href:"https://pdfhost.io/v/mygH.afyE_BaileyLeResumeFinalpdf.pdf"},"Resume"),"\xa0\xa0\xa0\xa0\xa0",r.a.createElement("a",{target:"_blank",href:"https://github.com/Baileyble"},"Github"))))),r.a.createElement(h,{activeLink:this.state.activeLink})))}}]),a}(n.Component),L=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).navToggleClickHandler=function(){n.setState((function(e){return{navDrawerOpen:!e.navDrawerOpen}}))},n.state={activeLink:"contact",navDrawerOpen:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e;return this.state.navDrawerOpen||(e=r.a.createElement(d,{click:this.navToggleClickHandler})),r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{activeLink:this.state.activeLink,click:this.navToggleClickHandler,navDrawerOpen:this.state.navDrawerOpen}),r.a.createElement("div",{className:"contactBackground",id:"contact"},r.a.createElement("div",{className:"contactContent"},r.a.createElement("div",{className:"contactHeader"},r.a.createElement("h2",null,"Contact Me"),r.a.createElement("div",{className:"navWrapper"},e)),r.a.createElement("div",{className:"contactContainer"},r.a.createElement("h3",null,"Like what you see?"),r.a.createElement("p",{className:"mb2"},"Reach out to me! You can email me or find me on any of the following platforms!"),r.a.createElement("div",{className:"contactColLeft"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null,"Email:"),r.a.createElement("h4",null,r.a.createElement("a",{href:"mailto:baileyble@gmail.com"},"baileyble@gmail.com"))),r.a.createElement("li",null,r.a.createElement("p",null,"Linkedin:"),r.a.createElement("h4",null,r.a.createElement("a",{href:"https://linkedin.com/in/baileyble",target:"_blank"},"linkedin.com/in/baileyble"))),r.a.createElement("li",null,r.a.createElement("p",null,"Github:"),r.a.createElement("h4",null,r.a.createElement("a",{href:"https://github.com/Baileyble",target:"_blank"},"github.com/Baileyble"))))),r.a.createElement("div",{className:"contactColRight"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("p",null,"Medium:"),r.a.createElement("h4",null,r.a.createElement("a",{href:"https://medium.com/@baileyble",target:"_blank"},"medium.com/@baileyble"))),r.a.createElement("li",null,r.a.createElement("p",null,"Dribbble:"),r.a.createElement("h4",null,r.a.createElement("a",{href:"https://dribbble.com/baileyble",target:"_blank"},"dribbble.com/baileyble"))))))),r.a.createElement(h,{activeLink:this.state.activeLink})))}}]),a}(n.Component),N=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,null),r.a.createElement(j,null),r.a.createElement(y,null),r.a.createElement(O,null),r.a.createElement(L,null))}}]),a}(n.Component);var P=function(){return r.a.createElement(N,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.961abd19.chunk.js.map