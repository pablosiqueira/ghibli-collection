function compareValues(key, order = 'asc') {
    //https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/  
    return function innerSort(a, b) {
      var varA;
      var varB;
      if(key == 'running_time' || key == 'rt_score' || key == 'release_date' || key == 'age'){
      varA = (typeof a[key] === 'string') ? parseInt(a[key],10) : a[key];
      varB = (typeof b[key] === 'string') ? parseInt(b[key],10) : b[key];
     }else{
      varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
      varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
     }
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }
export function filter(field,term,obj) {
    var my_field = field.toLowerCase().replace(/\s+/g,"_");
    var my_term = term.toLowerCase();
    var filtered = obj
    filtered = filtered.filter(value => value[my_field].toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes(my_term))
    return filtered
}
export function sort(code,arrow,obj) {
    var field_lower = code.toLowerCase();
    var my_field = field_lower.replace(/\s+/g,"_");
    var sorted = obj
    sorted = sorted.sort(compareValues(my_field,arrow));
    return sorted
}