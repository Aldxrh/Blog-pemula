<script>
  async function simpanHasil(nama, skor) {
    const { data, error } = await supabase
      .from('hasil_kuis')
      .insert([{ nama: nama, skor: skor }]);

    if (error) {
      console.error('Gagal simpan:', error);
    } else {
      console.log('Data berhasil disimpan:', data);
      window.location.href = "result.html";
    }
  }

  // Contoh pemanggilan:
  // simpanHasil("Ahmad", 80);
</script>