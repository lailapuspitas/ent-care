const API_BASE_URL = "https://health-care-production.up.railway.app";

async function addNewAppointment() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const categories = document.getElementById("service").value;
  const complaint = document.getElementById("complaint").value;

  const appointmentData = {
    name,
    email,
    date,
    time,
    categories,
    complaint,
  };

  try {
    const response = await fetch(`${API_BASE_URL}/appointment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(appointmentData),
    });

    if (response.status === 201) {
      const responseData = await response.json();
      displayAppointmentData(responseData.data);

      // Clear the form fields
      clearForm();
    } else {
      console.error("Failed to create appointment.");
    }
  } catch (error) {
    console.error("Error sending data: " + error);
  }
}

function displayAppointmentData(data) {
  document.getElementById("hasil-name").textContent = data.name;
  document.getElementById("hasil-email").textContent = data.email;
  document.getElementById("hasil-date").textContent = data.date;
  document.getElementById("hasil-time").textContent = data.time;
  document.getElementById("hasil-symptom").textContent = data.categories;
  document.getElementById("hasil-medcomplaint").textContent = data.complaint;
}

// Clear the form fields
function clearForm() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
  document.getElementById("service").value = "";
  document.getElementById("complaint").value = "";
}

// Menghubungkan fungsi addNewAppointment() ke form submit
const appointmentForm = document.getElementById("appointment-form");
appointmentForm.addEventListener("submit", function (e) {
  e.preventDefault();
  addNewAppointment();
});
