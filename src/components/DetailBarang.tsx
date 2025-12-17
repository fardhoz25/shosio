import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { supabase } from "../lib/supabaseClient";
import { useAuth } from "../contexts/useAuth";
import { ArrowLeft } from "lucide-react";

type Barang = {
  id: string;
  title: string;
  description: string | null;
  status: string;
  taken_by: string | null;
};

// 🔹 Helper untuk memisahkan teks & gambar base64
function parseDescription(desc: string) {
  const imageMatch = desc.match(/\[IMAGE\](.*?)\[\/IMAGE\]/);
  const image = imageMatch ? imageMatch[1] : null;

  const text = desc.replace(/\[IMAGE\].*?\[\/IMAGE\]/, "").trim();

  return { text, image };
}

export default function DetailBarang() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [barang, setBarang] = useState<Barang | null>(null);
  const [loading, setLoading] = useState(true);
  const [requesting, setRequesting] = useState(false);

  useEffect(() => {
    if (!id) return;
    loadBarang();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function loadBarang() {
    setLoading(true);

    const { data, error } = await supabase
      .from("donations")
      .select("id, title, description, status, taken_by")
      .eq("id", id)
      .single();

    if (error) {
      console.error("Supabase error:", error);
      setBarang(null);
    } else {
      setBarang(data as Barang);
    }

    setLoading(false);
  }

  async function handleAmbilDonasi() {
    if (!barang) return;

    if (!user) {
      alert("Silakan login untuk mengambil donasi.");
      navigate("/login");
      return;
    }

    setRequesting(true);

    try {
      const { error } = await supabase
        .from("donations")
        .update({
          status: "taken",
          taken_by: user.id,
        })
        .eq("id", barang.id);

      if (error) {
        alert("Donasi sudah diambil oleh orang lain.");
      } else {
        alert("Anda berhasil mengambil donasi ✅");
        loadBarang(); // refresh data
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("Terjadi kesalahan sistem.");
    } finally {
      setRequesting(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <p className="text-slate-500">Memuat data...</p>
      </div>
    );
  }

  if (!barang) {
    return (
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <div className="max-w-3xl mx-auto px-6 py-10 space-y-4">
          <p className="text-slate-800 text-lg">
            Barang tidak ditemukan atau sudah dihapus.
          </p>
          <Link to="/daftar-barang">
            <Button variant="outline">Kembali</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const sudahDiambil = barang.status === "taken";
  const diambilOlehUser = barang.taken_by === user?.id;

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <div className="max-w-3xl mx-auto px-6 py-10 space-y-6">
        <Link to="/daftar-barang">
          <Button variant="ghost" className="px-0 gap-2 text-slate-600">
            <ArrowLeft className="w-4 h-4" />
            Kembali
          </Button>
        </Link>

        <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6 space-y-6">
          <h1 className="text-2xl font-semibold text-slate-900">
            {barang.title}
          </h1>

          {barang.description && (() => {
            const { text, image } = parseDescription(barang.description);

            return (
              <div className="space-y-3">
                {text && (
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {text}
                  </p>
                )}

                {image && (
                  <img
                    src={image}
                    alt="Gambar donasi"
                    className="rounded-xl max-h-80 object-contain border"
                  />
                )}
              </div>
            );
          })()}

          <div className="pt-4">
            {sudahDiambil ? (
              diambilOlehUser ? (
                <Button disabled className="w-full bg-green-100 text-green-700">
                  Anda berhasil mengambil donasi
                </Button>
              ) : (
                <Button disabled className="w-full bg-slate-200 text-slate-500">
                  Donasi sudah diambil oleh orang lain
                </Button>
              )
            ) : (
              <Button
                onClick={handleAmbilDonasi}
                disabled={requesting}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                {requesting ? "Memproses..." : "Ambil Donasi"}
              </Button>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
