import Navbar from './Navbar';
import Footer from './Footer';
import { Shield, Users, Heart, CheckCircle2, AlertCircle } from 'lucide-react';

export default function SOP() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-slate-900 mb-2">SOP & Etika Digital</h1>
          <p className="text-slate-600 text-lg">
            Panduan perilaku dan prosedur standar untuk menjaga ekosistem KOLEKTIF yang sehat
          </p>
        </div>
        
        {/* Introduction */}
        <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-8 text-white mb-8">
          <h2 className="text-white mb-4">Prinsip Dasar KOLEKTIF</h2>
          <p className="text-blue-100 leading-relaxed">
            KOLEKTIF dibangun atas dasar kepercayaan, saling menghormati, dan komitmen bersama. 
            Setiap anggota komunitas memiliki tanggung jawab untuk menjaga nilai-nilai ini 
            agar platform tetap bermanfaat bagi semua mahasiswa.
          </p>
        </div>
        
        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-slate-900 mb-2">Kepercayaan</h3>
            <p className="text-slate-600 text-sm">
              Bangun kepercayaan dengan menepati komitmen dan berlaku jujur
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-slate-900 mb-2">Kolaborasi</h3>
            <p className="text-slate-600 text-sm">
              Saling membantu dan mendukung sesama mahasiswa
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-slate-900 mb-2">Keikhlasan</h3>
            <p className="text-slate-600 text-sm">
              Berbagi dengan tulus untuk kebaikan bersama
            </p>
          </div>
        </div>
        
        {/* SOP Sections */}
        <div className="space-y-6">
          {/* Untuk Donatur */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="bg-green-50 px-8 py-6 border-b border-green-100">
              <h2 className="text-slate-900">SOP untuk Donatur</h2>
              <p className="text-slate-600 text-sm mt-1">
                Panduan bagi yang ingin berbagi barang
              </p>
            </div>
            <div className="p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-slate-900 mb-1">Pastikan Kondisi Barang</h3>
                    <p className="text-slate-600 text-sm">
                      Pastikan barang dalam kondisi layak pakai. Jelaskan kondisi dengan jujur dan detail.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-slate-900 mb-1">Tentukan Waktu dan Tempat</h3>
                    <p className="text-slate-600 text-sm">
                      Tetapkan waktu dan tempat yang jelas untuk penyerahan barang. Komunikasikan dengan baik.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-slate-900 mb-1">Tepati Janji</h3>
                    <p className="text-slate-600 text-sm">
                      Hadir sesuai jadwal yang disepakati. Jika ada perubahan, informasikan segera.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-slate-900 mb-1">Berikan Penilaian</h3>
                    <p className="text-slate-600 text-sm">
                      Setelah transaksi, berikan penilaian reputasi yang jujur untuk penerima.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Untuk Penerima */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="bg-blue-50 px-8 py-6 border-b border-blue-100">
              <h2 className="text-slate-900">SOP untuk Penerima</h2>
              <p className="text-slate-600 text-sm mt-1">
                Panduan bagi yang menerima donasi/tukar barang
              </p>
            </div>
            <div className="p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-slate-900 mb-1">Ajukan dengan Alasan Jelas</h3>
                    <p className="text-slate-600 text-sm">
                      Jelaskan mengapa kamu membutuhkan barang tersebut dan bagaimana akan digunakan.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-slate-900 mb-1">Komunikasi Responsif</h3>
                    <p className="text-slate-600 text-sm">
                      Tanggapi pesan dari donatur dengan cepat. Konfirmasi waktu dan tempat pengambilan.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-slate-900 mb-1">Hadir Tepat Waktu</h3>
                    <p className="text-slate-600 text-sm">
                      Datang sesuai jadwal yang disepakati. Keterlambatan atau ketidakhadiran akan mempengaruhi reputasi.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-slate-900 mb-1">Manfaatkan dengan Baik</h3>
                    <p className="text-slate-600 text-sm">
                      Gunakan barang sesuai kebutuhan. Jika sudah tidak terpakai, pertimbangkan untuk mendonasikannya kembali.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Etika Digital */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="bg-purple-50 px-8 py-6 border-b border-purple-100">
              <h2 className="text-slate-900">Etika Digital</h2>
              <p className="text-slate-600 text-sm mt-1">
                Aturan perilaku dalam menggunakan platform
              </p>
            </div>
            <div className="p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-slate-900 mb-1">Komunikasi Sopan</h3>
                    <p className="text-slate-600 text-sm">
                      Gunakan bahasa yang sopan dan menghormati dalam semua komunikasi.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-slate-900 mb-1">Privasi dan Data</h3>
                    <p className="text-slate-600 text-sm">
                      Hormati privasi orang lain. Jangan menyebarkan informasi pribadi tanpa izin.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-slate-900 mb-1">Jujur dan Transparan</h3>
                    <p className="text-slate-600 text-sm">
                      Berikan informasi yang akurat. Jangan menyesatkan atau berbohong tentang kondisi barang.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-slate-900 mb-1">Tidak Menyalahgunakan</h3>
                    <p className="text-slate-600 text-sm">
                      Jangan gunakan platform untuk tujuan komersial atau keuntungan pribadi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pelanggaran */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
            <div className="bg-red-50 px-8 py-6 border-b border-red-100">
              <h2 className="text-slate-900">Konsekuensi Pelanggaran</h2>
              <p className="text-slate-600 text-sm mt-1">
                Yang terjadi jika melanggar SOP dan etika
              </p>
            </div>
            <div className="p-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-slate-900 mb-1">Penurunan Reputasi</h3>
                    <p className="text-slate-600 text-sm">
                      Pelanggaran komitmen akan menurunkan reputasi dan mengurangi kepercayaan komunitas.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-slate-900 mb-1">Pembatasan Akses</h3>
                    <p className="text-slate-600 text-sm">
                      Pengguna dengan reputasi rendah dapat dibatasi aksesnya untuk mengajukan donasi.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-slate-900 mb-1">Penonaktifan Akun</h3>
                    <p className="text-slate-600 text-sm">
                      Pelanggaran berat dapat mengakibatkan penonaktifan akun secara permanen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer Message */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 text-center border border-blue-100 mt-8">
          <h3 className="text-slate-900 mb-3">Mari Jaga Bersama</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            KOLEKTIF adalah milik kita bersama. Dengan mengikuti SOP dan etika ini, 
            kita membangun komunitas yang kuat, saling percaya, dan saling mendukung 
            untuk kemajuan akademik semua mahasiswa FST.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
