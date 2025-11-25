import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Button } from './ui/button';
import { CheckCircle2, Calendar, MapPin, User, Package } from 'lucide-react';

export default function KonfirmasiTransaksi() {
  const { id } = useParams();
  
  const transaksi = {
    id: '12345',
    barang: 'Kalkulus dan Geometri Analitik Jilid 1',
    donatur: 'Ahmad Rizki',
    penerima: 'Siti Aminah',
    waktu: 'Senin, 20 November 2025 - 13:00',
    lokasi: 'Kampus FST, Gedung A, Lantai 2',
    status: 'Menunggu Konfirmasi',
    catatan: 'Barang sudah siap diambil. Silakan hubungi donatur 15 menit sebelum waktu pengambilan.'
  };
  
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Success Message */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-6">
          <div className="text-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-slate-900 mb-2">Pengajuan Diterima!</h1>
            <p className="text-slate-600">
              Donatur telah menyetujui pengajuanmu. Berikut detail transaksi yang harus kamu perhatikan.
            </p>
          </div>
        </div>
        
        {/* Transaction Details */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 mb-6">
          <h2 className="text-slate-900 mb-6">Ringkasan Transaksi</h2>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="text-slate-500 text-sm mb-1">Barang</p>
                <p className="text-slate-900">{transaksi.barang}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="text-slate-500 text-sm mb-1">Donatur</p>
                <p className="text-slate-900">{transaksi.donatur}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-slate-500 text-sm mb-1">Penerima</p>
                <p className="text-slate-900">{transaksi.penerima}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Calendar className="w-6 h-6 text-amber-600" />
              </div>
              <div className="flex-1">
                <p className="text-slate-500 text-sm mb-1">Waktu Pengambilan</p>
                <p className="text-slate-900">{transaksi.waktu}</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <div className="flex-1">
                <p className="text-slate-500 text-sm mb-1">Lokasi Pengambilan</p>
                <p className="text-slate-900">{transaksi.lokasi}</p>
              </div>
            </div>
          </div>
          
          {transaksi.catatan && (
            <div className="mt-6 bg-blue-50 rounded-xl p-4 border border-blue-100">
              <p className="text-slate-700 text-sm">{transaksi.catatan}</p>
            </div>
          )}
        </div>
        
        {/* Important Notes */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100 mb-6">
          <h3 className="text-slate-900 mb-3">Hal Penting yang Harus Diperhatikan:</h3>
          <ul className="space-y-2 text-slate-700 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span>Hadir tepat waktu sesuai jadwal yang telah disepakati</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span>Hubungi donatur jika ada perubahan jadwal atau kendala</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span>Setelah transaksi selesai, donatur akan meminta konfirmasi untuk reputasi</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-amber-600 mt-1">•</span>
              <span>Ketidakhadiran tanpa pemberitahuan akan mempengaruhi reputasimu</span>
            </li>
          </ul>
        </div>
        
        {/* Actions */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <h3 className="text-slate-900 mb-4">Langkah Selanjutnya</h3>
          <p className="text-slate-600 mb-6">
            Setelah transaksi selesai dan barang telah diserahkan, konfirmasi penyelesaian transaksi untuk memperbarui reputasi.
          </p>
          <div className="flex gap-4">
            <Link to={`/reputasi/${transaksi.id}`} className="flex-1">
              <Button size="lg" className="w-full bg-green-600 hover:bg-green-700">
                Konfirmasi Transaksi Selesai
              </Button>
            </Link>
            <Link to="/daftar-barang" className="flex-1">
              <Button size="lg" variant="outline" className="w-full">
                Kembali ke Daftar
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
