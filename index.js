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


   //   Add Function // 

   function addCourses(){

    return  '';

} 


//  Edit function  

function editInformation(){

return "hello edit"
}


function changeStatusColor(){ 

if( status === true ){

   return status.style="red";

}else{

   return status.style= "green"
}
} 

//  Function to map my data

function studentToList(student){ 

return `
        <div class="container">
                <div align-items><ul class="list-group list-group=vertical-lg">
                    <li class="list-group-item display-inline  border border-primary">
                     <div><span>${student.name} ${student.last_name} ${changeStatusColor(student.status)}</span>       
                    </div><hr>

                                                                 
                    <button type="button" class="btn btn-outline-info " id="addbtn">Add Courses:${addCourses()}</button>
                    
                    <button type="button" class="btn btn-outline-info " id="Editbtn">Edit Info:${editInformation()}</button>
                    </form>
                   </li> 
              </ul></div>
            </div>
            </div>
        </div> 

`;


}


function mystudentData() {

        // Hide and Show content when the user click the button   
        if (user.style.display =='none'){
            user.style.display = 'block';

        }else {
            user.style.display ='none'; 
        }

     fetchData(`https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Students.json`)
     .then(data =>{ 

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
        
    
fetchData(`https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Courses.json`)
.then(data =>  {
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
     
CoursesList.innerHTML = `
        ${data.map(CoursestoList).join('')}
        `; 
});
    
}


    //  Add EventListiner

studentsBtn.addEventListener('click',mystudentData);
coursesBtn.addEventListener('click',coursesData);



