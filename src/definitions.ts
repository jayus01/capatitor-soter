declare module '@capacitor/core' {
  interface PluginRegistry {
    ISoter: ISoterPlugin;
  }
}

export interface ISoterPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
