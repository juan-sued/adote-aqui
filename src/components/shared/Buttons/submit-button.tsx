'use client'

import { Button } from '@/components/ui/button'
import { Loader } from 'lucide-react'
import { type ComponentProps } from 'react'
import { useFormStatus } from 'react-dom'

type Props = ComponentProps<typeof Button> & {
  pendingText?: string
}

export function SubmitButton({
  children,
  pendingText = 'Enviando',
  ...props
}: Props) {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" aria-disabled={pending} disabled={pending} {...props}>
      {pending ? (
        <>
          {pendingText}
          <Loader className="ml-2  animate-spin" />
        </>
      ) : (
        children
      )}
    </Button>
  )
}
