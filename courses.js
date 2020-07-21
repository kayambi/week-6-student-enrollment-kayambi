// /  Fetch Data
var studentBtn = document.getElementById('studentButton');
var courseBtn = document.getElementById('coursesButton');
var newStudentBtn = document.getElementById('new_studentButton');
var resultsContainer = document.getElementById('results');
var modal = document.getElementById('coursesModal');

function fetchData(url, keyName = '') {
    return fetch(url).then(res => res.json()).then(data => {
        localStorage.setItem(keyName, JSON.stringify(data));
    })
}

//  get StudentData

function getStudents() {
    if (!localStorage.getItem('students')) {
        fetchData('https://code-the-dream-school.github.io/JSONStudentsApp.github.io/Students.json', 'students').finally(listStudents);
    } else {
        listStudents();
    }
}


//  Function to clear the container

function clearContainer() {
    while (resultsContainer.hasChildNodes()) {
        resultsContainer.removeChild(resultsContainer.lastChild);
    }
}
//  List of students 

function listStudents() {
    clearContainer();
    let students = JSON.parse(localStorage.getItem('students'));
    let stuDiv = document.createElement('div');
    stuDiv.classList += 'row';
    students.forEach(student => {
        student.courses = [{}];
        stuDiv.innerHTML += studentstemplates(student);
    });
    resultsContainer.appendChild(stuDiv);
}

// list of courses

function addCourses() {
    //  the user click he/ she should add course
    $('#courses-modal').on('show.bs.modal', function (e) {
    modal.innerText = e.relatedTarget.parentNode.childNodes[1].textContent;
})
}
//  Edit Students
function editInformation() {}
// getStudent
//
function studentstemplates(student) {
    return `
        <div class="col-md-4 mb-3">
            <div class="student-bloc border border-primary">
                <div class="student-info">${student.name} ${student.last_name} <span class="dot"
                    style="background:${student.status ? 'green': 'red'}"></span>
                </div>
                <button type="button" class="btn btn-outline-info" data-toggle="modal" data-target="#courses-modal" onclick="addCourses(this)" id="addbtn"
                ${student.courses.length>= 3 || !student.status ? 'disabled' : ''}
                onclick=“addCoursesToStudent()“>AddCourses</button>
                <button type=“button” class=“btn btn-outline-info ” id=“Editbtn” onclick=“editInformation()“>Edit Info</button>
            </div>
        </div>
`;
}
//  Get Courses
function CoursesTemplates(course) {
    return `
            <div class="container">
            <div row align-items -start ><ul class=“list-group list-group=vertical-lg'>
                    <li class='list-group-item display-inline  border border-primary'>
                    <div class ='col'>${course.name} ${course.duration}
                    </div><hr>
                    <button type='button' class='btn btn-outline-info' id='addbtn'>Add Student</button>
                </li>
            </ul></div>
            </div>
            </div>
            </div>
            `;
}