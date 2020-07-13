
// variables for students and information for students 
let studentsBtn = document.getElementById('students');

// Variable and information of each courses

let coursesBtn = document.getElementById('courses');
let newStudentBtn = document.getElementById('new_student');

let id = document.getElementById("id");
let lastName = document.getElementById("lastName");
let name = document.getElementById("name");
let status = document.getElementById("status");
let users = document.getElementById('users')
let courses = document.getElementById('courses');  



function fetchData(url) {
    return fetch(url).then(res => res.json())
}

fetchData(`https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Students.json`)
     .then(data => generateStudendentData(data))


fetchData(`https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Courses.json`)
.then(data => generateCoursesData(data))


//  Function Helper 

// generate students Data 

studentsBtn.addEventListener("click", generateStudendentData)

{


function generateStudendentData(data){ 

    //  create a variable to store HTML

            let li =`<tr><th>id</th>
                         <th>last_name</th>
                         <th>name</th>
                         <th>status</th>
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

            users.innerHTML = li ;
}

}
//  generate courses Data 
coursesBtn.addEventListener("click", generateCoursesData())
{


function generateCoursesData(data){ 

        //   Create a variable to store HTML 

            let li =`<tr><th>Duration</th>
                         <th>id</th>
                         <th>name</th>
                    </tr>`; 
                    
        // loop through each data and add a table row

            data.forEach(data => { 
                li +=`<tr>
                      <td>${data.duration}</td>
                      <td>${data.id}</td>
                      <td>${data.name}</td>
                     </tr>`;
                
            });

            courses.innerHTML = li ;

}


// Add Event Listiners 

// studentsBtn.addEventListener('click', generateStudendentData);
// coursesBtn.addEventListener('click', generateCoursesData);
// Promise.all([
//     //  Fetch Students Data and Transformation them for UI  

//     studentsBtn.addEventListener("click", function(){
//     fetch(`https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Students.json`)
//           .then(res => res.json())
//           .then(data => {

//             // create a variable to store HTML

//             let li =`<tr><th>id</th>
//                          <th>last_name</th>
//                          <th>name</th>
//                          <th>status</th>
//                     </tr>`;  
//                          // loop through each data and add a table row
//             data.forEach(data => { 
//                 li +=`<tr>
//                       <td>${data.id}</td>
//                       <td>${data.last_name}</td>
//                       <td>${data.name}</td>
//                       <td>${data.status}</td>
//                      </tr>`;
                
//             });

//             users.innerHTML = li ;

//           })
//         }),

//         // Fetch Courses Data and Transform them 

//     coursesBtn.addEventListener("click", function(){
  
//     fetch(`https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Courses.json`)
//           .then(res => res.json())
//           .then(data => {

//             //   Create a variable to store HTML 

//             let li =`<tr><th>Duration</th>
//                          <th>id</th>
//                          <th>name</th>
//                     </tr>`; 
                    
//         // loop through each data and add a table row

//             data.forEach(data => { 
//                 li +=`<tr>
//                       <td>${data.duration}</td>
//                       <td>${data.id}</td>
//                       <td>${data.name}</td>
//                      </tr>`;
                
//             });

//             users.innerHTML = li ;

//           });
//         }),

          
//     ]).then((res) => {
//        console.log(res)
//       //json response
//     })
//     .catch((err) => {
//         console.log(err);
//     });



    // studentsBtn.addEventListener("click", studentFunc),
    // coursesBtn.addEventListiner("click", coursesFunc)
}
