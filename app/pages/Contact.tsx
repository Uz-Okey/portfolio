export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-[url('/background.avif')] relative bg-center bg-cover h-[800px] w-screen bg-fixed flex items-center justify-center"
    >
      {/* Dark overlay */}
      <div className="absolute top-0 left-0 bg-black/50 h-full w-full"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-[500px] w-full text-center">
        {/* Header */}
        <h2 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
          Contact Me
        </h2>
        <p className="text-white text-sm sm:text-base mb-10">
          Got a project or question? Let’s talk! Fill out the form below and I’ll get back to you soon.
        </p>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xkgpbwwa"
          method="POST"
          className="bg-white border shadow-2xl rounded-2xl p-8 flex flex-col space-y-5 text-left"
        >
          <div>
            <label className="text-sm text-gray-700 font-semibold mb-1 block">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              required
              className="w-full px-4 py-2 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700 text-gray-700 placeholder:text-gray-700 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 font-semibold mb-1 block">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700 text-gray-700 placeholder:text-gray-700 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-700 font-semibold mb-1 block">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Type your message here..."
              rows={5}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700 text-gray-700 placeholder:text-gray-700 transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-700 text-white font-bold py-3 rounded-md hover:bg-gray-800 transition-transform transform hover:scale-105 duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
