import {useMemo} from "react";

export const useSortedCalls = (calls, sort) =>{
    const sortedCalls = useMemo(() => {
        console.log('ОТРАБОТАЛА ФУНКЦИЯ getSortedCalls')
        if (sort) {
          return [...calls].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return calls;
      }, [sort, calls]
      )

      return sortedCalls;
}


export const useCalls = (calls, sort, query) =>{
    const sortedCalls = useSortedCalls(calls, sort)
    
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedCalls.filter(post => post.problem.toLowerCase().includes(query.toLowerCase()))
      }, [query, sortedCalls])
    

      return sortedAndSearchedPosts;
}