document.querySelectorAll('.acordeon-titulo').forEach(boton => {
    boton.addEventListener('click', () => {
      const contenido = boton.nextElementSibling;
  
      if (contenido.style.display === 'block') {
        contenido.style.display = 'none';
      } else {
        document.querySelectorAll('.acordeon-contenido').forEach(c => c.style.display = 'none');
        contenido.style.display = 'block';
      }
    });
  });
  