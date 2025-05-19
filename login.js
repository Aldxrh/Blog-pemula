document.getElementById("loginBtn").addEventListener("click", async function () {
  const nama = document.getElementById("nama").value;

  if (!nama) {
    alert("Nama harus diisi");
    return;
  }

  // Simpan nama ke localStorage
  localStorage.setItem("namaSiswa", nama);

  // Arahkan ke halaman kuis
  window.location.href = "quiz.html";
});