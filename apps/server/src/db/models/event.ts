import {
  IPageEventData,
  IClickEventData,
  IEvent,
  EVENT_TYPES,
} from "@tern-app/shared";
import {
  Field,
  TigrisCollection,
  PrimaryKey,
  TigrisDataTypes,
} from "@tigrisdata/core";

export class PageEventData implements IPageEventData {
  @Field()
  url!: string;
}

export class ClickEventData extends PageEventData implements IClickEventData {
  @Field()
  clickX!: number;

  @Field()
  clickY!: number;
}

@TigrisCollection("events")
export class Event implements IEvent {
  @PrimaryKey(TigrisDataTypes.UUID, { order: 1, autoGenerate: true })
  id?: string;

  @Field({ timestamp: "createdAt" })
  createdAt?: Date;

  @Field()
  eventType!: EVENT_TYPES;

  @Field()
  eventData!: PageEventData | ClickEventData;
}
