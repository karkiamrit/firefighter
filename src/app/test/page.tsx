'use client'
import React from 'react'
import { useJsonStore } from '@/store/useJson.store'
type Props = {}

function Test({}: Props) {
    const { json } = useJsonStore()
  return (
    <div>{JSON.stringify(json, null, 2)}</div>
  )
}

export default Test