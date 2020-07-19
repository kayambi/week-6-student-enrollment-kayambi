
// variables for students and information for students 
let studentsBtn = document.getElementById('students');
let user = document.getElementById('user');
let coursesBtn = document.getElementById('courses');
let course = document.getElementById('stuCourses');
let newStudentBtn = document.getElementById('new_student');

function fetchData(url) {
    return fetch(url)
    .then(checkStatus)
    .then(res => res.json())
    .catch(error => console.log("it looks like they were a problem", error))
}

Promise.all([

    fetchData(`https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Students.json`),
    fetchData(`https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Courses.json`)

])
.then(data => {
      console.log(data)

    const studentData = data[0];
    const courseData = data[1];
    generateStudentData(studentData);
    generateCourseData(courseData);
})

// Function CheckStatus

function checkStatus(response){
    if (response.ok){
        return Promise.resolve(response);
    }else{
        return Promise.reject(new Error(response.statusText));
    }
}
// Function Generate Student Data 

studentsBtn.addEventListener('click',generateStudentData)


//    Hide and Show content when the user click the button
            if (user.style.display =='none') {
                user.style.display = 'block';

            }else {
                user.style.display ='none';

            }

    //  looping through the object lists 
                students = data;
            for (let i=0 ; i<data.length ; i++){

                studentInfoList(data[i]);
            }

            //  function that write studenttoList
        function studentInfoList(student) {

            // let user = document.getElementById('user');
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
                user.innerHTML = myHTML;

                            
        }
      
    const html = data.map(data =>{
        return `
        <table class ="table" >
        <td>${data.name}</td>
        <td>${data.last_name}</td>
        <td>${data.status}</td>  
        
        </table>
        `;     

        }).join('');
        console.log(html)
        document.getElementById('user').insertAdjacentHTML("beforeend",html)

// generate Courses Data 
// AddEvent Listiner

coursesBtn.addEventListener('click',generateCourseData)
function  generateCourseData (data){

//  create a variable to store HTML

    let li =`<tr>
    <th>Name</th>
     <th>Duration</th>
                </tr>`;  
        // loop through each data and add a table row

        for (let i=0; i<data.length ; i++){
        li +=`<tr>

        <td>${data.name}</td>
        <td>${data.duration}</td>
        </tr>`;
           }
            user.innerHTML = li ;
            }
        
