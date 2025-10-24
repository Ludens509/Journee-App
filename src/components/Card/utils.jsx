// Heart icon components (replacing react-icons)
export const HeartOutline = ({ size = 24, styles = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className={`${styles} lucide lucide-heart-minus-icon lucide-heart-minus`}>
    <path d="m14.876 18.99-1.368 1.323a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.244 1.572" />
    <path d="M15 15h6" />
  </svg>
);

export const HeartFilled = ({ size = 24, styles = "" }) => (
  
   <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" stroke-linecap="round" strokeLinejoin="round" className={`${styles} lucide lucide-heart-plus-icon lucide-heart-plus `}
  ><path d="m14.479 19.374-.971.939a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5a5.2 5.2 0 0 1-.219 1.49"/><path d="M15 15h6"/><path d="M18 12v6"/></svg>
);

