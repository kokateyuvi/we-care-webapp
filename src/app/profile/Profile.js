import React from "react";
import profilePic from "../../components/Home/components/TaskComponent/elements/img1.jpg";
import coverPic from "../../components/Home/components/TaskComponent/elements/img1.jpg";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="container px-4 py-8 mx-auto">
      <div className="relative h-40 mb-8 md:h-60">
        <Image
          src={coverPic.src}
          alt="Cover"
          width={500}
          height={500}
          className="object-cover w-full h-full rounded-lg shadow"
        />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <Image
            src={profilePic.src}
            alt="Profile"
            width={500}
            height={500}
            className="object-cover w-20 h-20 border-4 border-white rounded-full shadow-lg"
          />
          <h1 className="mt-2 text-2xl font-bold">hopes a.</h1>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between mb-8 md:flex-row">
        <div className="mb-2 text-sm text-gray-500 md:mb-0">
          Member since 7th Oct 2023
        </div>
        <div className="text-sm text-gray-500">Last online 9 minutes ago</div>
      </div>

      <div className="flex items-center mb-6">
        <div className="mr-4">As a tasker</div>
        <div>As a poster</div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold">Badges</h2>
        <div className="flex items-center space-x-4">
          {/* Badge components */}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold">About</h2>
        <div className="text-gray-700">
          Edit your description now. Read More
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold">Portfolio</h2>
        <div className="text-gray-700">Listings</div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold">Skills</h2>
        <div className="text-gray-700">
          This user has not added any skills yet.
        </div>
      </div>

      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold">Reviews</h2>
        <div className="text-gray-700">
          As A Tasker
          <br />
          As A Poster
          <br />
          This user has no reviews as a Tasker yet
        </div>
      </div>
    </div>
  );
};

export default Profile;
