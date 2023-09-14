import { Event } from "../event.entity";
import { PartnerId } from "../partner.entity";

test('Deve criar um evento', () => {
   const event = Event.create({
      name: 'Evento 1',
      description: 'Descrição de evento 1',
      date: new Date(),
      partner_id: new PartnerId()
   });

   event.addSection({
      name: 'Sessão 1',
      description: 'Descrição da sessão 1',
      total_spots: 100,
      price: 1000
   });
   expect(event.sections.size).toBe(1);
   expect(event.total_spots).toBe(100);

   const [section] = event.sections;

   expect(section.spots.size).toBe(100);
});

test('Deve publicar todos os itens do evento', () => {
   const event = Event.create({
      name: 'Evento 1',
      description: 'Descrição de evento 1',
      date: new Date(),
      partner_id: new PartnerId()
   });

   event.addSection({
      name: 'Sessão 1',
      description: 'Descrição da sessão 1',
      total_spots: 100,
      price: 1000
   });

   event.addSection({
      name: 'Sessão 2',
      description: 'Descrição da sessão 2',
      total_spots: 1000,
      price: 50
   });

   event.publishAll();

   expect(event.is_published).toBe(true);

   const [section1, section2] = event.sections.values();
   expect(section1.is_published).toBe(true);
   expect(section2.is_published).toBe(true);

   [...section1.spots, ...section2.spots].forEach((spot) => {
      expect(spot.is_published).toBe(true);
   });
})