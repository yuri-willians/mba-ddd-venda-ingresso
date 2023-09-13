import { Entity } from "../../../common/domain/entity";
import Uuid from "../../../common/domain/value-objects/uuid.vo";

export class EventSectionId extends Uuid { }

export type EventSectionCreateCommand = {
   name: string;
   description?: string | null;
   total_spots: number;
   price: number;
};

export type EventSectionConstrutorProps = {
   id?: EventSectionId | string;
   name: string;
   description: string | null;
   is_published: boolean;
   total_spots: number;
   total_spots_reserved: number;
   price: number;
};

export class EventSection extends Entity {
   id: EventSectionId;
   name: string;
   description: string | null;
   is_published: boolean;
   total_spots: number;
   total_spots_reserved: number;
   price: number;

   toJSON() {
      return {
         id: this.id,
         name: this.name,
         description: this.description,
         is_published: this.is_published,
         total_spots: this.total_spots,
         total_spots_reserved: this.total_spots_reserved,
         price: this.price
      }
   }
}