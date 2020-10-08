import React, {useState} from 'react';
import filtersFromServer from '../../api/filters';
import './Filters.css';

export const Filters = () => {
  const [filters, setFilters] = useState(filtersFromServer);

  const handleCheck = (id, criterion) => {
    setFilters(filters.map(filter => {
      if (filter.id === id) {
        filter.criteria.map(crit => {
          if (crit.name === criterion) {
            return {...crit, checked: !crit.checked}
          }
          return crit;
        })
      }
      return filter;
    }
    ))
  }
   

 
  
  return (
    <div className="filterContainer">
       <ul>
      {filters.map(filter => (
        <li key={filter.id}>
          <h3>{filter.name}</h3>
          <ul>
            {filter.criteria.map(criterion => (
              <li key={criterion.name}>
                <input
                type="checkbox"
                id={criterion.name}
                onChange={() => handleCheck(filter.id, criterion.name)}
                />
                <label htmlFor={criterion.name}>
                  {`${criterion.name}: ${criterion.checked}`}
                </label>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
    </div>
  )};
