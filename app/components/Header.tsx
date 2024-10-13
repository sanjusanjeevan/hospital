"use client";

import Link from 'next/link';

export default function Header() {
  return (
    <nav className="bg-gray-800 p-10">
      <table className="w-full">
        <tbody>
          <tr>
            <td className="text-right">
              <Link href="/" className="px-20 py-5 rounded text-white bg-orange-500 hover:bg-orange-600">
                Home
              </Link>
            </td>
            <td className="text-right">
              <Link href="/about" className="px-20 py-5 rounded text-white bg-orange-500 hover:bg-orange-600">
                About Us
              </Link>
            </td>
            <td className="text-right">
              <Link href="/doctors" className="px-20 py-5 rounded text-white bg-orange-500 hover:bg-orange-600">
                Doctors
              </Link>
            </td>
            <td className="text-right">
              <Link href="/booking" className="px-20 py-5 rounded text-white bg-orange-500 hover:bg-orange-600">
                Booking
              </Link>
            </td>
            <td className="text-right">
            <Link href="/services" className="px-20 py-5 rounded text-white bg-orange-500 hover:bg-orange-600">
            Services
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </nav>
  );
}
