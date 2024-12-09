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
            <Link href="./find-jobs" className="text-gray-900 hover:underline">Find Jobs</Link>
          </li>
          <li>
            <Link href="./contact" className="text-gray-900 hover:underline">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Link href="/" className="text-gray-900 hover:underline">Sign In</Link>
      </div>
    </header>
  );
}