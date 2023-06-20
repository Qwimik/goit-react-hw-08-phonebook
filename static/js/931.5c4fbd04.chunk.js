"use strict";(self.webpackChunkphonebook_react=self.webpackChunkphonebook_react||[]).push([[931],{931:function(e,n,i){i.r(n),i.d(n,{default:function(){return v}});var r=i(176),l=i(9140),a=i(4224),t=i(9229),o=i(9434),s=i(1087),d=i(9273),u=i(184),c=function(){var e=(0,o.I0)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("form",{onSubmit:function(n){n.preventDefault();var i=n.currentTarget;e((0,d.Ib)({email:i.elements.email.value,password:i.elements.password.value}))},autoComplete:"off",children:(0,u.jsxs)(r.k,{align:"center",justify:"center",gap:"15px",direction:"column",maxW:"300px",m:"0 auto",children:[(0,u.jsx)(l.I,{variant:"filled",placeholder:"Email",type:"email",name:"email"}),(0,u.jsx)(l.I,{variant:"filled",placeholder:"Password",type:"password",name:"password"}),(0,u.jsx)(a.z,{type:"submit",w:"100%",children:"Log In"})]})}),(0,u.jsx)(s.rU,{to:"/register",children:(0,u.jsx)(t.x,{textAlign:"center",mt:"20px",color:"gray.500",fontSize:"md",fontWeight:"thin",_hover:{color:"#e0e0e0"},children:"No account? Register now!"})})]})};function v(){return(0,u.jsx)(c,{})}},2392:function(e,n,i){i.d(n,{NI:function(){return F},NJ:function(){return R},Q6:function(){return j},e:function(){return Z}});var r=i(1413),l=i(4925),a=i(9439),t=i(9886),o=i(4591),s=i(7872),d=i(9084),u=i(2996),c=i(1999),v=i(6992),p=i(2791),f=i(184),m=["id","isRequired","isInvalid","isDisabled","isReadOnly"],h=["getRootProps","htmlProps"],b=(0,t.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),x=(0,a.Z)(b,2),g=x[0],Z=x[1],y=(0,t.k)({strict:!1,name:"FormControlContext"}),I=(0,a.Z)(y,2),k=I[0],R=I[1];var F=(0,s.G)((function(e,n){var i=(0,d.jC)("Form",e),t=function(e){var n=e.id,i=e.isRequired,t=e.isInvalid,s=e.isDisabled,d=e.isReadOnly,u=(0,l.Z)(e,m),c=(0,p.useId)(),f=n||"field-".concat(c),h="".concat(f,"-label"),b="".concat(f,"-feedback"),x="".concat(f,"-helptext"),g=(0,p.useState)(!1),Z=(0,a.Z)(g,2),y=Z[0],I=Z[1],k=(0,p.useState)(!1),R=(0,a.Z)(k,2),F=R[0],j=R[1],C=(0,p.useState)(!1),q=(0,a.Z)(C,2),P=q[0],N=q[1],T=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:x},e),{},{ref:(0,o.lq)(n,(function(e){e&&j(!0)}))})}),[x]),O=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:n,"data-focus":(0,v.PB)(P),"data-disabled":(0,v.PB)(s),"data-invalid":(0,v.PB)(t),"data-readonly":(0,v.PB)(d),id:void 0!==e.id?e.id:h,htmlFor:void 0!==e.htmlFor?e.htmlFor:f})}),[f,s,P,t,d,h]),_=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({id:b},e),{},{ref:(0,o.lq)(n,(function(e){e&&I(!0)})),"aria-live":"polite"})}),[b]),w=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)((0,r.Z)({},e),u),{},{ref:n,role:"group"})}),[u]),D=(0,p.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,r.Z)((0,r.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!i,isInvalid:!!t,isReadOnly:!!d,isDisabled:!!s,isFocused:!!P,onFocus:function(){return N(!0)},onBlur:function(){return N(!1)},hasFeedbackText:y,setHasFeedbackText:I,hasHelpText:F,setHasHelpText:j,id:f,labelId:h,feedbackId:b,helpTextId:x,htmlProps:u,getHelpTextProps:T,getErrorMessageProps:_,getRootProps:w,getLabelProps:O,getRequiredIndicatorProps:D}}((0,u.Lr)(e)),s=t.getRootProps,b=(t.htmlProps,(0,l.Z)(t,h)),x=(0,v.cx)("chakra-form-control",e.className);return(0,f.jsx)(k,{value:b,children:(0,f.jsx)(g,{value:i,children:(0,f.jsx)(c.m.div,(0,r.Z)((0,r.Z)({},s({},n)),{},{className:x,__css:i.container}))})})}));F.displayName="FormControl";var j=(0,s.G)((function(e,n){var i=R(),l=Z(),a=(0,v.cx)("chakra-form__helper-text",e.className);return(0,f.jsx)(c.m.div,(0,r.Z)((0,r.Z)({},null==i?void 0:i.getHelpTextProps(e,n)),{},{__css:l.helperText,className:a}))}));j.displayName="FormHelperText"},9140:function(e,n,i){i.d(n,{I:function(){return h}});var r=i(1413),l=i(4925),a=i(2392),t=i(6992),o=["isDisabled","isInvalid","isReadOnly","isRequired"],s=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var n=function(e){var n,i,o,d=(0,a.NJ)(),u=e.id,c=e.disabled,v=e.readOnly,p=e.required,f=e.isRequired,m=e.isInvalid,h=e.isReadOnly,b=e.isDisabled,x=e.onFocus,g=e.onBlur,Z=(0,l.Z)(e,s),y=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&y.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&y.push(d.helpTextId);return(0,r.Z)((0,r.Z)({},Z),{},{"aria-describedby":y.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(n=null!=c?c:b)?n:null==d?void 0:d.isDisabled,isReadOnly:null!=(i=null!=v?v:h)?i:null==d?void 0:d.isReadOnly,isRequired:null!=(o=null!=p?p:f)?o:null==d?void 0:d.isRequired,isInvalid:null!=m?m:null==d?void 0:d.isInvalid,onFocus:(0,t.v0)(null==d?void 0:d.onFocus,x),onBlur:(0,t.v0)(null==d?void 0:d.onBlur,g)})}(e),i=n.isDisabled,d=n.isInvalid,u=n.isReadOnly,c=n.isRequired,v=(0,l.Z)(n,o);return(0,r.Z)((0,r.Z)({},v),{},{disabled:i,readOnly:u,required:c,"aria-invalid":(0,t.Qm)(d),"aria-required":(0,t.Qm)(c),"aria-readonly":(0,t.Qm)(u)})}var u=i(7872),c=i(9084),v=i(2996),p=i(1999),f=i(184),m=["htmlSize"],h=(0,u.G)((function(e,n){var i=e.htmlSize,a=(0,l.Z)(e,m),o=(0,c.jC)("Input",a),s=d((0,v.Lr)(a)),u=(0,t.cx)("chakra-input",e.className);return(0,f.jsx)(p.m.input,(0,r.Z)((0,r.Z)({size:i},s),{},{__css:o.field,ref:n,className:u}))}));h.displayName="Input",h.id="Input"}}]);
//# sourceMappingURL=931.5c4fbd04.chunk.js.map