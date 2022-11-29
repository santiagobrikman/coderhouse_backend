class TicketManager {
    #precioBaseDeGanancia = 1.15;
  
    constructor() {
      this.eventos = []; // Creacion del array
    }
  
    getEventos() {
      return this.eventos;
    }
  
    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
      let evento = { // Que incluye el array?
        nombre,
        lugar,
        precio: precio * this.#precioBaseDeGanancia,
        capacidad: capacidad || 50,
        fecha, 
        participantes: [],
      };
  
      if (this.eventos.length === 0) { // Si el lenght del array es igual a cero
        evento["id"] = 1; // id es igual a 1
      } else { // Si el lenght no es igual a cero
        evento["id"] = this.eventos[this.eventos.length - 1]["id"] + 1; // id es igual a lenght
      }
  
      this.eventos.push(evento); // Se agrega el evento al array
    }
  
    agregarUsuario(idEvento, idUsuario) { // Agregar usuarios
      let response;
      for (let i = 0; i < this.eventos.length; i++) { // Para todos los eventos del array
        if (this.eventos[i].id === idEvento) { // Si el evento nuevo tiene mismo id que algun evento del array
          if (this.eventos[i].participantes.includes(idUsuario)) { // Si el evento incluye al usuario nuevo
            response = "El usuario ya se encuentra en la lista"; // No sera agregado
            break;
          }
  
          this.eventos[i].participantes.push(idUsuario); // Else: si será agregado
          response = "Usuario agregado";
          break;
        }
      }
      return response;
    }
    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
      let evento = this.eventos.filter((ev) => ev.id === idEvento); 
      let nuevoId = this.eventos[this.eventos.length - 1]["id"] + 1;
      let nuevoEvento = {
        id: nuevoId,
        lugar: nuevaLocalidad,
        fecha: nuevaFecha,
        participantes: [],
      };
  
      this.eventos.push({ ...evento[0], ...nuevoEvento });
      console.log("El evento se puso en gira");
    }
  }
  
  const ticket = new TicketManager();
  let fecha = new Date();


  // ticket.agregarEvento("Avengers", "Cinemark", 500, 30, fecha);
  // ticket.agregarEvento("Ultron", "Cinepolis", 5000);
  
  // ticket.agregarUsuario(1, 1);
  // ticket.agregarUsuario(1, 64);
  // ticket.agregarUsuario(1, 64);
  // ticket.agregarUsuario(1, 6);
  
  // console.log(ticket.getEventos());
  
  // ticket.ponerEventoEnGira(2, "Village Cines", new Date().toLocaleDateString());
  
  // console.log(ticket.getEventos());

ticket.agregarEvento("James Bond", "Moviecenter", 420, 100, fecha)
ticket.agregarEvento("Superman", "Hoyts", 120, 120, fecha)

ticket.agregarUsuario(1,1);
ticket.agregarUsuario(1,2)

console.log(ticket.getEventos());