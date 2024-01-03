import React from "react";
import { createContext } from "react";
import { useRDFDataSources } from "../state";

type OxigraphContextProps = {
  bulkLoading: boolean | undefined;
  bulkLoaded: boolean | undefined;
};

export const OxigraphContext = createContext<OxigraphContextProps>({
  bulkLoading: undefined,
  bulkLoaded: undefined,
});

export const useOxigraphContext = () => React.useContext(OxigraphContext);

export const OxigraphContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { bulkLoading, bulkLoaded } = useRDFDataSources(
    "/exhibition-corpus-riot.ttl",
  );

  return (
    <OxigraphContext.Provider value={{ bulkLoaded, bulkLoading }}>
      {children}
    </OxigraphContext.Provider>
  );
};
