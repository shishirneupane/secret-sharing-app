export class CreateSecret {
  public readonly id: string;
  public readonly body: string;
  public readonly password: string | null;
  public readonly expiresIn: string;

  constructor(props: CreateSecret) {
    Object.assign(this, props);
  }
}