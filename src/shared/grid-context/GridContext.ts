import { getGridStringOperators } from "@mui/x-data-grid";

export const localeText = {
    // General
    noRowsLabel: 'Sin filas',
    noResultsOverlayLabel: 'Sin resultados',
    errorOverlayDefaultLabel: 'Ha ocurrido un error.',

    // Density selector toolbar button text
    toolbarDensity: 'Densidad',
    toolbarDensityLabel: 'Densidad',
    toolbarDensityCompact: 'Compacta',
    toolbarDensityStandard: 'Estándar',
    toolbarDensityComfortable: 'Cómoda',

    // Columns selector toolbar button text
    toolbarColumns: 'Columnas',
    toolbarColumnsLabel: 'Seleccionar columnas',

    // Filters toolbar button text
    toolbarFilters: 'Filtros',
    toolbarFiltersLabel: 'Mostrar filtros',
    toolbarFiltersTooltipHide: 'Ocultar filtros',
    toolbarFiltersTooltipShow: 'Mostrar filtros',
    toolbarFiltersTooltipActive: (count: number) =>
        count !== 1 ? `${count} filtros activos` : `${count} filtro activo`,

    // Export selector toolbar button text
    toolbarExport: 'Exportar',
    toolbarExportLabel: 'Exportar',
    toolbarExportCSV: 'Descargar como CSV',
    toolbarExportPrint: 'Imprimir',

    // Columns panel text
    columnsPanelTextFieldLabel: 'Buscar columna',
    columnsPanelTextFieldPlaceholder: 'Título de columna',
    columnsPanelDragIconLabel: 'Reordenar columna',
    columnsPanelShowAllButton: 'Mostrar todas',
    columnsPanelHideAllButton: 'Ocultar todas',

    // Filter panel text
    filterPanelAddFilter: 'Agregar filtro',
    filterPanelDeleteIconLabel: 'Eliminar',
    filterPanelLogicOperator: 'Operador lógico',
    filterPanelOperator: 'Operador',
    filterPanelOperatorAnd: 'Y',
    filterPanelOperatorOr: 'O',
    filterPanelColumns: 'Columnas',
    filterPanelInputLabel: 'Valor',
    filterPanelInputPlaceholder: 'Valor del filtro',

    // Filter operators text
    filterOperatorContains: 'contiene',
    filterOperatorDoesNotContain: 'no contiene',
    filterOperatorEquals: 'es igual a',
    filterOperatorStartsWith: 'comienza con',
    filterOperatorEndsWith: 'termina con',
    filterOperatorIs: 'es',
    filterOperatorNot: 'no es',
    filterOperatorAfter: 'es posterior a',
    filterOperatorOnOrAfter: 'es en o después de',
    filterOperatorBefore: 'es anterior a',
    filterOperatorOnOrBefore: 'es en o antes de',
    filterOperatorIsEmpty: 'está vacío',
    filterOperatorIsNotEmpty: 'no está vacío',
    filterOperatorIsAnyOf: 'es cualquiera de',
    filterOperatorDoesNotEqual: 'distinto de',

    // Filter values text
    filterValueAny: 'cualquiera',
    filterValueTrue: 'verdadero',
    filterValueFalse: 'falso',

    // Column menu text
    columnMenuLabel: 'Menú',
    columnMenuShowColumns: 'Mostrar columnas',
    columnMenuManageColumns: 'Administrar columnas',
    columnMenuFilter: 'Filtrar',
    columnMenuHideColumn: 'Ocultar',
    columnMenuUnsort: 'Quitar orden',
    columnMenuSortAsc: 'Orden ascendente',
    columnMenuSortDesc: 'Orden descendente',

    // Column header text
    columnHeaderFiltersTooltipActive: (count: number) =>
        count !== 1 ? `${count} filtros activos` : `${count} filtro activo`,
    columnHeaderFiltersLabel: 'Mostrar filtros',
    columnHeaderSortIconLabel: 'Ordenar',

    // Rows selected footer text
    footerRowSelected: (count: number) =>
        count !== 1 ? `${count.toLocaleString()} filas seleccionadas` : `${count.toLocaleString()} fila seleccionada`,

    // Total row amount footer text
    footerTotalRows: 'Total de filas:',

    // Pagination footer text
    footerPaginationRowsPerPage: 'Filas por página:',
    footerPaginationOf: 'de',

    // MuiTablePagination
    MuiTablePagination: {},

    // Checkbox selection text
    checkboxSelectionHeaderName: 'Selección por casilla',

    // Boolean cell text
    booleanCellTrueLabel: 'sí',
    booleanCellFalseLabel: 'no',

    // Actions cell more text
    actionsCellMore: 'más',

    // Aggregation
    aggregationMenuItemHeader: 'Agrupaciones',
    aggregationFunctionLabelSum: 'suma',
    aggregationFunctionLabelAvg: 'promedio',
    aggregationFunctionLabelMin: 'mínimo',
    aggregationFunctionLabelMax: 'máximo',
    aggregationFunctionLabelSize: 'tamaño',
};


export const stringOperators = getGridStringOperators().filter(
    (operator) =>
      operator.value === 'equals' || operator.value === 'contains'
  );