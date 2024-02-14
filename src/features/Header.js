function Header() {
  return (
    <header className="w-full flex justify-between items-center px-6">
      <h1 className="text-3xl font-bold text-secondary">Tasks</h1>
      <div className="flex items-center gap-8">
        <button className="hidden p-2 border-2 border-palewhite rounded-lg md:block">
          <svg
            width="24"
            height="24"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 5V8.75M30.6067 9.39333L27.955 12.045M35 20H31.25M30.6067 30.6067L27.955 27.955M20 31.25V35M12.045 27.955L9.39333 30.6067M8.75 20H5M12.045 12.045L9.39333 9.39333M26.25 20C26.25 21.6576 25.5915 23.2473 24.4194 24.4194C23.2473 25.5915 21.6576 26.25 20 26.25C18.3424 26.25 16.7527 25.5915 15.5806 24.4194C14.4085 23.2473 13.75 21.6576 13.75 20C13.75 18.3424 14.4085 16.7527 15.5806 15.5806C16.7527 14.4085 18.3424 13.75 20 13.75C21.6576 13.75 23.2473 14.4085 24.4194 15.5806C25.5915 16.7527 26.25 18.3424 26.25 20Z"
              stroke="#007FFF"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div className="flex gap-3 items-center">
          <p className="text-lg font-medium text-secondary">Diego</p>
          <span className="bg-primary bg-opacity-25 py-2 px-3 rounded-full text-xl">
            🚀
          </span>
        </div>
      </div>
    </header>
  );
}

export { Header };
