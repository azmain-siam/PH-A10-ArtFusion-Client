import { Helmet } from "react-helmet";

const Contact = () => {
  const handleMessege = (e) => {
    e.preventDefault();
    e.target.reset;
  };
  return (
    <div className="grid md:grid-cols-6 shadow-4xl min-h-[450px] my-10 rounded-3xl overflow-hidden w-[95%] lg:w-3/4 mx-auto">
      <Helmet>
        <title>Contact | ArtFusion</title>
      </Helmet>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="bg-gradient-to-r from-[#A06AB4] to-[#E56997] capitalize md:col-span-3 py-10 px-4 rounded-b-3xl md:rounded-r-[150px] text-white md:flex flex-col justify-center min-h-full"
      >
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-3">Contact Us</h3>
          <p className="mb-2 mx-auto">
            Get in touch with us by sending a message
          </p>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="md:col-span-3 flex items-center justify-center w-full"
      >
        <form onClick={handleMessege} className="card-body p-5 md:p-6 w-full">
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-medium text-base">
                Your Name
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="input focus:outline-none focus:border bg-[#EEEDEE]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-base">
                Your Email
              </span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="input focus:outline-none focus:border bg-[#EEEDEE]"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-base">
                Your Phone
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Phone"
              className="input focus:outline-none focus:border bg-[#EEEDEE]"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-base">Subject</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Subject"
              className="input focus:outline-none focus:border bg-[#EEEDEE]"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-base">
                Your Message
              </span>
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message Here"
              className="focus:outline-none focus:border textarea text-base rounded-lg bg-[#EEEDEE]"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#E56997] border-[#E56997] hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
