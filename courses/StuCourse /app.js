// Return jsonified data from url and stores it on local storage
function fetchData(url , keyName='') 
{
    return fetch(url).then(res => res.json()).then(data => 
    {
        localStorage.setItem(keyName, JSON.stringify(data));
    })
}

// Gets courses data from local storage or fetches new data if not present
function getCourses()
{
    if(!localStorage.getItem('courses'))
        fetchData('https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Courses.json', 'courses')
    return JSON.parse(localStorage.getItem('courses'));
}

// Gets students data from local storage or fetches new data if not present
function getStudents() 
{
    if(!localStorage.getItem('students'))
       fetchData('https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Students.json', 'students')
    return JSON.parse(localStorage.getItem('students'));
}

// Template for courses block
function coursesTemplates(course)
{
    return `<div class="container"><div class="row justify-content-center"><ul class="list-group">
            <li class="list-group-item border border-primary" id="list-items">
            <div class ="col" id="button-div">${course.name}<span class="doty" style="background">${course.duration}</span></div>
            <button type="button" class="btn btn-outline-info" id="${course.id}" onclick="showStudents(this)">Show Students</button>
            <button type="button" class="btn btn-outline-info" id="${course.id}" onclick="addStudent(this)">Add Student</button>
            </li></ul></div></div></div></div>`
}

// Template for students block
function studentsTemplates(student)
{
    let status = "No"
    if (student.status === true)
        status = "Yes"
    return `<div class="container"><div class="row justify-content-center"><ul class="list-group student-group">
            <li class="list-group-item border border-primary students-list" id="list-items">
            Student ID: ${student.id}
            <p id="name-col">Name: ${student.name} ${student.last_name}</p>
            <p id="name-col">Status: ${status}</p>
            </li></ul></div></div></div></div>`
}

// When the user click on the courses button
function coursesButton()
{
    let resultsContainer = document.getElementById("Results");
    let coursesButton = document.getElementById("Courses");
    let activeButton = document.getElementById("Students");
    let activeNewButton = document.getElementById("New Student");
    if (resultsContainer.innerHTML === "" || activeButton.classList.contains("active") || activeNewButton.classList.contains("active"))
    {
        activeButton.classList.remove("active");
        activeNewButton.classList.remove("active");
        resultsContainer.innerHTML = "";

        coursesButton.classList.add("active");
        let courses = getCourses();
        let courseDiv = document.createElement("div");
        courseDiv.setAttribute("id", "myCourses");
        courses.forEach(course => courseDiv.innerHTML += coursesTemplates(course));
        resultsContainer.appendChild(courseDiv);
    }
    else if (coursesButton.classList.contains("active"))
    {
        coursesButton.classList.remove("active");
        // Clear Results center
        resultsContainer.innerHTML = "";
    }
}

// When the user click on the students button
function studentsButton()
{
    let resultsContainer = document.getElementById("Results");
    let activeButton = document.getElementById("Students");
    let activeCoursesButton = document.getElementById("Courses");
    let activeNewButton = document.getElementById("New Student");
    if (resultsContainer.innerHTML === "" || activeCoursesButton.classList.contains("active") || activeNewButton.classList.contains("active"))
    {
        activeCoursesButton.classList.remove("active");
        activeNewButton.classList.remove("active");
        resultsContainer.innerHTML = "";
        // Display students
        activeButton.classList.add("active");
        let students = getStudents();
        // console.log(students);
        let newDiv = document.createElement("p");
        students.forEach(student => newDiv.innerHTML += studentsTemplates(student));
        resultsContainer.appendChild(newDiv);
    }
    else if (activeButton.classList.contains("active"))
    {
        activeButton.classList.remove("active");
        // Clear Results center
        resultsContainer.innerHTML = "";
    }
    return
}

// When the user click on the new student button
function newStudentButton()
{
    let resultsContainer = document.getElementById("Results");
    let activeButton = document.getElementById("Students");
    let activeCoursesButton = document.getElementById("Courses");
    let activeNewButton = document.getElementById("New Student");
    if (resultsContainer.innerHTML === "" || activeButton.classList.contains("active") || activeCoursesButton.classList.contains("active"))
    {
        activeNewButton.classList.add("active");
        activeButton.classList.remove("active");
        activeCoursesButton.classList.remove("active");
        resultsContainer.innerHTML = "";

        // Display content

        activeNewButton.classList.add("active");
        let newDiv = document.createElement("p");
        newDiv.innerText = "Nothing to see here.";
        resultsContainer.appendChild(newDiv);
    }
    else if (activeNewButton.classList.contains("active"))
    {
        activeNewButton.classList.remove("active");
        // Clear Results center
        resultsContainer.innerHTML = "";
    }
    return
}

// When the user click on one of the show students button
// Add students in data to list as you click
function showStudents(e)
{
    let myElement = e.parentElement;
    let myCourseTitle = myElement.childNodes[1].firstChild.textContent;
    let myPrevElement = myElement.childNodes[3];
    if (myPrevElement.tagName == "BUTTON")
    {
        let newDiv = document.createElement("ul");
        students = checkStudents(myCourseTitle);
        students.forEach(student => newDiv.innerHTML += `<li>${student.name} ${student.last_name}</li>`);
        myElement.insertBefore(newDiv, myElement.childNodes[2]);
    }
    // Show and Hide Course button
    
    else if (myElement.childNodes[2].style.display === "none")
        myElement.childNodes[2].style.display = "block";
    else
        myElement.childNodes[2].style.display = "none";
}
// Checks if the students are eligible to be in the class
function checkStudents(myCourseTitle){
    let courses = getCourses();
    let newStudents = [];
    for (let i = 0; i < courses.length; i++)
    {
        let max = 0;
        if (myCourseTitle === courses[i].name)
        {
            let courseID = courses[i].id;
            if (courseID == 0)
                max = 3;
            else if (courseID == 1)
                max = 1;
            else if (courseID == 2)
                max = 3;
            else
                max = 1;

            let allStudents = getStudents();

            if (!courses[i].students)
            {   
                courses[i].students = [];
                courses[i].max = [];
                for (let j = 0; j < allStudents.length; j++)
                {
                    if (!allStudents[j].numOfCourses)
                        allStudents[j].numOfCourses = 5;

                    allStudents[j].numOfCourses = allStudents[j].numOfCourses - 1;

                    if (allStudents[j].status === true && j <= max)
                    {
                        courses[i].students.push(allStudents[j]);
                        courses[i].max = max;
                        newStudents.push(allStudents[j]);
                        // console.log(courses[i]);
                    }
                }
            }
        }
    }
    localStorage.setItem("course_1", JSON.stringify(courses));
    return newStudents;
}
// When the user clicks on any of the add student buttons
function addStudent(e)
{
    courses = JSON.parse(localStorage.getItem("course_1"));
    let myElement = e.parentElement;
    let myCourseTitle = myElement.childNodes[1].firstChild.textContent;
    for (let i = 0; i < courses.length; i++)
    {
        if (courses[i].name === myCourseTitle)
        {
            // console.log("Hooray!");
            let count = 0;
            courses[i].students.forEach(student => count += 1);
            // console.log(count);
            if (count >= courses[i].max && !document.getElementById("fullAlert"))
            {
                let newDiv = document.createElement("p");
                newDiv.setAttribute("id", "fullAlert");
                newDiv.innerText = `This course is all filled up already! MAX: ${courses[i].max}`;
                myElement.appendChild(newDiv);
            }
        }
    }
    return
}
