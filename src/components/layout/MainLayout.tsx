'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Settings, BarChart3 } from "lucide-react"
import { useState } from "react"

const navigation = [
  { name: "Dashboard", href: "/" },
  { name: "Research Explorer", href: "/explorer" },
  { name: "Knowledge Graph", href: "/knowledge-graph" },
  { name: "Product Impact", href: "/product-impact" },
  { name: "Reports", href: "/reports" },
  { name: "Discussions", href: "/discussions" },
  { name: "World Impact", href: "/world-impact" },
]

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-adi">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 font-bold text-adi-blue">
              <BarChart3 size={28} />
              <span>ADInstruments RI</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded transition-all ${
                      isActive
                        ? "bg-adi-blue text-white"
                        : "text-adi-gray-text hover:bg-adi-gray-light"
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-4">
              <button className="text-adi-gray-text hover:text-adi-blue transition-colors">
                <Settings size={20} />
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-adi-gray-text hover:text-adi-blue"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="md:hidden border-t border-gray-200 py-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-4 py-2 text-sm font-medium rounded transition-all ${
                      isActive
                        ? "bg-adi-blue text-white"
                        : "text-adi-gray-text hover:bg-adi-gray-light"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
            </nav>
          )}
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-adi-gray-light mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-adi-gray-text text-sm">
            © ADInstruments — Research Intelligence Platform Powered by Velan Engine
          </p>
        </div>
      </footer>
    </div>
  )
}
