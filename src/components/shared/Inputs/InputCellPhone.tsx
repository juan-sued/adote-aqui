'use client'

import { Input } from '@/components/ui/input'
import { useState, useCallback } from 'react'

export default function InputDemo() {
  const [phoneNumber, setPhoneNumber] = useState('')

  const formatPhoneNumber = useCallback((value: string) => {
    const numbers = value.replace(/\D/g, '')
    let formatted = ''

    if (numbers.length <= 2) {
      formatted = numbers
    } else if (numbers.length <= 7) {
      formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    } else if (numbers.length <= 11) {
      formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
    } else {
      formatted = `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
    }

    return formatted
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value
    const formatted = formatPhoneNumber(input)
    setPhoneNumber(formatted)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && phoneNumber.endsWith('-')) {
      e.preventDefault()
      setPhoneNumber(phoneNumber.slice(0, -1))
    }
  }

  return (
    <div className="w-full max-w-sm space-y-2">
      <Input
        id="phone"
        type="tel"
        placeholder="(XX) XXXXX-XXXX"
        value={phoneNumber}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="w-full"
      />
    </div>
  )
}
