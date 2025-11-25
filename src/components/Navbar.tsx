import { Link, useLocation } from 'react-router-dom';
import { User, FileText } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl flex items-center justify-center">
              <span className="text-white">K</span>
            </div>
            <span className="text-slate-900">KOLEKTIF</span>
          </Link>
          
          <div className="flex items-center gap-8">
            <Link 
              to="/daftar-barang" 
              className={`transition-colors ${isActive('/daftar-barang') ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Daftar Barang
            </Link>
            <Link 
              to="/profil" 
              className={`flex items-center gap-2 transition-colors ${isActive('/profil') ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}
            >
              <User className="w-4 h-4" />
              Profil
            </Link>
            <Link 
              to="/sop" 
              className={`flex items-center gap-2 transition-colors ${isActive('/sop') ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}`}
            >
              <FileText className="w-4 h-4" />
              SOP
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
