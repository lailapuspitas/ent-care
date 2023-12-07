async function getAppointmentFromDB() {
  const API_BASE_URL = "https://health-care-production.up.railway.app";
  const response = await fetch(`${API_BASE_URL}/appointment`);
  const data = (await response.json()).data;

  return data;
}

function createTableRow(appointment) {
  const tr = document.createElement("tr");

  const tdId = document.createElement("td");
  tdId.textContent = appointment.id;
  tr.appendChild(tdId);

  const tdName = document.createElement("td");
  tdName.textContent = appointment.name;
  tr.appendChild(tdName);

  const tdEmail = document.createElement("td");
  tdEmail.textContent = appointment.email;
  tr.appendChild(tdEmail);

  const tdDate = document.createElement("td");
  tdDate.textContent = appointment.date;
  tr.appendChild(tdDate);

  const tdTime = document.createElement("td");
  tdTime.textContent = appointment.time;
  tr.appendChild(tdTime);

  const tdCategories = document.createElement("td");
  tdCategories.textContent = appointment.categories;
  tr.appendChild(tdCategories);

  const tdComplaint = document.createElement("td");
  tdComplaint.textContent = appointment.complaint;
  tr.appendChild(tdComplaint);

  return tr;
}

async function displayData() {
  const data = await getAppointmentFromDB();

  if (data.length === 0) {
    console.error("No data to display");
    return;
  }

  const table = document.getElementById("table");

  data.forEach((member) => {
    const tableRow = createTableRow(member);
    table.appendChild(tableRow);
  });
}

window.onload = displayData;
