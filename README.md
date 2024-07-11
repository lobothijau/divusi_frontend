# Case Study

- Admin perlu melakukan input pegawai baru. 
- Pegawai perlu mencatat kehadirannya.
- Admin bisa melihat rekap kehadiran pegawai

## Struktur Data

Untuk memenuhi kebutuhan diatas maka dibutuhkan setidaknya dua tabel:

- employees (tabel untuk pegawai)
    - nip
    - name
    - functional_position
    - structural_position

- attendances (tabel untuk menyimpan daftar hadir)
    - employee_id (relasi ke tabel pegawai)
    - date (tanggal untuk dicatat kehadirannya)
    - status (jenis kehadiran pegawai apakah hadir, sakit, izin atau alpha)
    - notes (catatan tambahan bila tidak hadir)

