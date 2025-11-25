import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { ArrowLeft, Send } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

export default function FormPengajuan() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    nim: '',
    alasan: '',
    waktuPengambilan: ''
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('Pengajuan berhasil dikirim!');
      navigate(`/konfirmasi/${id}`);
    }, 1000);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="max-w-3xl mx-auto px-6 py-12">
        <Link to={`/detail-barang/${id}`}>
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Detail
          </Button>
        </Link>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8">
          <div className="mb-8">
            <h1 className="text-slate-900 mb-2">Form Pengajuan Donasi</h1>
            <p className="text-slate-600">
              Isi formulir di bawah ini dengan lengkap dan jelas. Pastikan informasi yang kamu berikan akurat.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="nama">Nama Lengkap</Label>
              <Input 
                id="nama"
                name="nama"
                type="text"
                placeholder="Masukkan nama lengkap kamu"
                value={formData.nama}
                onChange={handleChange}
                required
                className="mt-2"
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email"
                name="email"
                type="email"
                placeholder="email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-2"
              />
            </div>
            
            <div>
              <Label htmlFor="nim">NIM</Label>
              <Input 
                id="nim"
                name="nim"
                type="text"
                placeholder="Nomor Induk Mahasiswa"
                value={formData.nim}
                onChange={handleChange}
                required
                className="mt-2"
              />
            </div>
            
            <div>
              <Label htmlFor="alasan">Alasan Permintaan</Label>
              <Textarea 
                id="alasan"
                name="alasan"
                placeholder="Jelaskan mengapa kamu membutuhkan barang ini dan bagaimana akan kamu gunakan..."
                value={formData.alasan}
                onChange={handleChange}
                required
                className="mt-2 min-h-32 resize-none"
              />
              <p className="text-slate-500 text-sm mt-2">
                Berikan alasan yang jelas dan spesifik untuk meningkatkan peluang pengajuan diterima.
              </p>
            </div>
            
            <div>
              <Label htmlFor="waktuPengambilan">Waktu Pengambilan yang Diinginkan</Label>
              <Input 
                id="waktuPengambilan"
                name="waktuPengambilan"
                type="text"
                placeholder="Contoh: Senin-Jumat, 13:00-15:00"
                value={formData.waktuPengambilan}
                onChange={handleChange}
                required
                className="mt-2"
              />
              <p className="text-slate-500 text-sm mt-2">
                Sebutkan waktu yang fleksibel untuk memudahkan koordinasi.
              </p>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
              <p className="text-slate-700 text-sm">
                <strong>Catatan:</strong> Dengan mengajukan permintaan ini, kamu berkomitmen untuk memenuhi janji pengambilan barang. 
                Ketidakhadiran tanpa pemberitahuan akan mempengaruhi reputasi kamu.
              </p>
            </div>
            
            <div className="pt-4">
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-blue-600 hover:bg-blue-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Mengirim...'
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Kirim Pengajuan
                  </>
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
