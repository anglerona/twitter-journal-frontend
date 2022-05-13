import React from 'react'
import Styles from './Refresh.module.css'
import Link from 'next/link'

export default function Refresh() {
    const refresh=()=>{
        window.location.reload();
    }
    return (
        <a href="/entry">
            <button className={Styles.refresh}>New Topic</button>
        </a>
  )
}

