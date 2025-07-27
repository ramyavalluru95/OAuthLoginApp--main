import { useState } from "react";

const usePaginationModel = (initialPageSize = 10) => {
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: initialPageSize,
  });

  const handlePaginationChange = (model) => {
    setPaginationModel(model);
  };

  return {
    paginationModel,
    handlePaginationChange,
  };
};

export default usePaginationModel;
