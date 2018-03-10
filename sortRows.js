function sortRows(n, table, int_type = false) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  switching = true;
  dir = "asc"; 
  while(switching){
    switching = false;
    rows = table.getElementsByTagName("tr");
    for(i = 1; i < (rows.length - 1); i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("td")[n];
      y = rows[i + 1].getElementsByTagName("td")[n];
      if(dir == "asc") {
        if(int_type){
          if(parseInt(x.innerHTML) > parseInt(y.innerHTML)){
            shouldSwitch = true;
            break;
          }
        }
        else if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      }
      else if(dir == "desc"){
        if(int_type){
          if(parseInt(x.innerHTML) < parseInt(y.innerHTML)){
            shouldSwitch = true;
            break;
          }
        }
        else if(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          shouldSwitch= true;
          break;
        }
      }
    }
    if(shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      switchcount ++; 
    }
    else{
      if(switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
