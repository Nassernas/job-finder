import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-600 px-24 py-24 border-t border-gray-300">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-300">&copy; {new Date().getFullYear()}</p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/"  className="text-gray-300 hover:text-gray-100">
                Home
              </Link>
            </li>
            <li>
              <Link href="/find-jobs"  className="text-gray-300 hover:text-gray-100">
                Find Jobs
              </Link>
            </li>
            <li>
              <Link href="/contact"  className="text-gray-300 hover:text-gray-100">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}