function Nav({ handleIsOpenModal }) {
  return (
    <>
      <nav className="nav-mobile w-full p-4 fixed z-20 bottom-0 flex justify-evenly items-baseline bg-white border-t border-palewhite md:hidden">
        <li className="list-none w-[60px] flex justify-center">
          <button className="flex flex-col items-center">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 11.5H8C8.26522 11.5 8.51957 11.3946 8.70711 11.2071C8.89464 11.0196 9 10.7652 9 10.5V4.5C9 4.23478 8.89464 3.98043 8.70711 3.79289C8.51957 3.60536 8.26522 3.5 8 3.5H2C1.73478 3.5 1.48043 3.60536 1.29289 3.79289C1.10536 3.98043 1 4.23478 1 4.5V10.5C1 10.7652 1.10536 11.0196 1.29289 11.2071C1.48043 11.3946 1.73478 11.5 2 11.5ZM3 5.5H7V9.5H3V5.5ZM8 21.5C8.26522 21.5 8.51957 21.3946 8.70711 21.2071C8.89464 21.0196 9 20.7652 9 20.5V14.5C9 14.2348 8.89464 13.9804 8.70711 13.7929C8.51957 13.6054 8.26522 13.5 8 13.5H2C1.73478 13.5 1.48043 13.6054 1.29289 13.7929C1.10536 13.9804 1 14.2348 1 14.5V20.5C1 20.7652 1.10536 21.0196 1.29289 21.2071C1.48043 21.3946 1.73478 21.5 2 21.5H8ZM3 15.5H7V19.5H3V15.5ZM23 7.5C23 7.76522 22.8946 8.01957 22.7071 8.20711C22.5196 8.39464 22.2652 8.5 22 8.5H12C11.7348 8.5 11.4804 8.39464 11.2929 8.20711C11.1054 8.01957 11 7.76522 11 7.5C11 7.23478 11.1054 6.98043 11.2929 6.79289C11.4804 6.60536 11.7348 6.5 12 6.5H22C22.2652 6.5 22.5196 6.60536 22.7071 6.79289C22.8946 6.98043 23 7.23478 23 7.5ZM23 17.5C23 17.7652 22.8946 18.0196 22.7071 18.2071C22.5196 18.3946 22.2652 18.5 22 18.5H12C11.7348 18.5 11.4804 18.3946 11.2929 18.2071C11.1054 18.0196 11 17.7652 11 17.5C11 17.2348 11.1054 16.9804 11.2929 16.7929C11.4804 16.6054 11.7348 16.5 12 16.5H22C22.2652 16.5 22.5196 16.6054 22.7071 16.7929C22.8946 16.9804 23 17.2348 23 17.5Z"
                fill="#007FFF"
              />
            </svg>
            <p className="text-primary mt-1">Todo</p>
          </button>
        </li>
        <li className="list-none w-[60px] flex justify-center">
          <button
            className="flex flex-col items-center"
            onClick={handleIsOpenModal}
          >
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.37714 1.5H17.6229C19.3416 1.5 20.66 2.09961 21.5538 3.05962C22.4551 4.02771 23 5.44472 23 7.20219V17.7978C23 19.5553 22.4551 20.9723 21.5538 21.9404C20.66 22.9004 19.3416 23.5 17.6229 23.5H6.37714C4.65841 23.5 3.33997 22.9004 2.44619 21.9404C1.54489 20.9723 1 19.5553 1 17.7978V7.20219C1 5.44595 1.54702 4.02877 2.45004 3.06009C3.34579 2.09921 4.66476 1.5 6.37714 1.5Z"
                stroke="#C6CFDC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0001 8.09277V16.8844"
                stroke="#C6CFDC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.3999 12.4886H7.59985"
                stroke="#C6CFDC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="text-mutedazure mt-1">Create</p>
          </button>
        </li>
        <li className="list-none w-[60px] flex justify-center">
          <button className="flex flex-col items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 40 40"
              fill="none"
              className="block dark:hidden"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 5V8.75M30.6067 9.39333L27.955 12.045M35 20H31.25M30.6067 30.6067L27.955 27.955M20 31.25V35M12.045 27.955L9.39333 30.6067M8.75 20H5M12.045 12.045L9.39333 9.39333M26.25 20C26.25 21.6576 25.5915 23.2473 24.4194 24.4194C23.2473 25.5915 21.6576 26.25 20 26.25C18.3424 26.25 16.7527 25.5915 15.5806 24.4194C14.4085 23.2473 13.75 21.6576 13.75 20C13.75 18.3424 14.4085 16.7527 15.5806 15.5806C16.7527 14.4085 18.3424 13.75 20 13.75C21.6576 13.75 23.2473 14.4085 24.4194 15.5806C25.5915 16.7527 26.25 18.3424 26.25 20Z"
                stroke="#C6CFDC"
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
              className="hidden dark:block"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M36.2533 25.0032C34.2721 25.829 32.1464 26.2527 30 26.2499C25.6902 26.2499 21.557 24.5379 18.5095 21.4904C15.462 18.4429 13.75 14.3097 13.75 9.99992C13.75 7.78325 14.1933 5.67158 14.9967 3.74658C12.0358 4.98177 9.50661 7.0655 7.72771 9.73534C5.94881 12.4052 4.99973 15.5417 5 18.7499C5 23.0597 6.71205 27.1929 9.75952 30.2404C12.807 33.2879 16.9402 34.9999 21.25 34.9999C24.4582 35.0002 27.5947 34.0511 30.2646 32.2722C32.9344 30.4933 35.0181 27.9641 36.2533 25.0032Z"
                stroke="#C6CFDC"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <p className="text-mutedazure mt-1">Theme</p>
          </button>
        </li>
      </nav>
    </>
  );
}

export { Nav };
