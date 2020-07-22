let studentBtn = document.getElementById('studentButton');
let courseBtn = document.getElementById('coursesButton');
let newStudentBtn = document.getElementById('new_studentButton');
let resultsContainer = document.getElementById('results');
let modal = document.getElementById('coursesModal');​

function fetchData(url, keyName = '') {
    return fetch(url).then(res => res.json()).then(data => {
        console.log(data)
        localStorage.setItem(keyName, JSON.stringify(data));
    })
}
// clears search results container
function clearContainer() {
    while (resultsContainer.hasChildNodes()) {
        resultsContainer.removeChild(resultsContainer.lastChild);
    }
}// list all students to DOM
function listStudents() {
    //clear the results div
    clearContainer();
    // get the students from local storage
    let students = JSON.parse(localStorage.getItem('students'));
    // create a div that will hold all the students and give it a class of row
    let stuDiv = document.createElement('div');
    stuDiv.classList += 'row';
    // loop through students and append them to the div created above
    students.forEach(student => {
        stuDiv.innerHTML += studentstemplates(student);
    });
    // take created div and append to results container
    resultsContainer.appendChild(stuDiv);

    // then call the function to edit the name    
    return getEdits();
}

// Get edit buttons after students have been displayed on page.
function getEdits() {
    let editBtns = document.querySelectorAll('.edit-button');

    //once buttons have been captured, attach an event listener to their click
    return editBtns.forEach(el => {
        el.addEventListener('click', function (e) {
            // get this particular edit buttons parent wrapper
            let studentWrapper = e.target.parentElement;
            let studentID = studentWrapper.getAttribute('data-student-id');

            // then get name element inside parent wrapper
            let nameBox = studentWrapper.querySelector('.student-name');

            // pass element to html form template for editing name
            editNameForm(nameBox, studentID);
        })
    })
}

// html form template for editing name
function editNameForm(fufu, id) {
    return fufu.innerHTML = `<form onsubmit="updateName(event)" data-id="${id}"><input type="text" name="student-name" value="${fufu.textContent}"><input type="submit" value="Submit"></form>`
}

// form submission function to update name
function updateName(e) {
    e.preventDefault();
​
    //get the id of the student, the first name and last name
    let id = e.target.getAttribute('data-id');
    let fName = e.target.firstChild.value.split(' ')[0];
    let lName = e.target.firstChild.value.split(' ')[1];
​
    // create new name by combining first name and last name
    let newName = `${fName} ${lName} `;
     
    // update student info in local storage
    updateStudents(id, fName, lName);
​
    // update name in ui
    return e.target.parentNode.innerText = newName;
}
​
// update student info by passing id, name, last name and courses
function updateStudents(id, name, lName, courses) {
    let students = JSON.parse(localStorage.getItem('students'));
    students[id].name = name || students[id].name;
    students[id].last_name = lName || students[id].last_name;
    students[id].courses = courses || students[id].courses;
​
    return localStorage.setItem('students', JSON.stringify(students));
}
​

​
function studentstemplates(student) {
    return `
    <div class="col-md-4 mb-3">
    <div class="student-bloc border border-primary" data-student-id="${student.id}">
        <div class="student-info" data-input="false"><span class="student-name" data-change-input="true">${student.name}
                ${student.last_name} </span><span class="dot"
                style="background:${student.status ? 'green': 'red'}"></span>
        </div>
        <div>
            ${getStudentCourses(student)}
        </div>
        <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#courses-modal"
            onclick="addCourses(this)" id="addbtn" ${student.courses.length>= 3 || !student.status ? 'disabled' : ''}
            onclick="addCoursesToStudent()">AddCourses</button>
        <button type="button" class="btn btn-outline-info edit-button" onclick="editInformation()">Edit Info</button>
        <div class="collapse" id="collapseExample">
            <div class="card card-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil
                anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
            </div>
        </div>
    </div>
</div>
`;
}
//  Get Courses
function CoursesTemplates(course) {
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
​
function getStudents() {
    if (!localStorage.getItem('students')) {
        fetchData('https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Students.json', 'students').finally(listStudents);
    } else {
        listStudents();
    }
}