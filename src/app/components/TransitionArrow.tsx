import { useInView } from "react-intersection-observer";

const TransitionArrow = () => {
  const { inView: itemInView, ref: itemRef } = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });

  return (
    <div
      ref={itemRef}
      style={{ opacity: "0" }}
      className={
        itemInView
          ? "info-container transition-arrow fade-down"
          : "info-container transition-arrow"
      }
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
      >
        <path d="M24 12c0-6.623-5.377-12-12-12s-12 5.377-12 12 5.377 12 12 12 12-5.377 12-12zm-1 0c0-6.071-4.929-11-11-11s-11 4.929-11 11 4.929 11 11 11 11-4.929 11-11zm-11.5 4.828l-3.763-4.608-.737.679 5 6.101 5-6.112-.753-.666-3.747 4.604v-11.826h-1v11.828z" />
      </svg>
    </div>
  );
};

export default TransitionArrow;
