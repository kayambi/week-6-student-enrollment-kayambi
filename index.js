
// variables for students and information for students 
let studentsBtn = document.getElementById('students');
let user = document.getElementById('user');
let coursesBtn = document.getElementById('courses');
let newStudentBtn = document.getElementById('new_student');



function fetchData(url) {
    return fetch(url).then(res => res.json())
}

function mystudentData() {
             
    // e.preventDefault();

     fetchData(`https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Students.json`)
     .then(data => {

//  create a variable to store HTML

            let li =`<tr><th scope "col">id</th>
                         <th  scope "col">last_name</th>
                         <th  scope "col">name</th>
                         <th  scope "col">status</th>
                    </tr>`;  

// loop through each data and add a table row

            data.forEach(data => { 
                li +=`<tr>
                      <td>${data.id}</td>
                      <td>${data.last_name}</td>
                      <td>${data.name}</td>
                      <td>${data.status}</td>
                     </tr>`;
                
            });

            user.innerHTML = li ;
            user.style = "Color: pink";
})
}


function coursesData(){

fetchData(`https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Courses.json`)
.then(data =>

// console.log(data))
    
    {

//  create a variable to store HTML

            let li =`<tr>
                         <th>Id</th>
                         <th>Duration</th>
                         <th>Name</th>
                    
                    </tr>`;  
// loop through each data and add a table row
            data.forEach(data => { 
                li +=`<tr>
                   
                      <td>${data.id}</td>
                      <td>${data.duration}</td>
                      <td>${data.name}</td>
                     </tr>`;
                
            });

         courses.innerHTML = li ;
})
}


studentsBtn.addEventListener('click',mystudentData);
coursesBtn.addEventListener("click",coursesData);
