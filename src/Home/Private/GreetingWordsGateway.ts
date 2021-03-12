import { Gateway } from "@rotcare/io";
import { Scene } from "@rotcare/io";

export class GreetingWordsGateway extends Gateway {
  public static async getGreetingWords(scene: Scene) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 'hello';
  }
}
