import UniqueEntityID from "./unique-entity-id";

export default class Entity<Props> {
  private _id: UniqueEntityID;
  protected props: Props;

  constructor(props: Props, id?: string) {
    this._id = new UniqueEntityID(id);
    this.props = props;
  }

  get id(): UniqueEntityID{
    return this._id;
  }
}
