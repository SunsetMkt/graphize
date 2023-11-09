function V(f){return f&&f.__esModule?f.default:f}function ye(f){Object.defineProperty(f,"__esModule",{value:!0,configurable:!0})}function P(f,Q,m,e){Object.defineProperty(f,Q,{get:m,set:e,enumerable:!0,configurable:!0})}var Ve=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{},I=Ve.parcelRequire11ea,Le=I.register;Le("woFV2",function(f,Q){ye(f.exports),P(f.exports,"DiffEditor",function(){return ve}),P(f.exports,"useMonaco",function(){return Me}),P(f.exports,"Editor",function(){return K}),P(f.exports,"default",function(){return me}),P(f.exports,"loader",function(){return I("tolM1").default});var m=I("tolM1"),e=I("er44Y"),te={wrapper:{display:"flex",position:"relative",textAlign:"initial"},fullWidth:{width:"100%"},hide:{display:"none"}},U=te,ne={container:{display:"flex",height:"100%",width:"100%",justifyContent:"center",alignItems:"center"}},ae=ne;function ue({children:r}){return V(e).createElement("div",{style:ae.container},r)}var ce=ue,ie=ce;function oe({width:r,height:n,isEditorReady:u,loading:t,_ref:p,className:g,wrapperProps:M}){return V(e).createElement("section",{style:{...U.wrapper,width:r,height:n},...M},!u&&V(e).createElement(ie,null,t),V(e).createElement("div",{ref:p,style:{...U.fullWidth,...!u&&U.hide},className:g}))}var de=oe,X=(0,e.memo)(de);function le(r){(0,e.useEffect)(r,[])}var F=le;function fe(r,n,u=!0){let t=(0,e.useRef)(!0);(0,e.useEffect)(t.current||!u?()=>{t.current=!1}:r,n)}var h=fe;function L(){}function x(r,n,u,t){return se(r,t)||$e(r,n,u,t)}function se(r,n){return r.editor.getModel(Z(r,n))}function $e(r,n,u,t){return r.editor.createModel(n,u,t?Z(r,t):void 0)}function Z(r,n){return r.Uri.parse(n)}function pe({original:r,modified:n,language:u,originalLanguage:t,modifiedLanguage:p,originalModelPath:g,modifiedModelPath:M,keepCurrentOriginalModel:E=!1,keepCurrentModifiedModel:j=!1,theme:R="light",loading:D="Loading...",options:w={},height:Y="100%",width:q="100%",className:z,wrapperProps:H={},beforeMount:W=L,onMount:A=L}){let[v,S]=(0,e.useState)(!1),[C,o]=(0,e.useState)(!0),d=(0,e.useRef)(null),i=(0,e.useRef)(null),O=(0,e.useRef)(null),s=(0,e.useRef)(A),a=(0,e.useRef)(W),y=(0,e.useRef)(!1);F(()=>{let c=m.default.init();return c.then(l=>(i.current=l)&&o(!1)).catch(l=>l?.type!=="cancelation"&&console.error("Monaco initialization: error:",l)),()=>d.current?k():c.cancel()}),h(()=>{if(d.current&&i.current){let c=d.current.getOriginalEditor(),l=x(i.current,r||"",t||u||"text",g||"");l!==c.getModel()&&c.setModel(l)}},[g],v),h(()=>{if(d.current&&i.current){let c=d.current.getModifiedEditor(),l=x(i.current,n||"",p||u||"text",M||"");l!==c.getModel()&&c.setModel(l)}},[M],v),h(()=>{let c=d.current.getModifiedEditor();c.getOption(i.current.editor.EditorOption.readOnly)?c.setValue(n||""):n!==c.getValue()&&(c.executeEdits("",[{range:c.getModel().getFullModelRange(),text:n||"",forceMoveMarkers:!0}]),c.pushUndoStop())},[n],v),h(()=>{d.current?.getModel()?.original.setValue(r||"")},[r],v),h(()=>{let{original:c,modified:l}=d.current.getModel();i.current.editor.setModelLanguage(c,t||u||"text"),i.current.editor.setModelLanguage(l,p||u||"text")},[u,t,p],v),h(()=>{i.current?.editor.setTheme(R)},[R],v),h(()=>{d.current?.updateOptions(w)},[w],v);let N=(0,e.useCallback)(()=>{if(!i.current)return;a.current(i.current);let c=x(i.current,r||"",t||u||"text",g||""),l=x(i.current,n||"",p||u||"text",M||"");d.current?.setModel({original:c,modified:l})},[u,n,p,r,t,g,M]),T=(0,e.useCallback)(()=>{!y.current&&O.current&&(d.current=i.current.editor.createDiffEditor(O.current,{automaticLayout:!0,...w}),N(),i.current?.editor.setTheme(R),S(!0),y.current=!0)},[w,R,N]);(0,e.useEffect)(()=>{v&&s.current(d.current,i.current)},[v]),(0,e.useEffect)(()=>{!C&&!v&&T()},[C,v,T]);function k(){let c=d.current?.getModel();E||c?.original?.dispose(),j||c?.modified?.dispose(),d.current?.dispose()}return V(e).createElement(X,{width:q,height:Y,isEditorReady:v,loading:D,_ref:O,className:z,wrapperProps:H})}var ge=pe,ve=(0,e.memo)(ge);function he(){let[r,n]=(0,e.useState)(m.default.__getMonacoInstance());return F(()=>{let u;return r||(u=m.default.init(),u.then(t=>{n(t)})),()=>u?.cancel()}),r}var Me=he;function we(r){let n=(0,e.useRef)();return(0,e.useEffect)(()=>{n.current=r},[r]),n.current}var Re=we,_=new Map;function Ee({defaultValue:r,defaultLanguage:n,defaultPath:u,value:t,language:p,path:g,theme:M="light",line:E,loading:j="Loading...",options:R={},overrideServices:D={},saveViewState:w=!0,keepCurrentModel:Y=!1,width:q="100%",height:z="100%",className:H,wrapperProps:W={},beforeMount:A=L,onMount:v=L,onChange:S,onValidate:C=L}){let[o,d]=(0,e.useState)(!1),[i,O]=(0,e.useState)(!0),s=(0,e.useRef)(null),a=(0,e.useRef)(null),y=(0,e.useRef)(null),N=(0,e.useRef)(v),T=(0,e.useRef)(A),k=(0,e.useRef)(),c=(0,e.useRef)(t),l=Re(g),ee=(0,e.useRef)(!1),B=(0,e.useRef)(!1);F(()=>{let $=m.default.init();return $.then(b=>(s.current=b)&&O(!1)).catch(b=>b?.type!=="cancelation"&&console.error("Monaco initialization: error:",b)),()=>a.current?xe():$.cancel()}),h(()=>{let $=x(s.current,r||t||"",n||p||"",g||u||"");$!==a.current?.getModel()&&(w&&_.set(l,a.current?.saveViewState()),a.current?.setModel($),w&&a.current?.restoreViewState(_.get(g)))},[g],o),h(()=>{a.current?.updateOptions(R)},[R],o),h(()=>{!a.current||t===void 0||(a.current.getOption(s.current.editor.EditorOption.readOnly)?a.current.setValue(t):t!==a.current.getValue()&&(B.current=!0,a.current.executeEdits("",[{range:a.current.getModel().getFullModelRange(),text:t,forceMoveMarkers:!0}]),a.current.pushUndoStop(),B.current=!1))},[t],o),h(()=>{let $=a.current?.getModel();$&&p&&s.current?.editor.setModelLanguage($,p)},[p],o),h(()=>{E!==void 0&&a.current?.revealLine(E)},[E],o),h(()=>{s.current?.editor.setTheme(M)},[M],o);let re=(0,e.useCallback)(()=>{if(!(!y.current||!s.current)&&!ee.current){T.current(s.current);let $=g||u,b=x(s.current,t||r||"",n||p||"",$||"");a.current=s.current?.editor.create(y.current,{model:b,automaticLayout:!0,...R},D),w&&a.current.restoreViewState(_.get($)),s.current.editor.setTheme(M),E!==void 0&&a.current.revealLine(E),d(!0),ee.current=!0}},[r,n,u,t,p,g,R,D,w,M,E]);(0,e.useEffect)(()=>{o&&N.current(a.current,s.current)},[o]),(0,e.useEffect)(()=>{!i&&!o&&re()},[i,o,re]),c.current=t,(0,e.useEffect)(()=>{o&&S&&(k.current?.dispose(),k.current=a.current?.onDidChangeModelContent($=>{B.current||S(a.current.getValue(),$)}))},[o,S]),(0,e.useEffect)(()=>{if(o){let $=s.current.editor.onDidChangeMarkers(b=>{let G=a.current.getModel()?.uri;if(G&&b.find(J=>J.path===G.path)){let J=s.current.editor.getModelMarkers({resource:G});C?.(J)}});return()=>{$?.dispose()}}return()=>{}},[o,C]);function xe(){k.current?.dispose(),Y?w&&_.set(g,a.current.saveViewState()):a.current.getModel()?.dispose(),a.current.dispose()}return V(e).createElement(X,{width:q,height:z,isEditorReady:o,loading:j,_ref:y,className:H,wrapperProps:W})}var be=Ee,K=(0,e.memo)(be),me=K});
