import type { App } from "obsidian";

export interface ObsidianApiInfo {
  apiKey: string;
  url: string;
}

export function detectObsidianApi(app: App): ObsidianApiInfo | null {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const plugins = (app as any).plugins;
  if (!plugins?.plugins?.["obsidian-api"]) {
    return null;
  }

  const plugin = plugins.plugins["obsidian-api"];
  if (!plugins.enabledPlugins?.has("obsidian-api")) {
    return null;
  }

  const settings = plugin.settings;
  if (!settings?.apiKey) {
    return null;
  }

  let url: string;
  if (settings.enableInsecureServer && settings.insecurePort) {
    url = `http://${settings.bindingHost || "127.0.0.1"}:${settings.insecurePort}`;
  } else {
    url = `https://${settings.bindingHost || "127.0.0.1"}:${settings.port || 27124}`;
  }

  return { apiKey: settings.apiKey, url };
}
