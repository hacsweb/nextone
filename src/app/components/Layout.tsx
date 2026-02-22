import { Outlet, useLocation } from "react-router";
import { Header } from "./Header";
import { AnimatePresence, motion } from "motion/react";

export function Layout() {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
        }}
      >
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </>
  );
}