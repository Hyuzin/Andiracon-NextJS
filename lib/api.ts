export const sendContactForm = async (data: any) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  }).then((res) => {
    if (!res.ok) throw new Error("Pesan gagal dikirim. Pastikan Semua kolom sudah terisi!");
    return res.json();
  });
