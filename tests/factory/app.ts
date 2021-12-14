import { Express } from "express";
import app from "app";

export class AppFactory {
  private constructor(
    public instance: Express,
  ) { }

  static async new(): Promise<AppFactory> {
    return new AppFactory(
      app,
    );
  }

  async refreshDatabase(): Promise<void> {
    return Promise.resolve();
  }

  close(): Promise<void> {
    return Promise.resolve();
  }
}