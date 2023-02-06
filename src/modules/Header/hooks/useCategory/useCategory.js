import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { toggleCategory } from "@modules/Header/slices/categorySlice";
import { useLocation } from "react-router-dom";

export const useCategory = () => {
  const dispatch = useDispatch();
  const openedCategory = useSelector(
    (state) => state.header.category.openedCategory
  );
  const changeOpenedCategory = useCallback(
    () => dispatch(toggleCategory(!openedCategory)),
    [openedCategory, dispatch]
  );
  const closeCategory = useCallback(
    () => dispatch(toggleCategory(false)),
    [dispatch]
  );
  const openCategory = useCallback(
    () => dispatch(toggleCategory(true)),
    [dispatch]
  );
  const location = useLocation();
  useEffect(() => {
    closeCategory();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  return [openedCategory, changeOpenedCategory, openCategory, closeCategory];
};
