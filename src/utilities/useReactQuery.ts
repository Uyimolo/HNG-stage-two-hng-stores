import { useQuery, UseQueryResult, QueryKey } from '@tanstack/react-query';

const useReactQuery = <TQueryFnData, TError = unknown>(
  queryKey: QueryKey,
  queryFunction: () => Promise<TQueryFnData>
): UseQueryResult<TQueryFnData, TError> => {
  return useQuery<TQueryFnData, TError>({ queryKey, queryFn: queryFunction });
};

export default useReactQuery;
