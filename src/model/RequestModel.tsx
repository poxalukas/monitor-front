export interface RequestModel<T = object> {
    pageSize: number
    pageNumber: number
    sortOrder?: string
    sortField?: string
    filter: Partial<T>
  }

  export type ResponseModel<T = []> = {
    content: T
    pageable: QueryPageable
    last: boolean
    totalPages: number
    totalElements: number
    sort: QuerySort
    size: number
    number: number
    numberOfElements: number
    first: boolean
    empty: boolean
  }