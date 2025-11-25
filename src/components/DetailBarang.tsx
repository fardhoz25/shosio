import { Link, useParams } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowLeft, Award, Calendar, MapPin, Book } from 'lucide-react';

export default function DetailBarang() {
  const { id } = useParams();
  
  // Mock data - in real app would fetch based on id
  const barang = {
    id: id,
    nama: 'Kalkulus dan Geometri Analitik Jilid 1',
    kategori: 'Buku',
    status: 'Donasi',
    deskripsi: 'Buku Kalkulus dan Geometri Analitik Jilid 1 edisi ke-9. Kondisi buku masih sangat baik, tidak ada coretan, halaman lengkap. Cocok untuk mahasiswa semester 1-2 yang mengambil mata kuliah Kalkulus. Sudah dilengkapi dengan pembatas buku.',
    donatur: {
      nama: 'Ahmad Rizki',
      reputasi: 95,
      jurusan: 'Matematika',
      angkatan: '2021'
    },
    lokasi: 'Kampus FST, Gedung A',
    tanggalPosting: '15 November 2025',
    kondisi: 'Sangat Baik',
    catatan: 'Pengambilan bisa diatur sesuai jadwal. Preferensi untuk mahasiswa yang benar-benar membutuhkan.'
  };
  
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Link to="/daftar-barang">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Daftar
          </Button>
        </Link>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8">
            <div className="flex items-start gap-6">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                <Book className="w-10 h-10 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary">{barang.kategori}</Badge>
                  <Badge className="bg-green-100 text-green-700">
                    {barang.status}
                  </Badge>
                  <Badge variant="outline">{barang.kondisi}</Badge>
                </div>
                <h1 className="text-slate-900 mb-2">{barang.nama}</h1>
                <div className="flex items-center gap-4 text-slate-600 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {barang.tanggalPosting}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {barang.lokasi}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="p-8">
            {/* Deskripsi */}
            <div className="mb-8">
              <h2 className="text-slate-900 mb-3">Deskripsi</h2>
              <p className="text-slate-600 leading-relaxed">
                {barang.deskripsi}
              </p>
            </div>
            
            {/* Catatan */}
            {barang.catatan && (
              <div className="mb-8 bg-blue-50 rounded-xl p-4 border border-blue-100">
                <p className="text-slate-700 text-sm">{barang.catatan}</p>
              </div>
            )}
            
            {/* Informasi Donatur */}
            <div className="border-t border-slate-100 pt-8 mb-8">
              <h2 className="text-slate-900 mb-4">Informasi Donatur</h2>
              <div className="flex items-start gap-4 bg-slate-50 rounded-xl p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl">{barang.donatur.nama.charAt(0)}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-slate-900 mb-2">{barang.donatur.nama}</h3>
                  <div className="text-slate-600 text-sm mb-3">
                    {barang.donatur.jurusan} • Angkatan {barang.donatur.angkatan}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-amber-500" />
                    <span className="text-slate-700">Reputasi Komitmen:</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-green-500 to-green-600"
                          style={{ width: `${barang.donatur.reputasi}%` }}
                        />
                      </div>
                      <span className="text-green-600">{barang.donatur.reputasi}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* CTA */}
            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-6 text-center">
              <h3 className="text-white mb-2">Tertarik dengan barang ini?</h3>
              <p className="text-blue-100 text-sm mb-6">
                Ajukan {barang.status.toLowerCase()} sekarang dan tunggu konfirmasi dari donatur
              </p>
              <Link to={`/pengajuan/${barang.id}`}>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  Ajukan {barang.status}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
