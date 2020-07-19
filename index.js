// variables for students and information for students 
let studentsBtn = document.getElementById('students');
let studentList = document.getElementById('user');
let coursesBtn = document.getElementById('courses')
let CoursesList = document.getElementById('stuCourses');
let newStudentBtn = document.getElementById('new_student');
// Addding data to the HTML 

let addCoursesBtn = document.getElementById("addbtn");
let edditInfBtn = document.getElementById("Editbtn"); 

let students;
let courses;

function fetchData(url) {
    return fetch(url).then(res => res.json())
}

// Function CheckStatus

function checkStatus(response){
    if (response.ok){
        return Promise.resolve(response);
    }else{
        return Promise.reject(new Error(response.statusText));
    }
}



   //   Add function to add display courses and adding them
   // Add EvenListiner to addbtn courses . once  the click the button , available data should be displayed then put option to shooses 
  // what daya to select. 

    function addCoursesToStudent(student,course) { 

        return `Hello `
        
        const targetStudent = students.find((s) => s.id === student.id);
        targetStudent.courses.push(course);
        studentList.innerHTML = students.map(studentToList).join('')
     
 } 

//  function renderedStudents(){

//     // toDO

//  }


//  Edit function  

function editInformation(student, firstName, lastName){

return "Holla"
}

//  Change status color to be green if the status is true,  
// Change color color to be red if the status is false;
function changeStatusColor(student){ 
    let x="green";
    let y="red";
    return (student === true ? x : y);
    
}

//  Function to map my data

// StudentLIst function

function studentToList(student){ 

return `
        <li class="container">
                <div align-items><ul class="list-group list-group=vertical-lg">
                    <li class="list-group-item display-inline  border border-primary">
                     <div>${student.name} ${student.last_name} ${changeStatusColor(student.status)}</div>                                               
                    <button type="button" class="btn btn-outline-info " id="addbtn">AddCourses:${addCoursesToStudent()}</button>
                    <button type="button" class="btn btn-outline-info " id="Editbtn">Edit Info:${editInformation()}</button>
                    </form>
                   </li> 
              </ul></div>
            </div>
            </div>
        </li> 

`;

}

//  Fetching student data

function mystudentData() {

        // Hide and Show content when the user click the button   
        if (user.style.display =='none'){
            user.style.display = 'block';

        }else {
            user.style.display ='none'; 
        }

     fetchData(`https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Students.json`)
     .then(data =>{ 

        // console.log(data)

        students = data;
        studentList.innerHTML = `
        ${data.map(studentToList).join('')}
        `;     
    
    });

}

//  Fetch Courses Data 

function coursesData(){

    //    Hide and Show content when the user click the button

        if (stuCourses.style.display =='none') {
            stuCourses.style.display = 'block';

        }else {
            stuCourses.style.display ='none';
        }
        
   // function that collect courses data and map it into the DOM 
   function CoursestoList(course){
        
    return `
            <div class="container">
                    <div row align-items -start ><ul class="list-group list-group=vertical-lg">
                        <li class="list-group-item display-inline  border border-primary">
                         <div class ="col">${course.name} ${course.duration} 
                         </div><hr>
                         <button type="button" class="btn btn-outline-info " id="addbtn">Add Course</button>
                       </li> 
                  </ul></div>
                </div>
                </div>
            </div>         
    `;

}

fetchData(`https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Courses.json`)
.then(data =>  {
        // console.log(data)
        // store data into the courses variables
            courses = data
            CoursesList.innerHTML = `
                    ${data.map(CoursestoList).join('')}
                    `; 
});
    
}
    //  Add EventListiner

studentsBtn.addEventListener('click',mystudentData);
coursesBtn.addEventListener('click',coursesData);






