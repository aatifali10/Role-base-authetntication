import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { uploadProfilePic } from "../redux/slice/authSlice";

const UserProfile = () => {
  const dispatch = useDispatch();
  const data = useSelector((i) => i.auth.user);
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setMessage("");
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("Please choose an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("profilePicture", file);

    const result = await dispatch(uploadProfilePic(formData));
    if (result.meta?.requestStatus === "fulfilled") {
      setMessage("Profile picture uploaded successfully.");
      setFile(null);
    } else {
      setMessage("Upload failed. Please try again.");
    }
  };

  if (!data) {
    return (
      <div className="bg-gray-500 p-4">
        <h1 className="text-xl font-bold">No user loaded</h1>
        <p>Please log in to see your profile.</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-500 p-4 rounded-lg">
      <div className="flex gap-4 items-center">
        <div className="mt-3">
          <img
            src={data.profilePicture || "https://via.placeholder.com/120"}
            alt="Profile"
            className="w-28 h-28 object-cover rounded-full border border-white"
          />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold">{data.name}</h1>
          <p className="text-sm">Email: {data.email}</p>
          <p className="text-sm">Role: {data.role}</p>

          <form onSubmit={handleUpload} className="mt-4 space-y-3">
            <div>
              <label className="block text-sm font-medium mb-1">
                Upload profile picture
              </label>
              <input type="file" accept="image/*" onChange={handleFileChange} />
            </div>
            <button
              className="bg-orange-500 text-white py-2 px-4 rounded-lg"
              type="submit"
            >
              Upload
            </button>
            {message && <p className="text-sm mt-2">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
