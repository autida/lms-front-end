import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from '../hooks/useAuth';

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshToken();
  const { auth } = useAuth();

  return {}
}