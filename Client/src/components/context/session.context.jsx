import { createContext, useState, useEffect,useContext } from "react";
import axiosInstance from "../../Controllers/axiosinstance.controller";
import getUserByUID from "../../Controllers/finduser.controller";
import { UserContext } from "./user.context";

 const SessionContext = createContext();

 const SessionProvider = ({ children }) => {

  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const {setUserData,setSigninedIn} = useContext(UserContext);

  const fetchSession = async () => {
    try {
      const res = await axiosInstance.get("/"); 
      setSession(res.data); 
      const userData = await getUserByUID(res.data.session.uid);
      console.log(userData);
      setUserData(userData);
      setSigninedIn(true);
      console.log(res.data.session.uid);
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
