export default function Booking() {
    return (
      <div className="p-10">
        <h1 className="text-3xl font-bold">Booking</h1>
        <p>
          Welcome to the booking page. Here you can schedule appointments with our doctors.
          Please fill out the form below to book an appointment.
        </p>
        {/* Add your booking form here */}
        <form className="mt-5">
          <div>
            <label htmlFor="fullname" className="block">Full Name:</label>
            <input type="text" id="fullname" className="border border-gray-300 p-2 w-full" />
          </div>
          <div className="mt-3">
            <label htmlFor="date" className="block">Appointment Date:</label>
            <input type="date" id="date" className="border border-gray-300 p-2 w-full" />
          </div>
          <div className="mt-3">
            <label htmlFor="time" className="block">Appointment Time:</label>
            <input type="time" id="time" className="border border-gray-300 p-2 w-full" />
          </div>
          <button type="submit" className="mt-5 px-4 py-2 bg-orange-500 text-white rounded">Book Appointment</button>
        </form>
      </div>
    );
  }
  