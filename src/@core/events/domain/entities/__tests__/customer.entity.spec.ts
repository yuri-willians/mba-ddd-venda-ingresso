import { Customer, CustomerId } from "../customer.entity"

test('Deve criar um cliente', () => {
   const customer = Customer.create({
      name: 'João',
      cpf: '655.506.890-65'
   });
   expect(customer).toBeInstanceOf(Customer);
   expect(customer.id).toBeDefined();
   expect(customer.id).toBeInstanceOf(CustomerId);
   expect(customer.name).toBe('João');
   expect(customer.cpf.value).toBe('65550689065');
});