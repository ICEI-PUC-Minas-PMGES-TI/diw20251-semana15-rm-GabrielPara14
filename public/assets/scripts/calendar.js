// Definição dos eventos no formato JSON
const eventos = [
   {
      "title": "Prefeitura Lança Novo Plano de Mobilidade Urbana",
      "start": "2025-03-30",
      "description": "Novo plano visa melhorar o transporte público e reduzir o trânsito na cidade.",
      "color": "acqua"
   },
   
]; 

document.addEventListener('DOMContentLoaded', function() {
   const calendarElement = document.getElementById('calendar');
   const calendar = new FullCalendar.Calendar(calendarElement, {
      events: eventos,  // Passa os eventos para o calendário
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'resourceTimelineWeek,timeGridDay'
      },
      dateClick: function(info) {
         let title = prompt ('Informe o título para o evento', 'Novo evento ...')
         if (title) {            
            this.addEvent ({ title, start: info.date, allDay: true})
            alert('Evento adicionado com sucesso.');
         }
      },
      eventClick: function(info) {
        alert("Data: " + info.event.startStr + 
              "\nEvento: " + info.event.title + 
              "\nDescrição: " + info.event.extendedProps.description);  
      }   
   });
   
   calendar.render();
});