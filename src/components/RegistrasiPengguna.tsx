import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';

const RegistrasiPengguna = () => {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [konfirmasiPassword, setKonfirmasiPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            if (password !== konfirmasiPassword) {
                setError('Password dan konfirmasi password tidak cocok.');
                return;
            }

            const { data, error: signUpError } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        nama: nama.trim(),
                    },
                },
            });

            if (signUpError) {
                throw signUpError;
            }

            if (data.user) {
                alert('Pendaftaran Berhasil! Silakan masuk.');
                navigate('/login');
            } else {
                setError('Pendaftaran gagal. Silakan coba lagi.');
            }
        } catch (err: any) {
            console.error('Error saat pendaftaran:', err);

            const message =
                typeof err === 'object' && err !== null && 'message' in err
                    ? String(err.message)
                    : '';

            if (
                message.includes('already registered') ||
                message.includes('already exists') ||
                message.includes('User already registered')
            ) {
                setError(
                    'Email ini sudah terdaftar. Silakan gunakan email lain atau masuk.'
                );
            } else {
                setError('Terjadi masalah saat mencoba mendaftar.');
            }
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h2 style={styles.header}>Daftar Akun Kolektif</h2>
                {error && <p style={styles.errorText}>{error}</p>}

                <form onSubmit={handleSubmit}>
                    <div style={styles.inputGroup}>
                        <label htmlFor="nama" style={styles.label}>Nama Lengkap:</label>
                        <input
                            type="text"
                            id="nama"
                            value={nama}
                            onChange={(e) => setNama(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label htmlFor="email" style={styles.label}>Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label htmlFor="password" style={styles.label}>Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.inputGroup}>
                        <label htmlFor="konfirmasiPassword" style={styles.label}>
                            Konfirmasi Password:
                        </label>
                        <input
                            type="password"
                            id="konfirmasiPassword"
                            value={konfirmasiPassword}
                            onChange={(e) => setKonfirmasiPassword(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>

                    <button type="submit" style={styles.submitButton}>
                        Daftar
                    </button>
                </form>

                <p style={styles.loginLinkContainer}>
                    Sudah punya akun?
                    <Link to="/login" style={styles.link}> Masuk di sini</Link>
                </p>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f8f9fa',
    },
    card: {
        backgroundColor: '#ffffff',
        padding: '40px',
        borderRadius: '12px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '450px',
    },
    header: {
        fontSize: '24px',
        marginBottom: '30px',
        textAlign: 'center',
    },
    inputGroup: { marginBottom: '20px' },
    label: { marginBottom: '8px', display: 'block' },
    input: { width: '100%', padding: '12px' },
    submitButton: { width: '100%', padding: '12px' },
    loginLinkContainer: { marginTop: '20px', textAlign: 'center' },
    link: { marginLeft: '5px' },
    errorText: { color: 'red', textAlign: 'center' },
};

export default RegistrasiPengguna;
