// variables for students and information for students 
let studentsBtn = document.getElementById('students');
let studentList = document.getElementById('user');
let coursesBtn = document.getElementById('courses')
let CoursesList = document.getElementById('stuCourses');
let newStudentBtn = document.getElementById('new_student');

// Addding data to the HTML 

let addCoursesBtn = document.getElementById("addbtn");
let edditInfBtn = document.getElementById("Editbtn"); 



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
  let students;
  let courses;

//   class school {
//       constructor(students, courses) {
//           this.students=students;
//           this.courses = courses;
//       }
//       students =[]
//       courses =[];

//       updateStudentName(student,name) {
//           const targetStudent = this.students.find((d)=> s.id ===student.id);
//           targetStudent.name = name;
//           addStudentsHTML()
//       }

//   }

    function addCoursesToStudent(students,courses) {    
//         const targetStudent = this.students.find((s) => s.id === student.id);
//         targetStudent.courses.push(course);
//         const targetCourse =this.course.find((c) => c.id === course.id)
//         targetCourse.students.push(student);



//  Edit function  




function editInformation(student, firstName, lastName){

return "Holla"
}

//  Change status color to be green if the status is true,  
// Change color color to be red if the status is false;
function changeStatusColor(student){ 
    let isActive= `<span class="dot"></span>`;
    let isnotActive= `<span class="doty"></span>`;
    return (student === true ? isActive : isnotActive);
    
}

//  Function to map my data

// StudentLIst function

function studentToList(student){ 

return `
         
        <div class="border border-primary col-md-4">
            <div class"row">
                    <div>${student.name} ${student.last_name} ${changeStatusColor(student.status)}</div>                                               
                    <button type="button" class="btn btn-outline-info " id="addbtn" ${addCoursesToStudent()}>AddCourses</button>
                    <button type="button" class="btn btn-outline-info " id="Editbtn" ${editInformation()}>Edit Info</button>
            </div> 
        </div>    
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
                         <button type="button" class="btn btn-outline-info " id="addbtn">Add Student</button>
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






