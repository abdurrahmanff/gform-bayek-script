const answers = [
  {
    Hari: 'SENIN SHIFT 1-2', // Sesuaiin sama yang mau dipilih (ini required)
    'Nama Operator': 'asd', // Format YYYY-MM-DD (ini required)
    'Kendaraan/Plat Nomor': 'asdsad/213', // (ini required)
    'Nama Pasien - Usia - No. RM': 'sadasd/213', // (ini required)
    Tindakan: 'KONTROL RM KASUS / KONTROL SRP', //
  },
];

const baseUrl =
  'https://docs.google.com/forms/d/e/1FAIpQLSeyskUz62w0Y1lMo1bxw_RKzfb6ZaZD4kmG0AKvp48gP_yotw/viewform';

const targetTime = '2023-08-04T22:41:30';

const questionCount = 5;

module.exports = { answers, baseUrl, targetTime, questionCount };
