import { createContext, useState, useEffect } from "react";
import axiosInstance from "../../Controllers/axiosinstance.controller";

 const SessionContext = createContext();

 const SessionProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchSession = async () => {
    try {
      const res = await axiosInstance.get("/"); 
      setSession(res.data); 
    } catch (err) {
      setSession(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSession();
  }, []);

  return (
    <SessionContext.Provider value={{ session, loading }}>
      {children}
    </SessionContext.Provider>
  );
};

export {SessionContext,SessionProvider};
