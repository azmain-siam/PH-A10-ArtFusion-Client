import toast from "react-hot-toast";
import useAuth from "../hooks/useAuth";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";

const ProfileUpdate = () => {
  const { user, updateUser, setReload, reload } = useAuth();
  const notifySuccess = () =>
    toast.success("Your Profile Updated Successfully");
  const { register, handleSubmit, reset } = useForm();

  const handleUpdate = (data) => {
    const { fullName, photoURL } = data;
    updateUser(fullName, photoURL).then(() => {
      notifySuccess();
      setReload(!reload);
    });
    reset();
  };

  return (
    <div className="grid md:grid-cols-6 shadow-4xl min-h-[450px] my-10 rounded-3xl overflow-hidden w-[95%] lg:w-3/4 mx-auto">
      <Helmet>
        <title>Profile | ArtFusion</title>
      </Helmet>
      <div
        data-aos="fade-right"
        data-aos-duration="1000"
        className="bg-gradient-to-r from-[#A06AB4] to-[#E56997] capitalize md:col-span-3 py-10 md:p-0 rounded-b-3xl md:rounded-r-[150px] text-white md:flex flex-col justify-center items-center min-h-full"
      >
        <div className="w-48 h-48 overflow-hidden bg-white rounded-full flex justify-center mx-auto items-center mb-5">
          <img
            className="h-full w-full object-cover"
            src={
              user.photoURL ||
              "https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg"
            }
            alt=""
          />
        </div>
        <table className="table border-none text-sm *:text-left mx-auto w-fit text-center md:text-base">
          <tbody>
            <tr className="border-none ">
              <td className="font-semibold">Name:</td>
              <td>{user?.displayName || "N/A"}</td>
            </tr>
            <tr className="border-none">
              <td className="font-semibold">Email:</td>
              <td className="lowercase">{user?.email || "N/A"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        data-aos="fade-left"
        data-aos-duration="1000"
        className="md:col-span-3 flex items-center justify-center w-full"
      >
        <form
          onSubmit={handleSubmit(handleUpdate)}
          className="card-body p-5 md:p-8 w-full"
        >
          <div className="md:text-3xl mb-2 text-xl font-bold text-center">
            <h3>Update Your Profile</h3>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-medium text-base">Name</span>
            </label>
            <input
              type="text"
              placeholder="Update Your Name"
              className="input focus:outline-none focus:border bg-[#EEEDEE]"
              required
              {...register("fullName")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-base">
                Photo URL
              </span>
            </label>
            <input
              type="text"
              defaultValue={user.photoURL}
              placeholder="Update Your Photo URL"
              className="input focus:outline-none focus:border bg-[#EEEDEE]"
              {...register("photoURL")}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#E56997] border-[#E56997] hover:border-[#28282B] hover:text-[#28282B] text-white uppercase transition-all hover:bg-white duration-300 hover:scale-105">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileUpdate;
