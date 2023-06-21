"use client";

interface HeadinfProps {
  title: string;
  subTitle?: string;
  center?: boolean;
}
const Heading: React.FC<HeadinfProps> = ({ title, subTitle, center }) => {
  return (
    <div className={center ? "text-center" : "text-start"}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="mt-2 font-light text-neutral-500">{subTitle}</div>
    </div>
  );
};
export default Heading;
