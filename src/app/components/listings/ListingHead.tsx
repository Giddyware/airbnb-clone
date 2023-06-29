"use client";

import Image from "next/image";

import useCountries from "@/app/hooks/useCountries";
import Heading from "../Heading";
import HeartButton from "../HeartButton";

interface ListingHeadProps {
  id: string;
  locationValue: string;
  imageSrc: string;
  title: string;
  currentUser?: IUserSafe | null;
}

const ListingHead: React.FC<ListingHeadProps> = ({
  title,
  imageSrc,
  locationValue,
  id,
  currentUser,
}) => {
  const { getByValue } = useCountries();

  const location = getByValue(locationValue);
  return (
    <>
      <Heading
        title={title}
        subTitle={`${location?.region}, ${location?.label}`}
      />

      <div className="w-full h-[60vh] overflow-hidden rounded-xl relative">
        <Image
          alt="Image"
          src={imageSrc}
          fill
          className="object-cover w-full"
        />
        <div className="top-5 absolute right-5">
          <HeartButton currentUser={currentUser} listingId={id} />
        </div>
      </div>
    </>
  );
};
export default ListingHead;
