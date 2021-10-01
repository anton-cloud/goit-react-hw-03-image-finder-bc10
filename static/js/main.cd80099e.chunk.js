(this["webpackJsonpgoit-react-hw-03-image-finder-bc10"]=this["webpackJsonpgoit-react-hw-03-image-finder-bc10"]||[]).push([[0],{79:function(n,e,t){},80:function(n,e,t){"use strict";t.r(e);var a,o,r,i,c,s,l=t(0),p=t(11),d=t.n(p),h=t(17),g=t(10),b=t(6),u=t(7),m=t(9),x=t(8),f=t(3),j=t(4),O=j.b.li(a||(a=Object(f.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n  0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n\n.ImageGalleryItem-image {\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  \n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n}\n"]))),y=t(1),v=function(n){var e=n.image,t=n.onOpenModal;return Object(y.jsx)(O,{children:Object(y.jsx)("img",{src:e.webformatURL,alt:e.tags,className:"ImageGalleryItem-image",onClick:function(){return t(e.largeImageURL)}})})},w=j.b.ul(o||(o=Object(f.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]))),k=function(n){var e=n.images,t=n.onOpenModal;return Object(y.jsx)(w,{children:e.map((function(n){return Object(y.jsx)(v,{image:n,onOpenModal:t},n.id)}))})},S=t(12),M=j.b.header(r||(r=Object(f.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n  0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n\n.SearchForm {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n}\n\n.SearchForm-button {\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url('https://image.flaticon.com/icons/svg/149/149852.svg');\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n}\n\n.SearchForm-button:hover {\n  opacity: 1;\n}\n\n.SearchForm-button-label {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n}\n\n.SearchForm-input {\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n}\n\n.SearchForm-input::placeholder {\n  font: inherit;\n  font-size: 18px;\n}\n\n"]))),I={searchImg:""},C=function(n){Object(m.a)(t,n);var e=Object(x.a)(t);function t(){var n;Object(b.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).state=Object(g.a)({},I),n.onHandleChange=function(e){var t=e.target,a=t.name,o=t.value;n.setState(Object(S.a)({},a,o))},n.onHandleSubmit=function(e){e.preventDefault(),n.props.onSubmit(n.state.searchImg),n.setState(Object(g.a)({},I))},n}return Object(u.a)(t,[{key:"render",value:function(){return Object(y.jsx)(M,{children:Object(y.jsxs)("form",{className:"SearchForm",onSubmit:this.onHandleSubmit,children:[Object(y.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(y.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(y.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"searchImg",value:this.state.searchImg,onChange:this.onHandleChange})]})})}}]),t}(l.Component),F=C,L=t(31),z=t.n(L),N="22368183-bf812a4cdd1e1ebd2a0bd646c",B=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return z.a.get("https://pixabay.com/api/?q=".concat(n,"&page=").concat(e,"&key=").concat(N,"&image_type=photo&orientation=horizontal&per_page=12"))},D=j.b.div(i||(i=Object(f.a)(["\n  /* display: grid; */\n  grid-template-columns: 1fr;\n  grid-gap: 16px;\n  padding-bottom: 24px;\n"]))),H=j.b.button(c||(c=Object(f.a)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n  0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n&:hover,\n&:focus {\n  background-color: #303f9f;\n}\n"]))),U=function(n){var e=n.onLoadMore;return Object(y.jsx)("div",{className:"WrapperForBtn",children:Object(y.jsx)(H,{type:"button",onClick:e,children:"Load more"})})},E=t(2),T=t.n(E),A=j.b.div(s||(s=Object(f.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n\n.Modal {\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n}\n\n"]))),K=document.querySelector("#modal-root"),R=function(n){Object(m.a)(t,n);var e=Object(x.a)(t);function t(){var n;Object(b.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).state={},n.handleKeyDown=function(e){"Escape"===e.code&&n.props.onCloseModal()},n.handleBackdropClick=function(e){e.currentTarget===e.target&&n.props.onCloseModal()},n}return Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(p.createPortal)(Object(y.jsx)(A,{onClick:this.handleBackdropClick,children:Object(y.jsx)("div",{className:"Modal",children:this.props.children})}),K)}}]),t}(l.Component);K.propTypes={onCloseModal:T.a.func,children:T.a.node};var W,q,G=R,J=t(32),_=t.n(J),P=j.b.div(W||(W=Object(f.a)(["\n  text-align: center;\n"]))),Q=function(){return Object(y.jsx)(P,{children:Object(y.jsx)(_.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100})})},V={searchImg:"",images:[],largeImage:"",error:"",page:1,isLoading:!1,showModal:!1},X=function(n){Object(m.a)(t,n);var e=Object(x.a)(t);function t(){var n;Object(b.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))).state=Object(g.a)({},V),n.onSubmit=function(e){""!==e&&n.setState({searchImg:e})},n.onLoadMore=function(){n.setState({isLoading:!0}),B(n.state.searchImg,n.state.page).then((function(e){return n.setState((function(n){return{images:[].concat(Object(h.a)(n.images),Object(h.a)(e.data.hits)),page:n.page+1}}))})).catch((function(e){return n.setState({error:e})})).finally((function(){return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}),n.setState({isLoading:!1}))},n.onOpenModal=function(e){n.setState({showModal:!0,largeImage:e})},n.onCloseModal=function(){n.setState({showModal:!1})},n}return Object(u.a)(t,[{key:"componentDidUpdate",value:function(n,e){var t=this;e.searchImg!==this.state.searchImg&&(this.setState({isLoading:!0}),B(this.state.searchImg).then((function(n){return t.setState((function(e){return{images:n.data.hits,page:e.page+1}}))})).catch((function(n){return t.state({error:n})})).finally((function(){return t.setState({isLoading:!1})})))}},{key:"render",value:function(){var n=this.state,e=n.images,t=n.showModal,a=n.largeImage,o=n.isLoading;return Object(y.jsxs)(D,{children:[Object(y.jsx)(F,{onSubmit:this.onSubmit}),o?Object(y.jsx)(Q,{}):Object(y.jsx)(k,{images:e,onOpenModal:this.onOpenModal}),Number.isInteger(e.length/12)&&e.length>0&&Object(y.jsx)(U,{onLoadMore:this.onLoadMore}),t&&Object(y.jsx)(G,{onCloseModal:this.onCloseModal,children:Object(y.jsx)("img",{src:a,alt:"img"})})]})}}]),t}(l.Component),Y=X,Z=Object(j.a)(q||(q=Object(f.a)(["\n  html {\n  box-sizing: border-box;\n  width: 100vw;\n  overflow-x: hidden;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n}\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;\n  color: #212121;\n  background-color: #fff;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nimg {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n\n.WrapperForBtn {\n  text-align: center;\n  margin: 10px 0;\n}\n\n"])));t(79);d.a.render(Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(Z,{}),Object(y.jsx)(Y,{})]}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.cd80099e.chunk.js.map