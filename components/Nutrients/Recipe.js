import React from 'react'

export default function Recipe({data}) {
  return (
    <div>{data.recipe.label}</div>
  )
}
