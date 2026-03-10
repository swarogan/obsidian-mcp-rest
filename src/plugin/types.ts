export interface McpObsidianSettings {
  obsidianApiUrl: string;
  obsidianApiKey: string;
  requestTimeoutMs: number;
  autoDetectApiKey: boolean;
}

export const DEFAULT_SETTINGS: McpObsidianSettings = {
  obsidianApiUrl: "http://127.0.0.1:27124",
  obsidianApiKey: "",
  requestTimeoutMs: 30000,
  autoDetectApiKey: true,
};
