'use client'

import * as React from 'react'
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { CalendarIcon, ChevronDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { columns, Tags } from './columns'
import { cn } from '@/lib/utils'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { DateRange } from 'react-day-picker'
import { Calendar } from '@/components/ui/calendar'

function formatLot(lot: number, length: number = 4) {
  return lot.toString().padStart(length, '0')
}

const data: Tags[] = [
  {
    id: 'm5gr84i9',
    createdAt: new Date('2025-01-01'),
    lot: formatLot(1),
    amount: 40,
    status: 'entregue',
    name: 'ORANGE PEPPER',
    purpose: 'estoque',
    barcode: '7891234567890',
  },
  {
    id: '3u1reuv4',
    createdAt: new Date('2025-01-03'),
    lot: formatLot(1),
    amount: 50,
    status: 'entregue',
    name: 'LEMON PEPPER',
    purpose: 'estoque',
    barcode: '7891234567891',
  },
  {
    id: 'derv1ws0',
    createdAt: new Date('2025-01-05'),
    lot: formatLot(2),
    amount: 72,
    status: 'processando',
    name: 'TEMPERO ANA MARIA',
    purpose: 'M D COMERCIO',
    barcode: '7891234567892',
  },
  {
    id: '5kma53ae',
    createdAt: new Date('2025-01-06'),
    lot: formatLot(1),
    amount: 30,
    status: 'entregue',
    name: 'TEMPERO EDU GUEDES',
    purpose: 'estoque',
    barcode: '7891234567893',
  },
  {
    id: 'bhqecj4p',
    createdAt: new Date('2024-12-25'),
    lot: formatLot(3),
    amount: 50,
    status: 'cancelado',
    name: 'COLORÍFICO',
    purpose: 'M D COMERCIO',
    barcode: '7891234567894',
  },
  {
    id: 'v6pa9k3m',
    createdAt: new Date('2025-01-07'),
    lot: formatLot(1),
    amount: 100,
    status: 'pendente',
    name: 'PAPRIKA DOCE',
    purpose: 'estoque',
    barcode: '7891234567895',
  },
  {
    id: '7ydm4fb8',
    createdAt: new Date('2025-01-02'),
    lot: formatLot(8),
    amount: 20,
    status: 'processando',
    name: 'SAL DE ERVAS',
    purpose: 'M D COMERCIO',
    barcode: '7891234567896',
  },
  {
    id: '2mnx5rl9',
    createdAt: new Date('2025-01-04'),
    lot: formatLot(1),
    amount: 60,
    status: 'entregue',
    name: 'ALHO EM PÓ',
    purpose: 'estoque',
    barcode: '7891234567897',
  },
  {
    id: 'qp9rt6kb',
    createdAt: new Date('2025-01-08'),
    lot: formatLot(1),
    amount: 45,
    status: 'pendente',
    name: 'CÚRCUMA',
    purpose: 'M D COMERCIO',
    barcode: '7891234567898',
  },
  {
    id: 'x4bv8j7h',
    createdAt: new Date('2025-01-09'),
    lot: formatLot(1),
    amount: 35,
    status: 'cancelado',
    name: 'CHIMICHURRI',
    purpose: 'M D COMERCIO',
    barcode: '7891234567899',
  },
]

export function AppointmentsTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    filterFns: {
      dateRange: (row, columnId, filterValue) => {
        const rowDate = new Date(row.getValue(columnId)) // Data da linha
        if (isNaN(rowDate.getTime())) return false // Ignora valores inválidos

        // Normaliza as datas para comparar apenas o dia, mês e ano
        const normalizeDate = (date: Date) =>
          new Date(date.getFullYear(), date.getMonth(), date.getDate())

        const normalizedRowDate = normalizeDate(rowDate)

        const from = filterValue?.from
          ? normalizeDate(new Date(filterValue.from))
          : null
        const to = filterValue?.to
          ? normalizeDate(new Date(filterValue.to))
          : null

        // Verifica os casos possíveis
        if (from && !to) {
          // Somente data inicial
          return normalizedRowDate.getTime() === from.getTime()
        }

        if (to && !from) {
          // Somente data final
          return normalizedRowDate.getTime() === to.getTime()
        }

        if (from && to) {
          // Ambos os valores fornecidos
          return (
            normalizedRowDate.getTime() >= from.getTime() &&
            normalizedRowDate.getTime() <= to.getTime()
          )
        }

        // Se nenhuma data for fornecida, retorna todas as linhas
        return true
      },
    },
  })

  const [date, setDate] = React.useState<DateRange | undefined>()

  React.useEffect(() => {
    table.getColumn('Criado em')?.setFilterValue(date || undefined)
  }, [date, table])
  React.useEffect(() => {
    if (date?.from || date?.to) {
      table.getColumn('Criado em')?.setFilterValue({
        from: date?.from,
        to: date?.to,
      })
    } else {
      table.getColumn('Criado em')?.setFilterValue(undefined) // Reseta o filtro
    }
  }, [date, table])

  return (
    <div className="w-full   grid place-items-center">
      <div className="w-full flex items-center py-4 gap-2   p-4">
        <div className="grid md:flex gap-2 w-full ">
          <Input
            placeholder="Filtrar por nome..."
            value={(table.getColumn('Nome')?.getFilterValue() as string) ?? ''}
            onChange={(event) =>
              table.getColumn('Nome')?.setFilterValue(event.target.value)
            }
            className="w-full"
          />
          <Input
            placeholder="Filtrar por Código..."
            value={
              (table.getColumn('Código')?.getFilterValue() as string) ?? ''
            }
            onChange={(event) =>
              table.getColumn('Código')?.setFilterValue(event.target.value)
            }
            className="w-full"
          />

          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={'outline'}
                className={cn(
                  'max-w-full min-w-fit justify-start text-left font-normal  gap-2 ',
                  !date && 'text-muted-foreground',
                )}
              >
                <CalendarIcon size={14} />
                {date?.from ? (
                  date.to ? (
                    <p className="first-letter:uppercase">
                      {format(date.from, 'LLLL dd, y', { locale: ptBR })} -{' '}
                      {format(date.to, 'LLLL dd, y', { locale: ptBR })}
                    </p>
                  ) : (
                    <p className="first-letter:uppercase">
                      {format(date.from, 'LLLL dd, y', { locale: ptBR })}
                    </p>
                  )
                ) : (
                  <span>Escolha uma data</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                locale={ptBR}
                onSelect={setDate}
                fromYear={2025}
                numberOfMonths={2}
                captionLayout="dropdown-buttons"
              />
            </PopoverContent>
          </Popover>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto w-fit">
                Visualização <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Table className=" w-full ">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead
                  key={header.id}
                  className={cn(
                    headerGroup.id === 'select' ? 'text-start' : 'text-center',
                  )}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell
                    key={cell.id}
                    className={cn(
                      cell.column.id === 'select'
                        ? 'text-start'
                        : 'text-center',
                    )}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                Sem resultados.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex items-center justify-end  py-4 px-2 md:px-4 w-full ">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} de{' '}
          {table.getFilteredRowModel().rows.length} linha(s) selecionada(s).
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Anterior
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Próxima
          </Button>
        </div>
      </div>
    </div>
  )
}
