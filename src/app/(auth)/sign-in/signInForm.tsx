// signInForm.tsx
'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { signInAction, signInWithGoogle, signInWithApple } from './actions'
import { Label } from '@/components/ui/label'
import { useActionState, useEffect } from 'react'
import { toast } from 'sonner'
import { AlertCircle, Loader } from 'lucide-react'
import { useFormStatus } from 'react-dom'

export default function SignInForm() {
  const [state, formAction] = useActionState(signInAction, {
    success: false,
    message: '',
  })

  useEffect(() => {
    if (state.message) {
      if (state.success) {
        toast(
          <>
            <div className="flex items-start gap-2">
              <AlertCircle className="w-8 h-8" />
              Verifique sua caixa de entrada e clique no link para fazer login.
            </div>
          </>,
        )
      } else {
        toast(
          <div className="flex items-center gap-2">
            <AlertCircle className="w-8 h-8" />
            {state.message ||
              'Ocorreu um erro ao enviar o link de login. Por favor, entre em contato com o suporte.'}
          </div>,
        )
      }
    }
  }, [state.success, state.message])

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle()
    } catch (error) {
      toast.error('Erro ao tentar login com Google')
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error('Ocorreu um erro desconhecido.')
      }
    }
  }

  const handleAppleSignIn = async () => {
    try {
      await signInWithApple()
    } catch (error) {
      toast.error('Erro ao tentar login com Apple')
      if (error instanceof Error) {
        toast.error(error.message)
      } else {
        toast.error('Ocorreu um erro desconhecido.')
      }
    }
  }

  return (
    <>
      <form className="p-6 md:p-8" action={formAction}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center text-center gap-2">
            <h1 className="text-2xl font-bold">Bem-vindo de volta</h1>
            <p className="text-xs md:text-md text-balance text-muted-foreground">
              Realize o login para acessar sua conta
            </p>
          </div>

          <div className="grid gap-2">
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={handleGoogleSignIn}
            >
              Entrar com Google
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={handleAppleSignIn}
            >
              Entrar com Apple
            </Button>
          </div>

          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-card px-2 text-muted-foreground">
              Ou
            </span>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="usuario@gmail.com"
              required
            />
          </div>

          <SubmitButton />
        </div>
      </form>
    </>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          Enviando
          <Loader className="ml-2 animate-spin" />
        </>
      ) : (
        'Enviar'
      )}
    </Button>
  )
}
