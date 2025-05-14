import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "~/Context/AppContext";

function ParamsHandler({ children }) {
  const { id } = useParams(); // Lấy id từ URL params
  const { setId } = useContext(AppContext);

  useEffect(() => {
    setId(id);
  }, [id]); // Eslint-disable-line react-hooks/exhaustive-deps

  return <>{children}</>;
}

export default ParamsHandler;
