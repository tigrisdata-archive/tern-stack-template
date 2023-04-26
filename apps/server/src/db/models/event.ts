import {
  Field,
  PrimaryKey,
  TigrisCollection,
  TigrisDataTypes,
} from "@tigrisdata/core";

export enum EVENT_TYPES {
  Click,
  PageView,
  PageLeave,
}

export class PageEventData {
  @Field()
  url!: string;
}

export class ClickEventData extends PageEventData {
  @Field()
  clickX!: number;

  @Field()
  clickY!: number;
}

@TigrisCollection("events")
export class Event {
  @PrimaryKey(TigrisDataTypes.UUID, { order: 1, autoGenerate: true })
  id?: string;

  @Field({ timestamp: "createdAt" })
  createdAt?: Date;

  @Field()
  eventType!: EVENT_TYPES;

  @Field()
  eventData!: PageEventData | ClickEventData;
}
