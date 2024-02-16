import { IconSearch } from "../imgs/icons";

function TodoSearch({ searchValue, setSearchValue }) {
  return (
    <div className="flex w-full items-center rounded-xl bg-palewhite px-4 transition-colors dark:bg-gray-800">
      <IconSearch />
      <input
        type="search"
        placeholder="Search..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="form-input w-full border-0 bg-transparent text-lg text-secondary placeholder-slateblue transition-colors focus:ring-0 dark:text-white"
      />
    </div>
  );
}

export { TodoSearch };
