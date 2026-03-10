export class PromptArgumentError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PromptArgumentError";
  }
}
