import React, {useState} from "react";
import './Table.css';
import candidates from '../../api/users'

export const Table = () => {
  const [perPage, setPerPage] = useState(10);
  const [clients, setClients] = useState(candidates.slice(perPage));
  
  
  return (
      <div className="container">
      <div className="tableTop">
        <h3 className="heading">List of candidates</h3>
        <button type="button" className="inviteBtn">Invite for interview</button>
      </div>

        <table
            className="table"
        >
          <thead>
          <tr className="table__header">
            <th>
              <input
                  type="checkbox"
                  className="table__checkbox"
              />
            </th>
            <th>
              Name
            </th>
            <th>
              Country
            </th>
            <th>
              Age
            </th>
            <th>
              Education
            </th>
            <th>
              Experience
            </th>
            <th>
              Duration
            </th>
            <th>
              Languages
            </th>
            <th>
              Region
            </th>
            <th>
              Start
            </th>
            <th>
              Status
            </th>
          </tr>
          </thead>
          <tbody>
          {clients.map(client => (
              <tr
                  className="table__row"
                  key={client.id}
              >
                <td>
                  <input
                      type="checkbox"
                      className="table__checkbox"
                      checked={client.selected}
                  />
                </td>
                <td>
                  <div className="table__info-container">
                    <p className="table__main-info">
                      {client.name}
                    </p>
                    <p className="table__secondary-info">
                      {client.email}
                    </p>
                  </div>
                  {client.detailed && (
                      <button
                          className="table__detailed-info"
                          type="button"
                      />
                  )}
                </td>
                <td>
                  <p className="table__main-info">
                    {client.isEU
                        ? `EU Citizen`
                        : `Non EU Citizen`
                    }
                  </p>
                  <p className="table__secondary-info">
                    {client.country}
                  </p>
                </td>
                <td>
                  {client.age}
                </td>
                <td>
                  {client.education}
                </td>
                <td>
                  {client.experience}
                </td>
                <td>
                  {`${client.duration} years`}
                </td>
                <td>
                  <p>
                    {client.languages.join(', ')}
                  </p>
                </td>
                <td>
                  {client.region}
                </td>
                <td>
                  {`In ${client.start} month`}
                </td>
                <td>
                  {client.confirmed
                      ? 'Confirmed'
                      : 'Not confirmed'
                  }
                </td>
              </tr>
          ))
          }
          </tbody>
          <tfoot >
            <tr className="tfoot">
              <td colspan="8"></td>
              <td>{`Rows per page: ${perPage}`}</td>
              <td>{`1-10 of ${candidates.length}`}</td>
              <td><button className="prevPageBtn">&lt;</button></td>
              <td><button className="nextPageBtn">&gt;</button></td>
            </tr>
          </tfoot>
        </table>
      </div>
    
  )
}
