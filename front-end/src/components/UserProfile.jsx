import { useSelector } from "react-redux";

const UserProfile = () => {
  const data = useSelector((i) => i.auth.user);

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
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
