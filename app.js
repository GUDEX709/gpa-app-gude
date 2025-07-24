let grades = [];

function showSection(id) {
  document.querySelectorAll('section').forEach(sec => sec.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

function backToDashboard() {
  showSection('dashboard');
}

function calculateGPA() {
  const grade = parseFloat(document.getElementById('grade').value);
  if (!isNaN(grade)) {
    grades.push(grade);
    const sum = grades.reduce((a, b) => a + b, 0);
    const gpa = (sum / grades.length).toFixed(2);
    document.getElementById('gpaResult').innerText = `Your GPA: ${gpa}`;
    document.getElementById('grade').value = '';
  }
}

function saveNote() {
  const input = document.getElementById('noteInput');
  const li = document.createElement('li');
  li.innerText = input.value;
  document.getElementById('noteList').appendChild(li);
  input.value = '';
}

function addTask() {
  const input = document.getElementById('taskInput');
  const li = document.createElement('li');
  li.innerText = input.value;
  document.getElementById('taskList').appendChild(li);
  input.value = '';
}

function saveProfile() {
  const name = document.getElementById('username').value;
  const recovery = document.getElementById('recovery').value;
  localStorage.setItem('profile', JSON.stringify({ name, recovery }));
  document.getElementById('profileSaved').innerText = "Profile saved!";
}
