console.log("Blog keren dari Android berhasil dimuat!");

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("comment-form");
  const list = document.getElementById("komentar-list");

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const isi = document.getElementById("komentar").value;

    const komentarBaru = document.createElement("p");
    komentarBaru.innerHTML = `<strong>${nama}</strong>: ${isi}`;
    list.appendChild(komentarBaru);

    form.reset();
  });
});