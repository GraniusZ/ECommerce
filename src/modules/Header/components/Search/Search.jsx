import { useForm } from "react-hook-form";
import { ReactComponent as SearchIcon } from "@assets/icons/SearchIcon.svg";
import styles from "./Search.module.scss";
import classNames from "classnames";
import { ReactComponent as BackIcon } from "@assets/icons/BackIcon.svg";
import { HeaderButton } from "@ui/HeaderButton/HeaderButton";
import { useSearch } from "@modules/Header/hooks/useSearch/useSearch";

const Search = () => {
  const { register, handleSubmit, resetField, setFocus } = useForm({
    mode: "onBlur",
    defaultValues: "",
  });
  const [visible, handleClick] = useSearch();
  const onSubmit = (data) => {
    resetField("Text");
    setFocus("Text");
  };
  const openSearch = () => {
    handleClick();
    setFocus("Text");
  };
  const closeSearch = () => {
    handleClick();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classNames(styles.form, visible && styles.visible)}
        data-testid={"search-form"}
      >
        <input
          placeholder="Search here..."
          {...register("Text")}
          className={styles.input}
        />
        <button
          type="button"
          className={styles.closeSearch}
          onClick={closeSearch}
          data-testid={"close-search"}
        >
          <BackIcon />
        </button>
        <button
          type="submit"
          className={styles.submit}
          data-testid={"search-submit"}
        >
          <SearchIcon />
        </button>
      </form>
      <HeaderButton
        type="submit"
        handleClick={openSearch}
        className={styles.openSearch}
        id={"open-search"}
      >
        <SearchIcon />
      </HeaderButton>
    </>
  );
};

export default Search;
