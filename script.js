let subjects = [];
let teachers = [];

function addSubject() {
  const subjectsDiv = document.getElementById("subjects");
  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.placeholder = `Subject ${subjects.length + 1}`;
  subjectsDiv.appendChild(newInput);
}

function nextToTeachers() {
  const subjectInputs = document.querySelectorAll("#subjects input");
  subjects = Array.from(subjectInputs)
    .map((input) => input.value.trim())
    .filter(Boolean);

  if (subjects.length === 0) {
    alert("Please add at least one subject.");
    return;
  }

  const teachersDiv = document.getElementById("teachers");
  teachersDiv.innerHTML = "";
  subjects.forEach((subject) => {
    const label = document.createElement("label");
    label.textContent = `Teacher for ${subject}:`;
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = `Teacher for ${subject}`;
    teachersDiv.appendChild(label);
    teachersDiv.appendChild(input);
  });

  document.getElementById("subjects-section").style.display = "none";
  document.getElementById("teachers-section").style.display = "block";
}

function nextToTiming() {
  const teacherInputs = document.querySelectorAll("#teachers input");
  teachers = Array.from(teacherInputs)
    .map((input) => input.value.trim())
    .filter(Boolean);

  if (teachers.length < subjects.length) {
    alert("Please assign teachers for all subjects.");
    return;
  }

  document.getElementById("teachers-section").style.display = "none";
  document.getElementById("timing-section").style.display = "block";
}

function generateSchedule() {
  const classDuration = document.getElementById("class-duration").value;
  const workingDays = document.getElementById("working-days").value;

  if (!classDuration || !workingDays) {
    alert("Please fill in all the details.");
    return;
  }

  const tbody = document.querySelector("#schedule-table tbody");
  tbody.innerHTML = "";

  subjects.forEach((subject, index) => {
    const row = document.createElement("tr");
    const subjectCell = document.createElement("td");
    subjectCell.textContent = subject;
    const teacherCell = document.createElement("td");
    teacherCell.textContent = teachers[index];
    const durationCell = document.createElement("td");
    durationCell.textContent = classDuration;
    const daysCell = document.createElement("td");
    daysCell.textContent = workingDays;

    row.appendChild(subjectCell);
    row.appendChild(teacherCell);
    row.appendChild(durationCell);
    row.appendChild(daysCell);

    tbody.appendChild(row);
  });

  document.getElementById("timing-section").style.display = "none";
  document.getElementById("schedule-section").style.display = "block";
}
