import type { ToolResult } from "../../types.js";

export function makeTextResult(text: string, structuredContent?: unknown, isError = false): ToolResult {
  const result: ToolResult = {
    content: [{ type: "text", text }],
  };

  if (structuredContent !== undefined) {
    result.structuredContent = structuredContent;
  }
  if (isError) {
    result.isError = true;
  }

  return result;
}

export function stringifyForText(value: unknown): string {
  return JSON.stringify(value, null, 2);
}

export function makeJsonResult(data: unknown, structuredContent: unknown = data): ToolResult {
  return makeTextResult(stringifyForText(data), structuredContent);
}
