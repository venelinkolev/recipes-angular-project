"use strict";(self.webpackChunkapp_final_exam_project=self.webpackChunkapp_final_exam_project||[]).push([[778],{3778:(E,p,r)=>{r.r(p),r.d(p,{SearchModule:()=>B});var u=r(6814),x=r(167),l=r(95),y=r(7394);class w extends y.w0{constructor(t,e){super()}schedule(t,e=0){return this}}const h={setInterval(i,t,...e){const{delegate:s}=h;return s?.setInterval?s.setInterval(i,t,...e):setInterval(i,t,...e)},clearInterval(i){const{delegate:t}=h;return(t?.clearInterval||clearInterval)(i)},delegate:void 0};var I=r(9039);const f={now:()=>(f.delegate||Date).now(),delegate:void 0};class d{constructor(t,e=d.now){this.schedulerActionCtor=t,this.now=e}schedule(t,e=0,s){return new this.schedulerActionCtor(this,t).schedule(s,e)}}d.now=f.now;const A=new class S extends d{constructor(t,e=d.now){super(t,e),this.actions=[],this._active=!1}flush(t){const{actions:e}=this;if(this._active)return void e.push(t);let s;this._active=!0;do{if(s=t.execute(t.state,t.delay))break}while(t=e.shift());if(this._active=!1,s){for(;t=e.shift();)t.unsubscribe();throw s}}}(class C extends w{constructor(t,e){super(t,e),this.scheduler=t,this.work=e,this.pending=!1}schedule(t,e=0){var s;if(this.closed)return this;this.state=t;const c=this.id,o=this.scheduler;return null!=c&&(this.id=this.recycleAsyncId(o,c,e)),this.pending=!0,this.delay=e,this.id=null!==(s=this.id)&&void 0!==s?s:this.requestAsyncId(o,this.id,e),this}requestAsyncId(t,e,s=0){return h.setInterval(t.flush.bind(t,this),s)}recycleAsyncId(t,e,s=0){if(null!=s&&this.delay===s&&!1===this.pending)return e;null!=e&&h.clearInterval(e)}execute(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const s=this._execute(t,e);if(s)return s;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,e){let c,s=!1;try{this.work(t)}catch(o){s=!0,c=o||new Error("Scheduled action threw falsy error")}if(s)return this.unsubscribe(),c}unsubscribe(){if(!this.closed){const{id:t,scheduler:e}=this,{actions:s}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,I.P)(s,this),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null,super.unsubscribe()}}});var T=r(9360),Z=r(8251),M=r(2181),j=r(4664),n=r(4946),O=r(4198),b=r(2906);function F(i,t){if(1&i&&(n.TgZ(0,"div",8),n._UZ(1,"app-recipe",9),n.qZA()),2&i){const e=t.$implicit;n.xp6(1),n.Q6J("recipe",e)}}function P(i,t){1&i&&(n.TgZ(0,"div",10),n._uU(1,"No Recipes!"),n.qZA())}function N(i,t){if(1&i&&(n.TgZ(0,"div",0),n.YNc(1,F,2,1,"div",6),n.YNc(2,P,2,0,"div",7),n.qZA()),2&i){const e=n.oxw();n.xp6(1),n.Q6J("ngForOf",e.recipes),n.xp6(1),n.Q6J("ngIf",0===e.recipes.length)}}function Q(i,t){1&i&&(n.TgZ(0,"div"),n._uU(1,"Loading..."),n.qZA())}function Y(i,t){1&i&&(n.TgZ(0,"div",11),n._UZ(1,"img",12),n.qZA())}const z=x.Bz.forChild([{path:"",title:"Search",component:(()=>{class i{constructor(e){this.recipeService=e,this.recipes=[],this.searchFormControl=new l.NI}ngOnInit(){this.searchFormControl.valueChanges.pipe(function J(i,t=A){return(0,T.e)((e,s)=>{let c=null,o=null,v=null;const m=()=>{if(c){c.unsubscribe(),c=null;const a=o;o=null,s.next(a)}};function H(){const a=v+i,g=t.now();if(g<a)return c=this.schedule(void 0,a-g),void s.add(c);m()}e.subscribe((0,Z.x)(s,a=>{o=a,v=t.now(),c||(c=t.schedule(H,i),s.add(c))},()=>{m(),s.complete()},void 0,()=>{o=c=null}))})}(800),(0,M.h)(e=>e.length>2),(0,j.w)(e=>this.recipeService.search$(e))).subscribe(e=>{console.log(e),this.recipes=e})}}return i.\u0275fac=function(e){return new(e||i)(n.Y36(O.j))},i.\u0275cmp=n.Xpm({type:i,selectors:[["app-search"]],decls:7,vars:4,consts:[[1,"row","justify-content-md-center","p-2"],[1,"col-md-6"],["type","text","placeholder","Search for Recipes",1,"input-field",3,"formControl"],["class","row justify-content-md-center p-2",4,"ngIf"],[4,"ngIf"],["class","row justify-content-md-center p-3",4,"ngIf"],["class","col-md-auto text-center",4,"ngFor","ngForOf"],["class","text-center",4,"ngIf"],[1,"col-md-auto","text-center"],[3,"recipe"],[1,"text-center"],[1,"row","justify-content-md-center","p-3"],["src","https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1","alt","Image",1,"imageHeight"]],template:function(e,s){1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"form"),n._UZ(3,"input",2),n.qZA()()(),n.YNc(4,N,3,2,"div",3),n.YNc(5,Q,2,0,"div",4),n.YNc(6,Y,2,0,"div",5)),2&e&&(n.xp6(3),n.Q6J("formControl",s.searchFormControl),n.xp6(1),n.Q6J("ngIf",s.recipes),n.xp6(1),n.Q6J("ngIf",!s.recipes),n.xp6(1),n.Q6J("ngIf",0===s.recipes.length))},dependencies:[u.sg,u.O5,l._Y,l.Fj,l.JJ,l.JL,l.oH,b.b],styles:[".input-field[_ngcontent-%COMP%]{font-size:15px;background:rgba(255,255,255,.6);color:#000;text-shadow:2px 2px 3px white;height:50px;width:100%;padding:0 10px 0 45px;border:none;border-radius:30px;outline:none;transition:.2s ease}.input-field[_ngcontent-%COMP%]:hover, .input-field[_ngcontent-%COMP%]:focus{background:rgba(245,223,60,.45)}.card[_ngcontent-%COMP%]{width:-moz-fit-content;width:fit-content}.imageHeight[_ngcontent-%COMP%]{height:30rem;width:30rem;box-shadow:2px 2px 25px #000}"]}),i})()}]);var R=r(3510);let B=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[u.ez,z,l.UX,R.B]}),i})()}}]);