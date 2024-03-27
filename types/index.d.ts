declare module 'react-pagination-v3' {
  type PaginationProps = {
    currentPage: number;
    onPaginate: (pageNumber: number) => void;
    totalPage: number;
    batchSize?: number;
    enableFirstPage?: boolean;
  };

  const Pagination: React.FC<PaginationProps>;
  
  export default Pagination;
}
