export default function Doctors() {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold">Our Doctors</h1>
        <p>
          Our hospital is home to over 1000 qualified doctors specializing in various fields.
          Here are some of our departments:
        </p>
        <ul className="mt-5">
          <li>Cardiology</li>
          <li>Pediatrics</li>
          <li>Orthopedics</li>
          <li>Neurology</li>
          <li>General Medicine</li>
          {/* Add more departments as needed */}
        </ul>
      </div>
    );
  }
  