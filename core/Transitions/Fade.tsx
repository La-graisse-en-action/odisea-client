import { MotiView } from "moti";

export default function Fade({ children }: { children: any }) {
  return (
    <MotiView
      from={{
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
        type: "timing",
      }}
    >
      {children}
    </MotiView>
  );
}
