export default function Footer() {
  return (
    <footer className="border-t mt-16">
      <div className="container py-10 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-brand">Privacy</a>
          <a href="#" className="hover:text-brand">Terms</a>
          <a href="#" className="hover:text-brand">Support</a>
        </div>
      </div>
    </footer>
  )
}
