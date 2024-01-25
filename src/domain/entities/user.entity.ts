import Entity from "./entity";

interface Props {
  name: string;
  email: string;
  password: string;
}

export default class User extends Entity<Props> {
  get name(): string {
    return this.props.name;
  }

  get email(): string {
    return this.props.email;
  }

  constructor(props: Props, id?: string) {
    super(props, id);
  }
}