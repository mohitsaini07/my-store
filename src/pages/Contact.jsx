import Btn from "../component/Btn";

const Contact = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-10 h-full font-poppins md:pt-28 pt-10 pb-20 bg-gradient-to-r from-gray-700 via-gray-900 to-black">
        <div className="md:text-6xl text-2xl uppercase text-white font-bold font-josefin">
          Contact <span className="text-blue-500">Us</span>
        </div>
        <div className="flex items-center justify-center md:flex-row flex-col md:gap-32 gap-16 w-full ">
          <iframe
            className="h-52 w-96 rounded shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14053.92776044989!2d77.89388890000001!3d28.28372155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1692151674764!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <form
            id="contactForm"
            className="flex items-center justify-center flex-col gap-6 p-10 border-2 border-gray-200 rounded w-96 bg-slate-200"
          >
            <input
              id="userName"
              className="p-2 border-2 text-sm w-full rounded text-slate-500"
              type="text"
              placeholder="Enter your name here"
              name="userName"
              autoComplete="off"
              required
            />
            <input
              id="email"
              className="p-2 border-2 text-sm w-full rounded text-slate-500"
              type="email"
              placeholder="Enter your email here"
              autoComplete="off"
              name="email"
              required
            />
            <textarea
              id="message"
              className="w-full h-40 p-2 text-slate-500 border border-gray-300 rounded non-resizable focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Type something..."
              required
            ></textarea>

            <Btn name="submit" />
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
