import { Link } from "@mui/material";

const SingleCourses = ({ item }) => {
  const { img, content, instructor, lessons, rating, title } = item;
  console.log(item);
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img className="w-full h-[200px]" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>{content}</p>
        <div>
          <div className=""></div>
          <div className="card-actions justify-end">
            <Link>
              <button className="hover:bg-[#1363DF] hover:text-white badge badge-outline">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourses;
