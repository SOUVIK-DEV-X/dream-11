import { Link, useRouteError } from "react-router-dom";

import errorImage from "../../assets/error.png";
export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <div className="p-10">
        <div className="  flex justify-center mb-10 ">
          <img className="h-50" src={errorImage} alt="error" srcset="" />
        </div>

        <div className="text-center">
          <p className="font-bold text-2xl">
            {error.status === 404
              ? " The page you looking for doesn't exist."
              : " Something unexpected happened "}
          </p>
          <p>Code : {error.status}</p>
          <p>Status : {error.statusText}</p>
          <p>{error.data}</p>
        </div>

        <div className="flex justify-center mt-15">
          <Link
            className=" text-black rounded-sm px-4 py-2 bg-amber-300 hover:bg-amber-500  text-lg font-bold"
            to="/"
          >
            Go Back to Home{" "}
          </Link>
        </div>
      </div>
    </>
  );
}
