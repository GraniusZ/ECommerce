import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "@modules/Header/slices/drawerSlice";
import { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useDrawer = () => {
  const dispatch = useDispatch();
  const openedDrawer = useSelector((state) => state.header.drawer.openedDrawer);
  const changeOpenedMenu = useCallback(
    () => dispatch(toggleDrawer(!openedDrawer)),
    [openedDrawer, dispatch]
  );
  const closeOpenedMenu = useCallback(
    () => dispatch(toggleDrawer(false)),
    [dispatch]
  );
  const location = useLocation();
  useEffect(() => {
    closeOpenedMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  return [changeOpenedMenu, openedDrawer];
};
