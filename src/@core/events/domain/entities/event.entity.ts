import { type } from "os";
import Uuid from "../../../common/domain/value-objects/uuid.vo";
import { PartnerId } from "./partner.entity";
import { AggregateRoot } from "../../../common/domain/aggregate-root";

export class EventId extends Uuid { }

export type CreateEventCommand = {
   name: string;
   description?: string | null;
   date: Date;
   partner_id: PartnerId;
};

export type EventConstructorProps = {
   id?: EventId | string;
   name: string;
   description: string | null;
   date: Date;
   is_published: boolean;
   total_spots: number;
   total_sports_reserved: number;
   partner_id: PartnerId;
};

export class Event extends AggregateRoot {
   id: EventId;
   name: string;
   description: string | null;
   date: Date;
   is_published: boolean;
   total_spots: number;
   total_spots_reserved: number;
   partner_id: PartnerId

   toJSON() {
      return {
         id: this.id,
         name: this.name,
         description: this.description,
         date: this.date,
         is_published: this.is_published,
         total_spots: this.total_spots,
         total_spots_reserved: this.total_spots_reserved,
         partner_id: this.partner_id
      }
   }
}