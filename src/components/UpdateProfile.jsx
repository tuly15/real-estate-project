import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const UpdateProfile = () => {
  const { updateUserProfile } = useContext(AuthContext);
  const location = useLocation();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, photo} = data;
    console.log(data);
    updateUserProfile(name, photo);
    window.location
      .reload()
      .then(() => navigate(location?.pathname || "/profile"))
      .catch();
    navigate(location?.pathname || "/profile");
  };
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn font-bold btn-primary"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Update Profile
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form
            onSubmit={handleSubmit(onSubmit)}
            method="dialog"
            className="space-y-3"
          >
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={() => {
                window.location.reload();
              }}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <input
              {...register("name", { required: true })}
              type="text"
              className="input bg-base-200 w-[90%] mx-auto block"
              placeholder="Enter your name"
              name="name"
            />
            {errors.name && (
              <span className="text-red-500 font-semibold ml-6">
                Feild is required
              </span>
            )}

            <input
              {...register("photo", { required: true })}
              type="text"
              className="input bg-base-200 w-[90%] mx-auto block"
              placeholder="Enter your photo URL"
              name="photo"
            />
            {errors.photo && (
              <span className="text-red-500 font-semibold ml-6">
                Feild is required
              </span>
            )}
           

            <button type="Submit " className="btn btn-secondary mx-auto block">
              Update Now
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default UpdateProfile;
