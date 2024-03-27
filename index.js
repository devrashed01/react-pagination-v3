import cn from './cn';
import createNumberArray from './utils';

const Pagination = ({ currentPage, onPaginate, totalPage }) => {
  const PAGE_LIMIT = 4;
  const hasMorePage = totalPage > PAGE_LIMIT;
  const currentBatch = Math.floor((currentPage - 1) * (1 / PAGE_LIMIT));
  const startPage = hasMorePage ? currentBatch * PAGE_LIMIT + 1 : 1;
  const maxPossibleEndPage = Math.min(startPage + PAGE_LIMIT - 1, totalPage);
  const pagesArr = createNumberArray(startPage, maxPossibleEndPage);

  const goPageStart = () => onPaginate(1);
  const goPrevPage = () => onPaginate(Math.max(currentPage - 1, 1));
  const goLastPage = () => onPaginate(totalPage);
  const goNextPage = () => onPaginate(Math.min(currentPage + 1, totalPage));
  const hasPrevBatch = currentPage > PAGE_LIMIT && hasMorePage;

  return (
    <div className="flex justify-center mt-9 xl:mt-20">
      <div className="border border-black/20 flex items-center gap-2 xl:gap-6 p-2 xl:p-3 2xl:p-5 rounded-full">
        {hasPrevBatch && (
          <svg
          className="select-none cursor-pointer text-black/40"
          height={40}
          width={40}
          onClick={goPageStart}
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
      />
      <path
        fill-rule="evenodd"
        d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
      />
    </svg>
        )}
        <Icons.arrowLeft
        />
        <svg
          className="select-none cursor-pointer text-black/40"
          height={40}
          width={40}
          onClick={goPrevPage}
      viewBox="0 0 40 40"
      fill="none"
    >
      <path
        d="M21.237 7.35217V7.35217C20.7112 12.6106 17.0159 17.0091 11.927 18.434L9.46618 19.123M9.46618 19.123L11.4225 19.5925C16.7722 20.8764 20.7154 25.417 21.237 30.8938V30.8938M9.46618 19.123H35.4883"
        stroke="currentColor"
        strokeWidth="2.90909"
      />
    </svg>
        {pagesArr.map((num) => (
          <button
            key={num}
            onClick={() => onPaginate(num)}
            className={cn(
              'select-none w-7 h-7 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14 text-sm lg:text-base xl:text-xl 2xl:text-2xl font-semibold rounded-full text-black/40',
              {
                'bg-success text-black': currentPage === num,
              }
            )}
          >
            {num}
          </button>
        ))}
        {hasMorePage && !pagesArr.includes(totalPage) && (
          <>
            <button className="select-none text-sm lg:text-base xl:text-xl 2xl:text-2xl cursor-default font-semibold text-black/40">
              ...
            </button>
            <button
              onClick={goLastPage}
              className={cn(
                'select-none w-7 h-7 xl:w-14 xl:h-14 text-sm lg:text-base xl:text-xl 2xl:text-2xl font-semibold rounded-full text-black/40',
                {
                  'bg-success text-black': currentPage === totalPage,
                }
              )}
            >
              {totalPage}
            </button>
          </>
        )}
        <svg
          width="40"
          height="40"
          onClick={goNextPage}
          fill="currentColor"
          viewBox="0 0 16 16"
          className="select-none cursor-pointer text-primary"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
          />
        </svg>
      </div>
    </div>
  );
};

export default Pagination;
