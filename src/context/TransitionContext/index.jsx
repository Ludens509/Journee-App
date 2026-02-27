import { useContext } from "react";
import { TransitionContext } from "./TransitionContext";

export const useTransitionContext = () => {
  return  useContext(TransitionContext);
}