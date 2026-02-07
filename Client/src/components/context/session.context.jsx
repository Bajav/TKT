import { createContext, useState} from "react";

const SessionContext = createContext({
  session: null,
  setSession: () => {},
  loading: true,
  setLoading: () => {},
});

const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <SessionContext.Provider value={{ session,setSession, loading,setLoading }}>
      {children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionProvider };
