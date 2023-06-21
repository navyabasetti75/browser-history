import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onClickDelete = () => {
    deleteHistory(id)
  }

  return (
    <>
      <li className="app-container">
        <div className="row-container">
          <div className="row">
            <p className="time">{timeAccessed}</p>
            <img className="image" src={logoUrl} alt="domain logo" />
            <p className="title">{title}</p>
            <p className="domain"> {domainUrl} </p>
          </div>
        </div>
        <button
          data-testid="button"
          type="button"
          className="button"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete"
          />
        </button>
      </li>
    </>
  )
}
export default HistoryItem
