import Link from 'next/link'

export default function NotFound() {
  return <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', padding: 24, textAlign: 'center' }}><div><p style={{ color: '#1783c1', fontWeight: 800, letterSpacing: '.12em', fontSize: 12 }}>ANU BRAND</p><h1>Page not found</h1><p style={{ color: '#4f5b66' }}>The page you’re looking for isn’t available.</p><Link href="/" style={{ color: '#1783c1', fontWeight: 700 }}>Return home</Link></div></main>
}
