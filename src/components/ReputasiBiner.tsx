import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Button } from './ui/button';
import { CheckCircle2, XCircle, Award } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export default function ReputasiBiner() {
  const { transaksiId } = useParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  
  const transaksi = {
    barang: 'Kalkulus dan Geometri Analitik Jilid 1',
    pihak: 'Siti Aminah',
    role: 'Penerima',
    reputasiSebelum: 85
  };
  
  const handleSubmit = (komitmenDipenuhi: boolean) => {
    setSelectedAnswer(komitmenDipenuhi);
    setIsSubmitting(true);
    
    setTimeout(() => {
      const newReputasi = komitmenDipenuhi 
        ? Math.min(100, transaksi.reputasiSebelum + 5)
        : Math.max(0, transaksi.reputasiSebelum - 10);
      
      toast.success(
        komitmenDipenuhi 
          ? `Reputasi ${transaksi.pihak} meningkat menjadi ${newReputasi}%` 
          : `Reputasi ${transaksi.pihak} menurun menjadi ${newReputasi}%`
      );
      
      setTimeout(() => {
        navigate('/profil');
      }, 1500);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-br from-blue-600 to-green-600 p-8 text-center">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-white mb-2">Konfirmasi Reputasi</h1>
            <p className="text-blue-100">
              Bantu jaga kepercayaan komunitas dengan memberikan penilaian yang jujur
            </p>
          </div>
          
          {/* Content */}
          <div className="p-8">
            {/* Transaction Info */}
            <div className="bg-slate-50 rounded-2xl p-6 mb-8">
              <h3 className="text-slate-900 mb-4">Detail Transaksi</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-600">Barang:</span>
                  <span className="text-slate-900">{transaksi.barang}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">{transaksi.role}:</span>
                  <span className="text-slate-900">{transaksi.pihak}</span>
                </div>
              </div>
            </div>
            
            {/* Question */}
            <div className="text-center mb-8">
              <h2 className="text-slate-900 mb-3">
                Apakah Komitmen Dipenuhi?
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto">
                Berdasarkan pengalamanmu, apakah <strong>{transaksi.pihak}</strong> memenuhi komitmen yang telah disepakati 
                (datang tepat waktu, mengambil barang sesuai kesepakatan, dll)?
              </p>
            </div>
            
            {/* Current Reputation */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className="text-slate-600">Reputasi Saat Ini:</span>
              <div className="flex items-center gap-3">
                <div className="w-48 h-3 bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500"
                    style={{ width: `${transaksi.reputasiSebelum}%` }}
                  />
                </div>
                <span className="text-blue-600">{transaksi.reputasiSebelum}%</span>
              </div>
            </div>
            
            {/* Answer Buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <button
                onClick={() => handleSubmit(true)}
                disabled={isSubmitting}
                className={`group relative overflow-hidden rounded-2xl p-8 border-2 transition-all ${
                  selectedAnswer === true
                    ? 'border-green-500 bg-green-50'
                    : 'border-slate-200 hover:border-green-300 hover:bg-green-50/50'
                } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <CheckCircle2 className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-slate-900 mb-2">Ya, Dipenuhi</h3>
                  <p className="text-slate-600 text-sm">
                    Semua komitmen dilakukan dengan baik
                  </p>
                  <div className="mt-4 text-green-600 text-sm">
                    Reputasi +5%
                  </div>
                </div>
              </button>
              
              <button
                onClick={() => handleSubmit(false)}
                disabled={isSubmitting}
                className={`group relative overflow-hidden rounded-2xl p-8 border-2 transition-all ${
                  selectedAnswer === false
                    ? 'border-red-500 bg-red-50'
                    : 'border-slate-200 hover:border-red-300 hover:bg-red-50/50'
                } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <XCircle className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-slate-900 mb-2">Tidak Dipenuhi</h3>
                  <p className="text-slate-600 text-sm">
                    Ada komitmen yang tidak ditepati
                  </p>
                  <div className="mt-4 text-red-600 text-sm">
                    Reputasi -10%
                  </div>
                </div>
              </button>
            </div>
            
            {/* Info */}
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
              <p className="text-slate-700 text-sm text-center">
                Penilaian ini akan mempengaruhi reputasi {transaksi.pihak} dan membantu 
                mahasiswa lain dalam membuat keputusan. Berikan penilaian yang jujur dan objektif.
              </p>
            </div>
            
            {isSubmitting && (
              <div className="mt-6 text-center">
                <p className="text-slate-600">Menyimpan penilaian...</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="text-center mt-6">
          <Link to="/profil">
            <Button variant="ghost">
              Lewati untuk sekarang
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
