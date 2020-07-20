 let StudentButton = document.querySelector('.student');
 let studentD = document.querySelector('.user');


function fetchData(url){
    return fetch(url)
         .then(res => res.json())
     }



fetchData("https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Courses.json")
    .then(data => {
        
        // set the storage for courses data
         localStorage.setItem("courses", JSON.stringify(data));

        //  convert data ito json object

        console.log(data)
    })
    
fetchData("https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Students.json")
    .then(data =>{

        // set the storage for students data 

        localStorage.setItem("students", JSON.stringify(data));
        // convert the data into json Object
        console.log(data)
    })
    

//  Write a function that will get students data from local storage and 
// dispay them to the DOM


    StudentButton.addEventListener('click',function(){
        
        function getStudents(student){ 

            let  x= localStorage.getItem("students");
            studentD.innerHTML = x;   
        
        }


    })

 

//   write a function that will get courses

     function getCourse(course){

        //  toDO


    }


// let  myObject={
//     name:"kay",
//     age:34
// };

// let myObject_serialize  = JSON.stringify(myObject)
// localStorage.setItem('myObject',myObject_serialize);

//  START USING OUR Object 

// let myObject_Deserialize = JSON.parse(localStorage.getItem('myObject))



