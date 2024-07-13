import React from 'react'
import MLScoreCard from './MLScoreCard'
import TagCard from './TagCard'

const TableEntry = ({tag, type, applicant, ml_score}) => {
  return (
    <tr className='border-b'>
      <TagCard tag={tag} />
      <td className='font-bold'>{type}</td>
      <td>{applicant}</td>
      <MLScoreCard score={ml_score} />
    </tr>
  )
}

export default TableEntry