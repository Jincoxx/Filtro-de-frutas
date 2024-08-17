document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const resultados = document.getElementById("resultados");

  // Array con frutas (nombre e imagen)
  const frutas = [
    { nombre: 'Manzana', imagen: 'https://static.vecteezy.com/system/resources/previews/023/271/623/original/3d-red-apple-with-green-leaf-free-png.png' },
    { nombre: 'Banana', imagen: 'https://static.vecteezy.com/system/resources/thumbnails/012/909/723/small_2x/bunch-of-bananas-png.png' },
    { nombre: 'Fresa', imagen: 'https://static.vecteezy.com/system/resources/previews/029/200/268/non_2x/strawberry-transparent-background-free-png.png' },
    { nombre: 'Naranja', imagen: 'https://static.vecteezy.com/system/resources/thumbnails/040/750/078/small_2x/ai-generated-orange-orange-isolated-refreshing-citrus-fruit-orange-slices-orange-top-view-orange-flat-lay-png.png' },
    { nombre: 'Mango', imagen: 'https://static.vecteezy.com/system/resources/previews/027/141/292/non_2x/delicious-mango-fruits-cut-out-created-with-generative-ai-png.png' },
    { nombre: 'Piña', imagen: 'https://static.vecteezy.com/system/resources/previews/022/825/571/non_2x/pineapple-fruit-pineapple-on-transparent-background-png.png' },
    { nombre: 'Uva', imagen: 'https://static.vecteezy.com/system/resources/previews/011/222/254/original/ripe-red-wet-grape-isolated-png.png' },
    { nombre: 'Papaya', imagen: 'https://static.vecteezy.com/system/resources/previews/029/332/682/original/papaya-transparent-background-png.png' },
    { nombre: 'Cereza', imagen: 'https://static.vecteezy.com/system/resources/previews/013/834/655/original/red-cherry-with-leaf-on-a-transparent-background-png.png' },
    { nombre: 'Pera', imagen: 'https://static.vecteezy.com/system/resources/previews/015/100/142/non_2x/pear-fruit-transparent-background-free-png.png' },
    { nombre: 'Melón', imagen: 'https://static.vecteezy.com/system/resources/previews/029/333/904/original/muskmelon-transparent-background-png.png' },
    { nombre: 'Sandía', imagen: 'https://static.vecteezy.com/system/resources/previews/025/067/643/non_2x/watermelon-with-ai-generated-free-png.png' },
    { nombre: 'Durazno', imagen: 'https://static.vecteezy.com/system/resources/previews/015/100/078/non_2x/peach-with-leaf-free-png.png' },
    { nombre: 'Coco', imagen: 'https://static.vecteezy.com/system/resources/previews/015/100/063/original/coconut-transparent-background-free-png.png' },
    { nombre: 'Limón', imagen: 'https://static.vecteezy.com/system/resources/previews/027/536/309/non_2x/green-lemon-green-lemon-green-lemon-transparent-background-ai-generative-free-png.png' },
]

  // Función para mostrar frutas
  function mostrarFrutas(frutas) {
    resultados.innerHTML = "";
    frutas.forEach((fruta) => {
      const card = document.createElement("div");
      card.classList.add("fruit-card");

      const img = document.createElement("img");
      img.src = fruta.imagen;
      img.alt = fruta.nombre;

      const nombre = document.createElement("h3");
      nombre.textContent = fruta.nombre;

      card.appendChild(img);
      card.appendChild(nombre);
      resultados.appendChild(card);
    });
  }

  // Mostrar todas las frutas inicialmente
  mostrarFrutas(frutas);

  // Filtrar frutas al escribir en el input
  searchInput.addEventListener("input", function () {
    const query = searchInput.value.toLowerCase();
    const frutasFiltradas = frutas.filter((fruta) =>
      fruta.nombre.toLowerCase().includes(query)
    );
    mostrarFrutas(frutasFiltradas);
  });
});
