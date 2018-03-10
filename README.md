# sortRows
Sorts table rows by column. Includes two modes: string mode and integer mode.
Taken from here and then modified: https://www.w3schools.com/howto/howto_js_sort_table.asp.

## Usage

```
//'True' as third argument means that the function must work in integer mode. Otherwise it sorts rows as strings.
<table>
  <tr>
    <th onclick="sortRows(0, this.parentNode.parentNode, true);">ID</th>
    <th onclick="sortRows(1, this.parentNode.parentNode);">Name</th>
...
