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
          <svg
            width="24"
            height="24"
            viewBox="0 0 40 40"
            fill="none"
            className="hidden dark:block"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 5V8.75M30.6067 9.39333L27.955 12.045M35 20H31.25M30.6067 30.6067L27.955 27.955M20 31.25V35M12.045 27.955L9.39333 30.6067M8.75 20H5M12.045 12.045L9.39333 9.39333M26.25 20C26.25 21.6576 25.5915 23.2473 24.4194 24.4194C23.2473 25.5915 21.6576 26.25 20 26.25C18.3424 26.25 16.7527 25.5915 15.5806 24.4194C14.4085 23.2473 13.75 21.6576 13.75 20C13.75 18.3424 14.4085 16.7527 15.5806 15.5806C16.7527 14.4085 18.3424 13.75 20 13.75C21.6576 13.75 23.2473 14.4085 24.4194 15.5806C25.5915 16.7527 26.25 18.3424 26.25 20Z"
              stroke="#007FFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 40 40"
            fill="none"
            className="block dark:hidden"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M36.2533 25.0032C34.2721 25.829 32.1464 26.2527 30 26.2499C25.6902 26.2499 21.557 24.5379 18.5095 21.4904C15.462 18.4429 13.75 14.3097 13.75 9.99992C13.75 7.78325 14.1933 5.67158 14.9967 3.74658C12.0358 4.98177 9.50661 7.0655 7.72771 9.73534C5.94881 12.4052 4.99973 15.5417 5 18.7499C5 23.0597 6.71205 27.1929 9.75952 30.2404C12.807 33.2879 16.9402 34.9999 21.25 34.9999C24.4582 35.0002 27.5947 34.0511 30.2646 32.2722C32.9344 30.4933 35.0181 27.9641 36.2533 25.0032Z"
              stroke="#007FFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
