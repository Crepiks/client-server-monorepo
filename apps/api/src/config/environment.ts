type Environment = Record<string, string | undefined>;

export function requiredValue(env: Environment, name: string): string {
  const value = env[name];
  if (!value?.trim()) {
    throw new Error(
      `${name} is required. Copy .env.example to .env and configure it.`,
    );
  }
  return value;
}

export function getPort(
  env: Environment,
  name: string,
  fallback: number,
): number {
  const value = env[name];
  if (value === undefined) return fallback;

  const port = Number(value);
  if (!/^\d+$/.test(value) || port < 1 || port > 65535) {
    throw new Error(`${name} must be an integer between 1 and 65535`);
  }
  return port;
}
