import { FilterFn } from '@tanstack/react-table'

declare module '@tanstack/react-table' {
  interface FilterFns {
    dateRange: FilterFn<unknown>
  }

  interface FilterMeta {
    itemRank?: number
  }
}
