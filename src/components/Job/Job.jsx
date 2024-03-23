import { MdLocationOn } from "react-icons/md";
import { AiOutlineDollar } from "react-icons/ai";

const Job = ({job}) => {
    const { logo, job_title, company_name, remote_or_onsite, 
    location, job_type, salary, } = job;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure><img src={logo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title text-[#474747] font-bold">{job_title}</h2>
          <p className="text-[#474747] font-semibold">{company_name}</p>
          <div>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]">{job_type}</button>
          </div>
          <div className="mt-4 flex mr-4">
            <h2 className="flex mr-2 text-[#757575]"><MdLocationOn className="text-2xl"></MdLocationOn>{location}</h2>
            <h2 className="flex mr-2 text-[#757575]"> <AiOutlineDollar className="text-2xl"></AiOutlineDollar> Salary: {salary}</h2>
          </div>
          <div className="card-actions mt-2">
            <button className="btn text-[#FFFFFF] bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default Job;
