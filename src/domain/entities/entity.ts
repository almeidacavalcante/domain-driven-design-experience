import UniqueEntityID from "./unique-entity-id";

export default class Entity<Props> {
  private readonly _id: UniqueEntityID;
  private readonly _createdAt: Date;
  private _updatedAt?: Date;
  protected props: Props;

  constructor(props: Props, id?: string) {
    this._id = new UniqueEntityID(id);
    this._createdAt = new Date();
    this.props = props;
  }

  protected touch() {
    this._updatedAt = new Date();
  }

  get updatedAt() {
    return this._updatedAt;
  }
}
