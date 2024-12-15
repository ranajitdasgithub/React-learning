import { useEffect, useState } from "react";

//Custom hooks

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    const response = await fetch(
      `https://api.example.com/restaurant/${resId}/menu`
    );
    const menus = await response.json();
    setResInfo(menus.data);
  }

  return resInfo;
};

export default useRestaurantMenu;
