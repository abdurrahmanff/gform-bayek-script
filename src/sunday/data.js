const answers = [
  {
    Hari: 'Senin (Shift Pagi)', // Sesuaiin sama yang mau dipilih (ini required)
    Tanggal: '2023-08-01', // Format YYYY-MM-DD (ini required)
    'Nama Operator 1/Angkatan (Bulan Tahun)': 'Bayek/Januari 2019', // (ini required)
    'Nama Pasien/Usia/no RM': 'Gembol', // (ini required)
    'Jenis Tindakan Operator 1': 'RM Baru', //
  },
];

const baseUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSdNK2ClMvuzQcnpQbRR9Jcn0a68pZfw5EbPp8GJ1FfTbwBh8Q/viewform?usp=sf_link';

const targetTime = '2023-07-30T07:26:30';

module.exports = { answers, baseUrl, targetTime };
