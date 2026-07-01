import { auth } from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

const logoutBtn = document.getElementById("logoutBtn");
const courseDetail = document.getElementById("courseDetail");

logoutBtn.onclick = () => {

    signOut(auth).then(() => {

        window.location.href = "index.html";

    });

};

// -----------------------------
// Course Information
// -----------------------------

window.showCourse = function(course){

if(course=="efc"){

courseDetail.innerHTML=`

<h3>📘 English for Communication</h3>

<b>Age (อายุ)</b><br>

15 Years and Above (15 ปีขึ้นไป)

<br><br>

<b>Course Overview (เรียนเกี่ยวกับอะไร)</b>

<ul>

<li>Listening (การฟัง)</li>

<li>Speaking (การพูด)</li>

<li>Reading (การอ่าน)</li>

<li>Writing (การเขียน)</li>

<li>Grammar (ไวยากรณ์)</li>

<li>Communication Skills (ทักษะการสื่อสาร)</li>

</ul>

Develop English skills for everyday life.

(เน้นพัฒนาทักษะภาษาอังกฤษเพื่อชีวิตประจำวัน)

<br><br>

<b>Levels (ระดับ)</b><br>

A1 • A2 • B1 • B1+ • B2 • C1

<br><br>

<b>Duration (ระยะเวลาเรียน)</b><br>

A1 - B1+ 80 Hours 

B2 - C1 120 Hours 

<br><br>

<b>Tuition Fee (ค่าเรียน)</b><br>

A1 - B1+ : 22,000 Baht / Level

<br>

B2 - C1 : 33,000 Baht / Level

`;

}

if(course=="junior"){

courseDetail.innerHTML=`

<h3>📗 Junior English for Communication</h3>

<b>Age (อายุ)</b><br>

12-14 Years (12-14 ปี)

<br><br>

<b>Course Overview (เรียนเกี่ยวกับอะไร)</b>

<ul>

<li>Listening (การฟัง)</li>

<li>Speaking (การพูด)</li>

<li>Reading (การอ่าน)</li>

<li>Writing (การเขียน)</li>

<li>Grammar (ไวยากรณ์)</li>

<li>Communication Skills (ทักษะการสื่อสาร)</li>

</ul>

Build confidence in English through communication and classroom activities.

(พัฒนาทักษะภาษาอังกฤษและสร้างความมั่นใจผ่านกิจกรรมในห้องเรียน)

<br><br>

<b>Levels (ระดับ)</b><br>

A1 • A1+ • A2 • B1 • B1+ • B2

<br><br>

<b>Duration (ระยะเวลาเรียน)</b><br>

120 Hours

24 Weeks

<br><br>

<b>Tuition Fee (ค่าเรียน)</b><br>

33,000 Baht / Level

`;

}

if(course=="young"){

courseDetail.innerHTML=`

<h3>📙 English for Young Learners</h3>

<b>Age (อายุ)</b><br>

9-11 Years (9-11 ปี)

<br><br>

<b>Course Overview (เรียนเกี่ยวกับอะไร)</b>

<ul>

<li>Listening (การฟัง)</li>

<li>Speaking (การพูด)</li>

<li>Reading (การอ่าน)</li>

<li>Writing (การเขียน)</li>

<li>Vocabulary (คำศัพท์)</li>

<li>Learning through Activities (เรียนผ่านกิจกรรม)</li>

</ul>

Develop English foundation through fun activities and communication.

(สร้างพื้นฐานภาษาอังกฤษผ่านกิจกรรมและการสื่อสาร)

<br><br>

<b>Duration (ระยะเวลาเรียน)</b><br>

1 ระดับ 128 Hours

2 เทอม 64 Hours

1 เทอม 32 Hours

<br><br>

<b>Tuition Fee (ค่าเรียน)</b><br>

1 ระดับ 57,200 Bath

2 เทอม 28,800 Bath

1 เทอม 14,400 Bath

`;

}

if(course=="business"){

courseDetail.innerHTML=`

<h3>💼 English for Business</h3>

<b>Age (อายุ)</b><br>

18 Years and Above

<br><br>

<b>Entry Level (ระดับเริ่มต้น)</b><br>

B1 and Above

(เริ่มเรียนได้ตั้งแต่ระดับ B1)

<br><br>

<b>Course Overview (เรียนเกี่ยวกับอะไร)</b>

<ul>

<li>Business Communication</li>

<li>Meetings</li>

<li>Presentations</li>

<li>Email Writing</li>

<li>Business Vocabulary</li>

</ul>

Develop English communication skills for the workplace.

(พัฒนาทักษะภาษาอังกฤษเพื่อการทำงาน)

<br><br>

<b>Duration</b><br>

120 Hours

24 Weeks

<br><br>

<b>Tuition Fee</b><br>

Please contact AUA.

`;

}

}
// -----------------------------
// FullCalendar
// -----------------------------

let calendarEvents = [];

document.addEventListener("DOMContentLoaded", () => {

const calendarEl = document.getElementById("calendar");

const calendar = new FullCalendar.Calendar(calendarEl,{

initialView:"dayGridMonth",

height:"auto",

selectable:true,

dateClick:function(info){

const title=prompt("Event Title");

if(title==null||title=="") return;

const description=prompt("Description");

const time=prompt("Time (Example 09:00-12:00)");

calendar.addEvent({

title:title,

start:info.dateStr,

extendedProps:{

description:description,

time:time

}

});

calendarEvents.push({

title:title,

date:info.dateStr,

description:description,

time:time

});

},

eventClick:function(info){

const event=info.event;

const answer=confirm(

"📅 "+event.startStr+

"\n\nTitle : "+event.title+

"\n\nDescription : "+event.extendedProps.description+

"\n\nTime : "+event.extendedProps.time+

"\n\nPress OK to delete."

);

if(answer){

event.remove();

}

}

});

calendar.render();

});
// -----------------------------
// TASK
// -----------------------------

const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

addTaskBtn.onclick = () => {

    const taskName = document.getElementById("taskName").value;
    const dueDate = document.getElementById("dueDate").value;
    const status = document.getElementById("taskStatus").value;

    if(taskName==""){

        alert("Please enter task.");

        return;

    }

    tasks.push({

        task:taskName,

        due:dueDate,

        status:status,

        done:false

    });

    renderTask();

    document.getElementById("taskName").value="";
    document.getElementById("dueDate").value="";
    document.getElementById("taskStatus").selectedIndex=0;

}

function renderTask(){

taskList.innerHTML="";

tasks.forEach((item,index)=>{

let color="#0d6efd";

if(item.status=="In Progress"){

color="#f39c12";

}

if(item.status=="Complete"){

color="#2ecc71";

}

taskList.innerHTML+=`

<div class="task-card">

<label>

<input

type="checkbox"

${item.done?"checked":""}

onchange="toggleTask(${index})">

<b ${item.done?'style="text-decoration:line-through;"':""}>

${item.task}

</b>

</label>

<br><br>

📅 <b>Due Date</b>

<br>

${item.due==""?"No Due Date":item.due}

<br><br>

<b>Status</b>

<br>

<select

onchange="changeStatus(${index},this.value)">

<option ${item.status=="To Do"?"selected":""}>

To Do

</option>

<option ${item.status=="In Progress"?"selected":""}>

In Progress

</option>

<option ${item.status=="Complete"?"selected":""}>

Complete

</option>

</select>

<br><br>

<span style="color:${color};font-weight:bold;">

${item.status}

</span>

<br><br>

<button

onclick="deleteTask(${index})">

Delete

</button>

</div>

`;

});

}

window.toggleTask=function(index){

tasks[index].done=!tasks[index].done;

renderTask();

}

window.changeStatus=function(index,status){

tasks[index].status=status;

renderTask();

}

window.deleteTask=function(index){

if(confirm("Delete this task?")){

tasks.splice(index,1);

renderTask();

}

}