import {Link} from 'react-router-dom'
import {MdLocationOn} from 'react-icons/md'
import {BsFillBriefcaseFill, BsStarFill} from 'react-icons/bs'
import './index.css'

const JobCard = props => {
  const {JobDetails} = props
  const {
    companyLogoUrl,
    employmentType,
    id,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = JobDetails
  return (
    <Link to={`/jobs/${id}`} className="link-item">
      <li className="job-items">
        <div className="logo-location-title-container">
          <div className="logo-title-container">
            <img
              src={companyLogoUrl}
              alt="company logo"
              className="companyLogoUrl"
            />
            <div className="title-container">
              <h1 className="title">{title}</h1>
              <div className="rating-container">
                <BsStarFill className="rating-icon" />
                <p className="rating">{rating}</p>
              </div>
            </div>
          </div>
          <div className="location-package-container">
            <div className="location-type-container">
              <div className="location-container">
                <MdLocationOn className="location-icon" />
                <p className="location">{location}</p>
              </div>
              <div className="employeeType-container">
                <BsFillBriefcaseFill className="brief-case-icon" />
                <p className="employmentsType">{employmentType}</p>
              </div>
            </div>
            <p className="packagePerAnnum">{packagePerAnnum}</p>
          </div>
          <hr className="line" />
          <h1 className="heading">Description</h1>
          <p className="description">{jobDescription}</p>
        </div>
      </li>
    </Link>
  )
}
export default JobCard
