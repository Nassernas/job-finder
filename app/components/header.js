import Link from 'next/link';

export default function header() {
  return (
    <header className="bg-gray-50 px-24 p-6 flex justify-between items-center border-b border-gray-300">
      <nav>
        <ul className="flex justify-center space-x-4">
          <li>
          <Link href="/" className="text-gray-900 hover:underline">Home</Link>
            
          </li>
          <li>
            <Link href="/find-jobs" className="text-gray-900 hover:underline">Find Jobs</Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-900 hover:underline">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Link href="/" className="bg-gray-100 text-gray-900 px-6 py-2 rounded-full hover:bg-gray-300">Sign In</Link>
      </div>
    </header>
  );
}