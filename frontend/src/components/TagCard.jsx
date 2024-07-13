import React from 'react'

const TagCard = ({tag}) => {
    let color = '000000';
  if (tag === '1') {
    color = '#FF7B9C';
  } else if (tag === '2') {
    color = '#607196';
  } else {
    color = '#582B11'; 
  }

  return (
    <td className={`bg-[${color}] text-white m-2 text-center w-3`}></td>
  )
}

export default TagCard