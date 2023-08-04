const answers = [
  {
    Hari: 'Senin (Shift Pagi)', // Sesuaiin sama yang mau dipilih (ini required)
    Tanggal: '2023-08-01', // Format YYYY-MM-DD (ini required)
    'Nama Operator 1/Angkatan (Bulan Tahun)': 'Bayek/Januari 2019', // (ini required)
    'Nama Operator 2/Angkatan (Bulan Tahun)': '', // (ini ga, kalo ga pen ngisi kosongin aja)
    'Nama Pasien/Usia/no RM': 'Gembol', // (ini required)
    'Jenis Tindakan Operator 1': 'RM Baru', //
    'Jenis Tindakan Operator 2': '', // (ini ga, kalo ga pen ngisi kosongin aja)
  },
  {
    Hari: 'Selasa (Shift Siang)', // Sesuaiin sama yang mau dipilih (ini required)
    Tanggal: '2023-08-01', // Format YYYY-MM-DD (ini required)
    'Nama Operator 1/Angkatan (Bulan Tahun)': 'Bayek/Januari 2019', // (ini required)
    'Nama Operator 2/Angkatan (Bulan Tahun)': '', // (ini ga, kalo ga pen ngisi kosongin aja)
    'Nama Pasien/Usia/no RM': 'Gembol', // (ini required)
    'Jenis Tindakan Operator 1': 'RM Baru', //
    'Jenis Tindakan Operator 2': '', // (ini ga, kalo ga pen ngisi kosongin aja)
  },
  {
    Hari: 'Rabu (Shift Pagi)', // Sesuaiin sama yang mau dipilih (ini required)
    Tanggal: '2023-08-01', // Format YYYY-MM-DD (ini required)
    'Nama Operator 1/Angkatan (Bulan Tahun)': 'Bayek/Januari 2019', // (ini required)
    'Nama Operator 2/Angkatan (Bulan Tahun)': '', // (ini ga, kalo ga pen ngisi kosongin aja)
    'Nama Pasien/Usia/no RM': 'Gembol', // (ini required)
    'Jenis Tindakan Operator 1': 'RM Baru', //
    'Jenis Tindakan Operator 2': '', // (ini ga, kalo ga pen ngisi kosongin aja)
  },
  {
    Hari: 'Kamis (Shift Siang)', // Sesuaiin sama yang mau dipilih (ini required)
    Tanggal: '2023-08-01', // Format YYYY-MM-DD (ini required)
    'Nama Operator 1/Angkatan (Bulan Tahun)': 'Bayek/Januari 2019', // (ini required)
    'Nama Operator 2/Angkatan (Bulan Tahun)': '', // (ini ga, kalo ga pen ngisi kosongin aja)
    'Nama Pasien/Usia/no RM': 'Gembol', // (ini required)
    'Jenis Tindakan Operator 1': 'RM Baru', //
    'Jenis Tindakan Operator 2': '', // (ini ga, kalo ga pen ngisi kosongin aja)
  },
  {
    Hari: 'Jumat (Shift Pagi)', // Sesuaiin sama yang mau dipilih (ini required)
    Tanggal: '2023-08-01', // Format YYYY-MM-DD (ini required)
    'Nama Operator 1/Angkatan (Bulan Tahun)': 'Bayek/Januari 2019', // (ini required)
    'Nama Operator 2/Angkatan (Bulan Tahun)': '', // (ini ga, kalo ga pen ngisi kosongin aja)
    'Nama Pasien/Usia/no RM': 'Gembol', // (ini required)
    'Jenis Tindakan Operator 1': 'RM Baru', //
    'Jenis Tindakan Operator 2': '', // (ini ga, kalo ga pen ngisi kosongin aja)
  },
];

const baseUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSffIWgmhdjI_7yrFErgS_zeYahwF7I7n2sRSRYztolUDj-CzA/viewform?usp=sf_link';

const targetTime = '2023-07-30T07:26:30';

module.exports = { answers, baseUrl, targetTime };
