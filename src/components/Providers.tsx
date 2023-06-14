"use client";

import { SessionProvider } from "next-auth/react";
import ProgressBar from "next-nprogress-bar";
import type { FC, ReactNode } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <SessionProvider>
      {children}
      <ProgressBar
        height="4px"
        color="#119DA4"
        options={{ showSpinner: true }}
        shallowRouting
        appDirectory
      />
    </SessionProvider>
  );
};

export default Providers;
