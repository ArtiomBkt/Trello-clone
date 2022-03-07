import React, { ErrorInfo, ReactNode } from 'react'

const changedArray = (a: unknown[] = [], b: unknown[] = []) => a.length !== b.length || a.some((item, idx) => !Object.is(item, b[idx]))

export interface FallbackProps {
  error: Error
  resetErrorBoundary: (...args: unknown[]) => void
}

declare function FallbackRender(props: FallbackProps): React.ReactElement<unknown, string | React.FC | typeof React.Component> | null

interface ErrorBoundaryPropsWithRender {
  onReseKeysChange?: (prevResetKeys: unknown[] | undefined, resetKeys: unknown[] | undefined) => void
  onReset?: (...args: unknown[]) => void
  onError?: (error: Error, info: { componentStack: string }) => void
  resetKeys?: unknown[]
  fallback?: never
  FallbackComponent?: never
  fallbackRender: typeof FallbackRender
}

interface ErrorBoundaryPropsWithFallback {
  onReseKeysChange?: (prevResetKeys: unknown[] | undefined, resetKeys: unknown[] | undefined) => void
  onReset?: (...args: unknown[]) => void
  onError?: (error: Error, info: { componentStack: string }) => void
  resetKeys?: unknown[]
  fallback: ReactNode | null
  FallbackComponent?: never
  fallbackRender?: never
}

interface ErrorBoundaryPropsWithComponent {
  onReseKeysChange?: (prevResetKeys: unknown[] | undefined, resetKeys: unknown[] | undefined) => void
  onReset?: (...args: unknown[]) => void
  onError?: (error: Error, info: { componentStack: string }) => void
  resetKeys?: unknown[]
  fallback?: never
  FallbackComponent: React.ComponentType<FallbackProps>
  fallbackRender?: never
}

type ErrorBoundaryProps = ErrorBoundaryPropsWithRender | ErrorBoundaryPropsWithFallback | ErrorBoundaryPropsWithComponent

type ErrorBoundaryState = { error: Error | null }

const initialState: ErrorBoundaryState = { error: null }

class ErrorBoundary extends React.Component<React.PropsWithRef<React.PropsWithChildren<ErrorBoundaryProps>>, ErrorBoundaryState> {
  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  state = initialState

  resetErrorBoundary = (...args: unknown[]) => {
    this.props.onReset?.(...args)
    this.reset()
  }

  reset() {
    this.setState(initialState)
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    this.props.onError?.(error, info)
  }

  componentDidUpdate(prevProps: ErrorBoundaryProps, prevState: ErrorBoundaryState) {
    const { error } = this.state
    const { resetKeys } = this.props

    if (error !== null && prevState.error !== null && changedArray(prevProps.resetKeys, resetKeys)) {
      this.props.onReseKeysChange?.(prevProps.resetKeys, resetKeys)
      this.reset()
    }
  }

  render() {
    const { error } = this.state
    const { fallbackRender, FallbackComponent, fallback } = this.props

    if (error !== null) {
      const props = {
        error,
        resetErrorBoundary: this.resetErrorBoundary
      }
      if (React.isValidElement(fallback)) {
        return fallback
      } else if (typeof fallbackRender === 'function') {
        return fallbackRender(props)
      } else if (FallbackComponent) {
        return <FallbackComponent {...props} />
      } else {
        throw new Error('must have a fallback prop')
      }
    }

    return this.props.children
  }
}

export default ErrorBoundary
