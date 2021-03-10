(()=>{"use strict";const e=function(){let e=document.createElement("header"),t=document.createElement("h1");t.id="rest-title",t.textContent="Cookie's Cookies";let n=document.createElement("ul");n.id="nav";let o=document.createElement("li");o.id="home",o.classList.add("navigation");let d=document.createElement("li");d.id="menu",d.classList.add("navigation");let i=document.createElement("li");return i.id="about",i.classList.add("navigation"),o.textContent="Home",d.textContent="Menu",i.textContent="About",n.appendChild(o),n.appendChild(d),n.appendChild(i),e.appendChild(t),e.appendChild(n),document.getElementById("content").appendChild(e)};let t=[{Type:"Sugar",Description:"A classic cookie that reminds you of home",Price:"$1.99"},{Type:"Chocolate Chip",Description:"A warm, soft delight like grandmeow used to make",Price:"$1.99"},{Type:"Snickerdoodle",Description:"Cinnamon bliss perfect for any time of day",Price:"$2.49"},{Type:"Chocolate Crinkle",Description:"For the chocolate lovers sprinkled with sugar",Price:"$2.99"},{Type:"Oatmeal Raisin",Description:"Brown sugar, cinnamon, and raisins. A simple but delicious cookie",Price:"$1.99"},{Type:"Cookie's Special",Description:"A cat friendly treat infused with catnip",Price:"$2.49"}],n=document.createElement("div"),o=document.createElement("table"),d=Object.keys(t[0]);const i=function(){e();let t=document.createElement("div");t.id="home-page";let n=document.createElement("div");n.classList.add("info-container");let o=document.createElement("p");o.textContent="9041 Snowden Square Dr\nColumbia, MD 21045";let d=document.createElement("p");d.textContent="(555) 555-5555";let i=document.createElement("ul"),a=document.createElement("li");a.textContent="Sun - Thu: 10:00am - 9:00pm";let l=document.createElement("li");l.textContent="Fri - Sat: 9:00am - 11:00pm",i.appendChild(a),i.appendChild(l),n.appendChild(o),n.appendChild(d),n.appendChild(i);let c=document.createElement("p");c.textContent="This place has the best cookies! The staff is very welcoming and if you're lucky, they'll give you a cookie infused with nip. - Gus K.",c.style.fontStyle="italic";let m=document.createElement("div");m.id="images";let s=document.createElement("img");s.src="https://www.dominosugar.com/emshare/views/modules/asset/downloads/originals/2019/11/69028/Domino18_Description_600x400.jpg/Domino18_Description_600x400.jpg",s.alt="Sugar Cookie",s.classList.add("cookie-images");let p=document.createElement("img");p.src="https://www.fifteenspatulas.com/wp-content/uploads/2010/12/Chocolate-Chip-Cookie-Recipe-Fifteen-Spatulas-2.jpg",p.alt="Chocolate Chip Cookie",p.classList.add("cookie-images");let r=document.createElement("img");r.src="https://www.jessicagavin.com/wp-content/uploads/2019/12/snickerdoodle-cookies-10-1200.jpg",r.alt="Snickerdoodle",r.classList.add("cookie-images");let u=document.createElement("img");u.src="https://natashaskitchen.com/wp-content/uploads/2020/11/Chocolate-Crinkle-Cookies-5-728x1092.jpg",u.alt="Chocolate Crinkle",u.classList.add("cookie-images");let h=document.createElement("img");h.src="https://www.inspiredtaste.net/wp-content/uploads/2016/12/Soft-and-Chewy-Oatmeal-Raisin-Cookies-Recipe-1200.jpg",h.alt="Oatmeal Raisin Cookie",h.classList.add("cookie-images");let C=document.createElement("img");return C.src="https://i.pinimg.com/236x/dd/25/f1/dd25f1072081d7bd0c173ad3b907b68b--cookie-blog-cookie-ideas.jpg",C.alt="Cookie's Special Cookie",C.classList.add("cookie-images"),m.appendChild(s),m.appendChild(p),m.appendChild(r),m.appendChild(u),m.appendChild(h),m.appendChild(C),t.appendChild(c),t.appendChild(m),t.appendChild(n),document.getElementById("content").appendChild(t)},a=function(){let e=document.createElement("div"),t=document.createElement("footer");t.id="footer";let n=document.createElement("p");n.textContent="Created by Fonda for The Odin Project",n.classList.add("footer-text");let o=document.createElement("p");return o.innerHTML="&copy; 2021",o.classList.add("footer-text"),t.appendChild(n),t.appendChild(o),e.appendChild(t),document.getElementById("content").appendChild(e)};i(),a(),window.addEventListener("click",(function(l){"home"===l.target.id?(document.getElementById("content").innerHTML="",i(),a()):"menu"===l.target.id?(document.getElementById("content").innerHTML="",function(){e(),function(e,t){for(let n of t){let t=e.insertRow();for(let e in n){let o=t.insertCell(),d=document.createTextNode(n[e]);o.appendChild(d)}}n.appendChild(o),document.getElementById("content").appendChild(n)}(o,t),function(e,t){let n=e.createTHead().insertRow();for(let e of t){let t=document.createElement("th"),o=document.createTextNode(e);t.appendChild(o),n.appendChild(t)}}(o,d);let i=document.createElement("div"),a=document.createElement("h3"),l=document.createElement("ul");a.textContent="See our specials!";let c=document.createElement("li"),m=document.createElement("li"),s=document.createElement("li");c.textContent="25% off on all Chungus packs on Wednesdays!",m.textContent="Veterans, teachers, first responders, and nurses get 10% off every cookie!",s.textContent="Buy any 2 cookies, get 1 free on Mondays!",i.appendChild(a),l.appendChild(c),l.appendChild(m),l.appendChild(s),i.appendChild(l),document.getElementById("content").appendChild(i)}(),a()):"about"===l.target.id&&(document.getElementById("content").innerHTML="",function(){e();let t=document.createElement("div");t.id="contact-container";let n=document.createElement("div");n.id="owner-display";let o=document.createElement("img");o.src="https://www.thesprucepets.com/thmb/_w_4qXWKki2VZ_ie-MzVpv9B8YQ=/1964x1473/smart/filters:no_upscale()/GettyImages-584178259-5a721010119fa80037ed3cce.jpg",o.classList.add("owner-image");let d=document.createElement("img");d.src="https://cattime.com/assets/uploads/2017/10/tuxedo-cat-2-e1569622438857-1280x720.jpg",d.classList.add("owner-image");let i=document.createElement("h3"),a=document.createElement("p"),l=document.createElement("h3"),c=document.createElement("p");a.textContent="Cookie was raised by her two parents in Reisterstown. She found her love for cookies after her parents came home after a night of drinking with a gourmet pack of cookies from the city.",c.textContent="Tuxedo loves food and will do anything to be around it. His passion for cookies knows no bounds.",i.textContent="Cookie",l.textContent="Tuxedo",n.appendChild(i),n.appendChild(o),n.appendChild(a),n.appendChild(l),n.appendChild(d),n.appendChild(c),t.appendChild(n);let m=document.createElement("div");m.classList.add("info-container");let s=document.createElement("ul"),p=document.createElement("p"),r=document.createElement("p"),u=document.createElement("li");p.innerHTML="9041 Snowden Square Dr\nColumbia, MD 21045",r.textContent="(555) 555-5555",u.textContent="Sun - Thu: 10:00am - 9:00pm",m.appendChild(p),m.appendChild(r),s.appendChild(u),m.appendChild(s),t.appendChild(m);let h=document.createElement("div");h.id="form-container";let C=document.createElement("label");C.textContent="First Name: ",C.classList.add("form-content");let E=document.createElement("input");E.type="text",E.classList.add("form-content");let g=document.createElement("label");g.textContent="Email: ",g.classList.add("form-content");let f=document.createElement("input");f.type="text",f.classList.add("form-content");let k=document.createElement("label");k.textContent="Leave a review or ask a question!",k.classList.add("form-content");let w=document.createElement("textarea");w.classList.add("form-content");let y=document.createElement("button");y.type="submit",y.textContent="Submit",h.appendChild(C),h.appendChild(E),h.appendChild(g),h.appendChild(f),h.appendChild(k),h.appendChild(w),h.appendChild(y);let x=document.createElement("div");x.id="bottom-container",x.appendChild(m),x.appendChild(h),t.appendChild(x),document.getElementById("content").appendChild(t)}(),a())}))})();