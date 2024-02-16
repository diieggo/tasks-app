import { IconMoon, IconSun } from "../imgs/icons";

function Header({ handleChangeTheme }) {
  return (
    <header className="flex w-full items-center justify-between px-6">
      <h1 className="text-3xl font-bold text-secondary transition-colors dark:text-white">
        Tasks
      </h1>
      <div className="flex items-center gap-8">
        <button
          className="hidden rounded-lg border-2 border-palewhite p-2 transition-colors dark:border-gray-800 md:block"
          onClick={handleChangeTheme}
        >
          <IconMoon stroke="#007FFF" />
            <IconSun stroke="#007FFF" />
        </button>
        <div className="flex items-center gap-3">
          <p className="text-lg font-medium text-secondary transition-colors dark:text-white">
            Diego
          </p>
          <span className="rounded-full bg-primary bg-opacity-25 px-3 py-2 text-xl">
            🚀
          </span>
        </div>
      </div>
    </header>
  );
}

export { Header };
