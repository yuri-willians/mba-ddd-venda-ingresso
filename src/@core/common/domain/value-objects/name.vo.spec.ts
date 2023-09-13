import { Name } from "./name.vo"

test('Deve criar um nome válido', () => {
   const name = new Name('mock_name_1');
   expect(name.value).toBe('mock_name_1');
});