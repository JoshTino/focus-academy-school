import school from "../data/school.js"

export default function Contact() {
  return (
    <section id="contact" className="py-10">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 py-4 bg-gray-800">

        <div className="px-8">
          <h2 className="text-3xl mb-4 font-nunito font-bold py-2 text-secondary">Contact Us</h2>
          <p className="mb-2 bg-secondary text-white w-fit p-2 shadow-xl font-nunito">{school.name}</p>
          <p className="mb-2 bg-secondary text-white w-fit p-2 shadow-xl font-nunito">{school.email}</p>
          <p className="mb-2 bg-secondary text-white w-fit p-2 shadow-xl font-nunito">{school.phone}</p>
        </div>

        {/*<form className="p-8 shadow rounded-xl">

          <input
            placeholder="Your Name"
            className="w-full bg-white p-3 mb-4 font-nunito" required
          />

          <input
            placeholder="Your Email"
            className="w-full bg-white p-3 mb-4 font-nunito" required
          />

          <textarea
            placeholder="Message"
            className="w-full bg-white p-3 mb-4 font-nunito" required
          ></textarea>

          <button className="bg-secondary text-white px-6 py-3 font-nunito">
            Send Message
          </button>

        </form>*/}

      </div>

    </section>
  );
}