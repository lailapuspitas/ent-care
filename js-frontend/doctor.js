async function getDoctorFromDatabase() {
  const API_BASE_URL = "https://health-care-production.up.railway.app";
  const response = await fetch(`${API_BASE_URL}/doctor`);
  const data = (await response.json()).data;

  return data;
}

function createDoctorElement(doctor) {
  const li = document.createElement("li");
  li.className = "doctor-box";

  const img = document.createElement("img");
  img.className = "doctor-photo";
  img.src = doctor.photo;
  img.alt = doctor.name;

  const pName = document.createElement("p");
  pName.className = "doctor-name";
  pName.textContent = doctor.name;

  const pRole = document.createElement("p");
  pRole.className = "doctor-role";
  pRole.textContent = doctor.role;

  const divExperience = document.createElement("div");
  divExperience.className = "experience";
  const imgExperience = document.createElement("img");
  imgExperience.className = "doctor-exicon";
  imgExperience.src = "../img/experience.png";
  imgExperience.alt = "Experience Icon";
  const pExperience = document.createElement("p");
  pExperience.id = "doctor-experience";
  pExperience.textContent = doctor.experience;
  divExperience.appendChild(imgExperience);
  divExperience.appendChild(pExperience);

  const divTimetable = document.createElement("div");
  divTimetable.className = "timetable";
  const imgTimetable = document.createElement("img");
  imgTimetable.className = "doctor-timeicon";
  imgTimetable.src = "../img/timetable.png";
  imgTimetable.alt = "Timetable Icon";
  const pTimetable = document.createElement("p");
  pTimetable.id = "doctor-timetable";
  pTimetable.textContent = doctor.timetable;
  divTimetable.appendChild(imgTimetable);
  divTimetable.appendChild(pTimetable);

  li.appendChild(img);
  li.appendChild(pName);
  li.appendChild(pRole);
  li.appendChild(divExperience);
  li.appendChild(divTimetable);

  return li;
}

async function displayDoctorData() {
  const data = await getDoctorFromDatabase();

  if (data.length === 0) {
    console.error("No data to display");
    return;
  }

  const container = document.getElementById("doctor-list");

  data.forEach((doctor) => {
    const doctorElement = createDoctorElement(doctor);
    container.appendChild(doctorElement);
  });
}

window.onload = displayDoctorData;
