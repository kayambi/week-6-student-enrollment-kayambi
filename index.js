
// variables for students and information for students 
let studentsBtn = document.getElementById('students');
let user = document.getElementById('user');
let coursesBtn = document.getElementById('courses');
let newStudentBtn = document.getElementById('new_student');

function fetchData(url) {
    return fetch(url).then(res => res.json())
}

function mystudentData() {

        // Hide and Show content when the user click the button   
        if (user.style.display =='none'){
            user.style.display = 'block';

        }else {
            user.style.display ='none';
            
        }

     fetchData(`https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Students.json`)
     .then(data => 
        {
            students = data;
            let myHTML ='';
         for(let i =0; i< data.length ; i ++){
             writeStundentData(data[i]);
         }
         })
        }

  function writeStundentData(student){

       let user = document.getElementById('user');

       let myHTML = `<li>${student.name} ${student.last_name}`;
       if(student.status === true) {
           myHTML += `<span class="active"></span>`;
       }else{
          myHTML += `<span class="nonactive"></span>`;
       }

        myHTML +=`<div class= "mt-4"><div>`;
        myHTML +=`<button type="button" class= "btn btn-outline-info" id="addbtn" >Add Course<button>`;
        myHTML +=`<button type="button" class= "btn btn-outline-info" id="addbtn" >Edit Information<button>`;
        myHTML += `</div></li>`;

       return  user.innerHTML = myHTML;
}
    
function coursesData(){

    
fetchData(`https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Courses.json`)
.then(data => 
    
    // console.log(data));
    
    {

//  create a variable to store HTML

            let li =`<tr>
                        <th>Name</th>
                         <th>Duration</th>
                     
                    
                    </tr>`;  
// loop through each data and add a table row
            data.forEach(data => { 
                li +=`<tr>
                   
                      <td>${data.name}</td>
                      <td>${data.duration}</td>
                    
                     </tr>`;
                
            });

            stuCourses.innerHTML = li ;
         
         
})
//    Hide and Show content when the user click the button
if (stuCourses.style.display =='none') {
    stuCourses.style.display = 'block';

}else {
    stuCourses.style.display ='none';
}
}

studentsBtn.addEventListener('click',mystudentData);
coursesBtn.addEventListener('click',coursesData);


