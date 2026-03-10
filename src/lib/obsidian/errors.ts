export class ObsidianApiError extends Error {
  readonly status: number | undefined;
  readonly body: string | undefined;

  constructor(message: string, { status, body }: { status?: number; body?: string } = {}) {
    super(message);
    this.name = "ObsidianApiError";
    this.status = status;
    this.body = body;
  }
}
