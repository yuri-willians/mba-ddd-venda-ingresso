import { Partner } from "../partner.entity";

test('Deve criar um parceiro', () => {
   const partner = Partner.create({
      name: 'Parceiro 1'
   });

   const event = partner.initEvent({
      name: 'Evento 1',
      description: 'Descrição do evento 1',
      date: new Date()
   });

   console.log(event);
});