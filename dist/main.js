(()=>{"use strict";const e=function(){let e=document.createElement("header"),t=document.createElement("h1");t.textContent="Cookie's Cookies";let n=document.createElement("ul");n.id="nav";let d=document.createElement("li");d.id="home",d.classList.add("navigation");let o=document.createElement("li");o.id="menu",o.classList.add("navigation");let a=document.createElement("li");return a.id="about",a.classList.add("navigation"),d.textContent="Home",o.textContent="Menu",a.textContent="About",n.appendChild(d),n.appendChild(o),n.appendChild(a),e.appendChild(t),e.appendChild(n),document.getElementById("content").appendChild(e)};document.createElement("table"),Object.keys({Type:"Sugar",Description:"A classic cookie that reminds you of home",Price:"$1.99"});const t=function(){e();let t=document.createElement("div");t.id="home-page";let n=document.createElement("div"),d=document.createElement("p");d.textContent="9041 Snowden Square Dr\nColumbia, MD 21045";let o=document.createElement("p");o.textContent="(555) 555-5555";let a=document.createElement("ul"),l=document.createElement("li");l.textContent="Sun - Thu: 10:00am - 9:00pm";let i=document.createElement("li");i.textContent="Fri - Sat: 9:00am - 11:00pm",a.appendChild(l),a.appendChild(i),n.appendChild(d),n.appendChild(o),n.appendChild(a);let c=document.createElement("p");return c.textContent="This place has the best cookies! The staff is very welcoming and if you're lucky, they'll give you a cookie infused with nip.",t.style.backgroundImage="url('https://handletheheat.com/wp-content/uploads/2018/02/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9.jpg')",t.appendChild(c),t.appendChild(n),document.getElementById("content").appendChild(t)};t(),window.addEventListener("click",(function(n){"home"===n.target.id?(document.getElementById("content").innerHTML="",t()):"menu"===n.target.id?(document.getElementById("content").innerHTML="",function(){e();let t=document.createElement("div"),n=document.createElement("h3"),d=document.createElement("ul");n.textContent="See our specials!";let o=document.createElement("li"),a=document.createElement("li"),l=document.createElement("li");o.textContent="25% off on all Chungus packs on Wednesdays!",a.textContent="Veterans, teachers, first responders, and nurses get 10% off every cookie!",l.textContent="Buy any 2 cookies, get 1 free on Mondays!",t.appendChild(n),d.appendChild(o),d.appendChild(a),d.appendChild(l),t.appendChild(d),document.getElementById("content").appendChild(t)}()):"about"===n.target.id&&(document.getElementById("content").innerHTML="",function(){e();let t=document.createElement("div");t.id="contact-container";let n=document.createElement("div");n.id="owner-display";let d=document.createElement("img");d.src="";let o=document.createElement("img");o.src="";let a=document.createElement("p"),l=document.createElement("p");a.textContent="Cookie was raised by her two parents in Reisterstown. She found her love for cookies after her parents came home after a night of drinking with a gourmet pack of cookies from the city.",l.textContent="Tuxedo loves food and will do anything to be around it. His passion for cookies knows no bounds.",n.appendChild(d),n.appendChild(o),n.appendChild(a),n.appendChild(l),t.appendChild(n);let i=document.createElement("div");i.id="info";let c=document.createElement("ul"),m=document.createElement("li"),p=document.createElement("li"),r=document.createElement("li");m.textContent="9041 Snowden Square Dr\nColumbia, MD 21045",p.textContent="(555) 555-5555",r.textContent="Sun - Thu: 10:00am - 9:00pm",c.appendChild(m),c.appendChild(p),c.appendChild(r),i.appendChild(c),t.appendChild(i);let u=document.createElement("div");u.id="form-container";let C=document.createElement("label");C.textContent="First Name: ";let h=document.createElement("input");h.type="text";let s=document.createElement("label");s.textContent="Email: ";let E=document.createElement("input");E.type="text";let g=document.createElement("label");g.textContent="Leave a review or ask a question!";let y=document.createElement("textarea"),f=document.createElement("button");f.type="submit",f.textContent="Submit",u.appendChild(C),u.appendChild(h),u.appendChild(s),u.appendChild(E),u.appendChild(g),u.appendChild(y),u.appendChild(f),t.appendChild(u),document.getElementById("content").appendChild(t)}())}))})();