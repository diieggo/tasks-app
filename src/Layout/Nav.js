import { IconList, IconSquarePlus, IconMoon, IconSun } from "../assets/icons";

function Nav({ handleIsOpenModal, handleChangeTheme }) {
  return (
    <>
      <nav className="nav-mobile fixed bottom-0 z-20 flex w-full items-baseline justify-evenly border-t-2 border-palewhite bg-white p-4 transition-colors dark:border-gray-800 dark:bg-gray-900 md:hidden">
        <li className="flex w-[60px] list-none justify-center">
          <button className="flex flex-col items-center">
            <IconList />
            <p className="mt-1 text-primary">Todo</p>
          </button>
        </li>
        <li className="flex w-[60px] list-none justify-center">
          <button
            className="flex flex-col items-center"
            onClick={handleIsOpenModal}
          >
            <IconSquarePlus stroke="#C6CFDC" />
            <p className="mt-1 text-mutedazure">Create</p>
          </button>
        </li>
        <li className="flex w-[60px] list-none justify-center">
          <button
            className="flex flex-col items-center"
            onClick={handleChangeTheme}
          >
            <IconMoon stroke="#C6CFDC" />
            <IconSun stroke="#C6CFDC" />
            <p className="mt-1 text-mutedazure">Theme</p>
          </button>
        </li>
      </nav>
    </>
  );
}

export { Nav };
