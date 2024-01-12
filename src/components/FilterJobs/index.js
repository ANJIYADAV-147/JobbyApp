import {BsSearch} from 'react-icons/bs'
import './index.css'
import ProfileDetails from '../ProfileDetails'

const FilterJobs = props => {
  const {
    employmentTypesList,
    salaryRangesList,
    onChangeEmploymentType,
    onChangeSalary,
    searchInput,
    onChangeSearchInput,
    getAllJobs,
    findSearchInput,
  } = props

  const onFindSearchInput = event => {
    findSearchInput(event)
  }

  const ChangeSearchInput = event => {
    onChangeSearchInput(event)
  }

  const renderSearchInputView = () => (
    <div className="search-input-small-container">
      <input
        type="search"
        className="search-input-small"
        placeholder="Search"
        value={searchInput}
        onChange={ChangeSearchInput}
        onKeyDown={onFindSearchInput}
      />
      <button
        type="button"
        className="search-button-container"
        aria-label="jobs"
        data-testid="searchButton"
        onClick={getAllJobs}
      >
        <BsSearch className="search-icon" />
      </button>
    </div>
  )

  const renderEmployeeType = () => (
    <div className="employee-type-container">
      <h1 className="heading">Type Of Employment</h1>
      <ul className="list-container" type="none">
        {employmentTypesList.map(eachEmployee => {
          const onSelectEmployeeType = event => {
            onChangeEmploymentType(event)
          }
          return (
            <li
              className="employee-item"
              key={eachEmployee.employmentTypeId}
              onChange={onSelectEmployeeType}
            >
              <input
                type="checkbox"
                className="input-check"
                id={eachEmployee.employmentTypeId}
                value={eachEmployee.employmentTypeId}
              />
              <label
                htmlFor={eachEmployee.employmentTypeId}
                className="check-label"
              >
                {eachEmployee.label}
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )

  const renderSalaryRange = () => (
    <div className="salary-range-container">
      <h1 className="heading">Salary Range</h1>
      <ul className="salary-list-container" type="none">
        {salaryRangesList.map(eachSalary => {
          const ChangeSalary = () => {
            onChangeSalary(eachSalary.salaryRangeId)
          }
          return (
            <li
              className="salary-item"
              key={eachSalary.salaryRangeId}
              onClick={ChangeSalary}
            >
              <input
                type="radio"
                id={eachSalary.salaryRangeId}
                name="salary"
                className="check-input"
              />
              <label htmlFor={eachSalary.salaryRangeId} className="check-label">
                {eachSalary.label}
              </label>
            </li>
          )
        })}
      </ul>
    </div>
  )

  return (
    <div className="filter-jobs-container">
      {renderSearchInputView()}
      <ProfileDetails />
      <hr className="line" />
      {renderEmployeeType()}
      <hr className="line" />
      {renderSalaryRange()}
    </div>
  )
}
export default FilterJobs
