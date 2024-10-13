export default function Footer() {
  return (
    <div className="bg-gray-800 p-6 text-white text-center">
      <h1 className="text-xl font-bold">Sanju Hospital</h1>
      <p className="mt-2">Name: Sanjeevan</p>
      <p className="mt-1">Contact Number: 0757009626</p>
      <p className="mt-1">Email: sanjeevan54274@gmail.com</p>
      <p className="mt-1">Address: Main Street, Kaluwanchikudy</p>
      <p className="mt-4 text-sm">© {new Date().getFullYear()} Sanju Hospital. All rights reserved.</p>
    </div>
  );
}
