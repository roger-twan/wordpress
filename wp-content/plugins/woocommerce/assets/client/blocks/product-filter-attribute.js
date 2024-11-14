(()=>{var e,t,r,o={9039:(e,t,r)=>{"use strict";r.r(t);const o=window.wc.wcSettings;var n=r(1609),l=r(5573);const c=(0,n.createElement)(l.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(l.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M6 10C7.10457 10 8 9.10457 8 8C8 6.89543 7.10457 6 6 6C4.89543 6 4 6.89543 4 8C4 9.10457 4.89543 10 6 10ZM20 8.75H11.1111V7.25L20 7.25V8.75ZM20 15.75L11.1111 15.75V14.25L20 14.25V15.75ZM8 15C8 16.1046 7.10457 17 6 17C4.89543 17 4 16.1046 4 15C4 13.8954 4.89543 13 6 13C7.10457 13 8 13.8954 8 15Z",fill:"currentColor"})),a=window.wp.blocks,i=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","name":"woocommerce/product-filter-attribute","version":"1.0.0","title":"Filter Options","description":"Enable customers to filter the product grid by selecting one or more attributes, such as color.","category":"woocommerce","keywords":["WooCommerce"],"textdomain":"woocommerce","apiVersion":3,"ancestor":["woocommerce/product-filter"],"supports":{"interactivity":true,"inserter":false,"color":{"text":true,"background":false,"__experimentalDefaultControls":{"text":false}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontWeight":true,"__experimentalFontFamily":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":false}},"spacing":{"margin":true,"padding":true,"blockGap":true,"__experimentalDefaultControls":{"margin":false,"padding":false,"blockGap":false}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":false,"radius":false,"style":false,"width":false}}},"usesContext":["query","queryId"],"attributes":{"attributeId":{"type":"number","default":0},"showCounts":{"type":"boolean","default":false},"queryType":{"type":"string","default":"or"},"displayStyle":{"type":"string","default":"list"},"selectType":{"type":"string","default":"multiple"},"isPreview":{"type":"boolean","default":false},"sortOrder":{"type":"string","default":"count-desc"},"hideEmpty":{"type":"boolean","default":true},"clearButton":{"type":"boolean","default":true}}}'),s=window.wc.wcBlocksData,u=window.wp.data;var m=r(6087),d=r(923),p=r.n(d);function _(e){const t=(0,m.useRef)(e);return p()(e,t.current)||(t.current=e),t.current}const b=window.wc.wcTypes,w=e=>{const{namespace:t,resourceName:r,resourceValues:o=[],query:n={},shouldSelect:l=!0}=e;if(!t||!r)throw new Error("The options object must have valid values for the namespace and the resource properties.");const c=(0,m.useRef)({results:[],isLoading:!0}),a=_(n),i=_(o),d=(()=>{const[,e]=(0,m.useState)();return(0,m.useCallback)((t=>{e((()=>{throw t}))}),[])})(),p=(0,u.useSelect)((e=>{if(!l)return null;const o=e(s.COLLECTIONS_STORE_KEY),n=[t,r,a,i],c=o.getCollectionError(...n);if(c){if(!(0,b.isError)(c))throw new Error("TypeError: `error` object is not an instance of Error constructor");d(c)}return{results:o.getCollection(...n),isLoading:!o.hasFinishedResolution("getCollection",n)}}),[t,r,i,a,l]);return null!==p&&(c.current=p),c.current};var y=r(4717),h=r(5574);const g=(0,m.createContext)("page"),f=()=>(0,m.useContext)(g),v=(g.Provider,e=>{const t=f();e=e||t;const r=(0,u.useSelect)((t=>t(s.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)),[e]),{setValueForQueryContext:o}=(0,u.useDispatch)(s.QUERY_STATE_STORE_KEY);return[r,(0,m.useCallback)((t=>{o(e,t)}),[e,o])]}),E=(e,t,r)=>{const o=f();r=r||o;const n=(0,u.useSelect)((o=>o(s.QUERY_STATE_STORE_KEY).getValueForQueryKey(r,e,t)),[r,e]),{setQueryValue:l}=(0,u.useDispatch)(s.QUERY_STATE_STORE_KEY);return[n,(0,m.useCallback)((t=>{l(r,e,t)}),[r,e,l])]},k=window.wp.blockEditor,x=window.wp.components;var C=r(7723),S=r(7104),O=r(224);const T=({placeholder:e})=>(0,n.createElement)("div",{className:"wc-interactivity-dropdown"},(0,n.createElement)("div",{className:"wc-interactivity-dropdown__dropdown"},(0,n.createElement)("div",{className:"wc-interactivity-dropdown__dropdown-selection",tabIndex:0},(0,n.createElement)("span",{className:"wc-interactivity-dropdown__placeholder"},e),(0,n.createElement)("span",{className:"wc-interactivity-dropdown__svg-container"},(0,n.createElement)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30"},(0,n.createElement)("path",{d:"M17.5 11.6L12 16l-5.5-4.4.9-1.2L12 14l4.5-3.6 1 1.2z"})))))),B=({label:e})=>(0,n.createElement)("div",{className:"wc-block-attribute-filter style-dropdown"},(0,n.createElement)(T,{placeholder:(0,C.sprintf)(/* translators: %s attribute name. */ /* translators: %s attribute name. */
(0,C.__)("Select %s","woocommerce"),e)}),(0,n.createElement)(S.A,{icon:O.A,size:30})),N=({items:e})=>{const t=e.length>15;return(0,n.createElement)("div",{className:"wc-block-interactivity-components-checkbox-list"},(0,n.createElement)("ul",{className:"wc-block-interactivity-components-checkbox-list__list"},(t?e.slice(0,15):e).map(((e,t)=>(0,n.createElement)("li",{key:t,className:"wc-block-interactivity-components-checkbox-list__item"},(0,n.createElement)("label",{htmlFor:`interactive-checkbox-${t}`,className:" wc-block-interactivity-components-checkbox-list__label"},(0,n.createElement)("span",{className:"wc-block-interactive-components-checkbox-list__input-wrapper"},(0,n.createElement)("span",{className:"wc-block-interactivity-components-checkbox-list__input-wrapper"},(0,n.createElement)("input",{name:`interactive-checkbox-${t}`,type:"checkbox",className:"wc-block-interactivity-components-checkbox-list__input",defaultChecked:[1,3,4].includes(t)}),(0,n.createElement)("svg",{className:"wc-block-interactivity-components-checkbox-list__mark",viewBox:"0 0 10 8",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{d:"M9.25 1.19922L3.75 6.69922L1 3.94922",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})))),(0,n.createElement)("span",{className:"wc-block-interactivity-components-checkbox-list__text"},e)))))),t&&(0,n.createElement)("span",{className:"wc-block-interactivity-components-checkbox-list__show-more"},(0,n.createElement)("small",null,(0,C.__)("Show more…","woocommerce"))))},A=[{id:23,name:(0,C.__)("Blue","woocommerce"),slug:"blue",attr_slug:"blue",description:"",parent:0,count:4},{id:29,name:(0,C.__)("Gray","woocommerce"),slug:"gray",attr_slug:"gray",description:"",parent:0,count:3},{id:24,name:(0,C.__)("Green","woocommerce"),slug:"green",attr_slug:"green",description:"",parent:0,count:3},{id:25,name:(0,C.__)("Red","woocommerce"),slug:"red",attr_slug:"red",description:"",parent:0,count:4},{id:30,name:(0,C.__)("Yellow","woocommerce"),slug:"yellow",attr_slug:"yellow",description:"",parent:0,count:1}],I={"name-asc":(0,C.__)("Name, A to Z","woocommerce"),"name-desc":(0,C.__)("Name, Z to A","woocommerce"),"count-desc":(0,C.__)("Most results first","woocommerce"),"count-asc":(0,C.__)("Least results first","woocommerce")},j=Object.entries(I).map((([e,t])=>({label:t,value:e}))),P=(0,o.getSetting)("attributes",[]).reduce(((e,t)=>{const r=(o=t)&&o.attribute_name?{id:parseInt(o.attribute_id,10),name:o.attribute_name,taxonomy:"pa_"+o.attribute_name,label:o.attribute_label}:null;var o;return r&&r.id&&e.push(r),e}),[]);function q(e){if(e)return P.find((t=>t.id===e))}const F=(0,o.getSetting)("attributes",[]),L=({clientId:e,attributes:t,setAttributes:r})=>{const{attributeId:o,sortOrder:l,queryType:c,displayStyle:a,showCounts:i,hideEmpty:s,clearButton:d}=t,{updateBlockAttributes:p}=(0,u.dispatch)("core/block-editor"),{productFilterWrapperBlockId:_,productFilterWrapperHeadingBlockId:b}=(0,u.useSelect)((t=>{if(!e)return{productFilterWrapperBlockId:void 0,productFilterWrapperHeadingBlockId:void 0};const{getBlockParentsByBlockName:r,getBlock:o}=t("core/block-editor"),n=r(e,"woocommerce/product-filter");if(0===n.length)return{productFilterWrapperBlockId:void 0,productFilterWrapperHeadingBlockId:void 0};const l=n[0],c=o(l),a=null==c?void 0:c.innerBlocks.find((e=>"core/group"===e.name)),i=null==a?void 0:a.innerBlocks.find((e=>"core/heading"===e.name));return{productFilterWrapperBlockId:l,productFilterWrapperHeadingBlockId:null==i?void 0:i.clientId}}),[e]);return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(k.InspectorControls,{key:"inspector"},(0,n.createElement)(x.PanelBody,{title:(0,C.__)("Attribute","woocommerce")},(0,n.createElement)(x.ComboboxControl,{options:F.map((e=>({value:e.attribute_id,label:e.attribute_label}))),value:o+"",onChange:e=>{const t=parseInt(e||"",10);r({attributeId:t});const o=q(t);var n;_&&p(_,{attributeId:t}),b&&p(b,{content:null!==(n=null==o?void 0:o.label)&&void 0!==n?n:(0,C.__)("Attribute","woocommerce")})},help:(0,C.__)("Choose the attribute to show in this filter.","woocommerce")})),(0,n.createElement)(x.PanelBody,{title:(0,C.__)("Settings","woocommerce")},(0,n.createElement)(x.SelectControl,{label:(0,C.__)("Sort order","woocommerce"),value:l,options:[{value:"",label:(0,C.__)("Select an option","woocommerce"),disabled:!0},...j],onChange:e=>r({sortOrder:e}),help:(0,C.__)("Determine the order of filter options.","woocommerce")}),(0,n.createElement)(x.__experimentalToggleGroupControl,{label:(0,C.__)("Logic","woocommerce"),value:c,onChange:e=>r({queryType:e}),style:{width:"100%"},help:"and"===c?(0,m.createInterpolateElement)((0,C.__)("Show results for <b>all</b> selected attributes. Displayed products must contain <b>all of them</b> to appear in the results.","woocommerce"),{b:(0,n.createElement)("strong",null)}):(0,C.__)("Show results for any of the attributes selected (displayed products don’t have to have them all).","woocommerce")},(0,n.createElement)(x.__experimentalToggleGroupControlOption,{label:(0,C.__)("Any","woocommerce"),value:"or"}),(0,n.createElement)(x.__experimentalToggleGroupControlOption,{label:(0,C.__)("All","woocommerce"),value:"and"})))),(0,n.createElement)(k.InspectorControls,{group:"styles"},(0,n.createElement)(x.PanelBody,{title:(0,C.__)("Display","woocommerce")},(0,n.createElement)(x.__experimentalToggleGroupControl,{value:a,onChange:e=>r({displayStyle:e}),style:{width:"100%"}},(0,n.createElement)(x.__experimentalToggleGroupControlOption,{label:(0,C.__)("List","woocommerce"),value:"list"}),(0,n.createElement)(x.__experimentalToggleGroupControlOption,{label:(0,C.__)("Chips","woocommerce"),value:"chips"})),(0,n.createElement)(x.ToggleControl,{label:(0,C.__)("Product counts","woocommerce"),checked:i,onChange:e=>r({showCounts:e})}),(0,n.createElement)(x.ToggleControl,{label:(0,C.__)("Empty filter options","woocommerce"),checked:!s,onChange:e=>r({hideEmpty:!e})}),(0,n.createElement)(x.ToggleControl,{label:(0,C.__)("Clear button","woocommerce"),checked:d,onChange:e=>r({clearButton:e})}))))};var R=r(6378),D=r(4133);const M=({children:e})=>(0,n.createElement)(x.Placeholder,{className:"wc-block-attribute-filter",icon:(0,n.createElement)(S.A,{icon:R.A}),label:(0,C.__)("Filter by Attribute","woocommerce"),instructions:(0,C.__)("Enable customers to filter the product grid by selecting one or more attributes, such as color.","woocommerce")},e),W=()=>(0,n.createElement)(M,null,(0,n.createElement)("p",null,(0,C.__)("Attributes are needed for filtering your products. You haven't created any attributes yet.","woocommerce")),(0,n.createElement)(x.Button,{className:"wc-block-attribute-filter__add-attribute-button",variant:"secondary",href:(0,o.getAdminLink)("edit.php?post_type=product&page=product_attributes"),target:"_top"},(0,C.__)("Add new attribute","woocommerce")+" ",(0,n.createElement)(S.A,{icon:D.A})),(0,n.createElement)(x.Button,{className:"wc-block-attribute-filter__read_more_button",variant:"tertiary",href:"https://woocommerce.com/document/managing-product-taxonomies/",target:"_blank"},(0,C.__)("Learn more","woocommerce")));r(9642);const V=(0,o.getSetting)("attributes",[]),G=(0,x.withSpokenMessages)((e=>{const{attributes:t}=e,{attributeId:r,queryType:o,isPreview:l,displayStyle:c,showCounts:a,sortOrder:i,hideEmpty:s}=t,u=q(r),[d,p]=(0,m.useState)([]),{results:g}=w({namespace:"/wc/store/v1",resourceName:"products/attributes/terms",resourceValues:[(null==u?void 0:u.id)||0],shouldSelect:!(null==u||!u.id),query:{orderby:"menu_order",hide_empty:s}}),{results:S}=(({queryAttribute:e,queryPrices:t,queryStock:r,queryRating:o,queryState:n,isEditor:l=!1})=>{let c=f();c=`${c}-collection-data`;const[a]=v(c),[i,s]=E("calculate_attribute_counts",[],c),[u,d]=E("calculate_price_range",null,c),[p,g]=E("calculate_stock_status_counts",null,c),[k,x]=E("calculate_rating_counts",null,c),C=_(e||{}),S=_(t),O=_(r),T=_(o);(0,m.useEffect)((()=>{"object"==typeof C&&Object.keys(C).length&&(i.find((e=>(0,b.objectHasProp)(C,"taxonomy")&&e.taxonomy===C.taxonomy))||s([...i,C]))}),[C,i,s]),(0,m.useEffect)((()=>{u!==S&&void 0!==S&&d(S)}),[S,d,u]),(0,m.useEffect)((()=>{p!==O&&void 0!==O&&g(O)}),[O,g,p]),(0,m.useEffect)((()=>{k!==T&&void 0!==T&&x(T)}),[T,x,k]);const[B,N]=(0,m.useState)(l),[A]=(0,y.d7)(B,200);B||N(!0);const I=(0,m.useMemo)((()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=(0,h.di)(e.calculate_attribute_counts.map((({taxonomy:e,queryType:t})=>({taxonomy:e,query_type:t})))).asc(["taxonomy","query_type"])),t})(a)),[a]);return w({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...n,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...I},shouldSelect:A})})({queryAttribute:{taxonomy:(null==u?void 0:u.taxonomy)||"",queryType:o},queryState:{},isEditor:!0});(0,m.useEffect)((()=>{const e=(0,b.objectHasProp)(S,"attribute_counts")&&(t=S.attribute_counts,Array.isArray(t)&&t.every((e=>"term"in e&&"count"in e)))?S.attribute_counts.map((e=>e.term)):[];var t;if(0===e.length&&s)return p([]);p(g.filter((t=>!s||e.includes(t.id))).sort(((e,t)=>{switch(i){case"name-asc":return e.name>t.name?1:-1;case"name-desc":return e.name<t.name?1:-1;case"count-asc":return e.count>t.count?1:-1;default:return e.count<t.count?1:-1}})))}),[g,S,i,s]);const O=({children:t})=>(0,n.createElement)("div",{...(0,k.useBlockProps)()},(0,n.createElement)(L,{...e}),t);return l?(0,n.createElement)(O,null,(0,n.createElement)(x.Disabled,null,(0,n.createElement)(N,{items:A.map((e=>a?`${e.name} (${e.count})`:e.name))}))):0===Object.keys(V).length?(0,n.createElement)(O,null,(0,n.createElement)(W,null)):r&&u?0===d.length?(0,n.createElement)(O,null,(0,n.createElement)(x.Notice,{status:"warning",isDismissible:!1},(0,n.createElement)("p",null,(0,C.__)("There are no products with the selected attributes.","woocommerce")))):(0,n.createElement)(O,null,(0,n.createElement)(x.Disabled,null,"dropdown"===c?(0,n.createElement)(B,{label:u.label||(0,C.__)("attribute","woocommerce")}):(0,n.createElement)(N,{items:d.map((e=>a?`${e.name} (${e.count})`:e.name))}))):(0,n.createElement)(O,null,(0,n.createElement)(x.Notice,{status:"warning",isDismissible:!1},(0,n.createElement)("p",null,(0,C.__)("Please select an attribute to use this filter!","woocommerce"))))}));if((()=>{const{experimentalBlocksEnabled:e}=(0,o.getSetting)("wcBlocksConfig",{experimentalBlocksEnabled:!1});return e})()){const e=(0,o.getSetting)("defaultProductFilterAttribute");(0,a.registerBlockType)(i,{edit:G,icon:c,attributes:{...i.attributes,attributeId:{...i.attributes.attributeId,default:parseInt(e.attribute_id,10)}}})}},9642:()=>{},1609:e=>{"use strict";e.exports=window.React},6087:e=>{"use strict";e.exports=window.wp.element},7723:e=>{"use strict";e.exports=window.wp.i18n},923:e=>{"use strict";e.exports=window.wp.isShallowEqual},5573:e=>{"use strict";e.exports=window.wp.primitives}},n={};function l(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return o[e].call(r.exports,r,r.exports,l),r.exports}l.m=o,e=[],l.O=(t,r,o,n)=>{if(!r){var c=1/0;for(u=0;u<e.length;u++){for(var[r,o,n]=e[u],a=!0,i=0;i<r.length;i++)(!1&n||c>=n)&&Object.keys(l.O).every((e=>l.O[e](r[i])))?r.splice(i--,1):(a=!1,n<c&&(c=n));if(a){e.splice(u--,1);var s=o();void 0!==s&&(t=s)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,o,n]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,l.t=function(e,o){if(1&o&&(e=this(e)),8&o)return e;if("object"==typeof e&&e){if(4&o&&e.__esModule)return e;if(16&o&&"function"==typeof e.then)return e}var n=Object.create(null);l.r(n);var c={};t=t||[null,r({}),r([]),r(r)];for(var a=2&o&&e;"object"==typeof a&&!~t.indexOf(a);a=r(a))Object.getOwnPropertyNames(a).forEach((t=>c[t]=()=>e[t]));return c.default=()=>e,l.d(n,c),n},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.j=2448,(()=>{var e={2448:0};l.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,[c,a,i]=r,s=0;if(c.some((t=>0!==e[t]))){for(o in a)l.o(a,o)&&(l.m[o]=a[o]);if(i)var u=i(l)}for(t&&t(r);s<c.length;s++)n=c[s],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(u)},r=self.webpackChunkwebpackWcBlocksMainJsonp=self.webpackChunkwebpackWcBlocksMainJsonp||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var c=l.O(void 0,[94],(()=>l(9039)));c=l.O(c),((this.wc=this.wc||{}).blocks=this.wc.blocks||{})["product-filter-attribute"]=c})();