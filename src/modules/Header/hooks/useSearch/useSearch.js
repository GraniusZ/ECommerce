import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useCallback, useEffect } from "react";
import { setVisible } from "@modules/Header/slices/searchSlice";

export const useSearch = () => {
  const visible = useSelector((state) => state.header.search.searchVisible);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(setVisible(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);
  const handleSearch = useCallback(() => {
    dispatch(setVisible(!visible));
  }, [dispatch, visible]);
  return [visible, handleSearch];
};
