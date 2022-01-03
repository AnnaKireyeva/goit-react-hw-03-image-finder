(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGallery_ImageGalleryItem__22J6U",ImageGalleryItemImage:"ImageGallery_ImageGalleryItemImage__1iW-V"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1DL1J",Modal:"Modal_Modal__2nqC3"}},19:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__18HDl"}},20:function(e,t,a){e.exports={Button:"Button_Button__tQIF9"}},26:function(e,t,a){},48:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(10),c=a.n(o),l=(a(26),a(14)),s=a(3),i=a(4),u=a(6),h=a(5),m=a(7),g=(a(15),a(17)),d=a.n(g),b=(a(47),a(48),a(21)),j=a(8),p=a.n(j),y=a(1),f=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={query:""},e.handleChange=function(t){e.setState({query:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.query.trim()?(e.props.onSubmit(e.state.query),e.setState({query:""})):m.b.warning("Enter your query!")},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(y.jsx)("header",{className:p.a.Searchbar,children:Object(y.jsxs)("form",{className:p.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(y.jsx)("button",{type:"submit",className:p.a.SearchFormButton,children:Object(y.jsx)(b.a,{className:p.a.SearchFormButtonLabel})}),Object(y.jsx)("input",{className:p.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"query",value:this.state.query,onChange:this.handleChange})]})})}}]),a}(r.Component),O=f,S=a(18),I=a.n(S),v=a(19),_=a.n(v),x=a(12),w=a.n(x),k=function(e){var t=e.clicked,a=e.imageId,r=e.imageSmall,n=(e.imageLarge,e.alt);return Object(y.jsx)("li",{className:w.a.ImageGalleryItem,onClick:t,children:Object(y.jsx)("img",{id:a,src:r,alt:n,className:w.a.ImageGalleryItemImage})})},C=function(e){var t=e.images,a=e.onClick;return Object(y.jsx)("ul",{className:_.a.ImageGallery,children:t.map((function(e){return Object(y.jsx)(k,{imageId:e.id,imageSmall:e.webformatURL,imageLadge:e.largeImageURL,alt:e.tags,clicked:a},I.a.generate())}))})},F=a(20),q=a.n(F),M=function(e){var t=e.loadMore;return Object(y.jsx)("button",{type:"button",className:q.a.Button,onClick:t,children:"Load more"})},N=a(13),G=a.n(N),B=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).handleKeyDown=function(t){"Escape"===t.code&&(console.log("clicked Escape"),e.props.onClose())},e.handleOverlayClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(y.jsx)("div",{className:G.a.Overlay,onClick:this.handleOverlayClick,children:Object(y.jsx)("div",{className:G.a.Modal,children:Object(y.jsx)("img",{src:this.props.src,alt:""})})})}}]),a}(r.Component),U=function(e){Object(u.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={query:"",page:1,hits:[],loading:!1,error:null,showModal:!1,largeImgUrl:""},e.apiKey="24065015-abf144b31d6566bdcce4b2cfb",e.baseUrl="https://pixabay.com/api/",e.fetchImages=function(){fetch("".concat(e.baseUrl,"?q=").concat(e.state.query,"&page=").concat(e.state.page,"&key=").concat(e.apiKey,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No images for this request"))})).then((function(t){var a=t.hits;if(e.setState((function(e){return{hits:[].concat(Object(l.a)(e.hits),Object(l.a)(a)),page:e.page+1}})),0===e.state.hits.length)return m.b.error("No images for your request")})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({loading:!1}),e.toScroll()}))},e.getQueryFromForm=function(t){e.setState({query:t})},e.toScroll=function(){window.scrollBy({top:document.documentElement.clientHeight,behavior:"smooth"})},e.handleGalleryItem=function(t){e.setState({largeImgUrl:t.target.currentSrc,showModal:!0})},e.toggleModal=function(t){e.setState((function(e){return{showModal:!e.showModal,largeImgUrl:t}}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e,t){t.query!==this.state.query&&(this.setState({loading:!0,hits:[],page:1}),this.fetchImages())}},{key:"render",value:function(){return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("h1",{className:"Title",children:"Image finder"}),this.state.error&&Object(y.jsx)("h1",{children:this.state.message}),Object(y.jsx)(O,{onSubmit:this.getQueryFromForm}),Object(y.jsx)(m.a,{autoClose:3e3}),Object(y.jsx)(C,{images:this.state.hits,onClick:this.handleGalleryItem}),this.state.loading&&Object(y.jsx)(d.a,{type:"BallTriangle",color:"#00BFFF",height:100,width:100,timeout:5e3,className:"Loader"}),this.state.hits.length>0&&!this.state.loading&&Object(y.jsx)(M,{loadMore:this.fetchImages}),this.state.showModal&&Object(y.jsx)(B,{onClose:this.toggleModal,src:this.state.largeImgUrl,alt:""})]})}}]),a}(r.Component);c.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(U,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__1T8bs",SearchForm:"Searchbar_SearchForm__jCXSY",SearchFormButton:"Searchbar_SearchFormButton__3SYpP",SearchFormInput:"Searchbar_SearchFormInput__3T2zt"}}},[[58,1,2]]]);
//# sourceMappingURL=main.11e00ab7.chunk.js.map