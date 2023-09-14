import { Entity } from "../../../common/domain/entity";
import Uuid from "../../../common/domain/value-objects/uuid.vo";
import { EventSpot } from "./event-spot";

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
   spots?: Set<EventSpot>;
};

export class EventSection extends Entity {
   id: EventSectionId;
   name: string;
   description: string | null;
   is_published: boolean;
   total_spots: number;
   total_spots_reserved: number;
   price: number;
   spots: Set<EventSpot>;

   constructor(props: EventSectionConstrutorProps) {
      super();
      this.id = typeof props.id === 'string'
         ? new EventSectionId(props.id)
         : props.id ?? new EventSectionId();
      this.name = props.name;
      this.description = props.description;
      this.is_published = props.is_published;
      this.total_spots = props.total_spots;
      this.total_spots_reserved = props.total_spots_reserved;
      this.price = props.price;
      this.spots = props.spots ?? new Set<EventSpot>();
   }

   static create(command: EventSectionCreateCommand) {
      return new EventSection({
         ...command,
         description: command.description ?? null,
         is_published: false,
         total_spots_reserved: 0
      });
   }

   toJSON() {
      return {
         id: this.id,
         name: this.name,
         description: this.description,
         is_published: this.is_published,
         total_spots: this.total_spots,
         total_spots_reserved: this.total_spots_reserved,
         price: this.price,
         spots: [...this.spots].map((spot) => spot.toJSON())
      }
   }
}