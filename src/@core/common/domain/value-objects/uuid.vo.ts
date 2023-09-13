import { validate as uuidValidate } from 'uuid';
import { ValueObject } from "./value-object";

export class Uuid extends ValueObject<string> {
   constructor(id?: string) {
      super(id || crypto.randomUUID());
      this.validate();
   }

   private validate() {
      console.log(this.value);
      const isValid = uuidValidate(this.value);
      if (!isValid) {
         throw new InvalidUuidError(this.value);
      }
   }
}

export class InvalidUuidError extends Error {
   constructor(invalidValue: any) {
      super(`Value ${invalidValue} must be a valid UUID`);
      this.name = 'InvalidUuidError';
   }
}

export default Uuid;