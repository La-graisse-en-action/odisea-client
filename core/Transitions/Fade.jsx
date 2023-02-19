import { MotiView } from 'moti'

export default function Fade({ children }) {
  return (
    <MotiView from={{
      opacity: 0,
      scale: 0.9,
    }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
      }}
      transition={{
        duration: 300,
      }}>
      {children}
    </MotiView>
  )
}
