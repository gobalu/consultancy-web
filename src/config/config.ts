export type Environment = "local" | "production";

type ConfigType = {
  [key in Environment]: {
    EMAIL_ENDPOINT: string;
  };
}

export const Config: ConfigType = {
  local: {
    EMAIL_ENDPOINT: "http://localhost:8888/api/sendEmail",
  },
  production: {
    EMAIL_ENDPOINT: "https://balu.technology/api/sendEmail",
  },
}