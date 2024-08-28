import React from 'react'
import Filters from '@/modules/filters/Filters'
import Exercise from '@/modules/filters/exercises/Exersices'
import styles from './wrapper.module.scss'
function Exercises() {
  return (
    <div className={styles.wrapper}>
      <Filters />
      <Exercise />
    </div>
  )
}

export default Exercises
