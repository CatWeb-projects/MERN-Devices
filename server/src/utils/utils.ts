export const getPageNumber = (page?: string | number) =>
  page && !isNaN(Number(page)) ? Number(page) : 1;

export const getTotalPages = (itemNumber: number, limit?: number) => Math.ceil(itemNumber / limit);

export const getNextPage = (page: number, totalItems?: number) =>
  totalItems && getTotalPages(totalItems) <= page ? null : page + 1;

export const getPrevPage = (page: number) => (page > 1 ? page - 1 : null);

export const paginate = (array, page_size, page_number) => {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
};
