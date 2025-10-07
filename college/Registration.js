document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const requiredFields = [
    "name", "email", "phone", "dob", "college",
    "branch", "year", "address", "password"
  ];

  for (const id of requiredFields) {
    const el = document.getElementById(id);
    if (!el.value.trim()) {
      alert("Please fill all required fields.");
      el.focus();
      return;
    }
  }

  const phone = document.getElementById("phone").value.trim();
  if (isNaN(phone) || phone.length !== 10) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  const skills = document.querySelectorAll('.checkbox-group input:checked');
  if (skills.length === 0) {
    alert("Please select at least one skill.");
    return;
  }

  const gender = document.querySelector('input[name="gender"]:checked');
  if (!gender) {
    alert("Please select your gender.");
    return;
  }

  // Show modal
  document.getElementById("successModal").style.display = "flex";
  this.reset();
});

function closeModal() {
  document.getElementById("successModal").style.display = "none";
}
