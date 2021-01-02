(()=>{"use strict";const e=(()=>{const e=document.querySelector(".modal-guts"),t=document.querySelector("#modal"),o=document.querySelector("#modal-overlay");return{newProjectHTML:()=>{e.innerHTML='\n      <h1>New Project</h1>\n      <form id="modal-form">\n  \n        <div class="form-row">\n          <label for="project-title">Title:</label>\n        </div>\n  \n        <div class="form-row">\n          <input type="text" id="project-title" name="project-title" required />\n        </div>\n  \n  \n          <div class="form-row">\n            <label for="project-description">Description</label>\n          </div>\n          <div class="form-row">\n            <textarea id="project-description" name="project-description" required></textarea>\n          </div>\n          <div class="form-row bottom">\n            <button type="button">Delete</button>\n            <button type="submit">Submit</button>\n          </div>\n      </form>\n\n    '},toggle:()=>{t.classList.toggle("closed"),o.classList.toggle("closed")},taskHTML:t=>{let o=t?`<input type="text" id="title" name="title" value="${t.title}">`:'<input type="text" id="title" name="title">',n=t?`<input type="date" id="date" name="date" value="${t.dueDate}">`:'<input type="date" id="date" name="date">',i=t?`<textarea id="description" name="description">${t.description}</textarea>`:'<textarea id="description" name="description"></textarea>';e.innerHTML=`\n    <h1>${t?"Edit Task":"New Task"}</h1>\n    <form id="modal-form">\n      <div class="form-row">\n        <label for="title">Title:</label>\n        ${o}\n        <label for="due-date">Due Date:</label>\n        ${n}\n      </div>\n      <div class="form-row">\n        <label>Difficulty</label>\n      </div>\n      <div class="form-row">\n      \n    <div class="radio-toolbar">\n      <input type="radio" id="radio1" name="radios" value="#F5D346" checked>\n      <label for="radio1">Low</label>\n      <input type="radio" id="radio2" name="radios" value="#D98121">\n      <label for="radio2">Medium</label>\n      <input type="radio" id="radio3" name="radios" value="#D3151C">\n      <label for="radio3">High</label>\n    </div>\n    \n      </div>\n        <div class="form-row">\n          <label for="description">Description</label>\n        </div>\n        <div class="form-row">\n          ${i}\n        </div>\n        <div class="form-row bottom">\n          <button type="button">Delete</button>\n          <button type="submit">Submit</button>\n        </div>\n    </form>\n    `}}})(),t=(()=>{const e=document.getElementById("dynamic-projects");return{renderProjects:t=>{t.forEach((t=>{e.innerHTML+=`<h2 data-id='${t.id}' class="project project-name">${t.name}</h2>`}))},clearProjects:()=>{e.innerHTML=""},setBackground:e=>{Array.from(document.getElementsByClassName("project")).forEach((t=>{t.getAttribute("data-id")==e?t.style.backgroundColor="#444a4d":t.style.backgroundColor="transparent"}))}}})(),o=(()=>{const e=document.getElementById("task-grouping");return{clear:()=>{e.innerHTML=""},render:t=>{t.length?t.forEach((t=>{var o;e.innerHTML+=`\n    <div data-id="${(o=t).id}" class="task-item">\n      <div class="task accordian">\n  \n        <div style="background-color:${o.priority}"id="priority-style"></div>\n        <input type="checkbox" class="todo-completed" ${1==o.complete?"checked":""}>\n        <h2 class="title">${o.title}</h2>\n        <h2 class="date">In X days</h2>\n  \n      </div>\n      <div class="task-full inactive">\n        <div class="description-top">\n          <h3>Description:</h3>\n          <h3>10/20/20</h3>\n          <i data-id="${o.id}" class="fas fa-ellipsis-v task-edit"></i>\n        </div>\n        <p>${o.description}</p>\n      </div>\n    </div>\n    `})):console.log("no tasks yet")},renderAll:e=>{e.forEach((e=>{o.render(e.todoList)}))}}})();var n,i=new Uint8Array(16);function r(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(i)}const a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,d=function(e){return"string"==typeof e&&a.test(e)};for(var s=[],c=0;c<256;++c)s.push((c+256).toString(16).substr(1));const l=function(e,t,o){var n=(e=e||{}).random||(e.rng||r)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){o=o||0;for(var i=0;i<16;++i)t[o+i]=n[i];return t}return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase();if(!d(o))throw TypeError("Stringified UUID is invalid");return o}(n)};function u(e,t){this.id=l(),this.name=e,this.description=t,this.active=!1,this.todoList=[]}function m(e,t,o,n){this.id=l(),this.title=e,this.description=t,this.priority=o,this.complete=!1,this.dueDate=n}u.prototype.addTodo=function(e){this.todoList.push(e)},u.prototype.toggleActive=function(){this.active=!this.active},u.prototype.deleteTodoItem=function(e){const t=this.todoList.findIndex((t=>t.id==e));this.todoList.splice(t,1)},u.prototype.getTodoItem=function(e){return this.todoList.find((t=>t.id==e))};const p=(()=>{if(localStorage.length){const e=[];return JSON.parse(localStorage.getItem("user")).forEach((t=>{const o=Object.assign(new u,t);e.push(o)})),e}return[]})(),g=(()=>{const e=e=>e.find((e=>1==e.active));return{addNewProject:(e,t,o)=>{const n=new u(e,t);o.push(n)},setToActive:(e,t)=>{t.forEach((t=>t.id==e?t.active=!0:t.active=!1))},getActiveProj:e,addNewTask:(e,t,o,n,i)=>{const r=new m(e,t,o,n);i.forEach((e=>{1==e.active&&e.addTodo(r)}))},save:e=>{localStorage.setItem("user",JSON.stringify(e))},getTask:(t,o)=>{const n=e(o);if(n)return n.todoList.find((e=>e.id==t));for(let e=0;e<o.length;e++){for(let n=0;e<o[e].todoList.length;n++){if(o[e].todoList[n]==t)return o[e].todoList[n];n++}e++}}}})(),f=(()=>{const n=document.querySelector("#close-button"),i=document.getElementById("new-project"),r=document.getElementById("new-task"),a=document.getElementById("edit-project");return{modalClose:()=>{n.addEventListener("click",(function(){e.toggle()}))},newProject:()=>{i.addEventListener("click",(()=>{e.newProjectHTML(),(()=>{const o=document.getElementById("modal-form");o.addEventListener("submit",(n=>{n.preventDefault(),g.addNewProject(o["project-title"].value,o["project-description"].value,p),t.clearProjects(),t.renderProjects(p),v.projectNames(),g.save(p),e.toggle()}))})(),e.toggle()}))},newTask:()=>{r.addEventListener("click",(()=>{e.taskHTML(),(()=>{const t=document.getElementById("modal-form");t.addEventListener("submit",(n=>{n.preventDefault();const i={title:t.title.value,dueDate:t.date.value,priority:t.radios.value,description:t.description.value};g.addNewTask(i.title,i.description,i.priority,i.dueDate,p);const r=g.getActiveProj(p);o.clear(),o.render(r.todoList),v.editTaskBtns(),v.expandedTodo(),v.todoCheckBoxes(),g.save(p),e.toggle()}))})(),e.toggle()}))},allBtn:e=>{document.getElementById("all-projects").addEventListener("click",(n=>{o.clear(),o.renderAll(e),t.setBackground(n.target.getAttribute("data-id")),v.editTaskBtns(),v.expandedTodo(),v.todoCheckBoxes()}))},editProject:()=>{a.addEventListener("click",(()=>{console.log("lets edit the project"),g.getActiveProj(p)}))}}})(),v={todoCheckBoxes:()=>{Array.from(document.getElementsByClassName("todo-completed")).forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.parentElement.parentElement.getAttribute("data-id");console.log(t)}))}))},expandedTodo:()=>{Array.from(document.getElementsByClassName("accordian")).forEach((e=>{e.addEventListener("click",(t=>{"todo-completed"!=t.target.className&&e.nextElementSibling.classList.toggle("inactive")}))}))},editTaskBtns:()=>{Array.from(document.getElementsByClassName("task-edit")).forEach((t=>{t.addEventListener("click",(o=>{let n=g.getTask(t.getAttribute("data-id"),p);e.taskHTML(n),e.toggle()}))}))},projectNames:()=>{Array.from(document.getElementsByClassName("project-name")).forEach((e=>{e.addEventListener("click",(e=>{const n=e.target.getAttribute("data-id");g.setToActive(n,p);const i=g.getActiveProj(p);(e=>{const t=document.getElementById("active-title"),o=document.getElementById("active-description");t.innerHTML=e.name,o.innerHTML=e.description})(i),o.clear(),o.render(i.todoList),t.setBackground(n),v.editTaskBtns(),v.expandedTodo(),v.todoCheckBoxes()}))}))}};f.modalClose(),f.newProject(),f.newTask(),f.editProject(),localStorage.length?(f.allBtn(p),p.sort(((e,t)=>e.name.localeCompare(t.name))),t.renderProjects(p),v.projectNames(),o.clear(),o.renderAll(p),v.editTaskBtns(),v.expandedTodo(),v.todoCheckBoxes()):console.log("no data found")})();