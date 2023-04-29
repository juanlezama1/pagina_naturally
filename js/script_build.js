// Seleccionamos todos los checkboxes con la clase "ingrediente_individual"
const checkboxesIngrediente = document.querySelectorAll('.ingrediente_individual input[type="checkbox"]');

// Agregamos un event listener a cada checkbox
checkboxesIngrediente.forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    // Seleccionamos todos los checkboxes chequeados
    const checkboxesChecked = document.querySelectorAll('.ingrediente_individual input[type="checkbox"]:checked');
    
    // Si hay más de 4 checkboxes chequeados, deshabilitamos los no seleccionados
    if (checkboxesChecked.length >= 4) {
      checkboxesIngrediente.forEach(checkbox => {
        if (!checkbox.checked) {
          checkbox.disabled = true;
        }
      });
    } else {
      // Si hay menos de 4 checkboxes chequeados, habilitamos todos los checkboxes
      checkboxesIngrediente.forEach(checkbox => {
        checkbox.disabled = false;
      });
    }
  });
});

// Seleccionamos todos los checkboxes con la clase "build_aderezo"
const checkboxesAderezo = document.querySelectorAll('.build_aderezo input[type="checkbox"]');

// Agregamos un event listener a cada checkbox
checkboxesAderezo.forEach(checkbox => {
  checkbox.addEventListener('click', () => {
    // Seleccionamos todos los checkboxes chequeados
    const checkboxesChecked = document.querySelectorAll('.build_aderezo input[type="checkbox"]:checked');
    
    // Si hay más de 2 checkboxes chequeados, deshabilitamos los no seleccionados
    if (checkboxesChecked.length >= 2) {
      checkboxesAderezo.forEach(checkbox => {
        if (!checkbox.checked) {
          checkbox.disabled = true;
        }
      });
    } else {
      // Si hay menos de 2 checkboxes chequeados, habilitamos todos los checkboxes
      checkboxesAderezo.forEach(checkbox => {
        checkbox.disabled = false;
      });
    }
  });
});