(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,n,t){},15:function(e,n,t){},16:function(e,n,t){"use strict";t.r(n);var a=t(1),r=t.n(a),i=t(7),s=t.n(i),o=(t(12),t(13),t(2)),c=t(3),l=t(5),h=t(4),u=t(0),d=function(e){return Object(u.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(u.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(e.id,"?200x200")}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:e.name}),Object(u.jsx)("p",{children:e.email})]})]})},m=function(e){var n=e.robots,t=n.map((function(e,t){return Object(u.jsx)(d,{id:n[t].id,name:n[t].name,email:n[t].email},t)}));return Object(u.jsx)("div",{children:t})},b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],j=function(e){var n=e.searchChange;return Object(u.jsx)("div",{className:"pa2",children:Object(u.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:n})})},f=(t(15),function(e){return Object(u.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"1000px"},children:e.children})}),p=function(e){Object(l.a)(t,e);var n=Object(h.a)(t);function t(e){var a;return Object(o.a)(this,t),(a=n.call(this,e)).state={hasError:!1},a}return Object(c.a)(t,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"Oops!  Ran in to an error"}):this.props.children}}]),t}(r.a.Component),O=function(e){Object(l.a)(t,e);var n=Object(h.a)(t);function t(){var e;return Object(o.a)(this,t),(e=n.call(this)).onSearchChange=function(n){console.log(n.target.value),e.setState({searchfield:n.target.value})},e.state={robots:b,searchfield:""},e}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({robots:n})}))}},{key:"render",value:function(){var e=this.state,n=e.robots,t=e.searchfield,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return console.log(a),n.length?Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{children:"RoboFriends"}),Object(u.jsx)(j,{searchChange:this.onSearchChange}),Object(u.jsx)(f,{children:Object(u.jsx)(p,{children:Object(u.jsx)(m,{robots:a})})})]}):Object(u.jsx)("h1",{children:"Loading"})}}]),t}(r.a.Component);s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(O,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ee4865e6.chunk.js.map