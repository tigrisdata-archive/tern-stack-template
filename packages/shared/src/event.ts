export enum EVENT_TYPES {
  Click,
  PageView,
  PageLeave,
}

export interface IPageEventData {
  url: string;
}

export interface IClickEventData extends IPageEventData {
  clickX: number;

  clickY: number;
}

export interface IEvent {
  id?: string;

  createdAt?: Date;

  eventType: EVENT_TYPES;

  eventData: IPageEventData | IClickEventData;
}

export interface IEventDeleteResult {
  status: "deleted";
}
