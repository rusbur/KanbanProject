(this.webpackJsonpkanban=this.webpackJsonpkanban||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),o=a.n(r),s=(a(14),a(7),a(2)),i=a(1),c=a(5),m=a.n(c);var d=function(e){var t=Object(n.useState)(!1),a=Object(i.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(""),c=Object(i.a)(s,2),d=c[0],u=c[1],p=Object(n.useState)(""),v=Object(i.a)(p,2),b=v[0],E=v[1],f=Object(n.useState)(!1),_=Object(i.a)(f,2),h=_[0],g=_[1],N=function(){u(""),o(!1),g(!1),E("")};return l.a.createElement(l.a.Fragment,null,!r&&l.a.createElement("button",{className:"btn btn-sm btn-outline-info ",onClick:function(){o(!0)}},"New"),r&&l.a.createElement("form",{className:"addnewitem_style"},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",className:"form-control",placeholder:"Enter a new task...",value:d,onChange:function(e){g(e.target.value.length>4),u(e.target.value)}}),l.a.createElement("input",{type:"text",className:"",placeholder:"Priority of task",value:b,onChange:function(e){var t=/^\d+$/.test(e.target.value);E(t?e.target.value:b)}})),l.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:function(t){t.preventDefault();var a={id:m.a.floor(1e4*m.a.random()),name:d,priority:parseInt(b)};e.addnewtask(a,e.currentlist,e.setList),N()},disabled:!h},"Submit"),l.a.createElement("button",{className:"btn btn-secondary",onClick:N},"Cancel")))};var u=function(e){return l.a.createElement("div",{className:"btn-group dropright"},l.a.createElement("button",{className:"btn btn-sm btn-secondary dropdown-toggle",type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"true",onClick:function(){console.log(e.columns_names),console.log(e.current_column_name)}}," Move to"),l.a.createElement("div",{class:"dropdown-menu"},e.columns_names.map((function(t){if(t!=e.current_column_name)return l.a.createElement("div",null,l.a.createElement("a",{className:"dropdown-item",href:"#",onClick:function(){e.move_to(t,e.index,e.currentlist,e.setList)}}," ",t," "))}))))};var p=function(e){return l.a.createElement("div",{className:"modal fade",id:e.id,tabIndex:"-1",role:"dialog","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Are you sure you want to delete this task?"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},e.title),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),l.a.createElement("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal",onClick:function(){e.delete_post(e.id,e.currentlist,e.setList)}},"Delete")))))};var v=function(e){var t=Object(n.useState)(e.task_obj.name),a=Object(i.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(e.task_obj.priority),c=Object(i.a)(s,2),m=c[0],d=c[1];return l.a.createElement("div",{className:"modal fade",id:e.modal_id,tabIndex:"-1",role:"dialog","aria-hidden":"true"},l.a.createElement("div",{className:"modal-dialog",role:"document"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("h5",{className:"modal-title",id:"exampleModalLabel"},"Edit task"),l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},l.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"formInput"},"Task"),l.a.createElement("input",{type:"text",className:"form-control",id:"formInput",value:r,onChange:function(e){o(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"formInput"},"Priority"),l.a.createElement("input",{type:"text",className:"form-control",id:"formInput",value:m,onChange:function(e){var t=/^\d+$/.test(e.target.value);d(t?e.target.value:m)}}))),l.a.createElement("div",{className:"modal-footer"},l.a.createElement("button",{type:"button",className:"btn btn-secondary","data-dismiss":"modal"},"Close"),l.a.createElement("button",{type:"button",className:"btn btn-primary","data-dismiss":"modal",onClick:function(){return function(){var t={id:e.task_obj.id,name:r,priority:parseInt(m)},a=e.currentlist.map((function(a){return a.id===e.task_obj.id?t:a}));e.save_updated_list(a,e.setList)}()}},"Save")))))},b=l.a.createElement("svg",{className:"bi bi-arrow-up-square",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),l.a.createElement("path",{"fill-rule":"evenodd",d:"M4.646 8.354a.5.5 0 0 0 .708 0L8 5.707l2.646 2.647a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708z"}),l.a.createElement("path",{"fill-rule":"evenodd",d:"M8 11.5a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5z"})),E=l.a.createElement("svg",{className:"bi bi-arrow-down-square",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),l.a.createElement("path",{"fill-rule":"evenodd",d:"M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"}),l.a.createElement("path",{"fill-rule":"evenodd",d:"M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"})),f=l.a.createElement("svg",{className:"bi bi-trash",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),l.a.createElement("path",{"fill-rule":"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"})),_=l.a.createElement("svg",{className:"bi bi-pencil-square",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"}),l.a.createElement("path",{"fill-rule":"evenodd",d:"M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"}));var h=function(e){var t=e.el.id.toString()+e.el.id.toString();return l.a.createElement("div",{className:"card Cardstyle",key:e.el.id},l.a.createElement("div",{className:"card-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-9"},l.a.createElement("h5",{class:"card-title"}," ",e.el.name," ")),l.a.createElement("div",{className:"col-sm-3"},l.a.createElement("span",{className:"btn-outline-info","data-toggle":"modal","data-target":"#"+t},_,"  "),l.a.createElement(v,{modal_id:t,task_obj:e.el,currentlist:e.currentlist,setList:e.setList,save_updated_list:e.save_updated_list}))),l.a.createElement("p",null," Priority: ",e.el.priority),l.a.createElement("div",{className:"buttons_group"},l.a.createElement("span",{className:"spanstyle btn-outline-info ",onClick:function(){return e.move_up(e.el.id,e.currentlist,e.setList)}},b," "),l.a.createElement("sapn",{className:"spanstyle btn-outline-info",onClick:function(){return e.move_down(e.el.id,e.currentlist,e.setList)}},E,"  "),l.a.createElement("span",{className:"spanstyle btn-outline-info","data-toggle":"modal","data-target":"#"+e.el.id},f," "),l.a.createElement(p,{delete_post:e.delete_post,title:e.el.name,id:e.el.id,currentlist:e.currentlist,setList:e.setList})),l.a.createElement("div",{className:""},l.a.createElement(u,{current_column_name:e.current_column_name,columns_names:Object.keys(e.ColumnsNames_and_Headers),index:e.index,move_to:e.move_to,setList:e.setList,currentlist:e.currentlist}))))};var g=function(e){return l.a.createElement("div",{className:"col columnstyle"},l.a.createElement("h5",null,e.ColumnsNames_and_Headers[e.column_name]),l.a.createElement("div",{className:"columnheader"},l.a.createElement(d,{addnewtask:e.addnewtask,current_column_list:e.current_column_list,setList:e.column_Setfunc}),l.a.createElement("button",{type:"button",className:"stepahead btn btn-sm btn-outline-info ",onClick:function(){return e.sort_bypriority(e.current_column_list,e.column_Setfunc)}},"Sort.. ")),l.a.createElement("div",null,e.current_column_list.map((function(t,a){return l.a.createElement(h,{el:t,index:a,currentlist:e.current_column_list,setList:e.column_Setfunc,current_column_name:e.column_name,ColumnsNames_and_Headers:e.ColumnsNames_and_Headers,delete_post:e.delete_post,save_updated_list:e.save_updated_list,move_up:e.move_up,move_down:e.move_down,move_to:e.move_to})}))))};var N=function(e){var t=Object(n.useState)(e.todo_start),a=Object(i.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(e.progress_start),m=Object(i.a)(c,2),d=m[0],u=m[1],p=Object(n.useState)(e.review_start),v=Object(i.a)(p,2),b=v[0],E=v[1],f=Object(n.useState)(e.done_start),_=Object(i.a)(f,2),h=_[0],N=_[1],w={dolist:"TO DO",progress:"IN PROGRESS",review:"REVIEW",done:"DONE"},y={dolist:[r,o],progress:[r,u],review:[b,E],done:[h,N]},C=function(e,t,a){a((function(t){return[e].concat(Object(s.a)(t))}))},j=function(e,t,a){var n=null,l=0;if(t.map((function(t,a){t.id===e&&(n=t,l=a)})),0!==l){var r=Object(s.a)(t);r.splice(l,1),r.splice(l-1,0,n),a(r)}},k=function(e,t,a){var n=null,l=0;if(t.map((function(t,a){t.id===e&&(n=t,l=a)})),l!==t.length-1){var r=Object(s.a)(t);r.splice(l,1),r.splice(l+1,0,n),a(r)}},O=function(e,t,a){a(t.filter((function(t){return t.id!==e})))},L=function(e,t,a,n){var l=Object(s.a)(a)[t];O(a[t].id,a,n);var r=Object(s.a)(y[e][0]);r.push(l),y[e][1](r)},x=function(e,t){t(e)},S=function(e,t){for(var a=Object(s.a)(e),n=[],l=function(){var e=-1,t=0;a.forEach((function(a,n){a.priority>e&&(e=a.priority,t=n)})),n.push(a[t]),a.splice(t,1)};0!==a.length;)l();t(n)},M=function(e,t,a){return l.a.createElement(g,{ColumnsNames_and_Headers:w,column_name:e,current_column_list:t,column_Setfunc:a,sort_bypriority:S,addnewtask:C,delete_post:O,save_updated_list:x,move_up:j,move_down:k,move_to:L})};return l.a.createElement("div",{className:"Board"},l.a.createElement("div",{className:"row"},l.a.createElement("h2",null,"Kanban progect  "),l.a.createElement("a",{className:"stepahead",href:"https://github.com/rusbur/KanbanProject"},"github link")),l.a.createElement("div",{className:"row"},M("dolist",r,o),M("progress",d,u),M("review",b,E),M("done",h,N)))},w=[{id:11,name:"Create App1",priority:10},{id:12,name:"Create App2",priority:23},{id:13,name:"Create App2",priority:25}],y=[{id:15,name:"Test Module3",priority:16},{id:14,name:"Create F5",priority:20}],C=[{id:17,name:"Test Module4",priority:15},{id:16,name:"Create F7",priority:9},{id:23,name:"Create App77",priority:25}],j=[{id:19,name:"Create F8",priority:40}];var k=function(){return l.a.createElement("div",{className:"Content"},l.a.createElement(N,{todo_start:w,progress_start:y,review_start:C,done_start:j}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.02405086.chunk.js.map